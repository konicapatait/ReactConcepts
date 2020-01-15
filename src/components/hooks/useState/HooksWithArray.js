import React, { useState } from 'react';

function HooksWithArray(props) {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items, {
            id: items.length + 1,
            value: "Item" + Math.floor((Math.random() * 10)+1) 
        }])
    }
    return (
        <div className="App">
            <h3 className="App-header">UseState Hooks - using Array</h3>
            <button onClick={addItem}>Add Item</button>
            {items.map(item => <li id={item.id}>{item.value}</li>)}
        </div>
    );
}

export default HooksWithArray;