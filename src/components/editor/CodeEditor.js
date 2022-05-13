import MonacoEditor from "@monaco-editor/react";
import { editor } from "monaco-editor";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DropdownItem, DropdownMenu, DropdownToggle, Input, UncontrolledDropdown } from "reactstrap";
import { ChangeLanguage } from "../../store/actions/editorActions";

const langs = [
    { value: "c", text: "C" },
    { value: "cpp", text: "C++" },
    { value: "python", text: "Python" },
    { value: "javascript", text: "javascript" },
]

const CodeEditor = ({ editorRef, height }) => {
    const problemState = useSelector(state => state.problem)
    const { selectProblem: problem } = problemState
    const editor = useSelector(state => state.editor)
    const dispatch = useDispatch()
    const [language, setLanguage] = useState(editor.language ?? "javascript") //PS: state den gelecek.
    // const [languages, setLanguages] = useState([])

    //region Select Language

    //PS: Verileri API'den çek.
    const [languages, setLanguages] = useState([])

    useEffect(() => {
        if (problem) {
            const baseLanguages = Object.keys(problem.baseCode)
            setLanguages(langs.filter(x => baseLanguages.some(v => v == x.value)))
            setLanguage(baseLanguages[0])
            console.log(baseLanguages)
        }
    }, [problem])

    const handleChangeLanguage = (e) => {
        setLanguage(e.target.value)
        console.log(editorRef.current)
        dispatch(ChangeLanguage(e.target.value))
    }

    const SelectLanguage = () => (
        <div className="form">
            <Input type="select" className="form-control w-auto px-md-3 mb-2" onChange={handleChangeLanguage} >
                {
                    languages.map((lang, index) => (
                        <option selected={editor.language === lang.value} key={index} value={lang.value}>{lang.text}</option>
                    ))
                }
            </Input>
        </div>
    )

    return languages.length > 0 && (
        <>
            <SelectLanguage />
            <div id="code-editor" className="code-editor" style={{ height: height, minHeight: 200, maxHeight: "70vh" }}>
                <MonacoEditor
                    // height={height}
                    language={language}
                    value={problem?.baseCode[language]}
                    defaultValue={problem?.baseCode[language] ?? "//Write your code is here"}
                    onMount={(editor, monaco) => {
                        editorRef.current = editor
                    }}
                />
            </div>
        </>
    )
}

export default React.memo(CodeEditor)