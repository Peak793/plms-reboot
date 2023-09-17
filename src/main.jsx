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
import AvailableGroups from './pages/AvailableGroups';
import StudentList from './pages/StudentList';
import StudentScore from './pages/StudentScore';

const theme = createTheme(themeOptions);

const router = createBrowserRouter([
  {
    path: "/instructor",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "mygroups", element: <MyGroups /> },
      { path: "group/:groupId", element: <div>Group Page</div>, },
      { path: "group/:groupId/chapter/:chapterName", element: <Chapter /> },
      { path: "group/:groupId/chapter/:chapterName/add-exercise/:level", element: <AddExercise /> },
      { path: "group/:groupId/student-list", element: <StudentList /> },
      { path: "group/:groupId/score/:studentId", element: <StudentScore /> },
      { path: "available-groups", element: <AvailableGroups /> },
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
