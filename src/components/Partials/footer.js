// @author Rodrigo Ribeiro - me@rodrigo3d.com

import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <footer className="text-muted">
      <br /><br /><br />
      <div className="container">
        <p className="float-right">
          <Link to="#">Back to top</Link>
        </p>
        <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
        <p>New to Bootstrap? <Link to="../../">Visit the homepage</Link> or read our <Link to="../../getting-started/">getting started guide</Link>.</p>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </footer>
  )
}

export default Footer
