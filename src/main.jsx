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
import Home from '@/pages/Home';
import MyGroups from './pages/MyGroups';

const theme = createTheme(themeOptions);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "add-exercise",
        element: <AddExercise />
      },
      {
        path: "mygroups",
        element: <MyGroups />
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
