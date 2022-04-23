import { Formik } from 'formik'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { ServiceMessage } from '../../components/utils/Alerts'
import authService from '../../services/auth.service'

const UserChangePassword = () => {
    const { user } = useSelector(state => state.auth)

    const navigate = useNavigate()
    const handleChangePasswordSubmit = (values) => {
        const data = { ...values, _id: user?._id }
        ServiceMessage(authService.changePassword.bind(null, data),{callback: () => navigate("/user/profile")})
    }

    return (
        <div className='my-5 py-5'>
            <div className='text-center'>
                <h1>Şifre Değiştir</h1>
                <p>Merhaba {user?.username}, alttaki formu doldurup kaydederek şifreni sıfırlayabilirsin.</p>
            </div>
            <div className='my-5 py-5'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col md="6">
                            <Formik
                                initialValues={{}}
                                onSubmit={handleChangePasswordSubmit}
                            >
                                {props => (
                                    <Form>
                                        <FormGroup>
                                            <Label>Eski Şifre </Label>
                                            <Input
                                                id="oldPassword"
                                                placeholder="Eski şifre"
                                                type="password"
                                                onChange={props.handleChange}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Yeni Şifre </Label>
                                            <Input
                                                id="newPassword"
                                                placeholder="Yeni şifre"
                                                type="password"
                                                onChange={props.handleChange}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Yeni Şifre Tekrar</Label>
                                            <Input
                                                id="newPasswordRepeat"
                                                placeholder="Yeni şifre tekrar"
                                                type="password"
                                                onChange={props.handleChange}
                                            />
                                        </FormGroup>
                                        <Button type='button' color='success' onClick={props.handleSubmit}>Kaydet</Button>
                                    </Form>
                                )}
                            </Formik>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default UserChangePassword