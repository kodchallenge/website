import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardImg, Col, Container, Row } from 'reactstrap'

const ActivityPage = () => {
    return (
        <div>
            <div className='activity-top-section p-5 text-center shadow'>
                <h1 className='fw-bold'>ETKİNLİKLER</h1>
                <p className='h5'>
                    Eğitimlere, Meydan okumalara(<storng>Challenge</storng>) katıl.
                    Kendini geliştir.
                </p>
                <strong className='text-warning'>Happy Coding</strong>
                <div className='my-4'>
                    <Link to="explore" className='btn btn-primary'>Etkinlikleri Keşfet</Link>
                </div>
            </div>
            <div className='my-5'>
                <Container>
                    {/* <Row className='justify-content-center'>
                        <Col md="8" lg="4" className='p-5'>
                            <Card className='text-center border-0 shadow'>
                                <CardImg src='https://kommunity.com/img/features/new/40.png'></CardImg>
                                <div className='my-4'>
                                    <h3 className='fw-bold'>Etkinliklere Katıl</h3>
                                    <div>
                                        <p>Birbirinden eğlenceli etkinliklere katıl. Eğlenirken öğren.</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md="8" lg="4" className='p-5'>
                            <Card className='text-center border-0 shadow'>
                                <CardImg src='https://kommunity.com/img/features/new/41.png'></CardImg>
                                <div className='my-4'>
                                    <h3 className='fw-bold'>Meydan Oku</h3>
                                    <div>
                                        <p>Yarışma formatında meydan okumalara katıl.</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row> */}
                </Container>
            </div>
        </div>
    )
}

export default ActivityPage