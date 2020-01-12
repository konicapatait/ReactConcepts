import React, { Component } from 'react';
import LifecycleB from "./LifecycleB"

/**
 * Order of Execution :
 * * Lifecycle-A constructor
 * * Lifecycle-A getDerivedStateFromProps
 * * Lifecycle-A render
 * * Lifecycle-B constructor
 * * Lifecycle-B getDerivedStateFromProps
 * * Lifecycle-B render
 * * Lifecycle-B componentDidMount
 * * Lifecycle-A componentDidMount
 * 
 * 
 * Lifecycle-A getDerivedStateFromProps
 * Lifecycle-A shouldComponentUpdate
 * Lifecycle-A render
 * Lifecycle-B getDerivedStateFromProps
 * Lifecycle-B shouldComponentUpdate
 * Lifecycle-B render
 * Lifecycle-B getSnapshotBeforeUpdate
 * Lifecycle-A getSnapshotBeforeUpdate
 * Lifecycle-B componentDidUpdate
 * Lifecycle-A componentDidUpdate
 */
class LifecycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name : "Konica"
        }
        console.log("Lifecycle-A constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("Lifecycle-A getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("Lifecycle-A componentDidMount")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Lifecycle-A shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, nextProps){
        console.log("Lifecycle-A getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(prevProps,prevState, snapshot){
        console.log("Lifecycle-A componentDidUpdate")
    } 

    onChangeState = () => {
        this.setState({
            name: "Konica Patait"
        })
    }


    render() {
        console.log("Lifecycle-A render")
        return (
            <div className="App">
                Lifecycle A
                <div><button onClick={this.onChangeState}>Change State</button> </div>
                <LifecycleB/>
            </div>
        );
    }
}

export default LifecycleA;