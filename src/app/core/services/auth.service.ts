import { Injectable, signal, computed, inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { RegisterCredentials, User, AuthResponse } from "../models/user.model";
import { Router } from "@angular/router";
import { tap } from "rxjs";
import { environment } from "../../../environments/environment.development";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private http = inject(HttpClient);
    private router = inject(Router);
    private platformId = inject(PLATFORM_ID);
    private urlBase = environment.apiBaseUrl;

    private _currentUser = signal<User | null>(null);

    public currentUser = computed(() => this._currentUser());
    public isAuthenticated = computed(() => this.currentUser() !== null);


    constructor() {
        if (isPlatformBrowser(this.platformId)) {
            const token = localStorage.getItem('token');
            if (token) {
                //Codificar el token y obtener el usuario
                this._currentUser.set({
                    id: "1",
                    name: 'Larry',
                    email: 'larrylatrellhg@gmail.com',
                    role: 'admin'
                });
            }
        }
    }


    login(credentials: { email: string, password: string }) {
        return this.http.post<AuthResponse>(`${this.urlBase}/login`, credentials).pipe(
            tap(res => {
                if (isPlatformBrowser(this.platformId)) {
                    localStorage.setItem('token', res.access_token);
                }
                this._currentUser.set({
                    id: "1",
                    name: 'Larry',
                    email: 'larrylatrellhg@gmail.com',
                    role: 'admin'
                });
                this.router.navigate(['/dashboard']);
            })
        );
    }

    register(credentials: RegisterCredentials) {
        return this.http.post<AuthResponse>(`${this.urlBase}/register`, credentials).pipe(
            tap(res => {
                if (isPlatformBrowser(this.platformId)) {
                    localStorage.setItem('token', res.access_token);
                }
                this._currentUser.set({
                    id: "1",
                    name: 'Larry',
                    email: 'larrylatrellhg@gmail.com',
                    role: 'admin'
                });
                this.router.navigate(['/dashboard']);
            })
        );
    }

    logout() {
        this._currentUser.set(null);
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem('token');
        }
        this.router.navigate(['/login']);
    }
}