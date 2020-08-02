import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {cleanup, render, fireEvent} from '@testing-library/react'
import {TestReduxReducer, initialState} from '../../../reducers/testreduxreducer/TestReduxReducer'
import TestRedux from '../TestRedux'

afterEach(cleanup)

const renderWithRedux = (Component, {initialState, store=createStore(TestReduxReducer, initialState)} = {}) => {
    return {
        ...render(<Provider store={store}>{Component}</Provider>),
        store
    }
}

test('checks initial state is equal to 0', () => {
    
    const {getByTestId} = renderWithRedux(<TestRedux/>)
    expect(getByTestId('counter')).toHaveTextContent(0)
})

test('should increment counter using redux', () => {
    const {getByTestId} = renderWithRedux(<TestRedux/>)
    fireEvent.click(getByTestId('button-up'))
    expect(getByTestId('counter')).toHaveTextContent(1)
})

test('should decrement counter using redux', () => {
    const {getByTestId} = renderWithRedux(<TestRedux/>)
    fireEvent.click(getByTestId('button-down'))
    expect(getByTestId('counter')).toHaveTextContent(-1)
})

test('should increment counter using redux with given initial state', () => {
    const {getByTestId} = renderWithRedux(<TestRedux/>, {initialState: {count:100}})
    fireEvent.click(getByTestId('button-up'))
    expect(getByTestId('counter')).toHaveTextContent(101)
})

test('should decrement counter using redux with given initial state', () => {
    const {getByTestId} = renderWithRedux(<TestRedux/>, {initialState: {count:100}})
    fireEvent.click(getByTestId('button-down'))
    expect(getByTestId('counter')).toHaveTextContent(99)
})
