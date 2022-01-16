import React from "react";

const Button = ({className, children}) => {
    return (
        <button className={className + " btn"}>
            {children}
        </button>
    )
}

export default Button