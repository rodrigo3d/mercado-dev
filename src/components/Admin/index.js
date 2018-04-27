/**
 * Mercado Dev
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://mercado-dev.rodrigo3d.com
 * @see https://github.com/rodrigo3d/mercado-dev
 */

import React, { Component } from 'react'
import base, { auth } from '../../config/base'
import { Link } from 'react-router-dom'
import Loading from '../Partials/loading'
import * as routes from '../../config/routes'

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adverts: {},
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

    //   if (this.state.isAuthing) {
    //     return <p>aguarde</p>
    // }


  if (!this.state.isLoggedIn) {
     //this.props.history.push('/signin')
}
    return (

      <main className="py-5">
        <div className="container">


          <div className="row">
            <Breadcrumb url={this.props.match.params.urlCategory} />
          </div>
          <div className="row">
            <div className="col-md-12">

              123
            </div>
          </div>

          <div className="row">
              {
                this.state.isAuthing &&
                <Loading />
              }
          </div>

        </div>


      </main >
    )
  }
}
const Breadcrumb = ({ url }) => {
  return (
    <div className="col-md-12">
      <h1>Admin <small>&nbsp;</small></h1>
      <nav aria-label="breadcrumb">
        {
          !url
            ?
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to={routes.ADMIN}>Admin</Link></li>
              <li className="breadcrumb-item active" aria-current="page">AdminAdmin</li>
            </ol>
            :
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to={routes.HOME}>Home</Link></li>
              <li className="breadcrumb-item"><Link to={routes.ADMIN}>Admin</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{url}</li>
            </ol>
        }
      </nav>
    </div>
  )
}

export {
  Breadcrumb
}

export default Admin
