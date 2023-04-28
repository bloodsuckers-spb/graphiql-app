import { WelcomeLazy, EditorLazy } from 'pages';

export const routesConfig = [
  {
    id: 'welcome',
    path: '/',
    content: <WelcomeLazy />,
  },

  {
    id: 'editor',
    path: '/editor',
    content: <EditorLazy />,
  },
];
