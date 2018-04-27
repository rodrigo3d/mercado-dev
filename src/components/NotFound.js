// @author Rodrigo Ribeiro - me@rodrigo3d.com

import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = (props) => {
  return (
    <div className="container mb-5">
      <h1 className="mt-4 mb-3">404
      <small> Página não encontrada</small>
      </h1>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">404</li>
      </ol>
      <div className="jumbotron">
        <h1 className="display-1">404</h1>
        <p>A página que você está procurando não foi encontrada. Aqui estão alguns links úteis para recuperá-lo:</p>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          <li>
            Admin
            <ul>
              <li><Link to="/admin/adverts">Anúncios</Link></li>
              <li><Link to="/admin/adverts/create">Novo Anúncio</Link></li>
            </ul>
          </li>
          <li>
            Outras Paginas
            <ul>
              <li><Link to="/404">Página 404</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NotFound
