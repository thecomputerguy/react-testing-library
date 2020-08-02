import React from 'react'
import {connect} from 'react-redux'
const TestRedux = ({counter, dispatch}) => {
    
    const increment = () => dispatch({type: 'INCREMENT'})
    const decrement = () => dispatch({type: 'DECREMENT'})

    return (
        <div>
            <h1 data-testid="counter">{counter}</h1>
            <button data-testid="button-up" onClick={increment}>up</button>
            <button data-testid="button-down" onClick={decrement}>down</button>
        </div>
    )
}

export default connect((state) => ({counter: state.count}))(TestRedux)
