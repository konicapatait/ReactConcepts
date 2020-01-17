import React, { useState, useCallback } from 'react';
import Title from "./Title"
import Number from "./Number"
import Button from './Button';

function UseCallbackHookMain() {
    const [age, setAge] = useState(20)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div className="App">
            <Title value="Use Callback"></Title>
            <Number label="Age" value={age}></Number>
            <Button onClick={incrementAge}>Increment Age</Button>
            <Number label="Salary" value={salary}></Number>
            <Button onClick={incrementSalary}>Increment Salary</Button>
        </div>
    );
}

export default UseCallbackHookMain;