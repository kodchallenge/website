import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Button, Container, Form, FormGroup, Label } from 'reactstrap'
import { ServiceMessage } from '../../components/utils/Alerts'
import UserService from '../../services/user.service'
import { SetAuth } from '../../store/actions/authActions'

const UserChangePhotoPage = () => {
    const [file, setFile] = useState()
    const [previewPhoto, setPreviewPhoto] = useState(null)
    const { user } = useSelector(state => state.auth)
    const fileInputRef = useRef(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onFileChange = (e) => {
        const fileData = fileInputRef.current.files[0]
        if(fileData) {
            setFile(fileData)
            setPreviewPhoto(URL.createObjectURL(fileData))
        }
    }

    const handleSave = () => {
        if(file) {
            const formData = new FormData()
            formData.append("photo", file)
            const userService = new UserService()
            ServiceMessage(userService.uploadPhoto.bind(null, user?._id, formData),
            {callback: () => {
                userService.getUser(user?._id).then(res => {
                    dispatch(SetAuth({
                        user: res.data.data
                    }))
                })
                navigate("/user/profile")
            }})
        }
    }

    return (
        <div className='my-5 py-5 text-center'>
            <Container>
                <div className='my-5 py-5'>
                    <img className='rounded-pill' src={previewPhoto ?? user?.photo} width={128} height={128} />
                </div>
                <Form>
                    <FormGroup>
                        {previewPhoto ? (
                            <Label className='text-success'>Fotoğraf seçildi: {file?.name}</Label>
                        ): "Fotoğraf Seç"}
                        <input
                            type='file'
                            hidden
                            accept=".jpg, .jpeg, .png"
                            ref={fileInputRef}
                            onChange={onFileChange}
                        />
                        <Button className='d-block m-auto' type='button' color='primary' onClick={() => fileInputRef.current.click()}>Fotoğraf Seç</Button>
                    </FormGroup>
                </Form>
                {previewPhoto && (
                    <div className='my-5 py-5'>
                        <Button className='my-3' color='success' onClick={handleSave}>Kaydet</Button>
                        {/* <Alert className='w-50 m-auto text-left' color='danger'>
                            <i className="fa fa-solid fa-bolt mr-4"></i>
                            Kaydet butonuna bastığınız anda eski fotoğrafınız sunucudan silinecektir.
                        </Alert> */}
                    </div>
                )}
            </Container>
        </div>
    )
}

export default UserChangePhotoPage