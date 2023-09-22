/* eslint-disable react-refresh/only-export-components */
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'react-quill/dist/quill.snow.css';
import './index.css';
import {
  createHashRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { themeOptions } from './mui-theme-option';
import RootLayout from '@/layouts/RootLayout';
import SignIn from './pages/SignIn';
import { CssBaseline } from '@mui/material';
import { Outlet } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

// Lazy-load page components
const MyGroups = lazy(() => import('@/pages/MyGroups'));
const AddExercise = lazy(() => import('@/pages/AddExercise'));
const Chapter = lazy(() => import('@/pages/Chapter'));
const AvailableGroups = lazy(() => import('@/pages/AvailableGroups'));
const StudentList = lazy(() => import('@/pages/StudentList'));
const StudentScore = lazy(() => import('@/pages/StudentScore'));
const InsGroup = lazy(() => import('@/pages/InsGroup'));
import Instruction from './pages/Instructions';
import Examination from './pages/Examination'
import Faq from './pages/Faq'
import EditProfile from './pages/EditProfile';

const customTheme = createTheme(themeOptions);

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "instructor",
        element: <Outlet />,
        children: [
          { index: true, element: <Suspense fallback={<div>Loading...</div>}><MyGroups /></Suspense> },
          { path: "group/:groupId", element: <Suspense fallback={<div>Loading...</div>}><InsGroup /></Suspense>, },
          { path: "group/:groupId/chapter/:chapterName", element: <Suspense fallback={<div>Loading...</div>}><Chapter /></Suspense> },
          { path: "group/:groupId/chapter/:chapterName/add-exercise/:level", element: <Suspense fallback={<div>Loading...</div>}><AddExercise /></Suspense> },
          { path: "group/:groupId/student-list", element: <Suspense fallback={<div>Loading...</div>}><StudentList /></Suspense> },
          { path: "group/:groupId/score/:studentId", element: <Suspense fallback={<div>Loading...</div>}><StudentScore /></Suspense> },
          { path: "available-groups", element: <Suspense fallback={<div>Loading...</div>}><AvailableGroups /></Suspense> },
          { path: "in", element: <Instruction /> },
          { path: "ex", element: <Examination /> },
          { path: "Faq", element: <Faq /> },
        ],
      },
      { path: "edit-profile/:userId", element: <EditProfile /> }
    ]
  },
  {
    path: "signin",
    element: <SignIn />
  },

]);

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
