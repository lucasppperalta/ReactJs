import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleCounter = (operation) => {
        if(operation === "+"){
            setCounter(counter + 1);
            return;
        }
        if(counter > 0 ){
            setCounter(counter - 1);
        };
        

    }
    return (
        <div>
            <h3>contador: {counter}</h3>
            <button onClick={() => handleCounter("+")}>+</button>
            <button onClick={() => handleCounter("-")}>-</button>
        </div>
    );
};

export default Counter;