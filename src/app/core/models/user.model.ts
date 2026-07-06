export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}

export interface AuthResponse {
    access_token: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterCredentials {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}
