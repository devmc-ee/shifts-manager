import { createTheme } from '@mui/material';

export const theme = createTheme({
  // https://m2.material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=212121&secondary.color=fdeb01&primary.text.color=ffffff
  palette: {
    primary: {
      main: '#212121',
      light: '#484848',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffff56',
      main: '#fdeb01',
      dark: '#c6b900',
      contrastText: '#000000',
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    // custom: {
    // light: '#ffa726',
    // main: '#f57c00',
    // dark: '#ef6c00',
    // contrastText: 'rgba(0, 0, 0, 0.87)',
    // },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});
