import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import ReactSyntaxHighlighter from 'react-syntax-highlighter'
import { hopscotch } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Badge, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import LoaderSpinner from '../../components/spinners/LoaderSpinner'

const ContestUserResult = () => {
    const [activeTab, setActiveTab] = useState(1)
    const { id } = useParams()
    const { user } = useSelector(state => state.auth)
    const { contestant } = useSelector(state => state.contest)

    const Tab = ({ index, children }) => {
        return (
            <NavItem className="mb-3">
                <NavLink
                    aria-selected={activeTab === index}
                    onClick={e => setActiveTab(index)}
                    href="#"
                    role="tab"
                    className={"nav-warning rounded " + (activeTab === index ? " active" : "")}
                >
                    {children}
                </NavLink>
            </NavItem>
        )
    }

    console.log(contestant)

    return (
        <div className='my-5 py-5'>
            <Badge color='success' className='d-block my-5 text-center text-white' style={{ fontSize: 20 }}>Tebrİkler yarışmayı tamamladın</Badge>
            <LoaderSpinner loading={!contestant}>
                <Container>
                    <div className='text-center my-4'>
                        <Badge>Tamamlama Süresi: <strong>{(contestant?.endTime/1000)?.toClock() || "hh:mm:ss"}</strong></Badge>
                        <br />
                        <Badge color='warning'>Toplam Puan: <strong>{contestant?.totalScore ?? "10"}</strong></Badge>
                    </div>
                    <Row className='shadow'>
                        <Col md="4" className='card py-3'>
                            <div className='mb-4'>Soru Seçiniz</div>
                            <Nav vertical>
                                {contestant?.solutions.map((solution, index) => (
                                    <Tab index={index}>{solution?.problem?.name}</Tab>
                                ))}
                            </Nav>
                        </Col>
                        <Col md="8">
                            <TabContent activeTab={activeTab}>
                                {contestant?.solutions?.map((solution, index) => (
                                    <TabPane tabId={index}>
                                        <div className='card-body'>
                                            <div>
                                                <h5 className='card-title text-center'>{solution.problem?.name}</h5>
                                                <hr />
                                                <div>
                                                    <Badge color='success'>Doğru Çıktı Sayısı: <strong>{solution.codeTest?.rate?.correct}</strong></Badge>
                                                    <br />
                                                    <Badge color='danger'>Yanlış Çıktı Sayısı: <strong>{solution.codeTest?.rate?.wrong}</strong></Badge>
                                                </div>
                                                <hr />
                                                <div>
                                                    <strong>Puan: </strong> {solution?.score ?? 1}
                                                </div>
                                            </div>
                                            <hr />
                                            <div>
                                                <ReactSyntaxHighlighter showLineNumbers language="javascript" style={hopscotch}>
                                                    {solution.codeTest?.code}
                                                </ReactSyntaxHighlighter>
                                            </div>
                                        </div>
                                    </TabPane>
                                ))}
                            </TabContent>
                        </Col>
                    </Row>
                </Container>
            </LoaderSpinner>
        </div>
    )
}

export default ContestUserResult