import axios from "axios";
import React, { useCallback, useRef, useState } from "react";
import { useSelector } from "react-redux";
import SplitPane from "react-split-pane";
import { Button } from "reactstrap";
import api from "../../services/api";
import CodeService from "../../services/code.service";
import CodeEditor from "../editor/CodeEditor";

const Compiler = () => {
    const editorRef = useRef(null)
    const [running, setRunning] = useState(false)
    const [runResult, setRunResult] = useState("")
    const editor = useSelector(state => state.editor)

    // const codeService = new CodeService()
    //region Run Code
    const handleRunCodeClick = useCallback(() => {
        setRunning(true)
        // codeService.runCode({language: editor?.language, code: editorRef.current.getValue()})
        //     .then(res => {
        //         //console.log(res.data)
        //         setRunResult((res.data+"").replaceAll('\n', "<br />"))
        //     })
        //     .catch(err => {
        //         setRunResult(err)
        //     })
        //     .finally(() => {
        //         setRunning(false)
        //     })
    }, [editor.language])
    //endregion
    const SplitRunCase = React.useMemo(() => {
        return (
            <div className="mt-2 w-100">
                <div className="run-test-body">
                    <div className="px-md-3">
                        <Button onClick={handleRunCodeClick}>Çalıştır</Button>
                        <Button>Testleri Başlat</Button>
                        <Button color="success">Gönder</Button>
                    </div>
                    <div style={{padding: 20, fontSize: 14}} dangerouslySetInnerHTML={
                        {__html:running ? "<p>Çalışıyor</p>" : runResult}
                    }>
                    </div>
                </div>
            </div>
        )
    }, [running, runResult, editor.language])

    return (
        <div>
            <CodeEditor editorRef={editorRef} />
            {SplitRunCase}
        </div>
    )
}

export default React.memo(Compiler)