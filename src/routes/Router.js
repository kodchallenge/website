import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router'

const Router = () => {
    const auth = useSelector(state => state.auth)
    // const AuthenticatedRouter = () => {
    //     if()
    //     return (
    //         <>

    //         </>
    //     )
    // }

    return (
        <Routes>
            <Route path='editor' element={<ProblemEditor />} />
            <Route path='/' element={<Layout />}>
                <Route path='' element={<MainPage />} />
                <Route path='tracks/' element={<TrackListPage />} />
                <Route path='tracks/:trackName' element={<ProblemListPage />} />
                {/* <AuthorizeRouter /> */}
                {/* <Route path='tracks/:trackName/:problemName' element={<ProblemDetailPage />} />
                <Route path='about-project' element={<AboutPage />} /> */}
            </Route>
            <Route path='auth' element={<AuthLayout />}>
                <Route path='signup' element={<Signup />} />
                <Route path='signin' element={<Signin />} />
            </Route>
        </Routes>
    )
}

export default React.memo(Router)