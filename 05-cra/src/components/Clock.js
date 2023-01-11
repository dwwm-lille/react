import { useEffect, useState } from 'react';

function Clock() {
    let [date, setDate] = useState(new Date());

    // Cycle de vie
    useEffect(() => {
        console.log('componentDidMount ET componentDidUpdate');
    });

    return <h1 onClick={() => setDate(new Date())}>{date.toLocaleTimeString()}</h1>;
}

export default Clock;
