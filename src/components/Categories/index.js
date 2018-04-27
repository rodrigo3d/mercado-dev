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

import CategoriesSidebar from './sidebar'
import CategoriesAdverts from '../Adverts/adverts'

class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      advertsAll: {},
      advertsCat: {},
      isLoading: false
    }
    this.loadAdvertsCat = this.loadAdvertsCat.bind(this)
    this.loadAdvertsCat(this.props.match.params.urlCategory)
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    base.fetch('adverts', {
      context: this,
      asArray: true,
    }).then(data => {
      this.setState({
        advertsAll: data,
        isLoading: false
      })
    }).catch(error => {
      console.log(error)
    })
  }

  loadAdvertsCat(urlCategory) {
    this.setState({ isLoading: true })
    urlCategory = urlCategory ? urlCategory : '456'
    base.fetch('adverts', {
      context: this,
      asArray: false,
      queries: {
        orderByChild: 'category',
        equalTo: urlCategory
      }
    }).then(data => {
      this.setState({
        advertsCat: data,
        isLoading: false
      })
    }).catch(error => {
      console.log(error)
    })
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.urlCategory) {
      if (this.categoria !== newProps.match.params.urlCategory) {
        this.loadAdvertsCat(newProps.match.params.urlCategory)
      }
    }
  }

  render() {
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
            {
              !this.state.isLoading &&
              <CategoriesSidebar />
            }
            <div class="col-md-8">
              <div className="row">
                {
                  !this.props.match.params.urlCategory
                    ?
                    !this.state.isLoading && Object.keys(this.state.advertsAll).map(key => {
                      const ad = this.state.advertsAll[key]
                      return [
                        <div className="col-md-6" key={ad.key}>
                          <CategoriesAdverts ad={ad} id={ad.key} />
                        </div>
                      ]
                    })
                    :
                    !this.state.isLoading && Object.keys(this.state.advertsCat).map(key => {
                      const ad = this.state.advertsCat[key]
                      return [
                        <div className="col-md-6">
                          <CategoriesAdverts ad={ad} id={key} />
                        </div>
                      ]
                    })
                }
              </div>
              <div className="row">
                {
                  !this.state.isLoading && this.props.match.params.urlCategory && Object.keys(this.state.advertsCat).length === 0 &&
                  <div className="col-lg-12">
                    <div className="alert alert-warning" role="alert">
                      <h4 className="alert-heading">Well done!</h4>
                      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                      <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                    </div>
                  </div>
                }
              </div>
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
      <h1>Categorias <small>&nbsp;</small></h1>
      <nav aria-label="breadcrumb">
        {
          !url
            ?
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to={routes.HOME}>Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Categorias</li>
            </ol>
            :
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to={routes.HOME}>Home</Link></li>
              <li className="breadcrumb-item"><Link to={routes.CATEGORIES}>Categorias</Link></li>
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

export default Categories
