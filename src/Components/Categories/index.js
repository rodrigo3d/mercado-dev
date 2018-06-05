/**
 * React App Starter
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://react-app-starter.rodrigo3d.com
 * @see https://github.com/rodrigo3d/react-app-starter
 */

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import base from '../config/base'

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categorias: {},
      isLoading: false
    }
    this.submitSearch = this.submitSearch.bind(this)
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    base.fetch('categorias', {
      context: this,
      asArray: true,
      queries: {
        orderByChild: 'categoria'
      }
    }).then(data => {
      this.setState({
        categorias: data,
        isLoading: false
      })
    }).catch(error => {
      console.log(error)
    })
  }

  submitSearch(event) {
    alert('Putz, estou aprendendo as queries do Firebase ;(')
    event.preventDefault()
  }

  render() {
    return (
      <div className="col-lg-4">
        <div className="card mb-4">
          <h5 className="card-header">Procurar</h5>
          <div className="card-body">
            <form onSubmit={this.submitSearch}>
              <div className="input-group">
                <input type="text" className="form-control" ref="search" id="search" placeholder="" />
                <span className="input-group-btn">
                  <button className="btn btn-secondary" type="submit"> <i className="fa fa-search"></i></button>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="card my-4">
          <h5 className="card-header">Categorias</h5>
          {
            this.state.isLoading &&
            <div className="card-body text-center">
              <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-secondary" aria-hidden="true"></i>
            </div>
          }
          <ul className="list-group">
            {
              Object.keys(this.state.categorias).map(key => {
                const cat = this.state.categorias[key]
                return (
                  <li key={cat.url} className="list-group-item d-flex justify-content-between align-items-center">
                    <Link to={`/categories/${cat.url}`}>{cat.categoria}</Link>
                    <span className="badge badge-primary badge-pill">
                      10
                    </span>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="card my-4">
          <h5 className="card-header">Promoções</h5>
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
          Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
