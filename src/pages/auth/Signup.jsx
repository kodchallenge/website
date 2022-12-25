import { Formik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import {} from 'react-router'
import {
    Button,
    Card, CardBody, CardHeader, Col, Form, FormGroup, Input, InputGroup,
    InputGroupText, Row
} from "reactstrap";
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import Brand from '../../components/Brand';
import KodInput from '../../components/UI/KodInput';
import authService from '../../services/auth.service';

const Signup = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const initialFormValues = {
        fullname: "",
        username: "",
        password: "",
        email: "",
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Eposta zorunlu").email("Eposta adresi zorunlu"),
        password: Yup.string().required("Şifre Zorunlu").min(6, "Şifre en az 6 haneli olmalıdır"),
        username: Yup.string().required("Kullanıcı adı zorunlu").min(3, "Kullanıcı adı en az 3 haneli olmalıdır").max(16, "Kullanıcı adı en fazla 16 haneli olmalıdır")
    })

    const handleSignup = (values) => {
        setLoading(true)
        authService.signup(values).then(res => {
            Swal.fire({
                title: "Başarılı",
                text: res.data.message,
                icon: "success",
            }).then(result => {
                navigate("/auth/check-mail")
            })
        }).catch(err => {
            Swal.fire({
                title: "Hata",
                text: err.response.data.message,
                icon: "error",
            })
        }).finally(() => {
            setLoading(false)
        })
    }
    return (
        <main>
            <h3 className='auth-title'>Kayıt Ol 🥳</h3>
            <Card className="auth-card">
                <CardBody className="px-lg-5 py-lg-5">
                    <Formik
                        initialValues={initialFormValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSignup}
                    >
                        {props => (
                            <Form role="form">
                                <FormGroup className='d-flex flex-column'>
                                    <KodInput name='username' onChange={props.handleChange} placeholder="Kullanıcı Adı" type="text" max={16} min={6} />
                                    <KodInput name="email" onChange={props.handleChange} placeholder="Email" type="email" />
                                    <KodInput name="password" onChange={props.handleChange} placeholder="Şifre" type="password" />
                                    <KodInput name="fullname" onChange={props.handleChange} placeholder="Ad Soyad (Opsiyonel)" type="text" />
                                </FormGroup>
                                <div className='text-danger error-messages'>
                                    <p>{props.errors.username}</p>
                                    <p>{props.errors.email}</p>
                                    <p>{props.errors.password}</p>
                                </div>
                                <Row className="my-4">
                                    <Col xs="12">
                                        <div className="custom-control custom-control-alternative custom-checkbox">
                                            <input
                                                className="custom-control-input"
                                                id="customCheckRegister"
                                                type="checkbox"
                                            />
                                            <label
                                                className="custom-control-label"
                                                htmlFor="customCheckRegister"
                                            >
                                                <span>
                                                    <a href="/privacy-policy" target="_blank"> Gizlilik politakasını</a>
                                                    {" "} kabul ediyorum.
                                                </span>
                                            </label>
                                        </div>
                                    </Col>
                                </Row>

                                <div className="text-center">
                                    <Button
                                        className="mt-4"
                                        color="primary"
                                        type="button"
                                        onClick={props.handleSubmit}
                                    >
                                        {!loading ? "Hesap Oluştur" : "Hesap Oluşturuluyor..."}
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </CardBody>
            </Card>
        </main>
    )
}

export default React.memo(Signup)