import { Formik } from 'formik';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import {
    Card, CardBody, CardHeader, FormGroup, Input, Label, Button, Form
} from "reactstrap";
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import Brand from '../../components/Brand';
import { SuccessAlert } from '../../components/utils/Alerts';
import useAuth from '../../hooks/useAuth';
import authService from '../../services/auth.service';

const ForgotPassword = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleSendResetLink = (value) => {
        if(value.email == "") return;
        setLoading(true)
        authService.sendResetLink(value).then(res => {
            setLoading(false)
            SuccessAlert({
                text: res.data.message,
                callBack: () => {
                    navigate("/")
                }
            })
        })
    }

    return (
        <main>
            <div className='mb-4 text-center'>
                <a href="/">
                    <Brand Type='h3' bold />
                </a>
            </div>
            <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-white pb-5">
                    <div className="text-center mb-3 fw-bold">
                        <big>Şifremi Unuttum</big>
                    </div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                    <Formik
                        initialValues={{ email: "" }}
                        onSubmit={handleSendResetLink}
                    >
                        {props => (
                            <Form>
                                <FormGroup>
                                    <Label>E-posta Adresiniz</Label>
                                    <Input name='email' onChange={props.handleChange} placeholder="E-posta adresinizi giriniz" type="email" />
                                </FormGroup>
                                <Button disabled={loading} type='button' color="default" onClick={props.handleSubmit}>
                                    {!loading ? "Link Gönder" : "Link Gönderiliyor"}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                    <p className='text-muted mt-5'>
                        <small>E-posta adresinizi unuttunuz ise aşağıdaki mail adresine mail atabilirsiniz.
                            <br />
                            <a href='mailto:kodchallenge@gmail.com'>kodchallenge@gmail.com</a>
                        </small>
                    </p>
                </CardBody>
            </Card>
        </main>
    )
}

export default React.memo(ForgotPassword)