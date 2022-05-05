import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, CardBody, Col, Container, Row, Badge } from 'reactstrap'
import LoaderSpinner from '../../components/spinners/LoaderSpinner'
import ContestService from '../../services/contest.service'

const ContestExplorePage = () => {
    const { contests } = useSelector(state => state.contest)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!contests) {
            new ContestService().getAllContest().then(res => {
                if(res.data.success) {
                    dispatch({ type: 'SET_CONTESTS', payload: res.data.data })
                }
            })
        }
    }, [])
    
    return (
        <div>
            <div className='text-center my-5 py-5'>
                <h1>Yarışmalara Katıl</h1>
                <h3>Yarışmalara ücretsiz bir şekilde katılabilirsin</h3>
                <p>Yarışmalara katılabilir, programlama becerilerini sergileyebilir, diğer insanlarla rekabet edebilirsin.</p>
            </div>
            <div>
                <LoaderSpinner loading={!contests}>
                    <Container>
                        <div className="pb-5 my5">
                            {contests?.map((contest, index) => (
                                <Card key={index} className="card-lift--hover shadow border-0 my-5">
                                    <Link to={contest._id}>
                                        <CardBody className="p-5 text-dark">
                                            <Row>
                                                <Col sm="2">
                                                    <div className="contests-img text-center">
                                                        <img src={contest.poster} className="rounded img-block img-fluid"/>
                                                    </div>
                                                </Col>
                                                <Col sm="10">
                                                    <h4 className="text-dark bold">
                                                        {contest.title}
                                                    </h4>
                                                    <Badge color='warning' className='text-white' style={{fontSize: 18, textTransform: "none"}}>
                                                        <strong>Ödül: </strong>
                                                        {contest.award}
                                                    </Badge>
                                                    <div className='my-4 text-success'>
                                                        <strong>Yarışma Tarihi: </strong> {contest.startDate.toLongDate()}
                                                    </div>
                                                    <div className='my-4 text-muted'>
                                                        <strong>{contest.totalJoined+10 ?? 0}</strong> Kişi Katılıyor.
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div>
                                                {contest?.startDate.datePassed() && (
                                                    <Badge color='danger' style={{fontSize: 18, textTransform: "none"}}>
                                                        Yarışma Tamamlandı.
                                                    </Badge>
                                                )}
                                            </div>
                                        </CardBody>
                                    </Link>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </LoaderSpinner>
            </div>
        </div>
    )
}

export default ContestExplorePage