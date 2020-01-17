import React from 'react';

/**
 * `React.memo()` will prevent the component from reloading 
 * if component props and state don't change. This helps in 
 * optimizing the component performance.
 */
function Number(props) {
    console.log(`Rendering Number - ${props.label}`)
    return (
        <div>
            {props.label} : {props.value}
        </div>
    );
}

export default React.memo(Number);