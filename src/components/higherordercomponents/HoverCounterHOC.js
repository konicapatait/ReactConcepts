import React from 'react';
import withCounter from './withCounter';


class HoverCounterHOC extends React.Component {

    render() {
        const { count, incrementCount } = this.props; // Destructure (ES6 feature)
        return (
            <div className="App">
                <header className="App-header">
                    Hover Counter with HOC
                </header>
                <h2 onMouseOver={incrementCount}>{this.props.name}  Hovered {count} times!!</h2>

            </div>
        )
    }
}

export default withCounter(HoverCounterHOC);