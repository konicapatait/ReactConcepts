import React from 'react';

function RPButton(props) {
    const { count, incrementCount } = props;
    return (
        <div>
            <button onClick={incrementCount}>Clicked {count} times</button>
        </div>
    );

}

export default RPButton;