import React from 'react';
import HookComponentConsumer from "./HookComponentConsumer"


export const UserContext = React.createContext("Me");
export const ApplicationContext = React.createContext("MyApp")
function HookComponentTop(props) {

    return (
        <div>
            <UserContext.Provider value="Konica">
                <ApplicationContext.Provider value="React">
                    <HookComponentConsumer />
                </ApplicationContext.Provider>
            </UserContext.Provider>
        </div>
    );
}

export default HookComponentTop;