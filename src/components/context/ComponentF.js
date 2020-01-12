import React, { Component } from 'react';
import { UserConsumer } from './userContext';

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (userName) => {
                        return <text>Welcome {userName} !!!!</text>
                    }
                }


            </UserConsumer>

        );
    }
}

export default ComponentF;