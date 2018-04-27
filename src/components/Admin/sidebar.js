/**
 * Mercado Dev
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://mercado-dev.rodrigo3d.com
 * @see https://github.com/rodrigo3d/mercado-dev
 */

import React from 'react'
import { Link } from 'react-router-dom'

const CategoriesAdverts = ({ ad, id }) => {
  return (
    <div className="card mb-4 box-shadow">
      <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162faad1296%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162faad1296%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7265625%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style={{ height: '225px', width: "100%", display: "block" }} />
      <div className="card-body">
        <h5 className="card-title"><Link to={`/adverts/${id}`}>{ad.name}</Link></h5>
        <p className="card-text">{ad.description}</p>
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

export default CategoriesAdverts
