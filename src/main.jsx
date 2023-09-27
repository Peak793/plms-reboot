/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider, } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { themeOptions } from './mui-theme-option';
import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import routes from './routes';
import 'react-quill/dist/quill.snow.css';
import './index.css';

const customTheme = createTheme(themeOptions);

const router = createHashRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <CssBaseline />
        <RouterProvider router={router} />
      </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode >,
);
