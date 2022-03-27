import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux'
import { CookieTypes } from '../constants'

function ProtectedRoute({path, element, exact=false}) {
    const {isAuthenticate} = useSelector(state => state.auth)
    const isLogin = Cookies.get(CookieTypes.AUTH) && isAuthenticate

    return isLogin ? <Outlet /> : <Navigate to="/auth/signin"/>
}

export default ProtectedRoute