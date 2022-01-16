import Editor from "@monaco-editor/react";
import React, { useCallback, useRef, useState } from "react";
import SplitPane from "react-split-pane";
import SplitDivider from "../components/utils/SplitDivider";
import Button from '../components/buttons/Button'
const ProblemEditor = () => {
    
    const editorRef = useRef(null)

    //region Editor
    const SplitEditor = React.useMemo(() => {
        return (
            <Editor
                height="90vh"
                defaultLanguage="javascript"
                defaultValue="//test"
                onMount={(editor, monaco) => {
                    editorRef.current = editor
                }}
            />
        )
    }, [])
    //end region

    //region problem description
    const SplitProblemDesc = React.useMemo(() => {
        return (
            <div className="split-problem-desc px-3 w-100">
                <div className="problem-content text-wrap h6">
                    <h2>Problem</h2>
                    Toplamın karesi ile ilk N doğal sayının karelerinin toplamı arasındaki farkı bulun.<br />

                    İlk on doğal sayının toplamının karesi (1 + 2 + ... + 10)² = 55² = 3025'tir.<br />

                    İlk on doğal sayının kareleri toplamı 1² + 2² + ... + 10² = 385'tir.<br />

                    Dolayısıyla ilk on doğal sayının toplamının karesi ile ilk on doğal sayının karelerinin toplamı arasındaki fark 3025 - 385 = 2640'tır.<br />
                </div>
            </div>
        )
    }, [])
    //end region

    //region Run Code - Test Cases - Submit Code
    const handleRunCodeClick = useCallback(() => {
        console.log(editorRef.current.getValue())
    }, [])
    const SplitRunCase = React.useMemo(() => {
        return (
            <div className="split-run w-100">
                <div className="run-test-body">
                    <div className="px-md-3">
                        <Button className="btn-orange mx-1" onClick={handleRunCodeClick}>Çalıştır</Button>
                        <Button className="btn-orange mx-1">Testleri Başlat</Button>
                        <Button className="btn-green active mx-1">Gönder</Button>
                    </div>
                </div>
            </div>
        )
    }, [])
    //end region
    return (
        <div id="problem-editor" className="fullscreen">
            <div>
                <div className="editor-navbar">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="editor-back">
                            Geri Dön
                        </div>
                        <div className="editor-paraf">
                            Algoritma / İki Sayının Toplamı
                        </div>
                        <div className="editor-setting">
                            Ayarlar
                        </div>
                    </div>
                </div>
                <SplitPane split="vertical" minSize={400} maxSize={600} className="split-panel">
                    {SplitProblemDesc}
                    <SplitPane split="vertical" minSize={800} maxSize={980}>
                        {SplitEditor}
                        {SplitRunCase}
                    </SplitPane>
                </SplitPane>
            </div>
        </div>
    )
}

export default React.memo(ProblemEditor)