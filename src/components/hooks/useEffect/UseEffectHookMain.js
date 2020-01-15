import React from 'react';

import UseEffectBasic from './UseEffectBasic';
import UseEffectConditionally from './UseEffectConditionally';
import MouseContainer from './MouseContainer';

function UseEffectHookMain(props) {
    return (
        <div>
            <UseEffectBasic />
            <UseEffectConditionally />
            {/* <UseEffectOnlyOnce /> */}
            <MouseContainer />
        </div>
    );
}

export default UseEffectHookMain;