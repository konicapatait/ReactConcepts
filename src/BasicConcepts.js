import React from 'react';
import './App.css';
import Label from "./components/Label"
/**
 * Basic Concepts display:
 * a.) How to work with props
 * b.) Manitiaing State
 * c.) Lifecycle methods
 */
class BasicConcepts extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      age: 0.00,
      firstName: ""
    }
  }

  validateYear = (event) => {
    // Highlight it to red if value is not a valid year in past
    const value = event.target.value;
    if(isNaN(value)){
      alert("Not a valid value")
    }

    if(value<0 ||value > 2019)
      alert("Not a valid year")
  }

  calculateAge = (event) => {
    
    let calculatedAge = 2019-event.target.value
    this.setState({age: calculatedAge})
  }

  updateName = (event) => {
    
    let updatedName = event.target.value;
    let valueInUpdatedCase = updatedName.toUpperCase()
    this.setState({firstName: valueInUpdatedCase})
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          Basic Concepts  
        </header>
        
        <Label name="First Name" value={this.state.firstName} onChange={this.updateName}></Label>
        <Label name="Last Name"></Label>
        <Label name="Birth Year" onChange={this.validateYear} onblur={this.calculateAge}></Label>

        Your Age is : {this.state.age}
      </div>
    );
  }

}

export default BasicConcepts;
