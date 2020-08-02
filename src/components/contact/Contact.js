import React from 'react'
import { useParams } from 'react-router'

const Contact = () => {
    
    const {name} = useParams()

    return (
        <div>
          <h1 data-testid="contact-name">Contact: {name}</h1>  
        </div>
    )
}

export default Contact
