import React from 'react'
import {cleanup, render, fireEvent} from '@testing-library/react'
import CounterProvider, {CounterContext} from '../../../containers/counterprovider/CounterProvider'
import Counter from '../Counter'


const renderWithContext = (component) => {
    return {
        ...render(<CounterProvider value={CounterContext}>
            {component}
        </CounterProvider>),
    }
}

afterEach(cleanup)

test('checks if initial state is equal to 0', () => {
    const {getByTestId} = renderWithContext(<Counter/>)
    expect(getByTestId('counter')).toHaveTextContent(0)
})

test('should increment counter using context api', () => {
    const {getByTestId} = renderWithContext(<Counter/>)
    fireEvent.click(getByTestId('button-up'))
    expect(getByTestId('counter')).toHaveTextContent(1)
})

test('should decrement counter using context api', () => {
    const {getByTestId} = renderWithContext(<Counter/>)
    fireEvent.click(getByTestId('button-down'))
    expect(getByTestId('counter')).toHaveTextContent(-1)
})


