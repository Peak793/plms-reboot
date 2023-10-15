import { HashRouter as Router, Route, Routes, Outlet, Navigate } from "react-router-dom";
import { Suspense, lazy } from 'react';
import RootLayout from '@/layouts/RootLayout';
import SignIn from "@/pages/SignIn";
import Instruction from '@/pages/Instructions';
import Examination from '@/pages/Examination';
import Faq from '@/pages/Faq';
import EditProfile from '@/pages/EditProfile';
import AddStudent from '@/pages/AddStudent';
import ProtectedRoute from "./components/ProtectedRoute";

// Lazy-load page components
const MyGroups = lazy(() => import('@/pages/MyGroups'));
const AddExercise = lazy(() => import('@/pages/AddExercise'));
const Chapter = lazy(() => import('@/pages/Chapter'));
const AvailableGroups = lazy(() => import('@/pages/AvailableGroups'));
const StudentList = lazy(() => import('@/pages/StudentList'));
const StudentScore = lazy(() => import('@/pages/StudentScore'));
const InsGroup = lazy(() => import('@/pages/InsGroup'));
const SubmissionHistory = lazy(() => import('@/pages/SubmissionHistory'));

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Navigate to="/signin" />} />
        <Route element={<ProtectedRoute><RootLayout /></ProtectedRoute>}>
          <Route path="/ins" element={<Outlet />}  >
            <Route index element={<Suspense fallback={<div>Loading...</div>}><MyGroups /></Suspense>} />
            <Route path="g/:groupId/:groupNo" element={<Suspense fallback={<div>Loading...</div>}><InsGroup /></Suspense>} />
            <Route path="g/:groupId/:groupNo/c/:chapterId" element={<Suspense fallback={<div>Loading...</div>}><Chapter /></Suspense>} />
            <Route path="g/:groupId/:groupNo/c/:chapterId/add-ex/:level" element={<Suspense fallback={<div>Loading...</div>}><AddExercise /></Suspense>} />
            <Route path="g/:groupId/:groupNo/stu-list" element={<Suspense fallback={<div>Loading...</div>}><StudentList /></Suspense>} />
            <Route path="g/:groupId/:groupNo/add-stu" element={<AddStudent />} />
            <Route path="g/:groupId/:groupNo/score/stu/:studentId" element={<Suspense fallback={<div>Loading...</div>}><StudentScore /></Suspense>} />
            <Route path="g/:groupId/:groupNo/sub-his/stu/:studentId/c/:chapterId/ex/:exerciseId" element={<Suspense fallback={<div>Loading...</div>}><SubmissionHistory /></Suspense>} />
            <Route path="available-groups" element={<Suspense fallback={<div>Loading...</div>}><AvailableGroups /></Suspense>} />
          </Route>
          <Route path="instruction" element={<Instruction />} />
          <Route path="examination" element={<Examination />} />
          <Route path="faq" element={<Faq />} />
          <Route path="edit-profile/:userId" element={<EditProfile />} />
        </Route>
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </Router >
  )
}

export default RouterComponent;