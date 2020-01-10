   import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Home from './Home';
import { HashRouter, Route } from "react-router-dom";
import BasicConcepts from './BasicConcepts';
import LiftingStateUp from './LiftingStateUp';
import CompositionVsInheritance from './CompositionVsInheritance';
import HigherOrderComponents from './components/higherordercomponents/HigherOrderComponents';
import LifecycleA from './components/reactlifecycle/LifecycleA';

ReactDOM.render(
    <HashRouter>
        <>
        <Route path="/home" component={Home} /> 
        <Route path="/basic-concepts" component={BasicConcepts} />
        <Route path="/lifting-state-up" component={LiftingStateUp} />
        <Route path="/composition-vs-inheritance" component={CompositionVsInheritance} />
        <Route path="/higher-order-components" component={HigherOrderComponents} /> 
        <Route path="/lifecycle" component={LifecycleA} /> 
        </>
    </HashRouter>, 
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
