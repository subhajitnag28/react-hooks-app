import React, { useState } from 'react';

/** counter operation with update state using prevState */
const HookCounterTwo = () => {
    /**
     * count section handler
     * default value 0
     * increment with +2
     * decrement with -1
     * reset with 0
     */
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const incrementCount = (count) => {
        setCount(prevCount => prevCount + count);
    },
        decrementCount = () => {
            setCount(prevCount => prevCount - 1);
        },
        resetCount = () => {
            setCount(initialCount);
        };
    return (
        <div>
            <div>Count{count}</div>
            <button onClick={() => resetCount()}>Reset</button>
            <button onClick={() => incrementCount(2)}>Increment</button>
            <button onClick={() => decrementCount()}>Decrement</button>
        </div>
    );
};

export default HookCounterTwo;