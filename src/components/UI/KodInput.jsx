import React from 'react'

const KodInput = (props) => {
    const {className, ...other} = props
    return (
        <input className={"kod-input " + className} {...other} />
    )
}

export default KodInput