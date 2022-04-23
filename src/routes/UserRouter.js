import React from "react";
import { Outlet, Route, Routes } from "react-router";
import UserProfilePage from "../pages/user/UserProfilePage";
import UserChangePassword from "../pages/user/UserChangePassword";

const UserRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route path='profile' element={<UserProfilePage />} />
                <Route path='change-password' element={<UserChangePassword />} />
            </Route>
        </Routes>
    )
}

export default UserRouter