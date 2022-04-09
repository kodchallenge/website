import React from 'react'
import { useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'

import { NavItem } from 'reactstrap'

const SidebarNavItem = ({ to, text }) => {

    const location = useLocation()

    return (
        <NavItem tag={NavLink} to={to} active={location.pathname.includes(to)}>
             {text}
        </NavItem>
    )
}

export default SidebarNavItem