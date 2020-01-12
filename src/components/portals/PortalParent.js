import React, { Component } from 'react';
import Portal from './Portal';

class PortalParent extends Component {
    constructor(props) {
        super();
        this.state = {
            isPortalOpen: false
        }
    }

    onButtonClick = () => {
        this.setState({
            isPortalOpen: !this.state.isPortalOpen
        })
    }

    render() {
        let portalDOM = <div></div>
        if(this.state.isPortalOpen){
            portalDOM = <Portal onClose={this.onButtonClick}></Portal>
        }
        return (
            <div>
                {portalDOM}

                <button onClick={this.onButtonClick}>Click here for Portal</button>
            </div>
        );
    }
}

export default PortalParent;