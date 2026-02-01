import { APP_PATHS } from '@/core/constants';
import { requireAuth, requireUnAuth } from '@/shared/utils/guard.util';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import('@/shared/components/layout').then(m => m.AppLayout),
    children: [
      // redirect user to signin page by default
      {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full',
      },
      {
        path: APP_PATHS.WAITING_LIST.SIGNIN,
        loadComponent: () => import('./signin').then(m => m.Signin),
        canActivate: [requireUnAuth],
        data: {
          title: 'Sign In',
          backgroundUrl: '/desktop/waiting-list/signin-bg.png',
          overlayClass: 'bg-linear-primary'
        }
      },
      {
        path: APP_PATHS.WAITING_LIST.SIGNED_IN,
        loadComponent: () => import('./signed-in').then(m => m.SignedIn),
        canActivate: [requireAuth],
        data: {
          title: 'Signed In',
          backgroundUrl: '/desktop/waiting-list/signed-in-bg.png',
          overlayClass: 'bg-linear-primary'
        }
      },
    ]
  },
];