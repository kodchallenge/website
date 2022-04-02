import React from "react"
import { Row, Col, Navbar, Nav, NavItem, Container } from 'reactstrap'
import { Link, Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div>
            <Container>
                <Navbar
                    className="admin-navbar"
                    expand="lg"
                    id="admin-navbar"
                >
                    <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                        <NavItem>
                            <Link to="tracks" className='nav-link'>
                                Tracks
                            </Link>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Container>
            <Outlet />
        </div>
    )
}

export default React.memo(AdminLayout)