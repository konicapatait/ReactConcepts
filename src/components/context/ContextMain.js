import React, { Component } from 'react';
import ComponentC from './ComponentC';
import { UserProvider } from './userContext';

/**
 * `Context` is a way to pass the data down through the component 
 * tree without having to pass the props down manually to every level
 * 
 * Image: ../components/images/docs/context.png
 * 
 * Steps
 *  Step 1: Create a Context using createContext method in React. 
 *      Make sure to export the provider and consumeer as well. 
 *  Step 2: At top level, include the Provider component and provide a 
 *      value using the value attribute. This value can now be used by any of teh descendent component
 *  Step 3: In the component where the value is required use the Consumer component and pass in the function as it's child.
 *      The function receives the context value as it's parameter value which can then be used to return a desired JSX.
 * 
 * 
 * NOTE:
 * * Default value can be set by passing the value as a parameter in createContext method.
 * * Multiple Context in a component: ../components/images/docs/multipleContext.png
 */
class ContextMain extends Component {
    render() {
        return (
            <div className="App">
                <h3> Value provided through Context</h3>
                <UserProvider value="Konica">
                    <ComponentC></ComponentC>
                </UserProvider>

                <h3> Value not provided in Context</h3>
                <ComponentC></ComponentC>

            </div>
        );
    }
}

export default ContextMain;