import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then((comp) => comp.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./register/register.component').then((comp) => comp.RegisterComponent)
    },
]