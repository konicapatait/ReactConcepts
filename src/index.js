   import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Home from './Home';
import { HashRouter, Route } from "react-router-dom";
import BasicConcepts from './components/basic/BasicConcepts';
import LiftingStateUp from './components/basic/LiftingStateUp';
import CompositionVsInheritance from './components/compvsinheri/CompositionVsInheritance';
import HigherOrderComponents from './components/higherordercomponents/HigherOrderComponents';
import LifecycleA from './components/reactlifecycle/LifecycleA';
import RefMain from './components/refs/RefMain';
import PortalParent from './components/portals/PortalParent';
import EBParentComponent from './components/errorboundaries/EBParentComponent';
import RenderPropsMain from './components/renderprops/RenderPropsMain';
import ContextMain from './components/context/ContextMain';
import HttpMain from './components/http/HttpMain';
import HooksMain from './components/hooks/HooksMain';

ReactDOM.render(
    <HashRouter>
        <>
        <Route path="/home" component={Home} /> 
        <Route path="/basic-concepts" component={BasicConcepts} />
        <Route path="/lifting-state-up" component={LiftingStateUp} />
        <Route path="/composition-vs-inheritance" component={CompositionVsInheritance} />
        <Route path="/higher-order-components" component={HigherOrderComponents} /> 
        <Route path="/lifecycle" component={LifecycleA} /> 
        <Route path="/refs" component={RefMain} /> 
        <Route path="/portal" component={PortalParent} />  
        <Route path="/error-boundary" component={EBParentComponent} />  
        <Route path="/render-props" component={RenderPropsMain} />  
        <Route path="/context" component={ContextMain} />  
        <Route path="/http" component={HttpMain} />  
        <Route path="/hooks" component={HooksMain} />  
        </>
    </HashRouter>, 
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
