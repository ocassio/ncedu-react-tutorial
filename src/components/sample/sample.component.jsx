import React, { memo } from 'react'

const Sample = ({ title, onChange }) => {
    return (
        <div>
            <h3>{title}</h3>
            <button type="button" onClick={() => onChange()}>Click me</button>
        </div>
    )
}

export default memo(Sample)