import React from 'react'

const StatusBar = ({status, size = "20"}) => {

    const style = {
        backgroundColor: "#ff0000",
        width: size + "px",
        height: size + "px",
        borderRadius: "50%",
        display: "inline-block"
    }
    if(status) {
        style.backgroundColor = "#00ff00"
    }

    return (
        <span style={style}/>
    )
}

export default StatusBar