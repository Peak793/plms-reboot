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
import Chapter from './pages/Chapter';

const theme = createTheme(themeOptions);

const router = createBrowserRouter([
  {
    path: "/instructor",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "mygroups", element: <MyGroups /> },
      { path: "mygroups/:groupId", element: <div>Group Page</div>, },
      { path: "mygroups/:groupId/chapter/:chapterName", element: <Chapter /> },
      { path: "mygroups/:groupId/chapter/:chapterName/add-exercise/:level", element: <AddExercise /> }
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
