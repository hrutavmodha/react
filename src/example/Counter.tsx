import { useState } from "../react/hooks";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        </div>
    );
}
