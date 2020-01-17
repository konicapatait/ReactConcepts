import React from 'react';
import UseReducerSimple from './UseReducerSimple';
import UseReducerComplex from './UseReducerComplex';

function UseReducerHookMain(props) {
    return (
        <div>
            <h1 className="App-header">Use Reducer Hook</h1>
            <UseReducerSimple />
            <UseReducerComplex />
        </div>
    );
}

export default UseReducerHookMain;