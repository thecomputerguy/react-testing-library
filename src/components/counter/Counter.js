import React, {useContext} from 'react'
import {CounterContext} from '../../containers/counterprovider/CounterProvider'

const Counter = () => {

    const {counter, increment, decrement} = useContext(CounterContext)
    
    return (
        <div>
            <h1 data-testid="counter">{counter}</h1>
            <button data-testid="button-up" onClick={increment}>up</button>
            <button data-testid="button-down" onClick={decrement}>down</button>        
        </div>
    )
}

export default Counter
