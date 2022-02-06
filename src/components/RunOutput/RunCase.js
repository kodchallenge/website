import React from "react";

const RunCase = ({runState, }) => {
    const {running, runResult} = runState
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
}

export default React.memo(RunCase)