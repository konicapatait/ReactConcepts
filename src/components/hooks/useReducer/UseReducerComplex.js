import React, { useReducer } from 'react';
/**
 * Better solution would be to use the `multiple useReducer` hook to avoid 
 * duplicate code in reducer.
 */
const initialState = {
    counterOne: 0,
    counterTwo: 100
};
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, counterOne: state.counterOne + action.value }
        case "decrement":
            return { ...state,counterOne: state.counterOne - action.value }
        case "increment2":
            return { ...state,counterTwo: state.counterTwo + action.value }
        case "decrement2":
            return { ...state,counterTwo: state.counterTwo - action.value }
        case "reset":
            return initialState
        default:
            return state
    }
}

function UseReducerComplex(props) {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div>
                <h3 className="App-header">Use Reducer Hook - Using complex state and action</h3>
                <div>Counter 1:- {count.counterOne}</div>
                <div>Counter 2:- {count.counterTwo}</div>
                <button onClick={() => dispatch({ type: "increment", value: 2 })}>Increment Counter 1</button>
                <button onClick={() => dispatch({ type: "decrement", value: 2 })}>Decrement Counter 1</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: "increment2", value: 2 })}>Increment Counter 2</button>
                <button onClick={() => dispatch({ type: "decrement2", value: 2 })}>Decrement Counter 2</button>
            </div>
            <div>
            <button onClick={() => dispatch({ type: "reset" })}>Reset Counters</button>
            </div>
        </>
    );
}

export default UseReducerComplex;