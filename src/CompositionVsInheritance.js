import React from 'react';
import Inheritance from "./components/Inheritance"
import Composition from "./components/Composition"
import Label from "./components/Label"

class CompositionVsInheritance extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Composition V/s Inheritance
            </header>

                <header className="App-sub-header">
                    Inheritance
            </header>

                <Inheritance></Inheritance>

                <header className="App-sub-header">
                    Composition
            </header>

                <Composition>
                    <React.Fragment>
                        <Label name="Address Line 1"></Label>
                        <Label name="Address Line 2"></Label>
                        <Label name="City"></Label>
                    </React.Fragment>
                </Composition>
            </div>
        )
    }
}

export default CompositionVsInheritance;