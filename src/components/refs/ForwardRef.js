import React, { Component } from 'react';
import ForwardRefChild from './ForwardRefChild';

class ForwardRef extends Component {
    constructor(props){
        super(props)
        this.textRef =  React.createRef()
    }

    handleButtonClick = () => {
        this.textRef.current.focus();
    }

    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick}>Click Me!</button>
                <ForwardRefChild ref={this.textRef}></ForwardRefChild>
            </div>
        );
    }
}

export default ForwardRef;