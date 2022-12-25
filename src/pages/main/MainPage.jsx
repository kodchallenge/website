import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, NavLink } from "reactstrap";
import Brand from '../../components/Brand';

function MainPage() {
    const { user } = useSelector(state => state.auth)

    return (
        <>
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
                    <Link to='/signup' className='join-btn btn'>👉 Bize Katıl</Link>
                    {/* <button className='join-btn'>👉 Bize Katıl</button> */}
                </div>
            </main>
            <footer>

            </footer>
        </>
    )
}

export default MainPage