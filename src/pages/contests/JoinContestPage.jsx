import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Alert, Badge, Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import Swal from 'sweetalert2'
import LoaderSpinner from '../../components/spinners/LoaderSpinner'
import ContestService from '../../services/contest.service'
import { setContestant, setContestTimer } from '../../store/actions/contestActions'
import ContestProblemList from './ContestProblemList'
import CookieService from '../../services/cookie.service'
import { CookieTypes } from '../../constants'
import { Link } from 'react-router-dom'
import ContestUserResult from './ContestUserResult'

const contestService = new ContestService()

const JoinContestPage = () => {
    const { id } = useParams()
    const { contests, contestant } = useSelector(state => state.contest)
    const { user } = useSelector(state => state.auth)
    const [contest, setContest] = useState(null)
    // const [contestant, setContestant] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!id) {
            window.location.pathname = "/"
        }
        if(!contestant) {
            contestService.getContestant(user?._id, id).then(res => {
                if (res.data.success) {
                    dispatch(setContestant(res.data.data))
                    CookieService.set(CookieTypes.CONTESTANT, res.data.data)
                }
            })
        }
        if (!contests) {
            contestService.getContestById(id).then(res => {
                dispatch(setContest(res.data.data))
                setContest(res.data.data)
                dispatch(setContestTimer(res.data.data?.startDate))
            })
        } else {
            setContest(contests.find(contest => contest._id === id))
        }
    }, [])

    const handleStartContest = () => {
        Swal.fire({ title: "Emin misin?", text: "Yarışmayı başlatmak istediğinize emin misiniz?", icon: "warning", showCancelButton: true, confirmButtonColor: "#3085d6", cancelButtonColor: "#d33", confirmButtonText: "Evet, başlat!" })
            .then((result) => {
                if (result.isConfirmed && user && contest) {
                    contestService.startContest({ user: user._id, contest: contest._id }).then(res => {
                        window.location.reload()
                    })
                }
            })
    }

    const handleFinishContest = () => {
        Swal.fire({ title: "Uyarı", text: "Yarışmayı bitirmek istediğinize emin misiniz?", icon: "warning", showCancelButton: true, confirmButtonText: "Evet, Bitir!" })
            .then((result) => {
                if (result.isConfirmed && user && contest) {
                    contestService.finishContest({ user: user._id, contest: contest._id }).then(res => {
                        window.location.reload()
                    })
                }
            })
    }

    const JoinContent = () => {
        switch (contestant?.state) {
            case "starting":
                return (
                    <div>
                        <ContestProblemList clock={contest?.startDate} problems={contest?.problems} />
                        <div className='text-center'>
                            <Button color='danger' className='my-5' onClick={handleFinishContest}>YARIŞMAYI BİTİR</Button>
                        </div>
                    </div>
                )
            case "finished":
                return (
                    <ContestUserResult />
                    // <div className='my-5 text-center'>
                    //     <Badge color='success' className='d-block text-white' style={{fontSize: 24}}>Tebrİkler yarışmayı tamamladın</Badge>
                    //     <Link to={""} className='btn btn-link'>SONUÇLAR İÇİN TIKLAYIN</Link>
                    // </div>
                )
            case "pending":
                return (
                    <Container>
                        <div>
                            <h2 className='mt-5 badge badge-danger' style={{ fontSize: 24 }}>KURALLAR VE GENEL BİLGİLER</h2>
                        </div>
                        <div className='my-4'>
                            <ul className='rules-list'>
                                <li>Yarışma boyunca interneti istediğiniz gibi kullanabilirsiniz. <Badge>Gerçek Hayat</Badge></li>
                                <li><strong>Süre bitse dahi yarışma devam etmektedir.</strong></li>
                                <li>Yarışmayı bitirmeden sekmeyi kapatmayınız.</li>
                                <li>İnternet kopması yaşamak, süre kaybından başka ek soruna neden olmaz.</li>
                                <li>Yarışmayı bitir butonuna basmadığınız sürece yarışmayı bitirmiş sayılmazsınız.</li>
                                <li>Yarışmayı bitirdikten sonra yarışmaya geri dönemezsiniz.</li>
                                <li>Tüm sorular aynı anda açabilirsiniz. Soruları tek tek test etmeniz ve göndermeniz beklenmektedir.</li>
                                <li>Editor sayfasında iken geri gelebilirsiniz.</li>
                                <li>Editor sayfasında iken sayfayı yenilemenizi önermiyoruz.</li>
                                <li><strong>Puan hesabı</strong>; soru puanı + ne kadar sürede çözdüğünüze göre hesaplanmaktadır.</li>
                                <li>Sonuçlar açıklandığında, <strong>aynı puana sahip</strong> kazananlar varsa ödül paylaştırılır.</li>
                                <li className='text-danger fw-bold'>Yarışmayı başlattığın anda sürende başlamış olacaktır.</li>
                            </ul>
                        </div>
                        <div className='mt-5'>
                            {!contest?.startDate?.datePassed() ? (
                                <div>
                                    <Alert color='danger'>
                                        <i class="fa fa-solid fa-diamond mr-2"></i>
                                        Yarışma Henüz Başlamadı.
                                        {/* Yarışmaya Katılmadın bu sebeple yarışmayı başlatamazsın! */}
                                    </Alert>
                                </div>
                            ) : (
                                <div>
                                    <div className='my-2'>
                                        <input type="checkbox" id="rules-checkbox" />
                                        <label for="rules-checkbox" className='mx-2 text-danger' style={{ userSelect: "none" }}>Kuralları okudum ve kabul ediyorum.</label>
                                    </div>
                                    <Button color='success' onClick={handleStartContest}>Yarışmayı Başlat</Button>
                                </div>
                            )}
                        </div>
                    </Container>
                )
            default:
                return (
                    <div className='text-center text-danger my-5'>Yarışmaya katılmadın</div>
                )
        }
    }
    console.log(contest)
    return (
        <div className='my-5 py-5'>
            <div className='my-5 text-center'>
                <h1 className='fw-bold'>{contest?.title}</h1>
                <div className='position-relative my-5'>
                    <div className='blur-bg' style={{backgroundImage: `url(${contest?.poster})`}}></div>
                    <img className='img-fluid rounded blur-front' src={contest?.poster} />
                </div>
            </div>
            <LoaderSpinner loading={!contestant}>
                <JoinContent />
            </LoaderSpinner>
        </div>
    )
}

export default JoinContestPage