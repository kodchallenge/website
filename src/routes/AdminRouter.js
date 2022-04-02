import React from "react";
import { Outlet, Route, Routes } from "react-router";
import ProtectedRoute from "../hoc/ProtectedRoute";
import Signin from "../pages/auth/Signin";

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<Outlet />}>
                <Route path="asd" element={<p>
                    dasod asdk asğdlas pd kasd kasod kasldk asdasdad
                    addaksdkmad
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    a
                    sdasdlasd
                    sdasdlasd
                    <br />
                    <br />
                    sdasdlasd
                    sdasdlasd
                    <br />
                    sdasdlasd
                    sdasdlasd
                    sdasdlasd
                </p>} />
            </Route>
        </Routes>
    )
}

export default AdminRouter