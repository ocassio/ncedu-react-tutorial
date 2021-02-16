import React, { useState, useCallback } from 'react'
import Sample from '../sample/sample.component'

const SampleContainer = () => {
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(1)

    const print = useCallback(() => {
        console.log(title)
    }, [title])

    return (
        <div>
            <Sample title={title} onChange={print} />

            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="number" value={value} onChange={e => setValue(+e.target.value)} />
        </div>
    )
}

export default SampleContainer
