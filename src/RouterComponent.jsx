import { HashRouter as Router, Route, Routes, Outlet, Navigate } from "react-router-dom";
import { Suspense, lazy } from 'react';
import InstructorLayout from '@/components/layouts/InstructorLayout';
import StudentLayout from '@/components/layouts/StudentLayout';
import SignIn from "@/pages/SignIn";
import Instruction from '@/pages/Instructions';
import Examination from '@/pages/Examination';
import Faq from '@/pages/Faq';
import EditProfile from '@/pages/EditProfile';
import AddStudent from '@/pages/AddStudent';
import ProtectedRoute from "@/components/ProtectedRoute";
import { ABS_INS_URL, REL_INS_URL, ABS_STU_URL, REL_STU_URL, COMMON_URL } from "@/utils/constants/routeConst";

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
const ExerciseList = lazy(() => import('@/pages/ExerciseList'));
const Home = lazy(() => import('@/pages/Home'));

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Navigate to={COMMON_URL.STATIC.SIGNIN} />} />
        <Route element={<ProtectedRoute><InstructorLayout /></ProtectedRoute>}>
          <Route path={ABS_INS_URL.STATIC.MY_GROUPS} element={<Outlet />}  >
            <Route index element={<Suspense fallback={<div>Loading...</div>}><MyGroups /></Suspense>} />
            <Route path={REL_INS_URL.DYNAMIC.GROUP()} element={<Suspense fallback={<div>Loading...</div>}><InsGroup /></Suspense>} />
            <Route path={REL_INS_URL.DYNAMIC.CHAPTER()} element={<Suspense fallback={<div>Loading...</div>}><Chapter /></Suspense>} />
            <Route path={REL_INS_URL.DYNAMIC.ADD_EXERCISE()} element={<Suspense fallback={<div>Loading...</div>}><AddExercise /></Suspense>} />
            <Route path={REL_INS_URL.DYNAMIC.EDIT_EXERCISE()} element={<Suspense fallback={<div>Loading...</div>}><EditExercise /></Suspense>} />
            <Route path={REL_INS_URL.DYNAMIC.STUDENT_LIST()} element={<Suspense fallback={<div>Loading...</div>}><StudentList /></Suspense>} />
            <Route path={REL_INS_URL.DYNAMIC.ADD_STUDENT()} element={<AddStudent />} />
            <Route path={REL_INS_URL.DYNAMIC.STUDENT_INDIVIDUAL()} element={<Suspense fallback={<div>Loading...</div>}><StudentScore /></Suspense>} />
            <Route path={REL_INS_URL.DYNAMIC.STUDENT_SUBMIT_HISTORY()} element={<Suspense fallback={<div>Loading...</div>}><SubmissionHistory /></Suspense>} />
            <Route path={REL_INS_URL.STATIC.AVAILABLE_GROUPS} element={<Suspense fallback={<div>Loading...</div>}><AvailableGroups /></Suspense>} />
          </Route>
          <Route path={COMMON_URL.STATIC.INSTRUCTION} element={<Instruction />} />
          <Route path={COMMON_URL.STATIC.EXAMINATION} element={<Examination />} />
          <Route path={COMMON_URL.STATIC.FAQ} element={<Faq />} />
          <Route path={COMMON_URL.DYNAMIC.PROFILE()} element={<EditProfile />} />
        </Route>
        <Route path={COMMON_URL.STATIC.SIGNIN} element={<SignIn />} />
        <Route path={ABS_STU_URL.STATIC.HOME} element={<ProtectedRoute><StudentLayout /></ProtectedRoute>} >
          <Route index element={<Home />} />
          <Route path={REL_STU_URL.DYNAMIC.EXERCISE_LIST()} element={<Suspense fallback={<div>Loading...</div>}><ExerciseList /></Suspense>} />
          <Route path={REL_STU_URL.DYNAMIC.EXERCISE()} element={<Suspense fallback={<div>Loading...</div>}><StuExcercise /></Suspense>} />
        </Route>
      </Routes>
    </Router >
  )
}

export default RouterComponent;