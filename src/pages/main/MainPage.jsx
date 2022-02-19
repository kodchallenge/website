import React from 'react'
import { Button, Container, Row, Col } from "reactstrap";
import Brand from '../../components/Brand';

function MainPage() {
    return (
        <>
            <main>
                <div className="position-relative">
                    {/* Hero for FREE version */}
                    <section className="section section-hero section-shaped">
                        {/* Background circles */}
                        <div className="shape shape-style-1 shape-dark">
                            <span className="span-150" />
                            <span className="span-50" />
                            <span className="span-50" />
                            <span className="span-75" />
                            <span className="span-100 floating-x" style={{animationDelay: 1}}/>
                            <span className="span-75 floating" />
                            <span className="span-50" />
                            <span className="span-100 floating" style={{animationDelay: 2}}/>
                            <span className="span-50" />
                            <span className="span-100" />
                        </div>
                        <Container className="shape-container d-flex align-items-center py-lg">
                            <div className="col px-0">
                                <Row className="align-items-center justify-content-center">
                                    <Col className="text-left" lg="6">
                                        <Brand bold/>
                                        <p className="lead text-white" style={{fontWeight: 400}}>
                                            Ücretsiz ve Türkçe sorular ile programlama yeteneğini geliştir. <br />
                                            Ödüllü programlama yarışmalarına katıl.<br />
                                            Her hafta birbirinden eğlenceli kodlama challenge etkinliklerine katıl. <br />
                                            Öğrenirken eğlenmeye hazır mısın?
                                        </p>
                                        <div className="btn-wrapper mt-5">
                                            <Button color="default" size="lg">
                                                <span className="btn-inner--text">
                                                    Üye Ol
                                                </span>
                                            </Button>{" "}
                                            <Button color="warning" size="lg">
                                                <span className="btn-inner--text">
                                                    Giriş Yap
                                                </span>
                                            </Button>
                                        </div>
                                        <div className="mt-5">
                                            <small className="text-white font-weight-bold mb-0 mr-2">
                                                
                                            </small>
                                            {/* <img
                                                alt="..."
                                                className="ml-1"
                                                style={{ height: "28px" }}
                                                src={require("assets/img/brand/creativetim-white-slim.png")}
                                            /> */}
                                        </div>
                                    </Col>
                                    <Col>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                        <div className="separator separator-bottom separator-skew zindex-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="fill-white"
                                    points="2560 0 2560 100 0 100"
                                />
                            </svg>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default MainPage