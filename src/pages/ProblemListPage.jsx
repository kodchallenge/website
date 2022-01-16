import React, { useEffect, useState } from "react";
import Button from "../components/buttons/Button";
import ProblemService from "../services/problem.service";

const ProblemListPage = () => {
    const [problems, setProblems] = useState([])

    useEffect(() => {
        const problemService = new ProblemService()
        problemService.getByTrackId(1).then(res => {
            console.log(res)
            setProblems(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <section id="problem-header" className="shadow-bottom">
                <div className="bg-white">
                    <div className="container py-5">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <div>
                                    <div className="d-flex align-items-center">
                                        <img src="https://dg8krxphbh767.cloudfront.net/tracks/cpp.svg" className="img img-fluid track-icon " width={50} height={50} />
                                        <h2 className="my-0 ms-3 fw-bold">Algoritma</h2>
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-end">
                                <span className="badge bg-orange shadow fs-4">
                                    Skorun: <strong>50</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="problem-list" className="mt-5">
                <div className="container">
                    <div>
                        <h4>Tüm Problemler</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            {/* PROBLEM CARD */}
                            {problems.map(problem => (
                                <div className="problem-card">
                                    <div className="row p-3 align-items-center">
                                        <div className="col-md-9">
                                            <h3>{problem.name}</h3>
                                            <div>
                                                <span className="badge bg-green me-2">Kolay</span>
                                                <span className="badge bg-orange ms-2">Skor: <strong>40</strong></span>
                                            </div>
                                            <div className="mt-3">
                                                Başarı Oranı: 86%
                                            </div>
                                        </div>
                                        <div className="col-md-3 text-end">
                                            <Button className="btn-orange">Problemi Çöz</Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* <div className="problem-card">
                                <div className="row p-3 align-items-center">
                                    <div className="col-md-9">
                                        <h3>String Ters Çevirme</h3>
                                        <div>
                                            <span className="badge bg-light-blue me-2">Orta</span>
                                            <span className="badge bg-orange ms-2">Skor: <strong>60</strong></span>
                                        </div>
                                        <div className="mt-3">
                                            Başarı Oranı: 74%
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-end">
                                        <Button className="btn-orange">Problemi Çöz</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="problem-card">
                                <div className="row p-3 align-items-center">
                                    <div className="col-md-9">
                                        <h3>İkili Arama Ağacı (Binary Search Tree)</h3>
                                        <div>
                                            <span className="badge bg-purple me-2">Zor</span>
                                            <span className="badge bg-orange ms-2">Skor: <strong>100</strong></span>
                                        </div>
                                        <div className="mt-3">
                                            Başarı Oranı: 48%
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-end">
                                        <Button className="btn-orange">Problemi Çöz</Button>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        {/* EN İYİLER LİSTESİ */}
                        <div className="col-md-4">
                            <div className="ms-1">
                                <div className="leader-board">
                                    <h3 className="text-center fw-bold">Bu Bölümün Yıldızları</h3>
                                    <div className="mt-3">
                                        <ul>
                                            <li className="d-flex align-items-center">
                                                <h3 className="fw-bold">1.</h3>
                                                <div className="ms-4 d-flex justify-content-evesnly w-100">
                                                    <div>
                                                        <img className="img img-fluid rounded-circle" src="https://secure.gravatar.com/avatar/9352a4edb0ff0fe8577676b7a063c671?s=500" width={60} height={60}/>
                                                    </div>
                                                    <div className="ms-3">
                                                        <h4>Yasin T.</h4>
                                                        <p>Skor: <strong>3750</strong></p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <h3 className="fw-bold">2.</h3>
                                                <div className="ms-3 d-flex justify-content-evesnly w-100">
                                                    <div>
                                                        <img className="img img-fluid rounded-circle" src="https://secure.gravatar.com/avatar/9352a4edb0ff0fe8577676b7a063c671?s=500" width={60} height={60}/>
                                                    </div>
                                                    <div className="ms-3">
                                                        <h4>ABC</h4>
                                                        <p>Skor: <strong>2460</strong></p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <h3 className="fw-bold">3.</h3>
                                                <div className="ms-3 d-flex justify-content-evesnly w-100">
                                                    <div>
                                                        <img className="img img-fluid rounded-circle" src="https://secure.gravatar.com/avatar/9352a4edb0ff0fe8577676b7a063c671?s=500" width={60} height={60}/>
                                                    </div>
                                                    <div className="ms-3">
                                                        <h4>Kaptan Amerikaaa</h4>
                                                        <p>Skor: <strong>1200</strong></p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default React.memo(ProblemListPage)