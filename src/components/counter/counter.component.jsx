import React, { Component, useEffect, useState } from 'react'

function loadCounterValue(word) {
    console.log('Loading counter value...')
    return new Promise(resolve => {
        setTimeout(
            () => resolve(word.length),
            1000
        )
    })
}

const useCounter = () => {
    const [value, setValue] = useState(0)
    
    const decrease = () => {
        setValue(value - 1)
    }
    const increase = () => {
        setValue(value + 1)
    }
    const handleChange = event => {
        const value = +event.target.value
        setValue(value)
    }

    return {
        value,
        setValue,
        decrease,
        increase,
        handleChange
    }
}

const useMouseCoords = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 })
    useEffect(() => {
        const handleMove = (event) => {
            setCoords({
                x: event.clientX,
                y: event.clientY
            })
        }

        window.addEventListener('mousemove', handleMove)

        return () => {
            window.removeEventListener('mousemove', handleMove)
        }
    }, [])

    return coords
}

const FunctionalCounter = ({ name = "Vasya" }) => {

    const {
        value,
        setValue,
        decrease,
        increase,
        handleChange
    } = useCounter()

    const [word, setWord] = useState("")
    const handleWordChange = (event) => {
        setWord(event.target.value)
    }

    useEffect(() => {
        loadCounterValue(word).then(setValue)
    }, [word, setValue])

    const coords = useMouseCoords()

    return (
        <div>
            <h2>{name}</h2>
            <div>x: {coords.x} y: {coords.y}</div>
            <input type="text" value={word} onChange={handleWordChange} />
            <button type="button" onClick={decrease}>-</button>
            <input type="number" value={value} onChange={handleChange} />
            <button type="button" onClick={increase}>+</button>
        </div>
    )
}

class Counter extends Component {

    state = {
        name: 'Derek',
        time: '12:00',
        value: 0
    }

    async componentDidMount() {
        const value = await loadCounterValue()
        this.setState({
            ...this.state,
            value
        })
    }

    render() {
        const { value } = this.state;
        const { name } = this.props;

        return (
            <div>
                <h2>{name}</h2>
                <button type="button" onClick={this.handleDecrease}>-</button>
                <input type="number" value={value} onChange={this.handleChange} />
                <button type="button" onClick={this.handleIncrease}>+</button>
            </div>
        )
    }

    handleChange = (event) => {
        const value = +event.target.value
        this.setState({
            ...this.state,
            value
        })
    }

    handleDecrease = () => {
        this.setState({
            ...this.state,
            value: this.state.value - 1
        })
    }

    handleIncrease = () => {
        this.setState({
            ...this.state,
            value: this.state.value + 1
        })
    }

}

Counter.defaultProps = {
    name: "Vasya"
}

export default FunctionalCounter
