import { useState } from 'react';

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    const reset = () =>{
        setValue(initialValue)
    }

    const bind = {
        name: value,
        value: value,
        onChange: (e) => { 
            setValue(e.target.value) 
        }
    }

    return [value, bind, reset,]
}   

export default useInput;