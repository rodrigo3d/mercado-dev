/**
 * Mercado Dev
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://mercado-dev.rodrigo3d.com
 * @see https://github.com/rodrigo3d/mercado-dev
 */

import React, { Component } from 'react'
import base, { storage } from '../../config/base'
import { Link } from 'react-router-dom'
import * as routes from '../../config/routes'

import Loading from '../Partials/loading'


class AdminCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adverts: {},
      categories: {},
      isLoading: false,
      isSaving: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)

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


  handleSubmit(event) {
    this.setState({ isSaving: true })

    const file = this.refs.photo.files[0]
    const { name } = file
    const ref = storage.ref(name)

    ref.put(file)
      .then(img => {
        const addAdverts = {
          name: this.refs.name.value,
          category: this.refs.category.value,
          price: this.refs.price.value,
          photo: img.metadata.downloadURLs[0],
          description: this.refs.description.value,
          salesman: this.refs.salesman.value,
          phone: this.refs.phone.value
        }
        base.push('adverts', {
          data: addAdverts
        }).then(data => {
          this.setState({
            isSaving: false
          })
          this.props.history.push(`/adverts/${data.key}`)
        }).catch(error => {
          console.log(error)
        })
      })
    event.preventDefault()
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
            <div className="col-md-12">
              123
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <h5 className="card-header">Menu</h5>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <Link to={routes.ADMIN}>Lista</Link>
                    <span className="badge badge-primary badge-pill">10</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <Link to={routes.ADMIN_CREATE}>nOVO</Link>
                    <span className="badge badge-primary badge-pill">10</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Nome</label>
                      <input type="text" className="form-control" ref="name" id="name" placeholder="Nome" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="price">Preço</label>
                      <input type="number" className="form-control" ref="price" id="price" placeholder="Preço" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="category">Categoria</label>
                      <select ref="category" id="category" className="form-control">
                        <option value="">Categoria</option>
                        {
                          Object.keys(this.state.categories).map(key => {
                            const cat = this.state.categories[key]
                            return (
                              <option key={key} value={cat.url}>{cat.title}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="photo">Foto</label>
                      <input type="file" className="form-control" ref="photo" id="photo" placeholder="Foto" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="description">Descrição</label>
                      <textarea className="form-control" ref="description" id="description" rows="3" placeholder="Descrição"></textarea>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="salesman">Vendedor</label>
                      <input type="text" className="form-control" ref="salesman" id="salesman" placeholder="Vendedor" />
                    </div>
                  </div>
                  <div className="col-md-6">
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
export default AdminCreate
