import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllTrack } from "../store/actions/trackActions"
import { Link } from 'react-router-dom'
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";
const TrackListPage = () => {
    const track = useSelector(state => state.track)
    //const dispatch = useDispatch()

    useEffect(() => {
        //dispatch(getAllTrack())
    }, [])
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
                <div className="container">
                    <div className="pb-5 mt-5 mb-5">
                        <Row>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((x, index) => (
                                <Col lg="6">
                                    <Card className="card-lift--hover shadow border-0 my-3">
                                        <Link to="/problem">
                                            <CardBody className="p-3 text-dark">
                                                <Row>
                                                    <Col xs="3" sm="2">
                                                        <div className="track-logo">
                                                            <img src="https://dg8krxphbh767.cloudfront.net/tracks/javascript.svg" className="img img-block img-fluid" />
                                                        </div>
                                                    </Col>
                                                    <Col xs="9" sm="10">
                                                        <h3 className="text-dark bold">Algoritma</h3>
                                                        <p>Toplam <strong>42</strong> soru bulunuyor.</p>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Link>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(TrackListPage)