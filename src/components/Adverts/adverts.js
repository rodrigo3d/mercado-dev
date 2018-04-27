/**
 * Mercado Dev
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://mercado-dev.rodrigo3d.com
 * @see https://github.com/rodrigo3d/mercado-dev
 */

import React from 'react'
import { Link } from 'react-router-dom'

const Adverts = ({ ad, id, height }) => {
  return (
    <div className="card mb-4 box-shadow">
      <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src={ad.photo} data-holder-rendered="true" style={{ height: { height } + "px", width: "100%", display: "block" }} />
      <div className="card-body">
        <h5 className="card-title"><Link to={`/adverts/${id}`}>{ad.name}</Link></h5>
        <p className="card-text">{ad.description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">R$ {ad.price}</button>
            &nbsp;
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-sm btn-outline-secondary">R$ {ad.price}</button>
          <button className="btn btn-sm btn-outline-secondary"><i className="fa fa-home" aria-hidden="true"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Adverts
