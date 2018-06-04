/**
 * Mercado Dev
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://mercado-dev.rodrigo3d.com
 * @see https://github.com/rodrigo3d/mercado-dev
 */

import React from 'react'
import * as routes from '../../config/routes'

const HomeHeader = (props) => {
  return (
    <header>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active" style={{ backgroundImage: 'url(assets/img/background.png)' }}>
            <div className="carousel-caption d-none d-md-block">
              <h3 className="text-center">
                <img src={`assets/img/logo.png`} className="App-logo" alt="logo" width="200" />
              </h3>
              <a className="btn btn btn-warning btn-lg" role="button" href={routes.ADVERTS_CREATE}>Anuncie Grátis »</a>
              <p>&nbsp;</p>
            </div>
          </div>
          <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/black-friday.png)' }}>
            <div className="carousel-caption d-none d-md-block">
              <h3>&nbsp;</h3>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Anterior</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Próximo</span>
        </a>
      </div>
    </header>
  )
}

export default HomeHeader
