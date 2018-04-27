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
import * as routes from '../../config/routes'

import HomeAdverts from '../Adverts/adverts'
import CategoriesSidebar from './sidebar'

class Adverts extends Component {
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
      asArray: true,
      queries: {
        orderByKey: true,
        equalTo: this.props.match.params.urlProduct
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
    return (
      <main className="py-5">
        <div className="container">
          <div className="row">
            <Breadcrumb url={this.props.match.params.urlProduct} />
          </div>
          <div className="row">
            {
              this.state.isLoading &&
              <Loading />
            }
          </div>
          <div className="row">
            {
              !this.state.isLoading &&
              <CategoriesSidebar />
            }
            <div class="col-md-8">
              {
                !this.state.isLoading && Object.keys(this.state.adverts).map(key => {
                  const ad = this.state.adverts[key]
                  return <HomeAdverts ad={ad} id={ad.key} />
                })
              }
              {
                !this.state.isLoading &&
                <AdvertsCard />
              }
            </div>
          </div>
        </div>
      </main >
    )
  }
}

const AdvertsCard = (props) => {
  return (
    <div className="card card-outline-secondary my-4">
      <div className="card-header">Revisão de produtos</div>
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
  )
}

const Breadcrumb = ({ url }) => {
  return (
    <div className="col-md-12">
      <h1>Anúncio <small>&nbsp;</small></h1>
      <nav aria-label="breadcrumb">
        {
          url &&
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to={routes.HOME}>Home</Link></li>
            <li className="breadcrumb-item"><Link to={routes.ADVERTS}>Anúncio</Link></li>
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

export default Adverts
