import React, { useState } from 'react';

/**
* * Similar Class componnet is implemented in ../higherordercomponents/ClickCounter.js
*
* * Always use prevState in a parameter and use that to update the state.
*/
function CounterUsingHooks(props) {

    const [count, setCount] = useState(0)

    /* const incrementBy5 = () => {
        for (let i = 0; i < 5; i++) {
            setCount(count + 1)
        }
    } */

    const incrementBy5 = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div className="App">
            <h2 class="App-header">UseState Hook - using previous state</h2>
            <div>Count: {count}</div>
            {/* <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button> */}

            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>

            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={incrementBy5}>Increment by 5</button>
        </div>
    );
}

export default CounterUsingHooks;