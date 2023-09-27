/* eslint-disable react-refresh/only-export-components */
import { Suspense } from 'react';
import { lazy } from 'react';
import { Outlet } from "react-router-dom";
import RootLayout from '@/layouts/RootLayout';

// Lazy-load page components
const MyGroups = lazy(() => import('@/pages/MyGroups'));
const AddExercise = lazy(() => import('@/pages/AddExercise'));
const Chapter = lazy(() => import('@/pages/Chapter'));
const AvailableGroups = lazy(() => import('@/pages/AvailableGroups'));
const StudentList = lazy(() => import('@/pages/StudentList'));
const StudentScore = lazy(() => import('@/pages/StudentScore'));
const InsGroup = lazy(() => import('@/pages/InsGroup'));
import SignIn from "@/pages/SignIn"
import Instruction from '@/pages/Instructions';
import Examination from '@/pages/Examination'
import Faq from '@/pages/Faq'
import EditProfile from '@/pages/EditProfile';
import AddStudent from '@/pages/AddStudent';

const routes = [
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
          { path: "group/:groupId/add-student", element: <AddStudent /> },
          { path: "group/:groupId/score/:studentId", element: <Suspense fallback={<div>Loading...</div>}><StudentScore /></Suspense> },
          { path: "available-groups", element: <Suspense fallback={<div>Loading...</div>}><AvailableGroups /></Suspense> },
        ],
      },
      { path: "in", element: <Instruction /> },
      { path: "ex", element: <Examination /> },
      { path: "Faq", element: <Faq /> },
      { path: "edit-profile/:userId", element: <EditProfile /> }
    ]
  },
  {
    path: "signin",
    element: <SignIn />
  },

]

export default routes;
