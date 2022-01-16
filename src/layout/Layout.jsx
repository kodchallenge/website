import React from "react"
import Navbar from "../components/navbar/Navbar"
import ProblemDetailPage from "../pages/ProblemDetailPage"
import ProblemListPage from "../pages/ProblemListPage"
import TrackListPage from "../pages/TrackListPage"

const Layout = () => {
    return (
        <>
            <Navbar />
            {/* <TrackListPage /> */}
            {/* <ProblemListPage /> */}
            <ProblemDetailPage />
        </> 
    )
}

export default React.memo(Layout)