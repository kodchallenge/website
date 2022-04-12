import { Formik } from 'formik';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Card, CardBody, CardHeader, Col, Form, FormGroup, Input, InputGroup,
    InputGroupText, Row
} from "reactstrap";
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import Brand from '../../components/Brand';
import authService from '../../services/auth.service';

const Signup = () => {
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
            <div className='mb-4 text-center'>
                <a href="/">
                    <Brand Type='h3' bold/>
                </a>
            </div>
            <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-white pb-5">
                    <div className="text-muted text-center mb-3">
                        <small>Üye ol</small>
                    </div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                    <Formik
                        initialValues={initialFormValues}
                        validationSchema= {validationSchema}
                        onSubmit={handleSignup}
                    >
                        {props => (
                        <Form role="form">
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupText>
                                        <i class="fa fa-solid fa-user"></i>
                                    </InputGroupText>
                                    <Input name='username' onChange={props.handleChange} placeholder="Kullanıcı Adı" type="text" max={16} min={6} />
                                </InputGroup>

                                <InputGroup>
                                    <InputGroupText>
                                        <i class="fa fa-solid fa-envelope"></i>
                                    </InputGroupText>
                                    <Input name="email" onChange={props.handleChange} placeholder="Email" type="email" />
                                </InputGroup>

                                <InputGroup>
                                    <InputGroupText>
                                        <i class="fa fa-solid fa-lock"></i>
                                    </InputGroupText>
                                    <Input name="password" onChange={props.handleChange} placeholder="Şifre" type="password" />
                                </InputGroup>

                                <InputGroup>
                                    <InputGroupText>
                                        <i class="fa fa-solid fa-user"></i>
                                    </InputGroupText>
                                    <Input name="fullname" onChange={props.handleChange} placeholder="Ad Soyad (Opsiyonel)" type="text" />
                                </InputGroup>
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
                    <p className='mt-4'>
                        Hesabın var mı? O halde <Link to="/auth/signin">Giriş Yap</Link>
                    </p>
                </CardBody>
            </Card>
        </main>
    )
}

export default React.memo(Signup)