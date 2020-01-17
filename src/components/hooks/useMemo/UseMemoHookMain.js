import React, { useState, useMemo} from 'react';

function UseMemoHookMain(props) {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementCounterOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo + 1)
    }
    const isEven = useMemo(() => {
        // Adding Delay
        let i = 0
        while (i < 900000000) {
            i++
            //do something
        }
        return counterOne % 2 === 0
    },[counterOne])
    return (
        <div className="App">
            <h1 className="App-header">Use Memo</h1>
            <button onClick={incrementCounterOne}>Count One - {counterOne} </button>
            <div>
                {/* <span>{isEven() ? "Even" : "Odd"}</span> */}
                <span>{isEven ? "Even" : "Odd"}</span> 
            </div>
            <button onClick={incrementCounterTwo}>Count Two -  {counterTwo}</button>
        </div>
    );
}

export default UseMemoHookMain;