import React from 'react'
import {cleanup, render, fireEvent, waitForElement} from '@testing-library/react'
import axiosMock from 'axios'
import TestAxios from '../TestAxios'

afterEach(cleanup)

jest.mock('axios')

test('should display a loading text', () => {
    const {getByTestId} = render(<TestAxios/>)
    expect(getByTestId('loading')).toHaveTextContent('loading...')
})

test('should load and display data', async () => {
    const url = "/greeting"
    const {getByTestId} = render(<TestAxios url={url}/>)

    axiosMock.get.mockResolvedValueOnce({
        data: {
            greeting: 'hello there'
        }
    })

    fireEvent.click(getByTestId('fetch-data'))

    const greetingData = await waitForElement(() => getByTestId('show-data'))

    expect(axiosMock.get).toHaveBeenCalledTimes(1)
    expect(axiosMock.get).toHaveBeenCalledWith(url)
    expect(greetingData).toHaveTextContent('hello there')
})


