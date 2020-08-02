import React from 'react'
import {render, cleanup, fireEvent, waitForElement} from '@testing-library/react'
import TestAsync from '../TestAsync'

afterEach(cleanup)

test('should increment counter after 500 milliseconds', async () => {
    const {getByTestId, getByText} = render(<TestAsync/>)
    fireEvent.click(getByTestId('button-up'))
    const counter = await waitForElement(() => getByText('1'))
    expect(counter).toHaveTextContent('1')
})

test('should decrement counter after 500 milliseconds', async () => {
    const {getByTestId, getByText} = render(<TestAsync/>)
    fireEvent.click(getByTestId('button-down'))
    const counter = await waitForElement(() => getByText('-1'))
    expect(counter).toHaveTextContent('-1')
})

