import React from 'react'

function Col() {
    return (
        <>
            <div className={`col ${props.className}`}>
                {props.children}
            </div>
        </>
    )
}

export default Col
