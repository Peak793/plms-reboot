/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { themeOptions } from './mui-theme-option';
import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import RouterComponent from './RouterComponent';
import 'react-quill/dist/quill.snow.css';
import './index.css';

const customTheme = createTheme(themeOptions);

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <CssBaseline />
        <RouterComponent />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode >,
);