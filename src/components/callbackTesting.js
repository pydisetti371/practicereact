import React from 'react';
import { memo } from 'react';

function callbackTesting({increment, valueUpdated}) {
    console.log("callbackTesting-child")
const plusBtn = () => {
    increment();
    valueUpdated("yes")
}
return (
    <div>
        {/* <p>Callback Testing</p> */}
        <button onClick={plusBtn}>+</button>
    </div>
)
}
export default callbackTesting;