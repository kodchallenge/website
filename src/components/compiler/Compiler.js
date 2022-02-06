import axios from "axios";
import React, { useCallback, useRef, useState } from "react";
import { useSelector } from "react-redux";
import SplitPane from "react-split-pane";
import api from "../../services/api";
import Button from "../buttons/Button";
import CodeEditor from "../editor/CodeEditor";

const Compiler = () => {
    const editorRef = useRef(null)
    const [running, setRunning] = useState(false)
    const [runResult, setRunResult] = useState("")
    const editor = useSelector(state => state.editor)

    //region Run Code
    const handleRunCodeClick = useCallback(() => {
        setRunning(true)
        api().post("/code/resruncode", {language: editor?.language, code: editorRef.current.getValue()})
            .then(res => {
                console.log(res)
                setRunResult(res.data)
            })
            .catch(err => {
                console.log(err)
                setRunResult(err + "<br/>Sunucuya bağlanılamadı")
            })
            .finally(() => {
                setRunning(false)
            })
    }, [editor.language])
    //endregion
    const SplitRunCase = React.useMemo(() => {
        return (
            <div className="split-runs w-100 text-wrap">
                <div className="run-test-body">
                    <div className="px-md-3">
                        <Button className="btn-orange mx-1" onClick={handleRunCodeClick}>Çalıştır</Button>
                        <Button className="btn-orange mx-1">Testleri Başlat</Button>
                        <Button className="btn-green active mx-1">Gönder</Button>
                    </div>
                    <div className="p-5" dangerouslySetInnerHTML={
                        {__html:running ? "<p>Çalışıyor</p>" : runResult+"".replaceAll('\n', "<br/>")}
                    }>
                    </div>
                </div>
            </div>
        )
    }, [running, runResult, editor.language])

    return (
        <div>
            <SplitPane split="vertical" minSize={800} maxSize={980}>
                <CodeEditor editorRef={editorRef}/>
                {SplitRunCase}
            </SplitPane>
        </div>
    )
}

export default React.memo(Compiler)