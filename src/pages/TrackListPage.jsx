import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {
    Card,
    CardBody, Col, Container,
    Row
} from "reactstrap";
import LoaderSpinner from "../components/spinners/LoaderSpinner";
const TrackListPage = () => {
    const trackState = useSelector(state => state.track)

    return (
        <div>
            <div>
                <div className="bg-white p-5">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <h1 className="bold">Programlamada Kendini Geliştir</h1>
                            <h3 className="bold">9 farklı kategori sizler için hazır</h3>
                            <p>Problemlerle veya programlama ile ilgili uzun bir bilgilendirici yazı</p>
                        </div>
                    </div>
                </div>
                <LoaderSpinner loading={trackState.loading}>
                    <Container>
                        <div className="pb-5 mt-5 mb-5">
                            <Row>
                                {trackState.data.map((track, index) => (
                                    <Col lg="6">
                                        <Card className="card-lift--hover shadow border-0 my-3">
                                            <Link to={"/tracks/"+track.slug}>
                                                <CardBody className="p-3 text-dark">
                                                    <Row>
                                                        <Col xs="3" sm="2">
                                                            <div className="track-logo">
                                                                <img src={track.icon} className="img img-block img-fluid" />
                                                            </div>
                                                        </Col>
                                                        <Col xs="9" sm="10">
                                                            <h3 className="text-dark bold">{track.name ?? "Kategori Adı Bulunamadı"}</h3>
                                                            <p>Toplam <strong>{track?.problems?.length ?? 0}</strong> soru bulunuyor.</p>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Link>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Container>
                </LoaderSpinner>
            </div>
        </div>
    )
}

export default React.memo(TrackListPage)