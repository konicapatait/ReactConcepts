import React, { useState, useEffect } from 'react';

/**
 * 
 * THis example demonstrate the use of `useEffect` hook 
 * that will replace the `componentDisMount` and `componentDidUpdate`
 * functions. 
 * 
 * If written this component with class componnet the two functions
 * would have the duplicate code to update the title. But with `useEffect`
 * Hook, it can be done in single line.
 */
function UseEffectBasic() {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = `You clicked ${count} times`
    })
    return (
        <div>
            <div>
                <h3 className="App-sub2-header">Basic</h3>
            </div>
            <div class="App">
                <button onClick={() => {
                    setCount(prevCount => prevCount+1)
                }}>You clicked {count} times </button>
            </div>
        </div>
    );
}

export default UseEffectBasic;