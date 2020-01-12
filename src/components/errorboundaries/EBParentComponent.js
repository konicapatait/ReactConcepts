import React from 'react';
import EBChildComponent from './EBChildComponent';
import ErrorBoundary from './ErrorBoundary';

function EBParentComponent(props) {
    return (
        <div class="App">
            <ErrorBoundary>
                <EBChildComponent name={"Apple"}></EBChildComponent>
            </ErrorBoundary>
            <ErrorBoundary>
                <EBChildComponent name={"Mango"}></EBChildComponent>
            </ErrorBoundary>
            <ErrorBoundary>
                <EBChildComponent name={"Onion"}></EBChildComponent>
            </ErrorBoundary>

        </div>
    );
}

export default EBParentComponent;