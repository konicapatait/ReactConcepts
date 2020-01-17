import React, { useState, useEffect } from 'react';

/** 
 * For conditionally using the `useEffect` hook, we need to pass
 * a second attribute in `useEffect` function i.e array foe which we 
 * would be looking for change.
 * 
 * In class components we need to add a if clause to make sure 
 * `componentDidUpdate` run only if particular state changes. This
 * is handled properly in `useEffect` hook by passing second parameter.
 *  */
function UseEffectConditionally(props) {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    useEffect(() => {
        console.log("Use Effect Called")
        document.title = `You clicked ${count} times`
    }, [count])
    return (
        <div>
            <div>
                <h3 className="App-sub2-header">Conditionally</h3>
            </div>
            <div class="App">
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                ></input>
                <button
                    onClick={() => {
                        setCount(prevCount => prevCount + 1)
                    }}>
                    You clicked {count} times
                    </button>
            </div>
        </div>
    );
}

export default UseEffectConditionally;