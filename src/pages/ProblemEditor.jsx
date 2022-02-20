import React from "react";
import { Link } from "react-router-dom";
import SplitPane from "react-split-pane";
import { Col, Container, Navbar, Row, NavLink, UncontrolledTooltip, NavItem, Nav, Button, Card, CardBody } from "reactstrap";
import Compiler from "../components/compiler/Compiler";
const ProblemEditor = () => {

    //region problem description
    const SplitProblemDesc = React.useMemo(() => {
        return (
            <div className="px-3 w-100 desc">
                <div className="problem-content">
                    <h2>Problem</h2>
                    Toplamın karesi ile ilk N doğal sayının karelerinin toplamı arasındaki farkı bulun.<br />

                    İlk on doğal sayının toplamının karesi (1 + 2 + ... + 10)² = 55² = 3025'tir.<br />

                    İlk on doğal sayının kareleri toplamı 1² + 2² + ... + 10² = 385'tir.<br />

                    Dolayısıyla ilk on doğal sayının toplamının karesi ile ilk on doğal sayının karelerinin toplamı arasındaki fark 3025 - 385 = 2640'tır.<br />
                    <h2>Problem</h2>
                    Toplamın karesi ile ilk N doğal sayının karelerinin toplamı arasındaki farkı bulun.<br />

                    İlk on doğal sayının toplamının karesi (1 + 2 + ... + 10)² = 55² = 3025'tir.<br />

                    İlk on doğal sayının kareleri toplamı 1² + 2² + ... + 10² = 385'tir.<br />

                    Dolayısıyla ilk on doğal sayının toplamının karesi ile ilk on doğal sayının karelerinin toplamı arasındaki fark 3025 - 385 = 2640'tır.<br />
                    <h2>Problem</h2>
                    Toplamın karesi ile ilk N doğal sayının karelerinin toplamı arasındaki farkı bulun.<br />

                    İlk on doğal sayının toplamının karesi (1 + 2 + ... + 10)² = 55² = 3025'tir.<br />

                    İlk on doğal sayının kareleri toplamı 1² + 2² + ... + 10² = 385'tir.<br />

                    Dolayısıyla ilk on doğal sayının toplamının karesi ile ilk on doğal sayının karelerinin toplamı arasındaki fark 3025 - 385 = 2640'tır.<br />
                    <h2>Problem</h2>
                    Toplamın karesi ile ilk N doğal sayının karelerinin toplamı arasındaki farkı bulun.<br />

                    İlk on doğal sayının toplamının karesi (1 + 2 + ... + 10)² = 55² = 3025'tir.<br />

                    İlk on doğal sayının kareleri toplamı 1² + 2² + ... + 10² = 385'tir.<br />

                    Dolayısıyla ilk on doğal sayının toplamının karesi ile ilk on doğal sayının karelerinin toplamı arasındaki fark 3025 - 385 = 2640'tır.<br />
                    <h2>Problem</h2>
                    Toplamın karesi ile ilk N doğal sayının karelerinin toplamı arasındaki farkı bulun.<br />

                    İlk on doğal sayının toplamının karesi (1 + 2 + ... + 10)² = 55² = 3025'tir.<br />

                    İlk on doğal sayının kareleri toplamı 1² + 2² + ... + 10² = 385'tir.<br />

                    Dolayısıyla ilk on doğal sayının toplamının karesi ile ilk on doğal sayının karelerinin toplamı arasındaki fark 3025 - 385 = 2640'tır.<br />
                    <h2>Problem</h2>
                    Toplamın karesi ile ilk N doğal sayının karelerinin toplamı arasındaki farkı bulun.<br />

                    İlk on doğal sayının toplamının karesi (1 + 2 + ... + 10)² = 55² = 3025'tir.<br />

                    İlk on doğal sayının kareleri toplamı 1² + 2² + ... + 10² = 385'tir.<br />

                    Dolayısıyla ilk on doğal sayının toplamının karesi ile ilk on doğal sayının karelerinin toplamı arasındaki fark 3025 - 385 = 2640'tır.<br />
                    <h2>Problem</h2>
                    Toplamın karesi ile ilk N doğal sayının karelerinin toplamı arasındaki farkı bulun.<br />

                    İlk on doğal sayının toplamının karesi (1 + 2 + ... + 10)² = 55² = 3025'tir.<br />

                    İlk on doğal sayının kareleri toplamı 1² + 2² + ... + 10² = 385'tir.<br />

                    Dolayısıyla ilk on doğal sayının toplamının karesi ile ilk on doğal sayının karelerinin toplamı arasındaki fark 3025 - 385 = 2640'tır.<br />
                    <h2>Problem</h2>
                    Toplamın karesi ile ilk N doğal sayının karelerinin toplamı arasındaki farkı bulun.<br />

                    İlk on doğal sayının toplamının karesi (1 + 2 + ... + 10)² = 55² = 3025'tir.<br />

                    İlk on doğal sayının kareleri toplamı 1² + 2² + ... + 10² = 385'tir.<br />

                    Dolayısıyla ilk on doğal sayının toplamının karesi ile ilk on doğal sayının karelerinin toplamı arasındaki fark 3025 - 385 = 2640'tır.<br />
                    <h2>Problem</h2>
                    Toplamın karesi ile ilk N doğal sayının karelerinin toplamı arasındaki farkı bulun.<br />

                    İlk on doğal sayının toplamının karesi (1 + 2 + ... + 10)² = 55² = 3025'tir.<br />

                    İlk on doğal sayının kareleri toplamı 1² + 2² + ... + 10² = 385'tir.<br />

                    Dolayısıyla ilk on doğal sayının toplamının karesi ile ilk on doğal sayının karelerinin toplamı arasındaki fark 3025 - 385 = 2640'tır.<br />
                    <h2>Problem</h2>
                    Toplamın karesi ile ilk N doğal sayının karelerinin toplamı arasındaki farkı bulun.<br />

                    İlk on doğal sayının toplamının karesi (1 + 2 + ... + 10)² = 55² = 3025'tir.<br />

                    İlk on doğal sayının kareleri toplamı 1² + 2² + ... + 10² = 385'tir.<br />

                    Dolayısıyla ilk on doğal sayının toplamının karesi ile ilk on doğal sayının karelerinin toplamı arasındaki fark 3025 - 385 = 2640'tır.<br />
                    <h2>Problem</h2>
                    Toplamın karesi ile ilk N doğal sayının karelerinin toplamı arasındaki farkı bulun.<br />

                    İlk on doğal sayının toplamının karesi (1 + 2 + ... + 10)² = 55² = 3025'tir.<br />

                    İlk on doğal sayının kareleri toplamı 1² + 2² + ... + 10² = 385'tir.<br />

                    Dolayısıyla ilk on doğal sayının toplamının karesi ile ilk on doğal sayının karelerinin toplamı arasındaki fark 3025 - 385 = 2640'tır.<br />
                    <h2>Problem</h2>
                    Toplamın karesi ile ilk N doğal sayının karelerinin toplamı arasındaki farkı bulun.<br />

                    İlk on doğal sayının toplamının karesi (1 + 2 + ... + 10)² = 55² = 3025'tir.<br />

                    İlk on doğal sayının kareleri toplamı 1² + 2² + ... + 10² = 385'tir.<br />

                    Dolayısıyla ilk on doğal sayının toplamının karesi ile ilk on doğal sayının karelerinin toplamı arasındaki fark 3025 - 385 = 2640'tır.<br />
                    <h2>Problem</h2>
                    Toplamın karesi ile ilk N doğal sayının karelerinin toplamı arasındaki farkı bulun.<br />

                    İlk on doğal sayının toplamının karesi (1 + 2 + ... + 10)² = 55² = 3025'tir.<br />

                    İlk on doğal sayının kareleri toplamı 1² + 2² + ... + 10² = 385'tir.<br />

                    Dolayısıyla ilk on doğal sayının toplamının karesi ile ilk on doğal sayının karelerinin toplamı arasındaki fark 3025 - 385 = 2640'tır.<br />
                    <h2>Problem</h2>
                    Toplamın karesi ile ilk N doğal sayının karelerinin toplamı arasındaki farkı bulun.<br />

                    İlk on doğal sayının toplamının karesi (1 + 2 + ... + 10)² = 55² = 3025'tir.<br />

                    İlk on doğal sayının kareleri toplamı 1² + 2² + ... + 10² = 385'tir.<br />

                    Dolayısıyla ilk on doğal sayının toplamının karesi ile ilk on doğal sayının karelerinin toplamı arasındaki fark 3025 - 385 = 2640'tır.<br />
                </div>
            </div>
        )
    }, [])
    //end region

    return (
        <div id="problem-editor" className="fullscreen">
            <div className="py-2 text-light" style={{background: "#1a1d21"}}>
                <div className="mx-4">
                    <Row className="align-items-center">
                        <Col xs="4" className="">
                            <NavLink>
                                <Link to="/problem/1" className="text-light">
                                    <i class="fa fa-arrow-left mr-2"></i>
                                    Geri Dön
                                </Link>
                            </NavLink>
                        </Col>
                        <Col xs="4" className="text-center ">
                            Problem Başlığı
                        </Col>
                        <Col xs="4" className="text-right">
                            <Button className="btn-icon p-0" color="transparent">
                                <span className="btn-inner--icon text-light">
                                    <i class="fa fa-cog" aria-hidden="true"></i>
                                </span>
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
            <section id="editor">
                <Row>
                    <Col sm="6">
                        {SplitProblemDesc}
                    </Col>
                    <Col sm="6">
                        <Compiler />
                    </Col>
                </Row>
            </section>
            {/* <div>
                <div className="editor-navbar">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="editor-back">
                            Geri Dön
                        </div>
                        <div className="editor-paraf">
                            Algoritma / İki Sayının Toplamı
                        </div>
                        <div className="editor-setting">
                            Ayarlar
                        </div>
                    </div>
                </div>

            </div> */}
        </div>
    )
}

export default React.memo(ProblemEditor)