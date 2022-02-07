import React from "react"

const Highlight = ({children, color}) => (
    <span
        style={{
            backgroundColor: color,
            borderRadius: '15px',
            color: '#FFF',
            padding: '0 0.6rem 0.2rem 0.6rem',
        }}>
        {children}
    </span>
)

export default Highlight