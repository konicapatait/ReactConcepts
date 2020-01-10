import React from 'react';
import withCounter from './withCounter'

class ClickCounterHOC extends React.Component {

    render() {
        const {count, incrementCount} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    Click Counter with HOC
                </header>
                <button onClick={incrementCount}>{this.props.name} Clicked {count} times!!</button>

            </div>
        )
    }
}

export default withCounter(ClickCounterHOC);