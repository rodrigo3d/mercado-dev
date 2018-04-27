/**
 * Mercado Dev
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://mercado-dev.rodrigo3d.com
 * @see https://github.com/rodrigo3d/mercado-dev
 */

import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../config/routes'

const HomeHeader = (props) => {
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active" style={{ backgroundImage: 'url(assets/img/background.png)' }}>
          <div className="container">
            <div className="carousel-caption text-center">
              <h1><img src={`assets/img/logo.png`} className="App-logo" alt="Logo" width="200" /></h1>
              <p><Link className="btn btn-lg btn-warning" to={routes.ADMIN_CREATE} role="button"> Anuncie Grátis </Link></p>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/black-friday.png)' }}>
          <div className="container">
            <div className="carousel-caption">
              <h1>&nbsp;</h1>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

export default HomeHeader
