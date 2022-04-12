import { Formik } from 'formik'
import React from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import Swal from 'sweetalert2'
import TrackService from '../../../services/track.service'
const AddTrackPage = () => {
    const initialValues = {
        name: "",
        slug: "",
        description: "",
        icon: "",
    }

    const handleAddTrack = (values) => {
        const trackService = new TrackService()
        trackService.addTrack(values)
            .then(result => {
                Swal.fire({
                    title: "Başarılı",
                    icon: "success",
                    text: result.data.message
                })
            })
            .catch(err => {
                Swal.fire({
                    title: "Başarısız",
                    icon: "error",
                    text: err.response.data.message,
                })
            })
    }

    return (
        <div>
            <Container>
                <Row className='justify-content-center py-5'>
                    <Col xs="4">
                        <h2 className='text-center mb-5'>Yeni Kategori Ekle</h2>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={handleAddTrack}
                        >
                            {props => (
                                <Form>
                                    <FormGroup>
                                        <Label>Kategori Adı</Label>
                                        <Input
                                            id="name"
                                            placeholder="Kategori Adı"
                                            type="text"
                                            onChange={props.handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Slug</Label>
                                        <Input
                                            id="slug"
                                            placeholder="Slug"
                                            type="text"
                                            onChange={props.handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>İkon URL</Label>
                                        <Input
                                            id="icon"
                                            placeholder="İkon Url adresi"
                                            type="text"
                                            onChange={props.handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Açıklama</Label>
                                        <Input
                                            id="description"
                                            placeholder="Açıklama.."
                                            type="textarea"
                                            onChange={props.handleChange}
                                        />
                                    </FormGroup>
                                    <br />
                                    <Button color='success' onClick={props.handleSubmit}>Ekle</Button>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AddTrackPage