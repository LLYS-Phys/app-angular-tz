import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { routes as authRoutes } from './authentication/auth.routes'

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'home',
                redirectTo: '',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'auth',
        children: authRoutes
    },
    {
        path: 'products',
        loadComponent: () => import('./pages/products/products.component').then((comp) => comp.ProductsComponent)
    },
    {
        path: 'privacy',
        loadComponent: () => import('./pages/privacy/privacy.component').then((comp) => comp.PrivacyComponent)
    },
    {
        path: 'demo-testing',
        loadComponent: () => import('./demo-testing/demo-testing.component').then(comp => comp.DemoTestingComponent)
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
