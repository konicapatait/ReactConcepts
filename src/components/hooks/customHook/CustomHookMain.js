import React from 'react';
import WithoutHook from './WithoutHook';
import CustomHook from './CustomHook';

function CustomHookMain(props) {
    return (
        <div>
            <h2 className="App-header">Custom Hook</h2>
            <WithoutHook/>
            <CustomHook />
        </div>
    );
}

export default CustomHookMain;