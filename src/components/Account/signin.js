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

class SignIn extends Component {
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
              {
                this.state.isLoading &&
                <Loading />
              }
          </div>

          <div className="row">
            <div className="col-md-12">
              123
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">

            </div>
            <div className="col-md-4">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="name" className="sr-only">Nome</label>
                      <input type="text" className="form-control" ref="name" id="name" placeholder="Nome" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="price">Preço</label>
                      <input type="number" className="form-control" ref="price" id="price" placeholder="Preço" />
                    </div>
                  </div>



                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="phone">Telefone</label>
                      <input type="text" className="form-control" ref="phone" id="phone" placeholder="Telefone" />
                    </div>
                  </div>
                  {
                    this.state.isSaving
                      ?
                      <div className="col-md-12">
                        <button type="button" className="btn btn-primary btn-block">Aguarde, processando <i className="fa fa-spinner fa-pulse" aria-hidden="true"></i></button>
                      </div>
                      :
                      <div className="col-md-12">
                        <button type="reset" className="btn btn-secondary pull-left">Limpar</button>
                        <button type="submit" className="btn btn-primary pull-right">Salvar</button>
                      </div>
                  }
                </div>
              </form>
            </div>
          </div>
        </div>


      </main >
    )
  }
}
const Breadcrumb = ({ url }) => {
  return (
    <div className="col-md-12">
      <h1>SignIn <small>&nbsp;</small></h1>
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

export default SignIn
