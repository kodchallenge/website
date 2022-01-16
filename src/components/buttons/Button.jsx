import React from "react";

const Button = ({className, children, onClick}) => {
    return (
        <button className={className + " btn"} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button