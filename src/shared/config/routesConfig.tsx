import { WelcomeLazy, EditorLazy } from 'pages';

export enum AppRoutes {
  WELCOME = 'welcome',
  EDITOR = 'editor'
}

export const routesConfig = [
  {
    id: [AppRoutes.WELCOME],
    path: '/',
    content: <WelcomeLazy />,
  },

  {
    id: [AppRoutes.WELCOME],
    path: '/editor',
    content: <EditorLazy />,
  },
];
