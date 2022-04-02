import React from "react";
import { Outlet, Route, Routes } from "react-router";
import ProblemDetailPage from "../pages/ProblemDetailPage";

const PublicRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route path='tracks/:trackName/:problemName' element={<ProblemDetailPage />} />
            </Route>
        </Routes>
    )
}

export default PublicRouter