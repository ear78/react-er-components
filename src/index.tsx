import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/js/lib/mui/theme';
import App from './App';
import { store } from './assets/js/lib/redux/store';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <ThemeProvider theme={theme}><Provider store={store}><App /></Provider></ThemeProvider>,
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
}
