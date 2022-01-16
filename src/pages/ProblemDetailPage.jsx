import React from "react"
import Button from "../components/buttons/Button"

const ProblemDetailPage = () => {
    return (
        <div>
            <section id="problem-detail-header" className="shadow-bottom">
                <div className="bg-white">
                    <div className="container pt-5 pb-1">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <div>
                                    <h3>Problem Başlığı</h3>
                                    <div>
                                        <span className="badge bg-green me-2">Kolay</span>
                                        <span className="badge bg-orange ms-2">Skor: <strong>40</strong></span>
                                    </div>
                                    <div className="pt-3">
                                        <Button className="btn-sec me-1 active">Genel Bakış</Button>
                                        <Button className="btn-sec mx-1">Kodun</Button>
                                        <Button className="btn-sec mx-1">Kullanıcı Çözümleri</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-end">
                                <div>
                                    <Button className="btn-orange">Editörü Aç</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="problem-desc">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="problem-description">
                                <div className="p-5">
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
                        </div>
                        <div className="col-md-4">

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default React.memo(ProblemDetailPage)