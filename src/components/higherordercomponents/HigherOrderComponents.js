import React from 'react';

import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'
import ClickCounterHOC from './ClickCounterHOC'
import HoverCounterHOC from './HoverCounterHOC'

/**
 * Higher Order Components is a function that takes a component as an argument and returns a new components.
 *      const newComponent = higherOrderComponent(originalComponent)
 *      Eg: const ironMan = withSuit(TonyStark)
 * 
 * Use case:
 *  -   Avoid duplicating the code by reusing the functionality.
 * 
 * Solution 1: List the Counter logic to parent component
 * -----------
 * 
 *                      Parent  (Lift counter logic to Parent and pass props)
 *                        ^
 *                        |
 *          ---------------------------------
 *         |              |                  |
 *   props |              |                  | props
 *         |              |                  |
 *      ClickCounter------------------HoverCounter  
 *                       STATE
 * 
 *  Not a great idea is component Tree is 
 * 
 *                      Parent  
 *                        ^
 *                        |
 *          ---------------------------------
 *         |                                |
 *         |                           Random Component A
 *         |                                | 
 *         |                           Random Component B
 *         |                                |
 *      ClickCounter                    HoverCounter  
 */
class HigherOrderComponents extends React.Component {

    render() {
        return (
            <>
                <ClickCounter />
                <HoverCounter />
                <ClickCounterHOC name="Konica"/>
                <HoverCounterHOC name="Anuj"/>
                
            </>
        )

    }
}

export default HigherOrderComponents;