import React from 'react';

function RPHover(props) {
    const { count, incrementCount } = props
    return (
        <div>
            <h2 onMouseOver={incrementCount}>Hoverred {count} times</h2>
        </div>
    );
}

export default RPHover;