import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import SplitPane from "react-split-pane";
import { Button } from "reactstrap";
import Swal from "sweetalert2";
import useQuery from "../../hooks/useQuery";
import api from "../../services/api";
import CodeService from "../../services/code.service";
import ProblemSolutionService from "../../services/problemSolution.service";
import CodeEditor from "../editor/CodeEditor";
import { ServiceMessage } from "../utils/Alerts";

const Compiler = () => {
    const [problemId] = useQuery("problem")
    const editorRef = useRef(null)
    const [running, setRunning] = useState(false)
    const [runResult, setRunResult] = useState("")
    const editor = useSelector(state => state.editor)
    const [editorHeight, setEditorHeight] = useState(300)
    const [initialHeight, setInitialHeight] = useState(0)
    const [testData, setTestData] = useState(null)

    //region Run Code
    const handleRunCodeClick = () => {
        setRunning(true)
        const lang = {
            language: editor?.language,
            code: editorRef.current.getValue(),
            problem: problemId
        }
        CodeService.runCode(lang)
            .then(res => {
                console.log(res.data)
                setRunResult((res.data.data.result+"").replaceAll('\n', "<br />"))
            })
            .catch(err => {
                setRunResult(err)
            })
            .finally(() => {
                setRunning(false)
            })
    }
    //endregion

    
    const CodeTestStyle = (x) => {
        return `
        <div class="mb-2">
            <strong>${x.name}: </strong>
            ${x.status
                ? `<span class="text-success">Başarılı</span>`
                : `<span class="text-danger">Başarısız</span>`
            }
        </div>
        `
    }

    //region Run Test
    const handleRunTestClick = () => {
        setRunning(true)
        const lang = {
            language: editor?.language,
            code: editorRef.current.getValue(),
            problem: problemId
        }
        CodeService.runTest(lang)
            .then(res => {
                const data = res.data.data
                let result = ""
                data.tests.map(x => {
                    result += CodeTestStyle(x)
                })
                setTestData(data)
                setRunResult(result)
            })
            .catch(err => {
                setRunResult(err)
            })
            .finally(() => {
                setRunning(false)
            })
    }
    //endregion

    const handleSendCodeClick = () => {
        Swal.fire({
            title: "Onaylıyor musunuz?",
            text: "Kodunuz gönderilecektir. Bu işlem geri alınamaz. Bu problemi çözmüş olarak işaretlenecektir.",
            icon: 'warning',
            confirmButtonText: 'Onaylıyorum',
            cancelButtonText: "İptal",
            showCancelButton: true,
        }).then(result => {
            if(result.isConfirmed && testData) {
                ServiceMessage(new ProblemSolutionService().sendSolution.bind(null, testData), {message: "Kodunuz kaydedilmiştir"})
            }
        })
    }

    const SplitRunCase = React.useMemo(() => {
        return (
            <div className="mt-2 w-100">
                <div className="run-test-body">
                    <div className="">
                        <Button onClick={handleRunCodeClick}>Çalıştır</Button>
                        <Button onClick={handleRunTestClick}>Testleri Başlat</Button>
                        <Button color="success" onClick={handleSendCodeClick} disabled={!Boolean(testData)}>Gönder</Button>
                    </div>
                    <div style={{padding: 20, fontSize: 14}} dangerouslySetInnerHTML={
                        {__html:running ? "<p>Çalışıyor</p>" : runResult}
                    }>
                    </div>
                </div>
            </div>
        )
    }, [running, runResult, editor.language, testData])

    const resizeStart = (e) => {
        const codeEditor = document.getElementById("code-editor")
        setInitialHeight(codeEditor.clientHeight - e.clientY)
    }

    const resize = (e) => {
        if(e && e.clientY != 0 ) {
            setEditorHeight(initialHeight + e.clientY)
        }
    }

    return (
        <div className="editor-root">
            <CodeEditor editorRef={editorRef} height={editorHeight}/>
            <div className="resizer" draggable onDragStart={resizeStart} onDrag={resize}></div>
            {SplitRunCase}
        </div>
    )
}

export default React.memo(Compiler)