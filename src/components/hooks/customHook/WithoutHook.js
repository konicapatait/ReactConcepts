import React, { useState } from 'react';

function WithoutHook(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        setFirstName("")
        setLastName("")
    }


    return (
        <div className="App">
            <h3 className="App-sub2-header">Without Hook</h3>
            <form onSubmit={submitHandler}>
                <input
                    name="firstName"
                    value={firstName}
                    onChange={(e) => { setFirstName(e.target.value) }}>

                </input>
                <input
                    name="lastName"
                    value={lastName}
                    onChange={(e) => { setLastName(e.target.value) }}></input>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default WithoutHook;