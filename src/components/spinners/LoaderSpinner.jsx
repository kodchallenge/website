import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
function LoaderSpinner({ loading, LoaderTag="div", color="#ff9511", size = 50, children, style }) {
    const loaderStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style
    }
    return loading ? (
        <LoaderTag style={loaderStyle}>
            <ClipLoader color={color} loading size={size} css={`display: "flex", justify-content:"center"`}/> 
        </LoaderTag>
    )
    : children
}

export default LoaderSpinner