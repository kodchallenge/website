import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardImg, Col, Container, Row } from 'reactstrap'

const ProjectPage = () => {
    return (
        <div>
            <div className='project-top-section p-5 text-center shadow'>
                <h1 className='fw-bold'>PROJELER</h1>
                <p className='h5'>
                    Geliştirdiğin projeleri insanlara tanıt, projene ekip arkadaşları bul. <br />
                    Projenin Github reposunu sisteme yükle. Projeni paylaş
                </p>
                <strong className='text-warning'>Happy Coding</strong>
                <div className='my-4'>
                    <Link to="explore" className='btn btn-primary'>Projeleri Keşfet</Link>
                </div>
            </div>
            <div className='my-5'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col md="8" lg="4" className='p-5'>
                            <Card className='text-center border-0 shadow'>
                                <CardImg src='https://res.cloudinary.com/kodchallenge/image/upload/v1652520179/main/projects_yyf9y3.png'></CardImg>
                                <div className='my-4'>
                                    <h3 className='fw-bold'>Projeleri Gör</h3>
                                    <div>
                                        <p>İnsanların neler yaptığını, geliştirdikleri projeleri deneyimle ve gör</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md="8" lg="4" className='p-5'>
                            <Card className='text-center border-0 shadow'>
                                <CardImg src='https://res.cloudinary.com/kodchallenge/image/upload/v1652520179/main/tanit_bv80it.png'></CardImg>
                                <div className='my-4'>
                                    <h3 className='fw-bold'>Projeni Tanıt</h3>
                                    <div>
                                        <p>Projeni insanlara tanıt. İnsanlardan geri bildirim al.</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md="8" lg="4" className='p-5'>
                            <Card className='text-center border-0 shadow'>
                                <CardImg src='https://res.cloudinary.com/kodchallenge/image/upload/v1652520179/main/find_mp3zqv.png'></CardImg>
                                <div className='my-4'>
                                    <h3 className='fw-bold'>Ekip Bul</h3>
                                    <div>
                                        <p>Projeni beraber geliştirebileceğin ekip arkadaşları bul.</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default ProjectPage