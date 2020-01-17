import React from 'react';

import { Link } from 'react-router-dom';
function HooksMain(props) {
    return (
        <div className="App">
            <h1 className="App-header">Hooks</h1>
            <h3><Link to='/use-state'>1.) Use State</Link></h3>
            <h3><Link to='/use-effect'>2.) Use Effect</Link></h3>
            <h3><Link to='/use-reducer'>3.) Use Reducer</Link></h3>
            <h3><Link to='/use-callback'>4.) Use Callback</Link></h3>
            <h3><Link to='/use-memo'>5.) Use Memo</Link></h3>
            <h3><Link to='/use-ref'>6.) Use Ref</Link></h3>
            <h3><Link to='/custom-hook'>7.) Custom Hook</Link></h3>
        </div>
    );
}

export default HooksMain;