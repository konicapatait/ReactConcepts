import React, { useState, useEffect } from 'react';
/**
 * 
 * This component mimic the implementation of `componentDidMount`
 * method alone. Passing empty array as second paramater ensures that
 * `useEffect` is called only once and does not depend on 
 * any property in state.
 * 
 * NOTE : 
 * 
 * If the event is not unregistered, we will see a warning message on console as below
 * index.js:1 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
 *   in UseEffectOnlyOnce (at MouseContainer.js:16)
 */
function UseEffectOnlyOnce(props) {

    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    const logMousePosition = (e) => {
        setX(e.clientX) 
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("Registering the listener")
        window.addEventListener("mousemove", logMousePosition)

        //Unregister the event listener
        return () => {
            console.log("Unregistering the listener")
            window.removeEventListener("mousemove", logMousePosition)
        }
    }, [])
    return (
        <div>
            <h3 className="App-sub-header">UseEffect - OnlyOnce</h3>
            X-cordinate is {X} ; Y-cordinate is {Y}
        </div>
    );
}

export default UseEffectOnlyOnce;