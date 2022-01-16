import React, { useCallback, useEffect, useRef, useState } from "react";

const SplitDivider = () => {
    const ref = useRef(null)
    const [isDrag, setIsDrag] = useState(false)

    useEffect(() => {
        
    }, [])

    const handleMouseDown = (e) => {
        console.log("split Down", e)
        setIsDrag(true)
    }

    const handleMouseMove = (e) => {
        if(isDrag) {
            console.log("split move", e)
        }
    }
    
    const handleMouseUp = () => {
        console.log("split up")
        setIsDrag(false)
    }

    useEffect(() => {
        document.addEventListener(onmouseup, (e) => {
            setIsDrag(false)
        })
        return document.removeEventListener(onmouseout, () => {}) 
    }, [])
    

    return (
        <div onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} className="split-divider"/>
    )
}

export default React.memo(SplitDivider)