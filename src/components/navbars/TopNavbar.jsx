import React from 'react'

import * as RouterDom from "react-router-dom";
import {Link} from "react-router-dom";
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
import Brand from '../Brand';
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
        <header className="header-global mb-5">
            <Navbar
                className="navbar-main navbar-transparent dark navbar-light headroom"
                expand="lg"
                id="navbar-main"
            >
                <Container>
                    <div className='d-flex align-items-center'>
                        <NavbarBrand className="mr-lg-5" to="/" tag={Link} >
                            <Brand bold Type="h5"/>
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
                                <NavItem>
                                    <Link to="tracks" className='nav-link'>
                                        Problemler
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="#" className='nav-link'>
                                        Yarışmalar
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="#" className='nav-link'>
                                        Etkinlikler
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="#" className='nav-link'>
                                        Projeler
                                    </Link>
                                </NavItem>
                            </Nav>
                            <Nav className="align-items-lg-center ml-lg-auto" navbar>
                                <NavItem>
                                    <Link to="about-project" className='nav-link'>
                                        Bu Proje Hakkında
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link-icon"
                                        href="https://linkedin.com/in/yasintorun"
                                        id="tooltip184698705"
                                        target="_blank"
                                    >
                                        <i className="fa fa-linkedin-square" />
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
                                        href="https://github.com/yasintorun"
                                        id="tooltip112445449"
                                        target="_blank"
                                    >
                                        <i className="fa fa-github" />
                                        <span className="nav-link-inner--text d-lg-none ml-2">
                                            Github
                                        </span>
                                    </NavLink>
                                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                                        Github hesabım
                                    </UncontrolledTooltip>
                                </NavItem>
                                <NavItem className="d-none d-lg-block ml-lg-4">
                                    <Link style={{all: "none"}} to="/auth/signup">
                                        <Button color="default">
                                            <span className="btn-inner--text">
                                                Üye Ol
                                            </span>
                                        </Button>{" "}
                                    </Link>
                                    <Link style={{all: "none"}} to="/auth/signin">
                                        <Button color="warning" >
                                            <span className="btn-inner--text text-white">
                                                Giriş Yap
                                            </span>
                                        </Button>
                                    </Link>
                                </NavItem>
                            </Nav>
                        </UncontrolledCollapse>
                    </div>
                </Container>
            </Navbar>
        </header>
    )
}

export default React.memo(TopNavbar)
