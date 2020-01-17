# Hooks

Hooks are the new feature in React `V16.8` that allow you to use React features without having to write a class.

- Example: `State` of the component

- Hooks don't work inside classes

- Hooks don't replace your existing knowledge of React concepts. Instead, Hooks provide a more direct API to the React concepts you already know.


## Why Hooks?
-   Understand how `this` keyword works in JavaScript.
    -   Remember to bind event handlers in Class component.
    -   Classes don' minify well and makes hot reloading very unreliable.

-   There is no particular way to reuse stateful component logic. `HOC` and `render props pattern` do address this problem but makes the code complex. There is a need to share stateful logic in a better way.

- Related code is not organized in one place. Example: 
    -   Data fetching - In componentDidMount and componentDidUpdate
    -   Event Listeners - In componentDidMount and componentWillUnmount

- Because of stateful logic it is sometime immpossible to break it down into smaller ones.

## Rules of Hooks
-   `Only call Hooks at the Top level`
    i.e. never call the Hooks inside loops, conditions or nested functions.

-   `Only call the Hooks from the React functions` 

-   Use previos state to modify the state of component (Good to have; avoid errors)

## Note

-   setState in class components will merge the state wheras useState hook does not merge the state. ALWAYS ALWAYS use spread operator.



### Types od Hooks

-   `useState` 
    -   It lets you add state to the functional component.
    -   With useState hook, state can be Object, String, boolean, array etc v/s class compoent state is always object.
    -   Takes initial state and returns `a state variable` and `a function` capable of updating the state.

-   `useEffect`
    -   It let you perform side effects in functional components.
    -   It is a close replacement of `componentDidMount`, `componentDisUpdate` and `componentWillUnmount`
    -   This hook/function execute after every render of the compoenent.
    -   `useEffect` can be executed conditionally by passing second attribute that will watch for the particular attribute in a state.
    -   To ensure that `useEffect` just called ones, pass second attribute as empty array.
    -   To execute cleanup functions i.e. implementing 
    `componentWillUnmount` in class component, return a function from `useEffect` that will execute when component will unmount  and perform cleanup like unregistering the listeners etc.
    -   Better to use multiple `useEffect` in a component rather than having a single `useEffect` dealing with all the states in a componnet. That will group the related code together and looks much more organized

-   `useContext`
    -   `Context` is a way to pass the data down through the component tree without having to pass the props down manually to every level
    -   In case of multiple context, retrieving the value from context consumer is cumbersome and need lots of code. useContext makes that easy. 
    - Refer : [Context using Hooks](../context/HookComponentTop.js)

-   `useReducer`
    -   It is hook that is used for state management.
    -   It is an alternative to `useState` and useState is built using useReducer.
    -   `useReducer(reducer, initialState)` returns `currentState` and `dispatch` method

        `reducer(state, action)` returns `newState`

    -   `useReducer` is for local state management. To share the state between components i.e. Global state management, use `useReducer + useContext`

    | Scenario                  |  useState                 |    useReducer     |
    | ------------------------- | -----------------------   |   --------------  |
    | Type of state             | Number, String, Boolean   | Object or Array   |
    | No. of state transaction  | One or two                | Too many          |
    | Related state transations?| No                        | Yes               |
    | Business logic            | No business logic         | Complex business Logic | 
    | Local vs global           | Local                     | Global            |            

-   `useCallback`
    -   This hook will return a memorized version of the callback function that only changes if one of the dependencies has changed.
    -   It is useful when passing callbacks to optimized child componnets that rely on reference equality to prevent unnecessary renders.
    -   Performance optimization always come with cost. Refer: https://kentcdodds.com/blog/usememo-and-usecallback

-   `useMemo`
    -   This hook is similar to `useCallback`. The only difference is `useCallback`  memorize the provided function instance, whereas `useMemo` invokes the provided function and caches the result.

-   `useRef`
    -   The `useRef` hook is a function that returns a mutable ref object whose `.current` property is initialized to the passed argument.
    - The `ref` object is a generic container whose current property is mutable and can hold any value, similar to an instance property on a class.

-   `customHooks`
    -  `customHook`  is basically a javascript function whose name starts with `use`.
    -   It can call other Hooks if required.
    -   Used to share logic between components - Alternative to `HOC` and `Render Props` 



