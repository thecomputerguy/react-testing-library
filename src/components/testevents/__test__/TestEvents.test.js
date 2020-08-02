import React from 'react'
import {render,cleanup, fireEvent} from '@testing-library/react'
import TestEvents from '../TestEvents'

afterEach(cleanup)

test('should increment counter', () => {
    const {getByTestId} = render(<TestEvents/>)
    fireEvent.click(getByTestId('button-up'))
    expect(getByTestId('counter')).toHaveTextContent('1')
})

test('should decrement counter', () => {
    const {getByTestId} = render(<TestEvents/>)
    fireEvent.click(getByTestId('button-down'))
    expect(getByTestId('counter')).toHaveTextContent('-1')
})

