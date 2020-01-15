import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "reset":
            return initialState
        default:
            return state
    }
}

function UseReducerSimple(props) {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div >
            <h3 className="App-header">Use Reducer Hook - Using simple state and action</h3>
            Count: {count}
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
    );
}

export default UseReducerSimple;