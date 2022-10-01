import Headroom from "headroom.js";
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import {
    Button, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavItem,
    NavLink, Row, UncontrolledCollapse, UncontrolledDropdown, UncontrolledTooltip
} from "reactstrap";
import useAuth from '../../hooks/useAuth';
import Brand from '../Brand';

const TopNavbar = () => {
    const [collapseClasses, setCollapseClasses] = useState("")
    const { user } = useSelector(state => state.auth)
    const { handleLogout } = useAuth()
    const navigate = useNavigate()

    const onExiting = () => {
        setCollapseClasses("collapsing-out")
    };

    const onExited = () => {
        setCollapseClasses("")
    };
    useEffect(() => {
        let headroom = new Headroom(document.getElementById("navbar-main"), {
            offset: 100,
        });
        headroom.init();
    }, [])
    return (
        <header className="header-global mb-5">
            <Navbar
                className="navbar-main navbar-transparent dark navbar-light headroom"
                expand="lg"
                id="navbar-main"
            >
                <Container>
                    <div className='d-flex align-items-center'>
                        <NavbarBrand className="mr-lg-5" to="/" tag={Link} >
                            <Brand bold Type="h5" />
                            {/* <img
                                alt="Brand Logo"
                                src={require("../../assets/img/kodchallenge_logo.png")}
                            /> */}
                        </NavbarBrand>
                        <button className="navbar-toggler" id="navbar_global">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <UncontrolledCollapse
                            toggler="#navbar_global"
                            navbar
                            className={collapseClasses}
                            onExiting={onExiting}
                            onExited={onExited}
                        >
                            <div className="navbar-collapse-header">
                                <Row>
                                    <Col className="collapse-brand" xs="6">
                                        <Link to="/">
                                            <Brand Type="p" style={{ color: "black" }} bold />
                                        </Link>
                                    </Col>
                                    <Col className="collapse-close" xs="6">
                                        <button className="navbar-toggler" id="navbar_global">
                                            <span />
                                            <span />
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                            <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                                <NavItem>
                                    <Link to="tracks" className='nav-link'>
                                        Problemler
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="contests" className='nav-link'>
                                        Yarışmalar
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="activities" className='nav-link'>
                                        Etkinlikler
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="projects" className='nav-link'>
                                        Projeler
                                    </Link>
                                </NavItem>
                            </Nav>
                            <Nav className="align-items-lg-center ml-lg-auto" navbar>
                                {/* <NavItem>
                                    <Link to="joinus" className='nav-link font-weight-bold'>
                                        Bize Katıl
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="about-project" className='nav-link'>
                                        Bu Proje Hakkında
                                    </Link>
                                </NavItem> */}
                                <NavItem>
                                    <NavLink
                                        className="nav-link-icon"
                                        href="https://linkedin.com/in/yasintorun"
                                        id="tooltip184698705"
                                        target="_blank"
                                    >
                                        <i className="fa fa-brands fa-linkedin" />
                                        <span className="nav-link-inner--text d-lg-none ml-2">
                                            Linkedin
                                        </span>
                                    </NavLink>
                                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                                        Linkedin hesabım
                                    </UncontrolledTooltip>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link-icon"
                                        href="https://github.com/kodchallenge"
                                        id="tooltip112445449"
                                        target="_blank"
                                    >
                                        <i className="fa fa-brands fa-github" />
                                        <span className="nav-link-inner--text d-lg-none ml-2">
                                            Github
                                        </span>
                                    </NavLink>
                                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                                        Github hesabım
                                    </UncontrolledTooltip>
                                </NavItem>
                                {!user ? (
                                    <NavItem className="ml-lg-4">
                                        <Link style={{ all: "none" }} to="/auth/signup">
                                            <Button color="default">
                                                <span className="btn-inner--text">
                                                    Üye Ol
                                                </span>
                                            </Button>{" "}
                                        </Link>
                                        <Link style={{ all: "none" }} to="/auth/signin">
                                            <Button color="warning" >
                                                <span className="btn-inner--text text-white">
                                                    Giriş Yap
                                                </span>
                                            </Button>
                                        </Link>
                                    </NavItem>
                                )
                                    : (
                                        <NavItem className="ml-lg-4">
                                            <UncontrolledDropdown>
                                                <DropdownToggle color='transparent' caret className="text-white">
                                                    <img className='rounded-pill' src={user.photo} width={32} height={32} />
                                                    {/* <i class="fa-solid fa-ellipsis"></i> */}
                                                </DropdownToggle>
                                                <DropdownMenu
                                                    className="dropdown-menu-arrow mt-5 ml-1"
                                                >
                                                    <DropdownItem onClick={() => navigate("/user/profile")}>Profil</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem onClick={handleLogout} color='danger' className='text-danger'>Çıkış Yap</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                            {/* <Button color='danger' onClick={handleLogout}>Çıkış Yap</Button> */}
                                        </NavItem>
                                    )
                                }
                            </Nav>
                        </UncontrolledCollapse>
                    </div>
                </Container>
            </Navbar>
        </header>
    )
}

export default React.memo(TopNavbar)
