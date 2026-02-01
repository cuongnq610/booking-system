import { Routes } from '@angular/router';
import { APP_PATHS } from './core/constants';

export const routes: Routes = [
    {
        path: APP_PATHS.HOME,
        redirectTo: APP_PATHS.WAITING_LIST.ROOT,
        pathMatch: "full"
    },
    {
        path: APP_PATHS.WAITING_LIST.ROOT,
        loadChildren: () => import('./features/waiting-list/waiting-list.routes').then(m => m.routes),

    },
    {
        path: APP_PATHS.ERROR.ROOT,
        loadComponent: () => import('@/shared/components/layout').then(m => m.AppLayout),
        children: [
            {
                path: APP_PATHS.ERROR.NOT_FOUND,
                loadComponent: () => import('./core/pages/not-found').then(m => m.NotFound),
                data: {
                    title: 'Not Found',
                    backgroundUrl: '/desktop/waiting-list/signin-bg.png',
                    overlayClass: 'bg-linear-secondary'
                }
            }
        ]
    },
    {
        path: "**",
        redirectTo: "error/not-found"
    }
];
