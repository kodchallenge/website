import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Badge, Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import LoaderSpinner from "../components/spinners/LoaderSpinner";
import ProblemService from "../services/problem.service";
import TrackService from "../services/track.service";
const ProblemListPage = () => {
    const [problems, setProblems] = useState(null)
    const [track, setTrack] = useState(null)
    const [loading, setLoading] = useState(true)
    const { trackName } = useParams()
    useEffect(() => {
        if (trackName) {
            getDatas()
        }
    }, [])

    const getDatas = async () => {
        const problemService = new ProblemService()
        const trackService = new TrackService()
        problemService.getByTrackName(trackName).then(res => {
            setProblems(res.data.data)
        })
        await trackService.getTrackBySlug(trackName).then(res => {
            setTrack(res.data.data)
        })
        setLoading(false)
    }

    return (
        <div className="py-5">
            <LoaderSpinner loading={loading} >
                <div>
                    <section id="problem-header" className="shadow-bottom">
                        <div className="bg-white">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="d-flex align-items-center">
                                            <img src="https://dg8krxphbh767.cloudfront.net/tracks/cpp.svg" className="img img-fluid track-icon " width={50} height={50} />
                                            <h2 className="my-0 ml-3 bold">{track?.name ?? "Kategori Adı"}</h2>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </section>
                    <section className="container pt-5" id="description">
                        <div dangerouslySetInnerHTML={{__html: track?.description ?? "Açıklama"}}></div>
                    </section>
                    <section id="problem-list" className="mt-5">
                        <Container>
                            <Row>

                                {/* EN İYİLER LİSTESİ */}
                                <Col lg="4" className="order-lg-last">
                                    <Card>
                                        <CardBody className="py-1">
                                            <h4 className="text-center mb-3">Bu Bölümün Yıldızları</h4>
                                            {[1, 2, 3].map((x, index) => (
                                                <>
                                                    <div className="my-s">
                                                        <div className="d-flex align-items-center">
                                                            <h3 className="fw-bold">{index + 1}.</h3>
                                                            <div className="ml-4 d-flex justify-content-evesnly w-100">
                                                                <div>
                                                                    <img className="img img-fluid rounded-circle" src="https://secure.gravatar.com/avatar/9352a4edb0ff0fe8577676b7a063c671?s=500" width={60} height={60} />
                                                                </div>
                                                                <div className="ml-3">
                                                                    <h4>Yasin T.</h4>
                                                                    <p className="text-warning">Skor: <strong>3750</strong></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr className="mx-5 mt-0" />
                                                    </div>
                                                </>
                                            ))}
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="8" className="order-lg-first">
                                    {/* PROBLEM CARD */}
                                    <div>
                                        <h4>Tüm Problemler</h4>
                                    </div>
                                    {problems?.map((problem, index) => (
                                        <Card className="shadow border-0 my-3" key={index}>
                                            <CardBody>
                                                <Row className="align-items-center">
                                                    <Col md="9">
                                                        <h3 className="text-dark">{problem?.name ?? ""}</h3>
                                                        <div className="text-white">
                                                            <Badge color="green">Kolay</Badge>
                                                            {" "}
                                                            <Badge color="warning">Skor: <strong>40</strong></Badge>
                                                        </div>
                                                        <div className="my-3">
                                                            Başarı Oranı: 86%
                                                        </div>
                                                    </Col>
                                                    <Col md="3">
                                                        <Link to={`/tracks/${trackName}/${problem.name}-${problem.id}`} className="btn btn-warning">
                                                            Problemi Çöz
                                                        </Link>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                    ))}
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
            </LoaderSpinner>
        </div>
    )
}

export default React.memo(ProblemListPage)