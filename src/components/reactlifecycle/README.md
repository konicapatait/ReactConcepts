# Introduction
Any web application have 4 stages and react life cycle methods are as follows:

# Mounting
*   <b>constructor (props)</b>
    *   Special function that will be called whenever a new component is created
    *   Initialize state; Binding new event
    *   Do not cause side effects. Eg: Make HTTP call
    *   super(props) 
    *   Directly override this.state   
*   <b>static getDerivedStateFromProps (props, state)</b>
    *   This component either return null or object that will be the updated state of the component.
    *   When a state of a component depends on a changes in props over time.
    *   Static method so doesnot have access to this keyword;set the state. 
    *   Do not cause side effects. Eg: Make HTTP call
-   <b>render()</b>
    * Only `required` method
    * Read props & state and return JSX.
    * Do not change the state or interact with DOM or make AJAX calls.
    * Children components lifecycle method are also executed
-   <b>componentDidMount</b>
    * Called only ones in the whole life cycle of a given component.
    * Invoked immediately after a component and all its children components have been rendered to the DOM.
    * `Perfect place to cause side effects`.Ex: Interact with DOM or perform any ajax calls to load data.


# Updating
-   <b>static getDerivedStateFromProps(props, state)</b>
-   <b>shouldComponentUpdate(nextprops, nextState)</b>
    * Decide wheather a component should re-render or not.
    * By default re-render the component.
    * Performance Optimization
    * Do not cause side effects. Eg: Make HTTP call
-   <b>render()</b>
-   <b>getSnapshotBeforeUpdate(prevProps,prevState)</b>
    * Called right before the changes from the virtual DOM are to be reflected in the DOM
    * Capture some information from the DOM.
    * Use Case: Capture the user scoll position and after the update maintain the same position.
    * Method will either return null or a value.Returned value will be passed as a thrird parameter to the next method.
-   <b>componentDidUpdate(prevProps,prevState,snapshot)</b>
    * Guaranted to be called once in each re-render lifecycle.
    * Can cause side effects

# Unmounting
-   <b>componentWillUnmount()</b>
    * Method invoked immediately before a component is unmounted or destroyed
    * Use Case: Cancelling any network requests, removing event handlers, cancelling any subscription or invalidating timers.
    * Do not call setState method from thsi method.

# Error Handling
-   <b>static getDerivedStateFromError</b>
-   <b>componentDidCatch</b>