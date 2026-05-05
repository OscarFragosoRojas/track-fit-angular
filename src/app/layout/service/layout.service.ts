import { Injectable, signal } from '@angular/core';

export interface LayoutState {
    staticMenuDesktopInactive: boolean;
    staticMenuMobileActive: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    state = signal<LayoutState>({
        staticMenuDesktopInactive: false, // false = menú abierto por defecto en PC
        staticMenuMobileActive: false     // false = menú oculto por defecto en móvil
    });

    onMenuToggle() {
        if (this.isDesktop()) {
            this.state.update(s => ({ ...s, staticMenuDesktopInactive: !s.staticMenuDesktopInactive }));
        } else {
            this.state.update(s => ({ ...s, staticMenuMobileActive: !s.staticMenuMobileActive }));
        }
    }

    onOverlayClick() {
        this.state.update(s => ({ ...s, staticMenuMobileActive: false }));
    }

    isDesktop() {
        if (typeof window !== 'undefined') {
            return window.innerWidth > 991;
        }
        return true; // Default to desktop for SSR
    }
}
