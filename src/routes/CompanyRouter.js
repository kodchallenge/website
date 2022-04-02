import React from "react";
import { Outlet, Route, Routes } from "react-router";

const CompanyRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route path='profile' element={<div>
                    <hr />
                    <hr />
                    Company profili.
                    <hr />
                    Silinecek.
                </div>} />
            </Route>
        </Routes>
    )
}

export default CompanyRouter