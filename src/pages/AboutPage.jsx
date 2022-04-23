import React from 'react'
import { Container } from 'reactstrap'

function AboutPage() {
    return (
        <div className='pt-5 mt-5'>
            <Container>
                <h3>Selam Ben Yasin</h3>
                <p>
                    Bilgisayar Mühendisliği 4. Sınıf öğrencisiyim. <br />
                    Kurumsal bir firmada Bilgisayar Mühendisliği olarak çalışıyorum.<br />
                    Kariyerimi Web alanında geliştiriyorum.
                </p>
                <br />
                <h4>Bu site hakkında</h4>
                <p>
                    Bu siteyi bahar dönemi bitirme projem olarak geliştiriyorum. <br />
                    Kodlama öğrenmek isteyen insanların <strong>Türkçe problem bulamama</strong> sorunu giderebilmek için bu projeyi yapıyorum.< br />
                    Yeni kodlamaya başlayan insanların <strong>online Türkçe soru</strong> çözebileceği bir platform oluşturuyorum. <br />
                    Site içerisinde yarışmalar ve etkinlikler düzenleme imkanı oluşturacağım. <br />
                    Bunun haricinde şirketlerin kod case oluşturabileceği bunları iş başvurusu yapanlarla paylaşabileceği bir platform hazırlayacağım.<br />
                    Ayrıca blog yazıları ve forum tarzında kullanıcıların birbiri ile iletişim kurabileceği bir sistem hazırlayacağım. <br />
                </p>
                <div className='pt-4'>
                    <h3>Projede Kullanılan Teknolojiler Ve Yöntemler</h3>
                    <ul className="text-left">
                        <li>
                            <strong>İş Takibi: </strong> Trello
                        </li>
                        <li>
                            <strong>Proje yönetimi: </strong> Github
                        </li>
                        <li>
                            <strong>Frontend: </strong> React - Scss
                        </li>
                        <li>
                            <strong>Backend: </strong> Nodejs - Express
                        </li>
                        <li>
                            <strong>Veritabanı: </strong> Mongodb - NoSql
                        </li>
                        <li>
                            <strong>Code Compiler: </strong> Nodejs
                        </li>
                        <li>
                            <strong>Code Editor: </strong> React - Monaco
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default AboutPage