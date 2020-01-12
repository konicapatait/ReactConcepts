import React from 'react';

const ForwardRefChild = React.forwardRef((props, refs) => {
    return (
        <div>
            <input ref={refs}></input>
        </div>
    );
})

export default ForwardRefChild;
