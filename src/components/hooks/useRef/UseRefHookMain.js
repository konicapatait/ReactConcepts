import React, { useState, useEffect, useRef } from 'react';

function UseRefHookMain(props) {
    const [timer, setTimer] = useState(0)
    const timerRef  =   useRef()

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimer(timer + 1)
        }, 1000)

        return ()=> {
            clearInterval(timerRef.current)
        }   
    },[])
    return (
        <div className="App">
            Hook Timer - {timer}
            <button onClick={()=> {clearInterval(timerRef.current)} }>Clear Hook Timer</button>
        </div>
    );
}

export default UseRefHookMain;