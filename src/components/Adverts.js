// @author Rodrigo Ribeiro - me@rodrigo3d.com

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import base from '../config/base'
import Sidebar from './iSidebar'

class Adverts extends Component {

  constructor(props) {
    super(props)
    this.state = {
      anuncios: {},
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    base.fetch('anuncios', {
      context: this,
      asArray: false,
      queries: {
        orderByKey: true,
        equalTo: this.props.match.params.urlProduct
      }
    }).then(data => {
      this.setState({
        anuncios: data,
        isLoading: false
      })
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="container mb-5">
        <h1 className="mt-4 mb-3">Anúncio
            <small> &nbsp;{JSON.stringify(this.props)}</small>
        </h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">Anúncio</li>
        </ol>
        <div className="row">
          <Sidebar />
          <div className="col-lg-8">
            {
              this.state.isLoading &&
              <div className="col-lg-12">
                <p className="text-center">
                  <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-secondary" aria-hidden="true"></i>
                </p>
              </div>
            }
            {
              !this.state.isLoading && Object.keys(this.state.anuncios).length === 0 &&
              <div className="col-lg-12">
                <div className="alert alert-warning" role="alert">
                  <h4 className="alert-heading">Well done!</h4>
                  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                  <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                </div>
              </div>
            }
            {
              Object.keys(this.state.anuncios).map(key => {
                const anuncio = this.state.anuncios[key]
                return (
                  <div key={key} className="card">
                    <img className="card-img-top" src={anuncio.foto} alt="Foto" height="400" />
                    <div className="card-body">
                      <h3 className="card-title">{anuncio.nome}</h3>
                      <h4>R$ {anuncio.preco}</h4>
                      <p className="card-text">{anuncio.descricao}</p>
                      <span className="text-warning">★ ★ ★ ★ ☆ </span>
                      4.0 estrelas
                      </div>
                  </div>
                )
              })
            }
            {
              Object.keys(this.state.anuncios).length !== 0 &&
              <div className="card card-outline-secondary my-4">
                <div className="card-header">
                  Revisão de produtos
                  </div>
                <div className="card-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                  <small className="text-muted">Postado por Anonymous em 17/03/17</small>
                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                  <small className="text-muted">Postado por Anonymous em 17/03/17</small>
                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                  <small className="text-muted">Postado por Anonymous em 17/03/17</small>
                  <hr />
                  <Link to="#" className="btn btn-success">Deixe uma revisão</Link>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Adverts
