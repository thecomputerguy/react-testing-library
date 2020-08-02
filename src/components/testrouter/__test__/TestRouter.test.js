import React from 'react'
import {cleanup, render, fireEvent} from '@testing-library/react'
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import TestRouter from '../TestRouter'

const renderWithRouter = (component) => {

    const history = createMemoryHistory()
    
    return {
    ...render(<Router history={history}>{component}</Router>)
    }
}

afterEach(cleanup)

test('should render the home page', () => {
    const {container, getByTestId} = renderWithRouter(<TestRouter/>)
    
    const navbar = getByTestId('navbar')
    const link = getByTestId('home-link')

    expect(container.innerHTML).toMatch('Home')
    expect(navbar).toContainElement(link)
})

test('should navigate to the about page', () => {
    const {container, getByTestId} = renderWithRouter(<TestRouter/>)

    fireEvent.click(getByTestId('about-link'))

    expect(container.innerHTML).toMatch('About')
})

test('should navigate to the contact page with params', () => {
    const {container, getByTestId} = renderWithRouter(<TestRouter/>)

    fireEvent.click(getByTestId('contact-link'))

    expect(container.innerHTML).toMatch('Contact: john doe')
})


