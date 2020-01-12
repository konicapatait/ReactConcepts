import React from 'react';

/**
 * This is HOC that takes the component add the count and incrementCount functionality to the originalComponent as the prop. 
 * With these changes the state is managed in Higher order function and passed to original componnet as a props.
 * 
 * Other way to reuse the code is by using "render props".Refer: ../renderprops/
 */
const withCounter = (OriginalComponent) => {   // With naming convention, OriginalComponet is called as 'WrappedComponent'
    class NewComponent extends React.Component {

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
            return <OriginalComponent 
            count={this.state.count} 
            incrementCount={this.incrementCount}
            {...this.props}/>
        }
    }
    return NewComponent; // With naming convention, NewComponent is called as functionName but in PascalCase. Here it will be 'WithCounter'
}

export default withCounter;