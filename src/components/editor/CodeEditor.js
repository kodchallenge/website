import MonacoEditor from "@monaco-editor/react";
import { editor } from "monaco-editor";
import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { ChangeLanguage } from "../../store/actions/editorActions";

const CodeEditor = ({ editorRef }) => {
    const editor = useSelector(state => state.editor)
    const dispatch = useDispatch()
    const [language, setLanguage] = useState(editor.language ?? "javascript") //PS: state den gelecek.
    //region Editor

    const Editor = React.useMemo(() => (
        <MonacoEditor
            height={700}
            language={language}
            defaultValue="//test"
            onMount={(editor, monaco) => {
                editorRef.current = editor
            }}
        />
    ), [language])

    //endregion

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
        <select select className="px-md-3 mb-2" onChange={handleChangeLanguage} >
            {
                languages.map((lang, index) => (
                    <option selected={editor.language === lang.value} key={index} value={lang.value}>{lang.text}</option>
                ))
            }
        </select >
    ), [])

    return (
        <div>
            <div>
                {SelectLanguage}
            </div>
            <div>
                {Editor}
            </div>
        </div>
    )
}

export default React.memo(CodeEditor)