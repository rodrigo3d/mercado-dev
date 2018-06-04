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

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anuncios: {},
      isLoading: false,

      isAuthing: true,
      isLoggedIn: false,
      user: null
    }
  }

  componentDidMount() {

    auth.onAuthStateChanged(user => {
      console.log(user);
      this.setState({
          isAuthing: false,
          isLoggedIn: !!user,
          user: user
      })
  })


      }

  render() {

    if (this.state.isAuthing) {
      return <p>aguarde</p>
  }

  if (!this.state.isLoggedIn) {
      return <Redirect to='/login' />
  }
  else {

    return (
      <div className="container mb-5">
        <h1 className="mt-4 mb-3">Admin
        <small>&nbsp;</small>
        </h1>

        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/admin">Admin</Link>
          </li>
          <li className="breadcrumb-item active">Admin</li>
        </ol>

        <div className="row">
          <div className="col-lg-12">
            <p>Admin</p>
          </div>
        </div>
      </div>
    )
  }
}
}

export default Admin
