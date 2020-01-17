import React, { useState } from 'react';
import UseEffectOnlyOnce from './UseEffectOnlyOnce';

function MouseContainer(props) {

    const [displayCordinates, setDisplayCordinates] = useState(true)
    return (
        <div>
            <h3 className="App-sub2-header">For componentDidMount and componentWillUnmount alone</h3>
            <button onClick={() => {
                setDisplayCordinates(!displayCordinates)
            }}>
                {displayCordinates ? "Hide" : "Display"} Mouse Cordinates
            </button>

            {displayCordinates && <UseEffectOnlyOnce />}
        </div>
    );
}

export default MouseContainer;