import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './config/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './config/theme';
import { ThemeProvider } from '@mui/material';
import './config/i18n';

const container = document.getElementById('root');
const root = createRoot(container!);
const persistedStore = persistStore(store);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme={true} />
            <App />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
