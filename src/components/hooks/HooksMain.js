import React from 'react';

import { Link } from 'react-router-dom';
function HooksMain(props) {
    return (
        <div>
            <h3><Link to='/use-state'>1.) Use State</Link></h3>
            <h3><Link to='/use-effect'>2.) Use Effect</Link></h3>
            <h3><Link to='/use-reducer'>3.) Use Reducer</Link></h3>
        </div>
    );
}

export default HooksMain;