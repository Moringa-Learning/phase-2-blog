import React from 'react'
import {Link} from 'react-router-dom'

function NotFound(){
  return (
    <h1>Page Not Found Go Back To <Link to="/">Home</Link></h1>
  )
}

export default NotFound