// @author Rodrigo Ribeiro - me@rodrigo3d.com

import React, { Component } from 'react'
import base from '../config/base'
import HomeAdverts from './HomeAdverts'
import CategoryLinks from './CategoryLinks'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      anuncios: {},
      categorias: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    base.bindToState('categorias', {
      context: this,
      asArray: true,
      state: 'categorias'
    })

    base.fetch('anuncios', {
      context: this,
      asArray: true,
      queries: {
        limitToLast: 3
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
    let index = 0
    return (
      <section style={{backgroundColor: '#fcfcfc'}}>
        <header>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active" style={{backgroundImage: 'url(/images/background.png)'}}>
                <div className="carousel-caption d-none d-md-block">
                  <h3 className="text-center">
                    <img src="/images/logo.png" className="App-logo" alt="logo" width="200" />
                  </h3>
                  <a className="btn btn btn-warning btn-lg" role="button" href="/admin/adverts/create">Anuncie Grátis »</a>
                  <p>&nbsp;</p>
                </div>
              </div>
              <div className="carousel-item" style={{ backgroundImage: 'url(/images/black-friday.png)' }}>
                <div className="carousel-caption d-none d-md-block">
                  <h3>&nbsp;</h3>
                  <p>&nbsp;</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </header>
        <div className="container mb-5 mt-5">
          {
            this.state.isLoading &&
            <div className="row">
              <div className="col-lg-12">
                <p className="text-center">
                  <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-secondary" aria-hidden="true"></i>
                </p>
              </div>
            </div>
          }
          <div className="row">
            {
              !this.state.isLoading && Object.keys(this.state.anuncios).map(key => {
                const anuncio = this.state.anuncios[key]
                return <HomeAdverts anuncio={anuncio} key={key} />
              })
            }
          </div>
          {
            !this.state.isLoading &&
            <div className="row">
              <div className="col-lg-12 text-center">
                <h3>Categorias</h3>
              </div>
            </div>
          }
          <hr />
          <div className="row">
            {
              !this.state.isLoading && this.state.categorias.map((cat, indice) => {
                return [
                  <CategoryLinks categoria={cat} key={indice} />,
                  ++index % 4 === 0 && <div key={'c' + indice} className="w-100"></div>
                ]
              })
            }
          </div>
        </div>
      </section>
    )
  }
}

export default Home
