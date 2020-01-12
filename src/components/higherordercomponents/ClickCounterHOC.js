import React from 'react';
import withCounter from './withCounter'

class ClickCounterHOC extends React.Component {

    render() {
        const {name, count, incrementCount} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    Click Counter with HOC
                </header>
                <button onClick={incrementCount}>{name} Clicked {count} times!!</button>

            </div>
        )
    }
}

export default withCounter(ClickCounterHOC);