import React from 'react';
import CounterUsingHooks from './CounterUsingHooks';
import HooksWithObject from './HooksWithObject';
import HooksWithArray from './HooksWithArray';
function UseStateMain(props) {
    return (
        <div>
            <CounterUsingHooks />
            <HooksWithObject />
            <HooksWithArray />
        </div>
    );
}

export default UseStateMain;