// @author Rodrigo Ribeiro - me@rodrigo3d.com

import React from 'react'
import { Link } from 'react-router-dom'

const CategoryAdverts = ({ anuncio, id }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <Link to={`/categories/${anuncio.categoria}/${id}`}><img className="card-img-top" src={anuncio.foto} alt="Foto" height="160" /></Link>
        <div className="card-body">
          <h4 className="card-title">
            <Link to={`/categories/${anuncio.categoria}/${id}`}>{anuncio.nome}</Link>
          </h4>
          <h5>R$ {anuncio.preco}</h5>
          <p className="card-text">{anuncio.descricao}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
        </div>
      </div>
    </div>
  )
}

export default CategoryAdverts
