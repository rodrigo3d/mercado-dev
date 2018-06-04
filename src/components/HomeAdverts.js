// @author Rodrigo Ribeiro - me@rodrigo3d.com

import React from 'react'
import { Link } from 'react-router-dom'

const HomeAdverts = ({anuncio}) => {
  return (
    <div className="col-lg-4 portfolio-item">
      <div className="card h-100">
        <Link to={`/categories/${anuncio.categoria}/${anuncio.key}`}><img className="card-img-top" src={anuncio.foto} alt="Foto" height="240" /></Link>
        <div className="card-body">
          <h4 className="card-title">
            <Link to={`/categories/${anuncio.categoria}/${anuncio.key}`}>{anuncio.nome}</Link>
          </h4>
          <h5>R$ {anuncio.preco}</h5>
          <p className="card-text">{anuncio.descricao}</p>
        </div>
      </div>
    </div>
  )
}

export default HomeAdverts
