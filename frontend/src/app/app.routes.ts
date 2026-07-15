import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/pages/home/home').then((m) => m.HomePage),
  },
  {
    path: 'swipe',
    loadComponent: () => import('./features/swipe/pages/swipe/swipe').then((m) => m.SwipePage),
  },
  {
    path: 'rooms',
    loadComponent: () => import('./features/rooms/pages/rooms/rooms').then((m) => m.RoomsPage),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/pages/profile/profile').then((m) => m.ProfilePage),
  },
  {
    path: 'matches',
    loadComponent: () =>
      import('./features/matches/pages/matches/matches').then((m) => m.MatchesPage),
  },
  {
    path: 'provider',
    loadComponent: () =>
      import('./features/provider/pages/provider/provider').then((m) => m.ProviderPage),
  },
  {
    path: 'authenticator',
    loadComponent: () => import('./features/auth/pages/auth/auth').then((m) => m.AuthPage),
  },
  {
    path: 'likes',
    loadComponent: () => import('./features/likes/pages/likes/likes').then((m) => m.LikesPage),
  },
{
    path: 'auth/login',
    loadComponent: () =>
      import('./features/auth/pages/login/login')
        .then(m => m.LoginPage)
  },
  {
    path: 'auth/register/:role',
    loadComponent: () =>
      import('./features/auth/pages/register/register')
        .then(m => m.RegisterPage)
  }
];
