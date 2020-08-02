import React from 'react'
import {render, cleanup} from '@testing-library/react'
import TestElements from '../TestElements'

afterEach(cleanup)

test('should create a snapshot', () => {
    const testElement = render(<TestElements/>)
    expect(testElement).toMatchSnapshot()
})

test('should equal to 0', () => {
    const {getByTestId} = render(<TestElements/>)
    expect(getByTestId('counter')).toHaveTextContent(0)
})

test('should be enabled', () => {
    const {getByTestId} = render(<TestElements/>)
    expect(getByTestId('button-up')).not.toHaveAttribute('disabled')
})

test('should be disabled', () => {
    const {getByTestId} = render(<TestElements/>)
    expect(getByTestId('button-down')).toHaveAttribute('disabled')
})



