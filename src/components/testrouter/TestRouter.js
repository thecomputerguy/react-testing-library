import React from 'react'
import {NavLink, Link, Route, Switch} from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import Contact from '../contact/Contact'

const TestRouter = () => {

    const name = "john doe"
    return (
        <div>
            <nav data-testid="navbar">
                <Link data-testid="home-link" to="/">Home</Link>
                <Link data-testid="about-link" to="/about">About</Link>
                <Link data-testid="contact-link" to={`contact/${name}`}>Contact</Link>
            </nav>

            <Switch>
                <Route exact={true} path="/" component={Home}/>
                <Route path="/about" component={About} />
                <Route path="/contact/:name" component={Contact} />
            </Switch>
        </div>
    )
}

export default TestRouter
