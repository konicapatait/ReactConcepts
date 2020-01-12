import React, { Component } from 'react';
import ClassRefChild from './ClassRefChild';
/**
 * Create a Ref and assign the ref to the component.
 * On button click, access the fuction in child component through component ref.
 * Note: Refs cannot be attached to functional components.
 */
class ClassRef extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef() // Assign this ref to child component
    }

    buttonClickHandler = () =>{
        this.componentRef.current.onFocus(); // onFocus is a function in child component
    }

    render() {
        return (
            <div>
                <button onClick={this.buttonClickHandler}>Focus on field</button>
                <ClassRefChild ref={this.componentRef}></ClassRefChild>
            </div>
        );
    }
}

export default ClassRef;