import React from 'react'
import { Route } from 'react-router'
import ProtectedRoute from './ProtectedRoute'

const RoleBasedRoute = ({roles, path, element}) => {
    return (
        <Route element={<ProtectedRoute roles={roles} />}>
            <Route path={path} element={
                <React.Suspense fallback={<p>...</p>}>
                    {element}
                </React.Suspense>
            } />
        </Route>
    )
}

export default RoleBasedRoute