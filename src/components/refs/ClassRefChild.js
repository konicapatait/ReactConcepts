import React, { Component } from 'react';

class ClassRefChild extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    onFocus(){
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
               <input ref={this.inputRef}></input> 
            </div>
        );
    }
}

export default ClassRefChild;