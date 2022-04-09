import { Formik, setIn } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import Swal from 'sweetalert2'
import TrackService from '../../../services/track.service'
const UpdateTrackPage = () => {
    const {id} = useParams()
    
    const tracks = useSelector(state => state.track)
    const formRef = useRef()
    const [initialValues, setInitialValues] = useState({
        name: "",
        slug: "",
        description: "",
        icon: "",
    })

    useEffect(() => {
        const currentTrack = tracks?.data?.find(t => t._id === id)
        currentTrack && setInitialValues(currentTrack);
        formRef.current?.setValues({...currentTrack});
    }, [tracks])

    const handleUpdateTrack = (values) => {
        console.log(values)
        const trackService = new TrackService()
        trackService.updateTrack(values)
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
                        <h2 className='text-center mb-5'>Update Track</h2>
                        <Formik
                            innerRef={formRef}
                            initialValues={initialValues}
                            onSubmit={handleUpdateTrack}
                        >
                            {props => (
                                <Form>
                                    <FormGroup>
                                        <Label>Kategori Adı</Label>
                                        <Input
                                            defaultValue={props.values.name}
                                            id="name"
                                            placeholder="Kategori Adı"
                                            type="text"
                                            onChange={props.handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Slug</Label>
                                        <Input
                                            defaultValue={props.values.slug}
                                            id="slug"
                                            placeholder="Slug"
                                            type="text"
                                            onChange={props.handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>İkon URL</Label>
                                        <Input
                                            defaultValue={props.values["icon"]}
                                            id="icon"
                                            placeholder="İkon Url adresi"
                                            type="text"
                                            onChange={props.handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Açıklama</Label>
                                        <Input
                                            defaultValue={props.values.description}
                                            id="description"
                                            placeholder="Açıklama.."
                                            type="textarea"
                                            onChange={props.handleChange}
                                        />
                                    </FormGroup>
                                    <br />
                                    <Button color='success' onClick={props.handleSubmit}>Güncelle</Button>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UpdateTrackPage