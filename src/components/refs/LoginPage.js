import React, { Component } from 'react';

/**
 * Auto focus should be on button field on page load.
 * Focus the Input field on button click (instead of next button)
 * Fetch the value of fields using the ref (DOM element) element.
 */
class RefDemo extends Component {
    constructor(props){
        super(props)
        this.fnameRef = React.createRef()
        this.lnameRef = React.createRef()
        this.buttonRef = React.createRef()
        this.submitRef = React.createRef()
    }
    componentDidMount(){
        console.log(this.fnameRef)
        this.buttonRef.current.focus();
    }

    button1ClickHandler = ()=>{
        console.log("button1ClickHandler called")
        this.fnameRef.current.focus();
    }

    button2ClickHandler = ()=>{
        console.log("button2ClickHandler called")
        this.lnameRef.current.focus();
    }

    submitClickHandler = ()=>{
        console.log("submitClickHandler called")
        alert(`Welcome ${this.fnameRef.current.value} ${this.lnameRef.current.value} !!!` );
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.button1ClickHandler} ref={this.buttonRef}>Button 1</button>
                    <button onClick={this.button2ClickHandler}>Button 2</button>
                </div>
                <div>
                First Name: <input type="text" ref={this.fnameRef}/>
                </div>
                <div>
                Last name : <input type="text" ref={this.lnameRef}/>
                </div>
                <div>
                Phone# : <input type="text"/>
                </div>

                <div>
                    <button onClick={this.submitClickHandler} ref={this.submitRef}>Submit</button>
                    
                </div>
            </div>
        );
    }
}

export default RefDemo;