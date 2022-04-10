import { Formik } from 'formik'
import MonacoEditor from "@monaco-editor/react";
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import Swal from 'sweetalert2'
import ProblemService from '../../../services/problem.service'
import { getDifficulties } from '../../../store/actions/problemActions'
import AddProblemTestCase from './AddProblemTestCase'
import rehypeRaw from 'rehype-raw';
import { languageDomains } from '../../../languages';

const languages = languageDomains
// const languages = [
//     { value: "c", text: "C", },
//     { value: "cpp", text: "C++" },
//     { value: "csharp", text: "C#" },
//     { value: "java", text: "Java" },
//     { value: "python", text: "Python" },
//     { value: "javascript", text: "javascript" },
// ]
const AddProblemPage = () => {
    const [testCases, setTestCases] = useState([])
    const [isOpenModal, setOpenModal] = useState(null)
    const [langCode, setLangCode] = useState(languages.reduce((a, v) => ({ ...a, [v.value]: v.baseCode }), {}))
    const [selectLang, setSelectLang] = useState("c")
    const [description, setDescription] = useState("")
    const formRef = useRef()

    const problemState = useSelector(state => state.problem)
    const tracks = useSelector(state => state.track)
    const trackNames = tracks?.data?.map(t => {
        return { _id: t._id, name: t.name }
    })
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDifficulties())
        if (!tracks || !tracks.data) {
            dispatch(tracks)
        }
    }, [])
    const handleAddProblem = (values, { resetForm }) => {
        const data = { ...values, io: testCases, baseCode: langCode, description: description }
        console.log({...data})
        const problemService = new ProblemService()
        problemService.addProblem(data)
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
                <h2 className='text-center mb-5'>Yeni Problem Ekle</h2>
                <Formik
                    innerRef={formRef}
                    initialValues={{}}
                    onSubmit={handleAddProblem}
                >
                    {props => (
                        <Form>
                            <Row className='justify-content-center py-5'>
                                <Col md="6">
                                    <FormGroup>
                                        <Label>Kategori</Label>
                                        <Input
                                            className='form-control'
                                            id="track"
                                            type="select"
                                            onChange={props.handleChange}
                                        >
                                            <option>Select Track</option>
                                            {trackNames?.map((track, index) => (
                                                <option value={track._id}>
                                                    {track.name}
                                                </option>
                                            ))}
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Problem Başlığı</Label>
                                        <Input
                                            id="name"
                                            placeholder="Problem Başlığı"
                                            type="text"
                                            onChange={props.handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Zorluk</Label>
                                        <Input
                                            className='form-control'
                                            id="difficulty"
                                            type="select"
                                            onChange={props.handleChange}
                                        >
                                            <option>Select Difficulty</option>
                                            {problemState.difficulties?.map((dif, index) => (
                                                <option value={dif}>
                                                    {dif}
                                                </option>
                                            ))}
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Skor</Label>
                                        <Input
                                            id="score"
                                            placeholder="Skor"
                                            type="number"
                                            onChange={props.handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Function Name</Label>
                                        <Input
                                            id="functionName"
                                            placeholder="Function Name"
                                            onChange={props.handleChange}
                                        />
                                    </FormGroup>
                                    <br />
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label>Dil</Label>
                                        <Input
                                            id="baseCode"
                                            placeholder="Gözükecek kod bloğu.."
                                            type="select"
                                            className='form-control'
                                            onChange={(s) => setSelectLang(s.target.value)}
                                        >
                                            {languages.map((lang, index) => (
                                                <option key={index} value={lang.value}>{lang.text}</option>
                                            ))}
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className='border'>
                                        <Label>Base Code</Label>
                                        <MonacoEditor
                                            height={320}
                                            language={selectLang}
                                            value={langCode[selectLang]}
                                            onChange={(value) => {
                                                setLangCode(b => {
                                                    b[selectLang] = value
                                                    return { ...b }
                                                })
                                            }}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <h3>Açıklama (Markdown formatında)</h3>
                            <Row>
                                <Col md="6" className='border'>
                                    <MonacoEditor
                                        height={600}
                                        language="markdown"
                                        onChange={(value) => {
                                            setDescription(value)
                                        }}
                                    />
                                </Col>
                                <Col md="6" className='text-left border'>
                                    {/* Markdown Preview */}
                                    <ReactMarkdown
                                        children={description}
                                        rehypePlugins={[rehypeRaw]}
                                    />
                                </Col>
                            </Row>
                            <Row className='justify-content-center my-4'>
                                <Col xs="5">
                                <Card className=''>
                                    <CardHeader>
                                        <Row className='justify-content-between align-items-center'>
                                            <h6>Test Cases</h6>
                                            <AddProblemTestCase state={[isOpenModal, setOpenModal]} caseAnchor={setTestCases} />
                                        </Row>
                                    </CardHeader>
                                    <CardBody className='text-left'>
                                        {testCases.map((test, index) => (
                                            <Row className='my-2 align-items-center justify-content-between'>
                                                <strong>Test {index + 1}: </strong>
                                                <div>
                                                    <Button color='info' type='button' onClick={() => setOpenModal(test)}>
                                                        <i class="fa-solid fa-pencil"></i>
                                                    </Button>
                                                    <Button
                                                        color='danger'
                                                        type='button'
                                                        onClick={() => {
                                                            testCases.splice(index, 1)
                                                            setTestCases([...testCases])
                                                        }}
                                                    >
                                                        <i class="fa-solid fa-trash"></i>
                                                    </Button>
                                                </div>
                                            </Row>
                                        ))}
                                    </CardBody>
                                </Card>
                                </Col>
                            </Row>

                            <Button color='success' onClick={props.handleSubmit}>Ekle</Button>
                        </Form>
                    )}
                </Formik >
            </Container >
        </div >
    )
}

export default AddProblemPage