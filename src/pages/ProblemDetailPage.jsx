import React, { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { hopscotch } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Badge, Button, Card, CardBody, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap"
import rehypeRaw from "rehype-raw"
import LoaderSpinner from "../components/spinners/LoaderSpinner"
import useService from "../hooks/useService"
import ProblemSolutionService from "../services/problemSolution.service"
import { SetProblem } from "../store/actions/problemActions"
const ProblemDetailPage = () => {
    const [problem, setProblem] = useState(null)
    const problemState = useSelector(state  => state.problem)
    const auth = useSelector(state => state.auth)
    const [loading, setLoading] = useState(true)
    const [activeTab, setActiveTab] = useState(1)
    const {problemName} = useParams()
    const dispatch = useDispatch()
    
    const problemId = problemName?.split("-")[1]

    const [problemSolution] = useService(new ProblemSolutionService().getUserSolutionByProblem.bind(null, auth.user?._id, problemId))
    const [otherSolutions] = useService(new ProblemSolutionService().getProblemSolutions.bind(null, problemId))

    useEffect(() => {
        if(!problemState.selectProblem || problemState.selectProblem._id !== problemId) {
            dispatch(SetProblem(problemId))
        } else {
            setProblem(problemState.selectProblem)
            setLoading(false)
        }
    }, [problemState.selectProblem])

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

    if(!problemId) {
        window.location.pathname = "/"
        return;
    }

    return (
        <LoaderSpinner loading={loading} style={{padding: "100px"}}>
            <div>
                <section id="problem-detail-header" className="shadow-bottom">
                    <div className="bg-white">
                        <div className="container pt-5 pb-1">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <div>
                                        <h3>
                                            <Link to={"/tracks/"+problem?.track?.slug}>{problem?.track?.name}</Link>
                                            {" "} / {problem?.name}
                                        </h3>
                                        <div className="text-white">
                                            <Badge color="success">{problem?.difficulty ?? "Kolay"}</Badge>
                                            {" "}
                                            <Badge color="warning">Skor: <strong>{problem?.score ?? "0"}</strong></Badge>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                                                <ReactMarkdown
                                                                    children={problem?.description}
                                                                    rehypePlugins={[rehypeRaw]}
                                                                />
                                                                {/* <div dangerouslySetInnerHTML={{__html: problem?.description}}/> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                            </section>
                                            <div className="my-4">
                                                {!problemSolution ? (
                                                    <Link to={`/editor?problem=${problem?._id}`} className="btn btn-danger">Editorü Aç</Link>
                                                ) : (
                                                    <Button disabled color="secondary">Bu problemi çözdünüz</Button>
                                                )}
                                            </div>
                                        </TabPane>
                                        <TabPane tabId="plainTabs2">
                                            <p className="description">
                                                {!problemSolution ? (
                                                    <p>Problemi çözmediniz</p>
                                                ) : (
                                                    <SyntaxHighlighter language="javascript" style={hopscotch}>
                                                        {problemSolution.codeTest?.code}
                                                    </SyntaxHighlighter>
                                                )}
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="plainTabs3">
                                            <p className="description">
                                                {!otherSolutions ? (
                                                    <p>Diğer kullanıcıların çözümlerini görmek için öncelikle problemi çözmeniz gerekmektedir.</p>
                                                ) : (
                                                    <Row>
                                                        {otherSolutions.map(sol => (
                                                            <Col className="border mt-4 shadow px-4 py-2">
                                                                <Row className="align-items-center justify-content-between px-3">
                                                                    <div>
                                                                        <h4>{sol.user?.username}</h4>
                                                                        <p className="text-warning">Puan: {sol.score}</p>
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-muted">Tarih: {sol.createdAt.split("T")[0].toLongDate()}</p>
                                                                    </div>
                                                                </Row>
                                                                <SyntaxHighlighter language="javascript" style={hopscotch}>
                                                                    {sol.codeTest?.code}
                                                                </SyntaxHighlighter>
                                                            </Col>
                                                        ))}
                                                    </Row>
                                                )}
                                            </p>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            </div >       
        </LoaderSpinner>
    )
}

export default React.memo(ProblemDetailPage)