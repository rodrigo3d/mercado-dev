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

class CategoriesSidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: {},
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    base.fetch('categories', {
      context: this,
      asArray: true,
      queries: {
        orderByChild: 'title'
      }
    }).then(data => {
      this.setState({
        categories: data,
        isLoading: false
      })
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div class="col-md-4">
        <div className="card">
          <h5 className="card-header">Procurar</h5>
          <div className="card-body">
            <form onSubmit={this.submitSearch}>
              <div className="input-group">
                <input type="text" className="form-control" name="search" id="search" placeholder="" />
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
              Object.keys(this.state.categories).map(key => {
                const category = this.state.categories[key]
                return (
                  <li key={category.url} className="list-group-item d-flex justify-content-between align-items-center">
                    <Link to={`/categories/${category.url}`}>{category.title}</Link>
                    <span className="badge badge-primary badge-pill">10</span>
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

export default CategoriesSidebar
