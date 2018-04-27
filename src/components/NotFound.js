// @author Rodrigo Ribeiro - me@rodrigo3d.com

import React from 'react'
import { Link } from 'react-router-dom'

import Loading from './Partials/loading'
import * as routes from './../config/routes'

const NotFound = (props) => {
  return (
    <main className="py-5">
      <div className="container">
        <div className="row">
          <Breadcrumb />
        </div>
        <div className="row">
          <div class="col-md-12">
            <div className="jumbotron">
              <h1 className="display-1">404</h1>
              <p>A página que você está procurando não foi encontrada. Aqui estão alguns links úteis para recuperá-lo:</p>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Sobre</Link></li>
                <li><Link to="/contact">Contato</Link></li>
                <li>Contato</li>
                <li>
                  <small>Admin</small>
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
        </div>
      </div>
    </main >


  )
}

const Breadcrumb = (props) => {
  return (
    <div className="col-md-12">
      <h1>404 <small>Página não encontrada</small></h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to={routes.HOME}>Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">404</li>
        </ol>
      </nav>
    </div>
  )
}


export {
  Breadcrumb
}

export default NotFound
