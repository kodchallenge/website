import React from 'react'
import { Container } from 'reactstrap'

function AboutPage() {
    return (
        <div className='text-center p-5 m-5'>
            <Container>
                <h3>Selam Ben Yasin</h3>
                <p>
                    Bilgisayar Mühendisliği 4. Sınıf öğrencisiyim. <br />
                    İmPark şirketinde Bilgisayar Mühendisliği olarak çalışıyorum.<br />
                    Kariyerimi Web alanında geliştiriyorum.
                </p>
                <br />
                <h4>Bu site hakkında</h4>
                <p>
                    Bu siteyi bahar dönemi bitirme projem olarak geliştiriyorum. <br />
                    Kodlama öğrenmek isteyen insanların <strong>Türkçe problem bulamama</strong> sorunu giderebilmek için bu projeyi yapıyorum.< br />
                    Yeni kodlamaya başlayan insanların <strong>online Türkçe soru</strong> çözebileceği bir platform oluşturuyorum. <br />
                    Site içerisinde yarışmalar, etkinlikler düzenleme imkanı oluşturacağım. <br />
                    Ayrıca blog yazıları ve forum tarzında kullanıcıların birbiri ile iletişim kurabileceği bir sistem hazırlayacağım. <br />
                </p>
                <div className='pt-4 w-50 m-auto'>
                    <h3>Projede Kullanılan Teknolojiler Ve Yöntemler</h3>
                    <ul className="text-left">
                        <li>
                            <strong>İş Takibi: </strong> Trello
                        </li>
                        <li>
                            <strong>Proje yönetimi: </strong> Github
                        </li>
                        <li>
                            <strong>Frontend: </strong> React
                        </li>
                        <li>
                            <strong>Backend: </strong> .Net 5 C# WebAPI
                        </li>
                        <li>
                            <strong>Veritabanı: </strong> Sql Server (MSSQL)
                        </li>
                        <li>
                            <strong>Code Compiler: </strong> PHP
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default AboutPage