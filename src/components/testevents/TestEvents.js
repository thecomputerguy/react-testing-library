import React, {useState} from 'react'

const TestEvents = () => {
    
    const [counter, setCounter] = useState(0)
    const increment = () => setCounter(counter+1)
    const decrement = () => setCounter(counter-1)

    return (
        <div>
            <h1 data-testid="counter">{counter}</h1>
            <button data-testid="button-up" onClick={increment}>up</button>
            <button data-testid="button-down" onClick={decrement}>down</button>
        </div>
    )
}

export default TestEvents
