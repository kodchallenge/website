import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router'
import { ROLES } from '../constants'
import ProtectedRoute from '../hoc/ProtectedRoute'
import RoleBasedRoute from '../hoc/RoleBasedRoute'
import AuthLayout from '../layout/AuthLayout'
import Layout from '../layout/Layout'
import AboutPage from '../pages/AboutPage'
import ActivityPage from '../pages/activities/ActivityPage'
import CheckMail from '../pages/auth/CheckMail'
import ForgotPassword from '../pages/auth/ForgotPassword'
import ResetPassword from '../pages/auth/ResetPassword'
import Signin from '../pages/auth/Signin'
import Signup from '../pages/auth/Signup'
import ContestPage from '../pages/contests/ContestPage'
import ContestsDetailPage from '../pages/contests/ContestsDetailPage'
import ContestExplorePage from '../pages/contests/ContestsExplorePage'
import JoinContestPage from '../pages/contests/JoinContestPage'
import ErrorPage from '../pages/errors/ErrorPage'
import JoinUsPage from '../pages/JoinUsPage'
import MainPage from '../pages/main/MainPage'
import ProblemDetailPage from '../pages/ProblemDetailPage'
import ProblemEditor from '../pages/ProblemEditor'
import ProblemListPage from '../pages/ProblemListPage'
import ProjectPage from '../pages/projects/ProjectPage'
import TrackListPage from '../pages/TrackListPage'


const AdminRouter = React.lazy(() => import("./AdminRouter"));
const CompanyRouter = React.lazy(() => import("./CompanyRouter"));
const UserRouter = React.lazy(() => import("./UserRouter"));

const Router = () => {
    return (
        <Routes>
            <Route path='editor' element={<ProblemEditor />} />
            <Route path='contests/editor' element={<ProblemEditor isContest={true} />} />
            {/*Sadece admin rolüne sahip kullanıcının erişebileceği linkler */}
            <Route element={<ProtectedRoute roles={[ROLES.admin]} />}>
                <Route path='dashboard/*' element={
                    <React.Suspense fallback={<p>...</p>}>
                        <AdminRouter />
                    </React.Suspense>
                } />
            </Route>

            <Route path='auth' element={<AuthLayout />}>
                <Route path='signup' element={<Signup />} />
                <Route path='signin' element={<Signin />} />
                <Route path='check-mail' element={<CheckMail />} />
                <Route path='forgot-password' element={<ForgotPassword />} />
                <Route path='reset-password' element={<ResetPassword />} />
            </Route>

            <Route path='/' element={<Layout />}>
                {/* Giriş yapmaya ihtiyaç duyulmayan tüm linkler */}
                <Route exact path='' element={<MainPage />} />
                <Route path='tracks/' element={<TrackListPage />} />
                <Route path='tracks/:trackName' element={<ProblemListPage />} />
                <Route path='about-project' element={<AboutPage />} />
                <Route path='projects' element={<ProjectPage />} />
                <Route path='activities' element={<ActivityPage />} />
                <Route path='contests' element={<ContestPage />} />
                <Route path='contests/explore' element={<ContestExplorePage />} />
                <Route path='contests/explore/:id' element={<ContestsDetailPage />} />
                <Route path='contests/explore/:id/join' element={<JoinContestPage />} />
                <Route path='joinus' element={<JoinUsPage />} />
                

                {/*Sadece user rolüne sahip kullanıcının erişebileceği linkler */}
                <Route element={<ProtectedRoute roles={[ROLES.user]} />}>
                    <Route path='user/*' element={
                        <React.Suspense fallback={<p>...</p>}>
                            <UserRouter />
                        </React.Suspense>
                    } />
                </Route>

                {/*Sadece Company rolüne sahip kullanıcının erişebileceği linkler */}
                <Route element={<ProtectedRoute roles={[ROLES.company]} />}>
                    <Route path='company/*' element={
                        <React.Suspense fallback={<p>...</p>}>
                            <CompanyRouter />
                        </React.Suspense>
                    } />
                </Route>

                {/*Giriş yapmış tüm kullanıcıların erişebileceği linkler */}
                <Route element={<ProtectedRoute roles={Object.values(ROLES)} />}>
                    <Route path='tracks/:trackName/:problemName' element={<ProblemDetailPage />} />
                </Route>
            </Route>

            <Route path='unauthorized' element={<ErrorPage code="401" message="Bu sayfaya erişmek için lütfen giriş yapın" to="/auth/signin" text="Giriş yapmak için tıkla"/>}/>
            <Route path='forbidden' element={<ErrorPage code="403" message="Bu sayfayı görüntülemeye yetkiniz yok." />}/>
            <Route path='*' element={<ErrorPage code="404" message="Aradığın içerik bizde mevcut değil." />}/>
        </Routes>
    )
}

export default React.memo(Router)