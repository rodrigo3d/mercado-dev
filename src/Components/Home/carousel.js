/**
 * React App Starter
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://react-app-starter.rodrigo3d.com
 * @see https://github.com/rodrigo3d/react-app-starter
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = (props) => {
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="first-slide img-fluid" src={`assets/img/home-bg.png`} alt="First slide" />
          <div className="container">
            <div className="carousel-caption text-center">
              <h1><img src={`assets/img/logo.png`} className="App-logo" alt="Logo" width="200" /></h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><Link className="btn btn-lg btn-warning" to="#" role="button">Anuncie Grátis</Link></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="second-slide img-fluid" src={`assets/img/home-bf-bg.png`} alt="Second slide" />
          <div className="container">
            <div className="carousel-caption">
              <h1>&nbsp;</h1>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Anterior</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Próximo</span>
      </a>
    </div>
  );
};

export default Carousel;
