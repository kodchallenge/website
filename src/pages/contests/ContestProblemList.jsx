import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Alert, Badge, Button, Card, CardBody, Col, Container, Row } from 'reactstrap'
import Clock from '../../components/utils/Clock'
import { CookieTypes } from '../../constants'
import useTimer from '../../hooks/useTimer'
import CookieService from '../../services/cookie.service'

const ContestProblemList = ({ problems, clock }) => {
    const contestant = CookieService.get(CookieTypes.CONTESTANT)

    return (
        <div>
            <Container>
                <div>
                    <Alert className='text-center' color='warning'>
                        <i className="fa fa-solid fa-clock mr-2"></i>
                        Geçen Süre: <Clock date={clock} />
                    </Alert>
                </div>
                <div className='my-5'>
                    {problems?.map((problem, index) => (
                        <div className='w-md-75 m-auto'>
                            <Card key={index} className="shadow border-0 my-3">
                                <CardBody>
                                    <Row className="align-items-center">
                                        <Col lg="9">
                                            <h3 className="text-dark">{problem?.name}</h3>
                                            <div className="text-white">
                                                <Badge color="success">Skor: <strong>{problem?.score}</strong></Badge>
                                            </div>
                                        </Col>
                                        <Col lg="3">
                                            {contestant?.solutions?.some(s => s.problem == problem?._id) ? (
                                                <Button disabled color='success' className='my-2'>Problemi Çözdün</Button>
                                            ) : (
                                                <Link to={`/contests/editor?problem=${problem?._id}`} className={"btn my-2 btn-warning"}>
                                                    Problemi Çöz
                                                </Link>
                                            )}
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
            </Container >
        </div >
    )
}

export default ContestProblemList