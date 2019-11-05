import React from "react";

function Label(props) {
    const placeHolder = props.placeholder? props.placeholder : "Enter the value"
    return (
    <div>
        <text>{props.name}</text>
        &nbsp;&nbsp;&nbsp;
        <input type="text" value={props.value} placeholder={placeHolder} onChange={props.onChange} onBlur ={props.onblur}></input>
    </div>
    )
}

export default Label;