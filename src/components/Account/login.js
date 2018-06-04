/**
 * Minhas Séries
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://mercado-dev.rodrigo3d.com
 * @see https://github.com/rodrigo3d/mercado-dev
 */

import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import base, { storage, auth } from '../../config/base'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      anuncios: {},
      isLoading: false,

      isAuthing: true,
      isLoggedIn: false,
      user: null
    }

    this.email = null;
    this.passwd = null;

    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {




  }

  handleLogin(event) {

    auth
    .signInWithEmailAndPassword(this.refs.email.value,this.refs.passwd.value)
    .then((user) => {
        this.setState({
            isLogging:false,
            error:false,
            isLoggedIn:true
        });

        console.log('logged in',user);
    })
    .catch(error => {
        console.log('error',error);
        this.setState({
            isLogging:false,
            error:true
        });
    })
    event.preventDefault()
  }

  render() {
    return (
      <div className="container mb-5">
        <h1 className="mt-4 mb-3">Login
        <small>&nbsp;</small>
        </h1>

        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/Login">Login</Link>
          </li>
          <li className="breadcrumb-item active">Admin</li>
        </ol>

        <div className="row">
          <div className="col-lg-4">
          </div>
          <div className="col-lg-4">
            <form onSubmit={this.handleLogin}>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" ref="email" id="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="passwd">Senha</label>
                <input type="text" className="form-control" ref="passwd" id="passwd" placeholder="Senha" />
              </div>

              <button type="submit" className="btn btn-primary btn-block">Salvar</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


export default Login
