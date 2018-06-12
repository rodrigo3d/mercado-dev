/**
 * Mercado Dev
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://mercado-dev.rodrigo3d.com
 * @see https://github.com/rodrigo3d/mercado-dev
 */

import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    return (

      <div role="main">

        <div className="container marketing">
          <hr className="featurette-divider" />
        </div>


        <div className="container mt-4 mb-5 py-5 bg-light">



          <h1 className="mt-4 mb-3">Sobre
          <small> &nbsp; {JSON.stringify(this.props)}</small>
          </h1>

          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">Sobre</li>
          </ol>

          <div className="row">

            <div className="col-lg-6">
              <img className="img-fluid rounded mb-4" src="http://placehold.it/750x450" alt="" />
            </div>

            <div className="col-lg-6">
              <h2>About Modern Business</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
              Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!
            </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
              Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!
            </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
              Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!
            </p>
            </div>

          </div>

          <h2>Tecnologias</h2>
          <hr />
          <div className="row mt-4">
            <div className="col-lg-4 mb-4">
              <div className="card h-100 text-center">
                <img className="card-img-top" src="http://placehold.it/750x450" alt="" height={210} />
                <div className="card-body">
                  <h4 className="card-title">Team Member</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Position</h6>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
                </p>
                </div>
                <div className="card-footer">
                  <Link to="#">name@example.com</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100 text-center">
                <img className="card-img-top" src="http://placehold.it/750x450" alt="" height={210} />
                <div className="card-body">
                  <h4 className="card-title">Team Member</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Position</h6>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
              </p>
                </div>
                <div className="card-footer">
                  <Link to="#">name@example.com</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100 text-center">
                <img className="card-img-top" src="http://placehold.it/750x450" alt="" height={210} />
                <div className="card-body">
                  <h4 className="card-title">Team Member</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Position</h6>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                </div>
                <div className="card-footer">
                  <Link to="#">name@example.com</Link>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>
    );
  };
};

export default withRouter(About);
