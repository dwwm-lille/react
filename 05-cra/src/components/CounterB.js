import { useState } from 'react';

function CounterB(props) {
    let [count, setCount] = useState(props.default || 0);

    let increment = () => setCount(count + 1);

    return (
        <div>
            <span>{count}</span>
            <button onClick={increment}>Incrémenter</button>
        </div>
    )
}

export default CounterB;
