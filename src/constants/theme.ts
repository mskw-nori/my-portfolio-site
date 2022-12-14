export const THEME = {
  colors: {
    primary: {
      light: '#6ec6ff',
      main: '#2196f3',
      dark: '#0069c0'
    },
    secondary: {
      light: '#ff867c',
      main: '#ef5350',
      dark: '#b61827'
    },
    basics: {
      borderGray: '#e3e3e3',
      textGray: '#828282',
      normalGray: '#bdbdbd'
    }
  },
  // NOTE: max-widthで使う各デバイス上限のbreakpoint。
  breakpoints: {
    sm: 414,
    md: 834
  }
} as const
