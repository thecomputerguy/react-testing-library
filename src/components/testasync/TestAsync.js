import React, { useState } from 'react'

const TestAsync = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => setTimeout(() => {setCounter(counter+1)}, 500)
    const decrement = () => setTimeout(()=> {setCounter(counter-1)}, 500)

    return (
        <div>
            <h1 data-testid="counter">{counter}</h1>
            <button data-testid="button-up" onClick={increment}>up</button>
            <button data-testid="button-down" onClick={decrement}>down</button>
        </div>
    )
}

export default TestAsync
