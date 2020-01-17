import React from 'react';
import useInput from './useInput';

function CustomHook(props) {
    const [firstName, bindFirstName, resetFirstName] = useInput("");
    const [lastName, bindLastName, resetLastName] = useInput("");

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }


    return (
        <div className="App">
            <h3 className="App-sub2-header">With Hook</h3>
            <form onSubmit={submitHandler}>
                <input type="text"
                    {...bindFirstName}>

                </input>
                <input type="text"
                    {...bindLastName}></input>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default CustomHook;