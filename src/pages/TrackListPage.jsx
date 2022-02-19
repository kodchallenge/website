import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllTrack } from "../store/actions/trackActions"
import {Link} from 'react-router-dom'
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
                        {/* <div className="joined track-list mb-5">
                            {[1].map(item => (
                                <div className="col-md-6 shadow track" >
                                    <div className="row">
                                        <div className="col-2">
                                            <div>
                                                <img src={item.Icon} className="img img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h3>Algoritma</h3>
                                                <div className="badge bg-warning text-dark">
                                                    Katıldın
                                                </div>
                                            </div>
                                            <p><strong>12/58</strong> Problemler</p>
                                            <p>En son 3 gün önce giriş yaptın</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                        {/* <div className="unjoined track-list">

                            {track.tracks.map((item, index) => (
                                <div className="col-md-6 shadow track" >
                                    <div className="row">
                                        <div className="col-2">
                                            <div className="track-logo">
                                                <img src={item.icon} className="img img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <h3>{item.name}</h3>
                                            <p>Toplam <strong>58</strong> problem bulunuyor.</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div> */}

                        <Row>
                            {[1,2,3,4,5,6,7,8, 9].map(x => (
                                <Col lg="6">
                                    <Card className="card-lift--hover shadow border-0 my-3">
                                        <Link to="#">
                                            <CardBody className="p-3 text-dark">
                                                <div className="row">
                                                    <div className="col-2">
                                                        <div className="track-logo">
                                                            <img src="https://dg8krxphbh767.cloudfront.net/tracks/javascript.svg" className="img img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-10">
                                                        <h3 className="text-dark bold">Javascript</h3>
                                                        <p>Toplam <strong>{x*10}</strong> problem bulunuyor.</p>
                                                    </div>
                                                </div>
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