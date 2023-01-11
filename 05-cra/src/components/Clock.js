import { useEffect, useState } from 'react';

function Clock() {
    let [date, setDate] = useState(new Date());
    let [message, setMessage] = useState(null);

    // Cycle de vie
    useEffect(() => {
        console.log('componentDidMount ET componentDidUpdate');
        let timer = setInterval(() => {
            let date = new Date();
            setDate(date);
            if (date.getSeconds() % 10 == 0) {
                setMessage('DING DONG');
            } else {
                setMessage(null);
            }
        }, 1000);

        return () => {
            console.log('componentWillUnmount');
            clearInterval(timer);
        }
    }, [message]); // On fait le didUpdate quand le message change

    return <h1 onClick={() => setDate(new Date())}>{date.toLocaleTimeString()} {message}</h1>;
}

export default Clock;
