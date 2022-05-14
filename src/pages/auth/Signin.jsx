import { Formik } from 'formik';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Badge,
    Button,
    Card, CardBody, CardHeader, Form, FormGroup, Input, InputGroup,
    InputGroupText
} from "reactstrap";
import * as Yup from 'yup';
import Brand from '../../components/Brand';
import useAuth from '../../hooks/useAuth';

const Signin = () => {
    const [loading, setLoading] = useState(false)
    const {handleSignin} = useAuth()
    const initialFormValues = {
        username: "",
        password: "",
    }

    const validationSchema = Yup.object().shape({
        password: Yup.string().required("Şifre Zorunlu"),
        username: Yup.string().required("Kullanıcı adı zorunlu").min(3, "Kullanıcı adı en az 3 haneli olmalıdır").max(16, "Kullanıcı adı en fazla 16 haneli olmalıdır")
    })

    const handleSigninClick = (values) => {
        setLoading(true)
        handleSignin(values, () => {
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
                        <small>Giriş Yap</small>
                    </div>
                    <div className="text-center">
                        <Button
                            className="btn-neutral btn-icon mr-4"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            <span className="btn-inner--icon mr-1">
                                <img
                                    alt="G"
                                    src={require("../../assets/img/icons/common/github.svg").default}
                                />
                            </span>
                            <span className="btn-inner--text">Github</span>
                            <br /><Badge>Yakında</Badge>
                        </Button>
                        <Button
                            className="btn-neutral btn-icon ml-1"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            <span className="btn-inner--icon mr-1">
                                <img
                                    alt="G"
                                    src={require("../../assets/img/icons/common/google.svg").default}
                                />
                            </span>
                            <span className="btn-inner--text">Google</span>
                            <br /><Badge>Yakında</Badge>
                        </Button>
                    </div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                    <Formik
                        initialValues={initialFormValues}
                        validationSchema= {validationSchema}
                        onSubmit={handleSigninClick}
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
                                        <i class="fa fa-solid fa-lock"></i>
                                    </InputGroupText>
                                    <Input name="password" onChange={props.handleChange} placeholder="Şifre" type="password" />
                                </InputGroup>
                            </FormGroup>
                            <Link to={"/auth/forgot-password"}>Şifremi unuttum</Link>
                            <div className='text-danger error-messages'>
                                <p>{props.errors.username}</p>
                                <p>{props.errors.email}</p>
                                <p>{props.errors.password}</p>
                            </div>
                            
                            <div className="text-center">
                                <Button
                                    className="mt-4"
                                    color="primary"
                                    type="button"
                                    onClick={props.handleSubmit}
                                >
                                    {!loading ? "Giriş yap" : "Giriş yapılıyor..."}
                                </Button>
                            </div>
                        </Form>
                        )}
                    </Formik>
                    <p className='mt-4'>
                        Hesabın yok mu? Kolay bir şekilde <Link to="/auth/signup">Üye ol</Link>
                    </p>
                </CardBody>
            </Card>
        </main>
    )
}

export default React.memo(Signin)