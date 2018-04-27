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
import * as routes from '../../config/routes'

import CategoriesAdverts from '../Adverts/adverts'


class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adverts: {},
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })

    base.fetch('adverts', {
      context: this,
      asArray: true
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
    return (
      <main className="py-5">
        <div className="container">
          <div className="row">
            <div class="col-md-12">
              123
            </div>
          </div>
          <div className="row">
            <div class="col-md-3">
              <div className="card">
                <h5 className="card-header">Menu</h5>
                <ul className="list-group">
                  <li key="" className="list-group-item d-flex justify-content-between align-items-center">
                    <Link to={routes.ADMIN}>Lista</Link>
                    <span className="badge badge-primary badge-pill">10</span>
                  </li>
                  <li key="" className="list-group-item d-flex justify-content-between align-items-center">
                    <Link to={routes.ADMIN_CREATE}>nOVO</Link>
                    <span className="badge badge-primary badge-pill">10</span>
                  </li>
                </ul>
              </div>

            </div>
            <div class="col-md-9">
              {
                this.state.isLoading &&
                <div className="card-body text-center">
                  <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-secondary" aria-hidden="true"></i>
                </div>
              }
              <div className="row">
                <table class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Nome</th>
                      <th scope="col">Foto</th>
                      <th scope="col">Vendedor</th>
                      <th scope="col">Telefone</th>
                      <th scope="col">Handle</th>
                      </tr>
                  </thead>
                  <tbody>

                    {
                      Object.keys(this.state.adverts).map(key => {
                        const ad = this.state.adverts[key]
                        return <tr>
                          <td scope="row">{ad.name}</td>
                      <td><Link to={`${ad.photo}`} target="_blank"><i className="fa fa-picture-o"></i></Link></td>
                          <td>{ad.salesman}</td>
                          <td>{ad.phone}</td>
                          <td>
                          <button className="btn btn-sm btn-outline-secondary"><i className="fa fa-home" aria-hidden="true"></i></button>
                          <button className="btn btn-sm btn-outline-secondary"><i className="fa fa-home" aria-hidden="true"></i></button>
                          <button className="btn btn-sm btn-outline-secondary"><i className="fa fa-home" aria-hidden="true"></i></button>
                          </td>
                        </tr>
                      })
                    }


                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


      </main >
    )
  }
}

export default Admin
