import React,{useContext} from 'react';
import { UserContext, ApplicationContext} from "./HookComponentTop"

function HookComponentConsumer(props) {
    const user = useContext(UserContext);
    const application = useContext(ApplicationContext);
    return (
        <div>
           User {user} is working on {application}
        </div>
    );
}

export default HookComponentConsumer;