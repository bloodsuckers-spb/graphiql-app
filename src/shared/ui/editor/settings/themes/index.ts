import { createTheme } from '@uiw/codemirror-themes';

export const reqTheme = createTheme({
  theme: 'dark',
  settings: {
    background: '#11131C',
    lineHighlight: '#8a91991a',
    gutterBackground: 'transparent',
    gutterForeground: '#8a919966',
  },
  styles: [],
});

export const resTheme = createTheme({
  theme: 'dark',
  settings: {
    background: 'transparent',
    lineHighlight: '#8a91991a',
    gutterBackground: 'transparent',
    gutterForeground: '#8a919966',
  },
  styles: [],
});
