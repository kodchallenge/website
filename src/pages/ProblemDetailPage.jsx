import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router"
import { Badge, Button, Card, CardBody, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap"
import { useEffect } from "react"
import TrackService from "../services/track.service"
import ProblemService from "../services/problem.service"
import LoaderSpinner from "../components/spinners/LoaderSpinner"

const ProblemDetailPage = () => {
    const [activeTab, setActiveTab] = useState(1)
    const [track, setTrack] = useState(null)
    const [problem, setProblem] = useState(null)
    const [loading, setLoading] = useState(true)
    const {trackName, problemName} = useParams()

    useEffect(() => {
        getDatas()
    }, [])

    const getDatas = async () => {
        try {
            const problemService = new ProblemService()
            const trackService = new TrackService()
            const problemId = problemName.split('-')[1]
            if(!problemId) throw 'Problem id bulunamadı';
            problemService.getProblemById(problemId).then(res => {
                setProblem(res.data.data)
            })
            await trackService.getTrackBySlug(trackName).then(res => {
                setTrack(res.data.data)
            })
            setLoading(false)
        } catch {
            window.location.pathname="/"
        }
    }

    const Tab = ({ index, children }) => {
        return (
            <NavItem className="mb-3">
                <NavLink
                    aria-selected={activeTab === index}
                    onClick={e => setActiveTab(index)}
                    href="#"
                    role="tab"
                    className={"nav-warning " + (activeTab === index ? " active" : "")}
                >
                    {children}
                </NavLink>
            </NavItem>
        )
    }

    return (
        <div className="py-5">
            <LoaderSpinner loading={loading}>
                <section id="problem-detail-header" className="shadow-bottom">
                    <div className="bg-white">
                        <Container className="pt-3 pb-1">
                            <Row className="align-items-center">
                                <Col md="8">
                                    <div>
                                        <h3>{problem?.name}</h3>
                                        <div className="text-white">
                                            <Badge color="success">Kolay</Badge>
                                            {" "}
                                            <Badge color="warning">Skor: <strong>40</strong></Badge>
                                        </div>
                                        <hr />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
                <section>
                    <Container>
                        <Row>
                            <Col md="8">
                                <Nav
                                    className="nav-fill flex-column flex-md-row"
                                    id="tabs-icons-text"
                                    pills
                                    role="tablist"
                                >
                                    <Tab index={1}>GENEL BAKIŞ</Tab>
                                    <Tab index={2}>KODUN</Tab>
                                    <Tab index={3}>KULLANICI ÇÖZÜMLERİ</Tab>
                                </Nav>
                                <Card className="border-0">
                                    <CardBody>
                                        <TabContent activeTab={"plainTabs" + activeTab}>
                                            <TabPane tabId="plainTabs1">
                                                <section id="problem-desc">
                                                    <div className="problem-description">
                                                        <div>
                                                            <div className="problem-content">
                                                                <h2>Problem</h2>
                                                                <div dangerouslySetInnerHTML={{__html: problem?.description}}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </section>
                                            <div className="my-4">
                                                <Link to="/editor" className="btn btn-danger">Editorü Aç</Link>
                                            </div>
                                        </TabPane>
                                        <TabPane tabId="plainTabs2">
                                            <p className="description">
                                                Eğer kullanıcı problemi çözmüş ise kullanıcının yazdığı kod burada gösterilecek.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="plainTabs3">
                                            <p className="description">
                                                Farklı kullanıcıların çözümleri burada gösterilecek.
                                            </p>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                </section>
            </LoaderSpinner>

        </div >
    )
}

export default React.memo(ProblemDetailPage)