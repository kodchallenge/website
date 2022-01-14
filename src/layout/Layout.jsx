import React from "react"
import Navbar from "../components/navbar/Navbar"
import TrackListPage from "../pages/TrackListPage"

const Layout = () => {
    return (
        <>
            <Navbar />
            <TrackListPage />
        </> 
    )
}

export default React.memo(Layout)