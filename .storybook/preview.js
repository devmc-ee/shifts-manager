import { ThemeProvider } from "@mui/material";
import { theme } from '../src/config/styles/theme.ts';
import { Provider } from 'react-redux';
import { store } from '../src/config/redux/store';
import { BrowserRouter } from 'react-router-dom';
import '../src/styles.css';

const withProviders = (Story) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export const decorators = [withProviders];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}