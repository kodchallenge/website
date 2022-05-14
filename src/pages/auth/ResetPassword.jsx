import { Formik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router';
import {
    Card, CardBody, CardHeader, FormGroup, Input, Label, Button, Form
} from "reactstrap";
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import Brand from '../../components/Brand';
import { ErrorAlert, ServiceMessage, SuccessAlert } from '../../components/utils/Alerts';
import useAuth from '../../hooks/useAuth';
import authService from '../../services/auth.service';

import useQuery from '../../hooks/useQuery'

const ResetPassword = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [token] = useQuery("token")
    useEffect(() => {
        if (!token) {
            navigate("/")
        }
    }, [])
    const handleResetPassword = (value) => {
        setLoading(true)
        const data = { ...value, token: token }
        authService.resetPassword(data).then(res => {
            setLoading(false)
            SuccessAlert({
                text: res.data.message,
                callBack: () => {
                    navigate("/auth/signin")
                }
            })
        }).catch(err => {
            setLoading(false)
            console.log({ ...err })
            Swal.fire("Başarısız", err.response?.data?.message, "error")
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
                        <big>Şifremi Sıfırla</big>
                    </div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                    <Formik
                        initialValues={{ newPassword: "", newPasswordRepeat: "", token: "" }}
                        onSubmit={handleResetPassword}
                    >
                        {props => (
                            <Form>
                                <FormGroup>
                                    <Label>Yeni Şifre</Label>
                                    <Input name='newPassword' onChange={props.handleChange} placeholder="Yeni Şifrenizi giriniz" type="password" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Yeni Şifre Tekrar</Label>
                                    <Input name='newPasswordRepeat' onChange={props.handleChange} placeholder="Yeni şifrenizi tekrar giriniz" type="password" />
                                </FormGroup>
                                <Button disabled={loading} type='button' color="default" onClick={props.handleSubmit}>
                                    {!loading ? "Şifre Sıfırla" : "Şifre sıfırlanıyor"}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </CardBody>
            </Card>
        </main>
    )
}

export default React.memo(ResetPassword)