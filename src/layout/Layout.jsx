import React from "react"
import { Outlet } from "react-router"
import MainFooter from "../components/footers/MainFooter"
import TopNavbar from "../components/navbars/TopNavbar"
import TrackListPage from "../pages/TrackListPage"

const Layout = () => {
    return (
        <>
            <TopNavbar />
            <Outlet />
            <MainFooter />
        </> 
    )
}

export default React.memo(Layout)