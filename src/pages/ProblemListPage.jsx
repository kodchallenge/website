import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Badge, Card, CardBody, Col, Container, Row } from "reactstrap";
import SingleScoreBoard from "../components/scoreboard/SingleScoreBoard";
import LoaderSpinner from "../components/spinners/LoaderSpinner";
const ProblemListPage = () => {
    const [track, setTrack] = useState(null)
    const trackState = useSelector(x => x.track)
    const [loading, setLoading] = useState(true)
    const { trackName } = useParams()
    
    useEffect(() => {
        if (trackName && trackState?.data?.length > 0) {
            const tracks = trackState.data.find(x => x.slug?.toLowerCase() === trackName.toLowerCase())
            if(!tracks) {
                console.log("Kategori yok")
                window.location.pathname = "/"
            }
            setTrack(tracks)
            setLoading(false)
        }
    }, [trackState])


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
                                            <img src={track?.icon ?? ""} className="img img-fluid track-icon " width={50} height={50} />
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
                                    {track && (<SingleScoreBoard track={track._id} />)}
                                </Col>
                                <Col lg="8" className="order-lg-first">
                                    {/* PROBLEM CARD */}
                                    <div>
                                        <h4>Tüm Problemler</h4>
                                    </div>
                                    {track?.problems?.map((problem, index) => (
                                        <Card className="shadow border-0 my-3" key={index}>
                                            <CardBody>
                                                <Row className="align-items-center">
                                                    <Col md="9">
                                                        <h3 className="text-dark">{problem?.name ?? ""}</h3>
                                                        <div className="text-white">
                                                            <Badge color="green">{problem?.difficulty || "Kolay"}</Badge>
                                                            {" "}
                                                            <Badge color="warning">Skor: <strong>{problem?.score || 0}</strong></Badge>
                                                        </div>
                                                        <div className="my-3">
                                                            Başarı Oranı: 100%
                                                        </div>
                                                    </Col>
                                                    <Col md="3">
                                                        <Link to={`/tracks/${trackName}/${problem.name?.turkishToEnglish().replace(/[^a-zA-Z0-9]/g, "")}-${problem._id}`} className="btn btn-warning">
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