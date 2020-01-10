import React from 'react';

class ClickCounter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return { count: ++prevState.count }
        })
    }

    render() {
        const count = this.state.count;
        return (
            <div className="App">
                <header className="App-header">
                    Click Counter
                </header>
                <button onClick={this.incrementCount}>Clicked {count} times!!</button>

            </div>
        )
    }
}

export default ClickCounter;