import React, { useState } from 'react';

/** basic counter operation */
const HookCounter = () => {
    const [count, setCount] = useState(0);
    const updateCount = (count) => {
        // setCount(count + 1);
        setCount(prevCount => prevCount + 1);
    };
    return (
        <div>
            <button onClick={() => updateCount(count)}>Count {count}</button>
        </div>
    );
};

export default HookCounter;