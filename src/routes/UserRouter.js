import React from "react";
import { Outlet, Route, Routes } from "react-router";

const UserRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route path='profile' element={<div>
                    Kullanıcı profili.
                    <hr />
                    Silinecek.
                </div>} />
            </Route>
        </Routes>
    )
}

export default UserRouter