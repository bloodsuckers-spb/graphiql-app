import { WelcomeLazy, EditorLazy, LoginLazy, NotFound } from 'pages';

export enum AppRoutes {
  WELCOME = 'welcome',
  EDITOR = 'editor',
  LOGIN = 'login',
  NOTFOUND = 'notFound',
}

export const routesConfig = [
  {
    id: [AppRoutes.WELCOME],
    path: '/',
    content: <WelcomeLazy />,
  },

  {
    id: [AppRoutes.EDITOR],
    path: '/editor',
    content: <EditorLazy />,
  },

  {
    id: [AppRoutes.LOGIN],
    path: '/login',
    content: <LoginLazy />,
  },

  {
    id: [AppRoutes.NOTFOUND],
    path: '*',
    content: <NotFound />,
  },
];
