import React from "react";
import { Outlet, Route, Routes } from "react-router";
import ProtectedRoute from "../hoc/ProtectedRoute";
import Signin from "../pages/auth/Signin";

const AdminRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route path="asd" element={<p>asd</p>} />
            </Route>
        </Routes>
    )
}

export default AdminRouter