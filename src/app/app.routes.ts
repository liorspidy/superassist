import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) 
    },
    {
        path: 'register', loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'forgot' , loadComponent: () => import('./components/forgot-pass/forgot-pass.component').then(m => m.ForgotPassComponent)
    }
];
