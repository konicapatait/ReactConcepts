import React, { Component } from 'react';

/**
 * The `render props` term refer to the technique of sharing the code 
 * between React components using a prop whose value is a function.
 * 
 * More concretely, a render prop is a function prop that a component
 *  uses to know what to render.
 */
class Counter extends Component {
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
                {this.props.render(this.state.count, this.incrementCount)}
            </div>
        );
    }
}

export default Counter;