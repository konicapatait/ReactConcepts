import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome Guest!!!!!  
      </header>
      <h3><Link to='/basic-concepts'>1.) Basic Concepts</Link></h3>
      <h3><Link to='/lifting-state-up'>2.) Lifting StateUp</Link></h3>
      <h3><Link to='/composition-vs-inheritance'>3.) Composition v/s Inheritance</Link></h3>
      <h3><Link to='/higher-order-components'>4.) Higher Order Components</Link></h3>
      <h3><Link to='/lifecycle'>5.) LifeCycle</Link></h3>
      <h3><Link to='/refs'>6.) Refs</Link></h3>
      <h3><Link to='/portal'>7.) Portal</Link></h3>
      <h3><Link to='/error-boundary'>8.) Error Boundary</Link></h3>
      <h3><Link to='/render-props'>9.) Render Props</Link></h3>
      <h3><Link to='/context'>10.) Context</Link></h3>
      <h3><Link to='/http'>10.) HTTP</Link></h3>
      <h3><Link to='/hooks'>11.) Hooks</Link></h3>
      
    </div>
  );
}

export default Home;
