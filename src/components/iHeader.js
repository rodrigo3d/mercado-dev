// @author Rodrigo Ribeiro - me@rodrigo3d.com

import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <div className="container">
        <Link className="navbar-brand" to="/"><img src="/images/logo2.png" alt="Logo" height={34} /></Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">Categorias</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Sobre</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contato</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="" id="navbarDropdownAdmin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Admin</Link>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownAdmin">
                <Link className="dropdown-item" to="/admin/adverts">Anúncios</Link>
                <Link className="dropdown-item" to="/admin/adverts/create">Novo Anúncio</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
