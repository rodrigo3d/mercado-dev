// @author Rodrigo Ribeiro - me@rodrigo3d.com

import React from 'react'
import { Link } from 'react-router-dom'

const HomeCategories = ({categoria}) => {
  return (
    <Link to={`/categories/${categoria.url}`} className="btn btn-outline-secondary h-100 m-2 col-sm">
      <i className={`fa ${categoria.icon} fa-4x`} aria-hidden="true"></i><br />
      {categoria.categoria}
    </Link>
  )
}

export default HomeCategories
