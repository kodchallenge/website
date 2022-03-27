import React from "react";
import { Route } from "react-router";
import Signin from "../pages/auth/Signin";

const AdminRouter = () => {
    return (
        <>
            <Route path="asd" element={<Signin />}/>
        </>
    )
}

export default React.memo(AdminRouter)