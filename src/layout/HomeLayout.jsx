import React from "react"
import { Outlet } from "react-router"
import { NavLink, Link } from "react-router-dom"

const HomeLayout = () => {
    return (
        <div className='home-page'>
            <div className='home-bg'></div>
            <header role="banner">
                <nav class="navbar navbar-expand-md navbar-dark">
                    <div class="container">
                        <Link class="navbar-brand" to="/">
                            <span style={{ color: "#FF7246" }}>Kod</span>Challenge
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#home-nav" aria-controls="home-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="home-nav">
                            <ul class="navbar-nav ml-auto pl-lg-5 pl-0 links">
                                <li class="nav-item">
                                    <Link to='/tracks'>Problemler</Link>
                                    {/* <a class="nav-link active" href="index.html">Home</a> */}
                                </li>
                                <li class="nav-item">
                                    <Link to='/contests'>Yarışmalar</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/activities'>Etkinlikler</Link>
                                </li>
                            </ul>
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item cta-btn">
                                    <Link to='/signin' className='signin-btn btn'>Giriş Yap</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <Outlet />
        </div>
    )
}

export default React.memo(HomeLayout)