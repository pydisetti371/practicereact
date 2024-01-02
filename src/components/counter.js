import React, { Component } from 'react';
import { createPortal } from 'react-dom';
// import Search from './search.js';
class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            displayButtons: null
        }
    }

    componentDidMount = () => {
        const doc = document.getElementById("displayButtons");
        if (doc !== null) {
            let displayThroughPortal = document.getElementById("displayButtons");
            console.log(displayThroughPortal, "displayThroughPortal")
            this.setState({
                displayButtons: displayThroughPortal
            })
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    displayButtons = () => {
        return (
            <>
                <button onClick={this.incrementCount}>+</button>
                <button onClick={this.decrementCount}>-</button>
            </>
        )
    }
    render() {
        const { displayButtons } = this.state;
        const { count } = this.state;
        if (count === 5) {
            return new Error("Count should not exceed 5")
        }


        return (

            <div id="displayButtons">
                Counter App: {count}
                {displayButtons && createPortal(
                    this.displayButtons(),
                    displayButtons
                )}
                {/* <div>
                    <Search />
                </div> */}

            </div>
        )
    }
}

export default Counter