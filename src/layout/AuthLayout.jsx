import React from "react"
import { Outlet } from "react-router"

const AuthLayout = () => {
    return (
        <div className="fullpage auth-gradient-bg">
            <Outlet />
        </div> 
    )
}

export default React.memo(AuthLayout)