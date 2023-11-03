import { HashRouter as Router, Route, Routes, Outlet, Navigate } from "react-router-dom";
import { Suspense, lazy } from 'react';
import RootLayout from '@/components/layouts/RootLayout';
import StudentLayout from '@/components/layouts/StudentLayout';
import SignIn from "@/pages/SignIn";
import Instruction from '@/pages/Instructions';
import Examination from '@/pages/Examination';
import Faq from '@/pages/Faq';
import EditProfile from '@/pages/EditProfile';
import AddStudent from '@/pages/AddStudent';
import ProtectedRoute from "@/components/ProtectedRoute";

// Lazy-load page components
const MyGroups = lazy(() => import('@/pages/MyGroups'));
const AddExercise = lazy(() => import('@/pages/AddExercise'));
const Chapter = lazy(() => import('@/pages/Chapter'));
const AvailableGroups = lazy(() => import('@/pages/AvailableGroups'));
const StudentList = lazy(() => import('@/pages/StudentList'));
const StudentScore = lazy(() => import('@/pages/StudentScore'));
const InsGroup = lazy(() => import('@/pages/InsGroup'));
const SubmissionHistory = lazy(() => import('@/pages/SubmissionHistory'));
const StuExcercise = lazy(() => import('@/pages/StuExcercise'));
const EditExercise = lazy(() => import('@/pages/EditExercise'));

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Navigate to="/signin" />} />
        <Route element={<ProtectedRoute><RootLayout /></ProtectedRoute>}>
          <Route path="/ins" element={<Outlet />}  >
            <Route index element={<Suspense fallback={<div>Loading...</div>}><MyGroups /></Suspense>} />
            <Route path="group/:groupId/" element={<Suspense fallback={<div>Loading...</div>}><InsGroup /></Suspense>} />
            <Route path="group/:groupId/chapter/:chapterId" element={<Suspense fallback={<div>Loading...</div>}><Chapter /></Suspense>} />
            <Route path="group/:groupId/chapter/:chapterId/level/:level/add-exercise" element={<Suspense fallback={<div>Loading...</div>}><AddExercise /></Suspense>} />
            <Route path="group/:groupId/chapter/:chapterId/level/:level/edit-exercise/:exerciseId" element={<Suspense fallback={<div>Loading...</div>}><EditExercise /></Suspense>} />
            <Route path="group/:groupId/stu-list" element={<Suspense fallback={<div>Loading...</div>}><StudentList /></Suspense>} />
            <Route path="group/:groupId/add-stu" element={<AddStudent />} />
            <Route path="group/:groupId/score/stu/:studentId" element={<Suspense fallback={<div>Loading...</div>}><StudentScore /></Suspense>} />
            <Route path="group/:groupId/sub-his/stu/:studentId/c/:chapterId/ex/:exerciseId" element={<Suspense fallback={<div>Loading...</div>}><SubmissionHistory /></Suspense>} />
            <Route path="available-groups" element={<Suspense fallback={<div>Loading...</div>}><AvailableGroups /></Suspense>} />
          </Route>
          <Route path="instruction" element={<Instruction />} />
          <Route path="examination" element={<Examination />} />
          <Route path="faq" element={<Faq />} />
          <Route path="edit-profile/:userId" element={<EditProfile />} />
        </Route>
        <Route path="signin" element={<SignIn />} />
        <Route path="kw" element={<Suspense fallback={<div>Loading...</div>}><AddExercise /></Suspense>} />

        <Route path="/stu" element={<StudentLayout />} >
          <Route path="ex" element={<Suspense fallback={<div>Loading...</div>}><StuExcercise /></Suspense>} />
        </Route>
      </Routes>
    </Router >
  )
}

export default RouterComponent;