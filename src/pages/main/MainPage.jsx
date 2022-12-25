import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, NavLink } from "reactstrap";
import Brand from '../../components/Brand';

function MainPage() {
    const { user } = useSelector(state => state.auth)

    return (
        <div className='home-page'>
            <div className='home-bg'></div>
            <header role="banner">
                <nav class="navbar navbar-expand-md navbar-dark">
                    <div class="container">
                        <a class="navbar-brand" href="/">
                            <span style={{ color: "#FF7246" }}>Kod</span>Challenge
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarsExample05">
                            <ul class="navbar-nav ml-auto pl-lg-5 pl-0">
                                <li class="nav-item">
                                    <NavLink href='/tracks'>Problemler</NavLink>
                                    {/* <a class="nav-link active" href="index.html">Home</a> */}
                                </li>
                                <li class="nav-item">
                                    <NavLink href='/contests'>Yarışmalar</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink href='/activities'>Etkinlikler</NavLink>
                                </li>
                            </ul>
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item cta-btn">
                                    <NavLink href='/auth/signin' className='signin-btn btn'>Giriş Yap</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <div className='title'>
                    <div className='content'>
                        <h3 className='slogan'>Öğrenirken eğlenmeye hazır mısın? 🎉</h3>
                        <h1 className='consept-header'>
                            <span>Türkçe</span> Programlama Platformu
                        </h1>
                        <h4 className='consept-description'>
                            Ücretsiz ve Türkçe sorular ile programlama yeteneğini geliştir.
                            Ödüllü programlama yarışmalarına katıl. Her hafta birbirinden eğlenceli kodlama challenge etkinliklerinde sen de yerini al.
                        </h4>
                    </div>
                    <NavLink href='/auth/signup' className='join-btn btn'>👉 Bize Katıl</NavLink>
                    {/* <button className='join-btn'>👉 Bize Katıl</button> */}
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default MainPage