import React, { Component } from 'react'

function loadCounterValue() {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(5),
            1000
        )
    })
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
        const value = event.target.value
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

export default Counter
