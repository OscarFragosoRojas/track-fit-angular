import { Injectable, signal, computed, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RegisterCredentials, User, AuthResponse } from "../models/user.model";
import { Router } from "@angular/router";
import { tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private http = inject(HttpClient);
    private router = inject(Router);

    private _currentUser = signal<User | null>(null);

    public currentUser = computed(() => this._currentUser());
    public isAuthenticated = computed(() => this.currentUser() !== null);


    constructor() {
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


    login(credentials: { email: string, password: string }) {
        return this.http.post<AuthResponse>('TU_API_URL/auth/login', credentials).pipe(
            tap(res => {
                localStorage.setItem('token', res.access_token);
                //Decodificar el token y obtener el usuario
                //const user = jwt.decode(res.access_token);
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
        console.log(credentials);
    }

    logout() {
        this._currentUser.set(null);
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}