import React from "react";
import { Outlet, Route, Routes } from "react-router";
import ProtectedRoute from "../hoc/ProtectedRoute";
import AdminLayout from "../layout/AdminLayout";
import AddTrackPage from "../pages/admin/track/AddTrackPage";
import TrackListPage from "../pages/admin/track/TrackListPage";
import UpdateTrackPage from "../pages/admin/track/UpdateTrackPage";
import Signin from "../pages/auth/Signin";

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route path="" element={<></>} />
                <Route path="tracks" element={<TrackListPage />}/>
                <Route path="tracks/add" element={<AddTrackPage />}/>
                <Route path="tracks/update/:id" element={<UpdateTrackPage />}/>
            </Route>
        </Routes>
    )
}

export default AdminRouter