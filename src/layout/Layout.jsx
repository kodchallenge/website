import React from "react"
import { Outlet, Route, Router, Routes } from "react-router"
import Navbar from "../components/navbar/Navbar"
import ProblemDetailPage from "../pages/ProblemDetailPage"
import ProblemEditor from "../pages/ProblemEditor"
import ProblemListPage from "../pages/ProblemListPage"
import TrackListPage from "../pages/TrackListPage"

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            {/* <TrackListPage /> */}
            {/* <ProblemListPage /> */}
            {/* <ProblemDetailPage /> */}
            {/* <ProblemEditor /> */}
        </> 
    )
}

export default React.memo(Layout)