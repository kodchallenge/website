import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardImg, Col, Container, Row } from 'reactstrap'

const ContestPage = () => {
    return (
        <div>
            <div className='contest-top-section p-5 text-center shadow'>
                <h1 className='fw-bold'>YARIŞMALAR</h1>
                <p className='h5'>Ödüllü veya ödülsüz yarışmalara katıl.
                    Yeteneklerini sergile.</p>
                <strong className='text-warning'>Happy Coding</strong>
                <div className='my-4'>
                    <Link to="explore" className='btn btn-primary'>Yarışmaları Keşfet</Link>
                </div>
            </div>
            <div className='my-5'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col md="8" lg="4" className='p-5'>
                            <Card className='text-center border-0 shadow'>
                                <CardImg src='https://kommunity.com/img/features/new/40.png'></CardImg>
                                <div className='my-4'>
                                    <h3 className='fw-bold'>Yarışmalara Katıl</h3>
                                    <div>
                                        <p>Yarışmalara katıl, programlama becerilerini göster. Ödülünü kap.</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md="8" lg="4" className='p-5'>
                            <Card className='text-center border-0 shadow'>
                                <CardImg src='https://kommunity.com/img/features/new/41.png'></CardImg>
                                <div className='my-4'>
                                    <h3 className='fw-bold'>Yarışma Oluştur</h3>
                                    <div>
                                        <p>Kolay bir şekilde yarışma oluştur.<br/> İnsanlarla paylaş.</p>
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

export default ContestPage