import React, { Component } from 'react';
/**
 * Error Boundary is the class component that implement either one or both 
 * of the lifecycle methods i.e.
 * * getDerivedStateFromError
 * * componentDidCatch
 * becomes a error boundary.
 * 
 * In other words, these are the React Components that catch the Javascript 
 * error in their child component tree, log those errors, and display a 
 * fall-back UI.
 * 
 * * `getDerivedStateFromError` method is used to render the fallback UI after 
 * the error is thrown
 * 
 * * `componentDidCatch` method is used to log the error information.
 * 
 * Error Boundary catch error in during rendering in lifecycle methods 
 * and in the constructor below them. However, it does not catch error 
 * inside eventHandlers. If you have onClick handler and you want to 
 * handle the error in evenHandler then use regular try catch block
 * and not Error Boundaries.
 * 
 */
class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info){
        // Call the logging service with error and info 
        console.log(error);
        console.log(info);

    }

    render() {
        if (this.state.hasError) {
            return <h1 style={{
                color:"Red"

            }}>Something went wrong!!!</h1>
        }
        return this.props.children

    }
}

export default ErrorBoundary;