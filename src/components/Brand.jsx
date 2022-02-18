import React from 'react'

function Brand({ className, style = {}, bold = false, block, Type = "h1" }) {

    const baseStyle = {
        color: "#ffffff",
        fontWeight: bold ? 500 : 300,
        userSelect: "none",
        display: block ? "block" : "inline",
    }

    const kodStyle = {
        color: "#ff9511",
        backgroundColor: "#222222",
        borderRadius: "5px",
        padding: "0px 8px",
    }

    return (
        <Type className={className} style={{ ...baseStyle, ...style }}>
            <span style={kodStyle}>
                KOD
            </span>
            CHALLENGE
        </Type>
    )
}

export default React.memo(Brand)