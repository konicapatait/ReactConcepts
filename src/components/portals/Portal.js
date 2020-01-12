import React from 'react';
import ReactDOM from 'react-dom'

// Snipplet shortcut: rsfp

/**
 * Portals can load any component outside the react root div.
 * If you inspect the element, this heading is loaded outside 
 * the main dom element i.e. root.
 * 
 * Why do we need Portals?
 * 
 * One of the use case is when we have to deal with parent 
 * component CSS when child component is pop-up, modal etc.
 * 
 * Refer: 
 *      https://codesandbox.io/s/00254q4n6p
 *      https://codepen.io/gaearon/pen/jGBWpE
 * 
 */

function Portal(props) {
    return ReactDOM.createPortal(
        <div
            style={{
                position: 'absolute',
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.3)',
            }}
            onClick={props.onClose}
        >
            <div
                style={{
                    padding: 20,
                    background: '#fff',
                    borderRadius: '2px',
                    display: 'inline-block',
                    minHeight: '300px',
                    margin: '1rem',
                    position: 'relative',
                    minWidth: '300px',
                    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                    justifySelf: 'center',
                }}>
                <h1>
                    Portals Demo
                </h1>
                <button onClick={props.onClose}>Close</button>
            </div>
        </div>
        ,
        document.getElementById('portal-root')
    );
}

export default Portal;