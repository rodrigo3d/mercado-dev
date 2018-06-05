/**
 * React App Starter
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://react-app-starter.rodrigo3d.com
 * @see https://github.com/rodrigo3d/react-app-starter
 */

import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../Config/routes'

/*
class Header extends React.Component {
  render() {
    return (
      <header>
          <div className="container d-flex- justify-content-between-">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <Link className="navbar-brand" to={`/`} >Carousel</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">Link</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link disabled" to="#">Disabled</Link>
                  </li>
                </ul>
                <form className="form-inline mt-2 mt-md-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
            </nav>
          </div>
      </header>

    );
  }
}

export default Header;

*/

/*
const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/"><img src={'/assets/img/logo2.png'} alt="Logo" height={34} /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">Categorias</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="#">Disabled</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</Link>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <Link className="dropdown-item" to={routes.ADMIN}>Admin</Link>
                <Link className="dropdown-item" to={routes.SIGN_IN}>SignIn</Link>
                <Link className="dropdown-item" to={routes.SIGN_UP}>SignUp</Link>
                <Link className="dropdown-item" to={routes.SIGN_OUT}>SignOut</Link>
                <Link className="dropdown-item" to="#">Something else here</Link>
              </div>
            </li>
          </ul>





          <form className="form-inline mt-2 mt-md-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header

*/


const Header = (props) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <div className="container">
        <Link className="navbar-brand" to="/"><img src="assets/img/logo2.png" alt="Logo" height={34} /></Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">Categorias</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Sobre</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contato</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="" id="navbarDropdownAdmin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Admin</Link>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownAdmin">
              <Link className="dropdown-item" to="/login">login</Link>
              <Link className="dropdown-item" to="/signup">signup</Link>
              <Link className="dropdown-item" to="/admin">admin</Link>
              <Link className="dropdown-item" to="/admin/adverts">Anúncios</Link>
              <Link className="dropdown-item" to="/admin/adverts/create">Novo Anúncio</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
