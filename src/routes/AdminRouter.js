import React from "react";
import { Outlet, Route, Routes } from "react-router";
import ProtectedRoute from "../hoc/ProtectedRoute";
import AdminLayout from "../layout/AdminLayout";
import AddTrackPage from "../pages/admin/AddTrackPage";
import TrackListPage from "../pages/admin/TrackListPage";
import Signin from "../pages/auth/Signin";

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route path="" element={<></>} />
                <Route path="tracks" element={<TrackListPage />}/>
                <Route path="tracks/add" element={<AddTrackPage />}/>
            </Route>
        </Routes>
    )
}

export default AdminRouter