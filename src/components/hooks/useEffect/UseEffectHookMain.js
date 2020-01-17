import React from 'react';

import UseEffectBasic from './UseEffectBasic';
import UseEffectConditionally from './UseEffectConditionally';
import MouseContainer from './MouseContainer';

function UseEffectHookMain(props) {
    return (
        <div>
            <h1 className="App-header">Use Effect</h1>
            <UseEffectBasic />
            <UseEffectConditionally />
            {/* <UseEffectOnlyOnce /> */}
            <MouseContainer />
        </div>
    );
}

export default UseEffectHookMain;