import MonacoEditor from "@monaco-editor/react";
import { editor } from "monaco-editor";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DropdownItem, DropdownMenu, DropdownToggle, Input, UncontrolledDropdown } from "reactstrap";
import { ChangeLanguage } from "../../store/actions/editorActions";

const CodeEditor = ({ editorRef, height }) => {
    const problemState = useSelector(state => state.problem)
    const {selectProblem: problem} = problemState
    const editor = useSelector(state => state.editor)
    const dispatch = useDispatch()
    const [language, setLanguage] = useState(editor.language ?? "javascript") //PS: state den gelecek.

    //region Select Language

    //PS: Verileri API'den çek.
    const languages = [
        { value: "c", text: "C" },
        { value: "cpp", text: "C++" },
        { value: "csharp", text: "C#" },
        { value: "java", text: "Java" },
        { value: "python", text: "Python" },
        { value: "javascript", text: "javascript" },
        { value: "typescript", text: "Typescript" },
        { value: "kotlin", text: "Kotlin" },
        { value: "swift", text: "Swift" },
    ]

    const handleChangeLanguage = useCallback((e) => {
        setLanguage(e.target.value)
        console.log(editorRef.current)
        dispatch(ChangeLanguage(e.target.value))
    }, [])


    const SelectLanguage = React.useMemo(() => (
        <div>
            <Input type="select" className="px-md-3 mb-2" onChange={handleChangeLanguage} >
                {
                    languages.map((lang, index) => (
                        <option selected={editor.language === lang.value} key={index} value={lang.value}>{lang.text}</option>
                    ))
                }
            </Input>
        </div>
    ), [])

    return (
        <>
            {SelectLanguage}
            <div id="code-editor" className="code-editor" style={{ height: height, minHeight: 200, maxHeight: "70vh" }}>
                <MonacoEditor
                    // height={height}
                    language={language}
                    defaultValue={problem?.baseCode ?? "//Write your code is here"}
                    onMount={(editor, monaco) => {
                        editorRef.current = editor
                    }}
                />
            </div>
        </>
    )
}

export default React.memo(CodeEditor)