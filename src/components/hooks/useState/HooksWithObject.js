import React, { useState } from 'react';

function HooksWithObject(props) {
    const [name, setName] = useState(
        {
            fName: "",
            lName: ""
        })
    return (
        <div className="App">
            <h2 class="App-sub2-header">Using Objects</h2>
            <input
                type="text"
                name="fName"
                value={name.fName}
                onChange={(e) => {
                    setName({ ...name, fName: e.target.value })
                }}></input>
            <input
                type="text"
                name="lName"
                value={name.lName}
                onChange={(e) => {
                    setName({ ...name, lName: e.target.value })
                }}></input>

            <div>
                <div>Your first name is - {name.fName}</div>
                <div> Your last name is - {name.lName}</div>
            </div>

        </div>
    );
}

export default HooksWithObject;