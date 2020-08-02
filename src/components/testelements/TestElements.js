import React, {useState} from 'react'

const TestElements = () => {
    
    const [counter, setCounter] =  useState(0)
    
    const increment = () => setCounter(counter+1)
    const decrement = () => setCounter(counter-1)

    return (
        <div>
            <h1 data-testid="counter">{counter}</h1>
            <button data-testid="button-up" onClick={increment}>increment</button>
            <button disabled data-testid="button-down" onClick={decrement}>decrement</button>        
        </div>
    )
}

export default TestElements
