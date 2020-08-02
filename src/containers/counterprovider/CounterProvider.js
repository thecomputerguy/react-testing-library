import React, {useState} from 'react'
import Counter from '../../components/counter/Counter'

export const CounterContext = React.createContext()

const CounterProvider = () => {

    const [counter, setCounter] = useState(0)

    const increment = () => setCounter(counter+1)
    const decrement = () => setCounter(counter-1)

    return (
        <div>
            <CounterContext.Provider value={{counter, increment, decrement}}>
                <Counter/>
            </CounterContext.Provider>        
        </div>
    )
}

export default CounterProvider
