import React from 'react';

function EBChildComponent(props) {
    if(props.name === 'Onion'){
        throw Error("Not a Fruit!!!")
    }

    return <h2>{props.name}</h2>
}

export default EBChildComponent;