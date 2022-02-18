import React from 'react'

import { Link } from "react-router-dom";
import Headroom from "headroom.js";
import {
    Button,
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    Media,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";
import { useState } from 'react';
import { useEffect } from 'react';
const TopNavbar = () => {
    const [collapseClasses, setCollapseClasses] = useState("")

    const onExiting = () => {
        setCollapseClasses("collapsing-out")
    };

    const onExited = () => {
        setCollapseClasses("")
    };
    useEffect(() => {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        headroom.init();
    }, [])
    return (
        <header className="header-global">
            <Navbar
                className="navbar-main navbar-transparent navbar-light headroom"
                expand="lg"
                id="navbar-main"
            >
                <Container>
                    <div className='d-flex align-items-center'>
                        <NavbarBrand className="mr-lg-5" to="/" tag={Link} >
                            KodChallenge
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
                                            KodChallenge
                                            {/* <img
                            alt="..."
                            src={require("assets/img/brand/argon-react.png")}
                            /> */}
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
                                <UncontrolledDropdown nav>
                                    <DropdownToggle nav>
                                        <i className="ni ni-collection d-lg-none mr-1" />
                                        <span className="nav-link-inner--text">Tracks</span>
                                    </DropdownToggle>
                                    {/* <DropdownMenu>
                                        <DropdownItem to="/landing-page" tag={Link}>
                                            Landing
                                        </DropdownItem>
                                        <DropdownItem to="/profile-page" tag={Link}>
                                            Profile
                                        </DropdownItem>
                                        <DropdownItem to="/login-page" tag={Link}>
                                            Login
                                        </DropdownItem>
                                        <DropdownItem to="/register-page" tag={Link}>
                                            Register
                                        </DropdownItem>
                                    </DropdownMenu> */}
                                </UncontrolledDropdown>
                            </Nav>
                            <Nav className="align-items-lg-center ml-lg-auto" navbar>
                                <NavItem>
                                    <NavLink
                                        className="nav-link-icon"
                                        href="https://www.facebook.com/creativetim"
                                        id="tooltip333589074"
                                        target="_blank"
                                    >
                                        <i className="fa fa-facebook-square" />
                                        <span className="nav-link-inner--text d-lg-none ml-2">
                                            Facebook
                                        </span>
                                    </NavLink>
                                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                                        Like us on Facebook
                                    </UncontrolledTooltip>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link-icon"
                                        href="https://www.instagram.com/creativetimofficial"
                                        id="tooltip356693867"
                                        target="_blank"
                                    >
                                        <i className="fa fa-instagram" />
                                        <span className="nav-link-inner--text d-lg-none ml-2">
                                            Instagram
                                        </span>
                                    </NavLink>
                                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                                        Follow us on Instagram
                                    </UncontrolledTooltip>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link-icon"
                                        href="https://twitter.com/creativetim"
                                        id="tooltip184698705"
                                        target="_blank"
                                    >
                                        <i className="fa fa-twitter-square" />
                                        <span className="nav-link-inner--text d-lg-none ml-2">
                                            Twitter
                                        </span>
                                    </NavLink>
                                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                                        Follow us on Twitter
                                    </UncontrolledTooltip>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link-icon"
                                        href="https://github.com/creativetimofficial/argon-design-system-react"
                                        id="tooltip112445449"
                                        target="_blank"
                                    >
                                        <i className="fa fa-github" />
                                        <span className="nav-link-inner--text d-lg-none ml-2">
                                            Github
                                        </span>
                                    </NavLink>
                                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                                        Star us on Github
                                    </UncontrolledTooltip>
                                </NavItem>
                                <NavItem className="d-none d-lg-block ml-lg-4">
                                    <Button
                                        className="btn-neutral btn-icon"
                                        color="default"
                                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"
                                        target="_blank"
                                    >
                                        <span className="btn-inner--icon">
                                            <i className="fa fa-cloud-download mr-2" />
                                        </span>
                                        <span className="nav-link-inner--text ml-1">
                                            Download
                                        </span>
                                    </Button>
                                </NavItem>
                            </Nav>
                        </UncontrolledCollapse>
                    </div>
                </Container>
            </Navbar>
        </header>
        // <nav id='top-navbar' className='top-navbar'>
        //     <div className='p-2'>
        //         <div className='container'>
        //             <div className='row align-items-center'>
        //                 <div className='col-md-3'>
        //                     <h1><span className='text-primary'>Kod</span>Challenge</h1>
        //                 </div>
        //                 <div className='col-md-6'>
        //                     <ul className='navbar align-items-center justify-content-start'>
        //                         <li>
        //                             <a href='#'>Anasayfa</a>
        //                         </li>
        //                         <li>
        //                             <a href='#'>Problemler</a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //                 <div className='col-md-3 text-end'>
        //                     <ul>
        //                         <li className='p-0'>Test</li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default React.memo(TopNavbar)
