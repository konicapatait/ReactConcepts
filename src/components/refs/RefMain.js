import React, { Component } from 'react';
import LoginPage from './LoginPage'
import ClassRef from './ClassRef';
import ForwardRef from './ForwardRef';

class RefMain extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">Field Refs</header>
                <div><LoginPage/></div>

                <header className="App-header">Refs with Class Components</header> 
                <div><ClassRef/></div>

                <header className="App-header">Forward Refs</header> 
                <div><ForwardRef/></div>
            </div>
        );
    }
}

export default RefMain;