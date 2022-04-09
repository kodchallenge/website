import React from "react";
import { Route, Routes } from "react-router";
import AdminLayout from "../layout/AdminLayout";
import ProblemListPage from "../pages/admin/problem/ProblemListPage";
import AddTrackPage from "../pages/admin/track/AddTrackPage";
import TrackListPage from "../pages/admin/track/TrackListPage";
import UpdateTrackPage from "../pages/admin/track/UpdateTrackPage";

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route path="" element={<></>} />
                <Route path="tracks" element={<TrackListPage />}/>
                <Route path="tracks/add" element={<AddTrackPage />}/>
                <Route path="tracks/update/:id" element={<UpdateTrackPage />}/>
                <Route path="problems" element={<ProblemListPage />} />
            </Route>
        </Routes>
    )
}

export default AdminRouter