import React from "react"
import { Row, Col, Navbar, Nav, NavItem, Container, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Link, Outlet, NavLink } from 'react-router-dom'
import Brand from "../components/Brand"
import SidebarNavItem from "../components/sidebar/SidebarNavItem"

const AdminLayout = () => {
    return (
        <div className="dashboard">
            <aside className="sidebar bg-dark text-center">
                <Brand bold Type="h4" />
                <nav className="mt-5 d-block">
                    <ul className="p-0 m-0 text-left">
                        <SidebarNavItem to="tracks" text="Tracks" />
                        <SidebarNavItem to="problems" text="Problems" />
                        <SidebarNavItem to="users" text="Users" />
                        <SidebarNavItem to="scoreboard" text="Score Boards" />
                    </ul>
                </nav>
            </aside>
            <main className="dashboard-main bg-ligth text-center">
                <Container>
                    <Outlet />
                </Container>
            </main>
        </div>
    )
}

export default React.memo(AdminLayout)