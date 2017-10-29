import React from 'react'
import { Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default ({ text, link }) => (
  <Header inverted sub>
    {link ? <Link className="item" to={link}>{text}</Link> : text}    
  </Header>
)