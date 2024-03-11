import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);


    // add and event handler for incraseing number
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }
    // add an event handler for decreasing number 
    const handleReduce = () =>{
        const newCount = count - 1;
        setCount(newCount);
    }
    return(
        <div style={{border: '3px solid purple', borderRadius: '20px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}