import React from "react"
import { Outlet } from "react-router"
import TopNavbar from "../components/navbars/TopNavbar"
import TrackListPage from "../pages/TrackListPage"

const Layout = () => {
    return (
        <>
            <TopNavbar />
            <Outlet />
        </> 
    )
}

export default React.memo(Layout)