import React from 'react'
import { Container } from 'reactstrap'

function AboutPage() {
    return (
        <div className='pt-5 mt-5'>
            <Container>
                <p>Merhabalar ben Yasin.
                Ankara Üniversitesi Bilgisayar Mühendisliği son sınıf öğrencisiyim. 
                <b>www.kodchallenge.com</b> sitesini bitirme projem olarak geliştirmekteyim. </p>
                <br />

                <p>Programlama ile ilgilenen insanların Türkçe Programlama soruları bulamama sorununu gidermek için geliştirilmiştir. </p>
                <p>Site içerisinde Programlama soruları bulunmaktadır. Sorular kategorilere ayrılıp ( Algoritma, Veri Yapıları, C, C++ vs) kullanıcıların kategori bazlı soru bulması hedeflenmiştir. </p>

                <p>Ayrıca site içerisinde Yarışma, Etkinlik gibi alt başlıklarda vardır. Gold Üyeliğe sahip herhangi bir kullanıcı etkinlik, Yarışma başlatabilir. </p>
                <p>Herkese açık olarak paylaşılan yarışma ve etkinliğe site içerisindeki tüm kullanıcılar ücretsiz katılabilir. </p>
                <p>Yarışmalar ödüllü olmaktadır. Kullanıcıların belli bir sürede bir test yapması hedeflenir. En yüksek puana sahip kullanıcı ödül sahibi olur. </p>

                <p>Etkinlikler, Meydan okumalar(Challenge) programlama öğrenen, bu alanda farklı şeyler deneyimlemek isteyen kişiler için geliştirilmiştir. </p>
                <p>Etkinlikler sayesinde geliştiricilerin hem farklı konular öğrenmesini hemde eğlenmesi amaçlanmıştır. </p>

                <p>Ayrıca şirketlerin işe alım süreci olan programming case süreci platform içerisinde yapılabilir. </p>
                <p>Programming Case; programlama alanındaki işe alım yaparken, iş başvurusu yapan kullanıcıların programlama becerilerini ölçen bir süreç. </p>
                <p>Bu süreçler yabancı siteler üzerinden gerçekleşmekte ve İngilizce olarak yapılmakta. KodChallenge bu süreci tamamen Türkçeleştirip insanlara sunmayı amaçlamıştır. </p>
                <p>Şirketler platform üzerinden kendi sorularını veya sistem havuzunda yer alan sorulardan test oluşturur. Belli bir süre verilir. Başvuru yapan insanların o süre içerisinde testi yapması beklenir. </p>
                <p>Bu süreç ücretsiz değildir. Üyelik satın alımı yapan şirketler bu süreci başlatabilir. </p>

                <p>KodChallenge Türk geliştiriciler için geliştirilmiş, Türkçe Kaynak olarak sunulmuş bir platformdur. </p>
                <p>Platform içerisinde yer alan bir diğer önemli başlık ise Projeler başlığıdır. </p>
                <p>Kullanıcılar geliştirdikleri projeleri diğer kullanıcılara tanıtmak, ve kendilerine ekip arkadaşı (Github contributor mantığı) bulmasını sağlamaktadır. </p>
                <p>Bu sayede yaptıkları projeleri tanıtabilir, geliştirme süreci devam eden projeler için ekip arkadaşı bulabilirler. </p>
                <p>Bu süreci yapabilmeleri için Github hesabını bağlamak ve proje reposu public olmak zorundadır. </p>
                <p>KodChallenge Open Source projelere önem vermektedir. </p>
            </Container>
        </div>
    )
}

export default AboutPage