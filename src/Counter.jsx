import {useState} from "react";
const Counter=()=>{
    const[count,setCount]=useState(0);
    const Increment=()=>{
        setCount(count+1);
    }
    const Decrement=()=>{
        setCount(count-1);
    }
    const Reset=()=>{
        setCount(0);
    }
    return(
        <div className="counter">
            <h2>Counter App</h2>
            <p>Current Count: {count}</p>
            <button onClick={Increment}>Increase</button>
            <button disabled={count===0} onClick={Decrement}>Decrease</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default Counter;