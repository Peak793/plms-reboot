import React from 'react'
import ReactDOM from 'react-dom/client'
import 'remixicon/fonts/remixicon.css'
import 'react-quill/dist/quill.snow.css';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from '@/layouts/RootLayout';
import AddExercise from '@/pages/AddExercise';
import { themeOptions } from './mui-theme-option';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme(themeOptions);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "add-exercise",
        element: <AddExercise />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
