import React, { Component } from 'react';

import Hover from './Hover';
import Button from './Button';

import RPHover from './RPHover';
import RPButton from './RPButton';
import Counter from './Counter';

class RenderPropsMain extends Component {
    render() {
        return (
            <div>
                <div class="App">
                    <h1 class="App-header">As Seperate Components </h1>
                    <h3> Counter functionality is implemented in both the componnets</h3>
                    <Button></Button>
                    <Hover></Hover>
                </div>

                <div class="App">
                    <h1 class="App-header">Render Props </h1>
                    <h3> Used Render Props to remove duplicate code</h3>
                    <Counter render={(count, incrementCount) => {
                       return <RPButton count={count} incrementCount={incrementCount}></RPButton>
                    }}>
                    </Counter>

                    <Counter render={(count, incrementCount) => (
                        <RPHover count={count} incrementCount={incrementCount}></RPHover>
                    )}>
                    </Counter>
                </div>

            </div>
        );
    }
}

export default RenderPropsMain;