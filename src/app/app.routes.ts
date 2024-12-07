import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) 
    },
    {
        path: 'register', loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'forgot', loadComponent: () => import('./components/forgot-pass/forgot-pass.component').then(m => m.ForgotPassComponent)
    },
    {
        path: 'main', loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent), children: [
            {
                path: '', redirectTo: 'my-list', pathMatch: 'full'
            },
            {
                path: 'my-list', loadComponent: () => import('./components/my-list/my-list.component').then(m => m.MyListComponent)
            }
        ]
    },
    {
        path: 'about', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent)
    }
];
