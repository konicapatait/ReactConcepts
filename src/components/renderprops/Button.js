import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 0
        }
    }

    incrementCount = () => {
        this.setState((prevState) => {
           return {count : prevState.count + 1} 
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>Clicked {this.state.count} times</button>
            </div>
        );
    }
}

export default Button;