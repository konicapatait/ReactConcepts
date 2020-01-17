import React from 'react';

function Title(props) {
    console.log("Rendering Title")
    return (
        <div className="App-header">
            {props.value && <h1>{props.value}</h1>} 
        </div>
    );
}

export default React.memo(Title);