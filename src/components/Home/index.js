/**
 * Mercado Dev
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://mercado-dev.rodrigo3d.com
 * @see https://github.com/rodrigo3d/mercado-dev
 */

import React, { Component } from 'react'
import base from '../../config/base'
import { Link } from 'react-router-dom'

import Loading from '../Partials/loading'
import HomeHeader from './header'
import HomeAdverts from '../Adverts/adverts'
import * as routes from '../../config/routes'
import './App.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adverts: {},
      categories: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    base.bindToState('categories', {
      context: this,
      asArray: true,
      state: 'categories'
    })
    base.fetch('adverts', {
      context: this,
      asArray: true,
      queries: {
        limitToLast: 3
      }
    }).then(data => {
      this.setState({
        adverts: data,
        isLoading: false
      })
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    let index = 0
    return (
      <main>
        <HomeHeader />
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {
                this.state.isLoading &&
                <Loading />
              }
              {
                Object.keys(this.state.adverts).map(key => {
                  const ad = this.state.adverts[key]
                  return <div class="col-md-4"><HomeAdverts ad={ad} id={ad.key} /></div>
                })
              }
            </div>
          </div>
        </div>
        <div className="album- py-5">
          <div className="container">
            <section className="jumbotron text-center">
              <div className="container">
                <h1 className="jumbotron-heading">CATEGORIAS</h1>
                <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                <p>
                  <Link to={routes.CATEGORIES} className="btn btn-primary my-2"> Categorias </Link>
                </p>
              </div>
            </section>
          </div>
        </div>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {
                this.state.isLoading &&
                <Loading />
              }
              {
                this.state.categories.map((cat, indice) => {
                  return [
                    <Link to={`${routes.CATEGORIES}/${cat.url}`} className="btn btn-outline-secondary h-100 m-2 col-sm">
                      <i className={`fa ${cat.icon} fa-4x`} aria-hidden="true"></i><br />
                      {cat.title}
                    </Link>,
                    ++index % 4 === 0 && <div key={'c' + indice} className="w-100"></div>
                  ]
                })
              }
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Home
