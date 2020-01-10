import React from 'react';


class HoverCounter extends React.Component {

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
        const { count } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    Hover Counter
                </header>
                <h2 onMouseOver={this.incrementCount}>Hovered {count} times!!</h2>

            </div>
        )
    }
}

export default HoverCounter;