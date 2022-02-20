import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Badge, Button, Card, CardBody, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap"

const ProblemDetailPage = () => {
    const [activeTab, setActiveTab] = useState(1)

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
        <div>
            <section id="problem-detail-header" className="shadow-bottom">
                <div className="bg-white">
                    <div className="container pt-5 pb-1">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <div>
                                    <h3>Problem Başlığı</h3>
                                    <div className="text-white">
                                        <Badge color="success">Kolay</Badge>
                                        {" "}
                                        <Badge color="warning">Skor: <strong>40</strong></Badge>
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
                                                            Toplamın karesi ile ilk N doğal sayının karelerinin toplamı arasındaki farkı bulun.<br />

                                                            İlk on doğal sayının toplamının karesi (1 + 2 + ... + 10)² = 55² = 3025'tir.<br />

                                                            İlk on doğal sayının kareleri toplamı 1² + 2² + ... + 10² = 385'tir.<br />

                                                            Dolayısıyla ilk on doğal sayının toplamının karesi ile ilk on doğal sayının karelerinin toplamı arasındaki fark 3025 - 385 = 2640'tır.<br />

                                                            İlk ilkelerden buna etkili bir çözüm bulmanız beklenmez; araştırmaya izin verilir, hatta teşvik edilir. Problem için en iyi algoritmayı bulmak, yazılım mühendisliğinde önemli bir beceridir.<br />


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

        </div >
    )
}

export default React.memo(ProblemDetailPage)