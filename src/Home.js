import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome Guest!!!!!  
      </header>
      <li><Link to='/basic-concepts'>Basic Concepts</Link></li>
      <li><Link to='/lifting-state-up'>Lifting StateUp</Link></li>
      <li><Link to='/composition-vs-inheritance'>Composition v/s Inheritance</Link></li>
      <li><Link to='/higher-order-components'>Higher Order Components</Link></li>
      
    </div>
  );
}

export default Home;
