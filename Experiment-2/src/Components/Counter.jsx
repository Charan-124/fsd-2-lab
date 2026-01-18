import {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decriment = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Counter</h1>
            <h2>Count : {count}</h2>
            <button onClick = {increment}>Increment</button>
            <button onClick = {decriment}>Decrement</button>
        </div>
    );
}
export default Counter;
