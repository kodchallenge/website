import React, { useEffect, useState } from 'react'
import { Alert, Badge, Button, Card, Col, Container, Row, Table } from 'reactstrap'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import LoaderSpinner from '../../components/spinners/LoaderSpinner'
import ContestService from '../../services/contest.service'
import Swal from 'sweetalert2'
const headerInfoStyle = {
    flexDirection: "column",
    flex: 1,
    display: "flex",
}

const ContestsDetailPage = () => {
    const { id } = useParams()
    const { contests } = useSelector(state => state.contest)
    const { user } = useSelector(state => state.auth)
    const [contest, setContest] = useState(null)
    const [isJoined, setJoined] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!contests) {
            new ContestService().getAllContest().then(res => {
                if (res.data.success) {
                    dispatch({ type: 'SET_CONTESTS', payload: res.data.data })
                }
            })
        }
        else {
            const con = contests.find(contest => contest._id === id)
            setContest(con)
            if (user?._id && con?._id) {
                new ContestService().isUserJoinedContest({ user: user._id, contest: con._id }).then(res => {
                    setJoined(true)
                })
            }
        }
    }, [contests])

    const handleJoinContest = () => {
        if (user && contest) {
            const data = { user: user._id, contest: contest._id }
            new ContestService().joinContest(data).then(res => {
                if (res.data.success) {
                    setJoined(true)
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı',
                        text: res.data.message,
                    })
                }
            })
                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Hata',
                        text: err.response.data.message,
                    })
                })
        }
        else {
            Swal.fire({
                title: "Uyarı",
                text: "Lütfen giriş yapınız",
                icon: "warning",
            })
        }
    }

    return (
        <div className='my-5 py-5'>
            <LoaderSpinner loading={!contest}>
                <>
                    <div className='text-center my-5'>
                        <h1 className='my-4 fw-bold'>{contest?.title}</h1>
                        <hr style={{ maxWidth: 200 }} />
                    </div>
                    <Container className='my-5'>
                        <Row className=''>
                            <Col md="4">
                                <div style={{ flex: 1 }}>
                                    <img className='rounded img-fluid' src={contest?.poster} />
                                </div>
                            </Col>
                            <Col md="8" style={{ ...headerInfoStyle }}>
                                <div style={{ flex: 1 }}>
                                </div>
                                <div>
                                    <div className='my-2'>
                                        <Badge color='warning' className='text-white' style={{ fontSize: 18, textTransform: "none" }}>
                                            <strong>Ödül: </strong> {contest?.award}
                                        </Badge>
                                    </div>
                                    <div className='my-2 mb-5'>
                                        <Badge color='primary' className='text-white' style={{ fontSize: 18, textTransform: "none" }}>
                                            <strong>Yarışma Tarihi: </strong> {contest?.startDate.toLongDate()}
                                        </Badge>
                                    </div>
                                    <div>
                                        {contest?.startDate.datePassed() ? (
                                            <Badge color='danger' style={{fontSize: 18, textTransform: "none"}}>
                                                Yarışma Tamamlandı.
                                            </Badge>
                                        ) : (
                                            <Button style={{ minWidth: 220 }} color='success' disabled={!user || isJoined} onClick={handleJoinContest}>
                                                {isJoined ? "KATILDIN" : user ? "Katıl" : "KATILMAK İÇİN GİRİŞ YAPIN"}
                                            </Button>
                                        )}
                                        {user && isJoined && (
                                            <>
                                            <hr />
                                            <Link to="join" className='btn btn-link'>Yarışma Sayfası İçİn Tıklayın</Link>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <hr />
                        <div className='my-3'>
                            <p className='fw-bold'>Açıklama: </p>
                            <div dangerouslySetInnerHTML={{ __html: contest?.description }} />
                        </div>
                    </Container>
                </>
            </LoaderSpinner>
        </div>
    )
}

export default ContestsDetailPage