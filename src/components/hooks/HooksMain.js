import React from 'react';
import CounterUsingHooks from './CounterUsingHooks';
import HooksWithObject from './HooksWithObject';
import HooksWithArray from './HooksWithArray';
import UseEffectBasic from './UseEffectBasic';
import UseEffectConditionally from './UseEffectConditionally';
import MouseContainer from './MouseContainer';

function HooksMain(props) {
    return (
        <div>
            <CounterUsingHooks />
            <HooksWithObject />
            <HooksWithArray />
            <UseEffectBasic />
            <UseEffectConditionally />
            {/* <UseEffectOnlyOnce /> */}
            <MouseContainer />
        </div>
    );
}

export default HooksMain;