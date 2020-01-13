import React from "react";
import Label from "../Label"
/**
 * This component will render two text fields to convert the weight. 
 * This component will store the entered value and the scale 
 * type based upon the value entered in field and calculate the correspoding field
 */
class LiftingStateUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weight: 0.00
        }
    }

    getWeightinPounds = (event) => {
        this.setState({
            weight: event.target.value,
            scale: "p"
        })
    }

    getWeightinKgs = (event) => {
        this.setState({
            weight: event.target.value,
            scale: "kg"
        })
    }

    render() {
        const weightInPounds = (this.state.scale === "kg") ? this.state.weight * 0.45359237 : this.state.weight;
        const weightInKgs = (this.state.scale === "p") ? this.state.weight / 0.45359237 : this.state.weight
        return (
            <div className="App">
                <header className="App-header"> Lifting State Up </header>
                <React.Fragment>
                    <Label
                        name="Weight(in kgs)"
                        placeholder={"in Kgs"}
                        value={weightInPounds}
                        onChange={this.getWeightinPounds}></Label>

                    <Label
                        name="Weight(in pounds)"
                        placeholder={"in pounds"}
                        value={weightInKgs}
                        onChange={this.getWeightinKgs}></Label>
                </React.Fragment>
            </div>
        )
    }
}

export default LiftingStateUp;