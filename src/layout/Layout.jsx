import React from "react"
import { Outlet } from "react-router"
import MainFooter from "../components/footers/MainFooter"
import TopNavbar from "../components/navbars/TopNavbar"
import TrackListPage from "../pages/TrackListPage"

const Layout = () => {
    return (
        <>
            <TopNavbar />
            <div style={{marginTop: 85}}>
                <Outlet />
            </div>
            <MainFooter />
        </> 
    )
}

export default React.memo(Layout)