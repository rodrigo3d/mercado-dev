// @author Rodrigo Ribeiro - me@rodrigo3d.com

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import base from '../config/base'
import Sidebar from './iSidebar'
import CategoryAdverts from './CategoryAdverts'

class Categories extends Component {

  constructor(props) {
    super(props)
    this.state = {
      anunciosCat: {},
      anunciosAll: {},
      isLoading: false
    }
    this.loadAnunciosCat = this.loadAnunciosCat.bind(this)
    this.loadAnunciosCat(this.props.match.params.urlCategories)
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    base.fetch('anuncios', {
      context: this,
      asArray: true
    }).then(data => {
      this.setState({
        anunciosAll: data,
        isLoading: false
      })
    }).catch(error => {
      console.log(error)
    })
  }

  loadAnunciosCat(urlCategoria) {
    urlCategoria = urlCategoria ? urlCategoria : ''
    base.fetch('anuncios', {
      context: this,
      asArray: false,
      queries: {
        orderByChild: 'categoria',
        equalTo: urlCategoria
      }
    }).then(data => {
      this.setState({
        anunciosCat: data
      })
    }).catch(error => {
      console.log(error)
    })
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.urlCategories) {
      if (this.categoria !== newProps.match.params.urlCategories) {
        this.loadAnunciosCat(newProps.match.params.urlCategories)
      }
    }
  }

  render() {
    return (
      <div className="container mb-5">
        <h1 className="mt-4 mb-3">Categorias
          <small> &nbsp;</small>
        </h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">Categorias</li>
        </ol>
        <div className="row">
          <Sidebar />
          <div className="col-lg-8">
            <div className="row">
              {
                this.state.isLoading &&
                <div className="col-lg-12">
                  <p className="text-center">
                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-secondary" aria-hidden="true"></i>
                  </p>
                </div>
              }
              {
                !this.state.isLoading && this.props.match.params.urlCategories && Object.keys(this.state.anunciosCat).length === 0 &&
                <div className="col-lg-12">
                  <div className="alert alert-warning" role="alert">
                    <h4 className="alert-heading">Well done!</h4>
                    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                  </div>
                </div>
              }
              {
                this.props.match.params.urlCategories && Object.keys(this.state.anunciosCat).map(key => {
                  const anuncio = this.state.anunciosCat[key]
                  return <CategoryAdverts anuncio={anuncio} key={key} id={key} />
                })
              }
              {
                !this.props.match.params.urlCategories && Object.keys(this.state.anunciosAll).map(key => {
                  const anuncio = this.state.anunciosAll[key]
                  return <CategoryAdverts anuncio={anuncio} key={key} id={anuncio.key} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Categories
