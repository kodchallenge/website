import React from "react";
import { Outlet, Route, Routes } from "react-router";
import UserProfilePage from "../pages/user/UserProfilePage";

const UserRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route path='profile' element={<UserProfilePage />} />
            </Route>
        </Routes>
    )
}

export default UserRouter