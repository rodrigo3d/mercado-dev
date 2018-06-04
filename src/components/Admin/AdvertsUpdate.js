// @author Rodrigo Ribeiro - me@rodrigo3d.com


import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import base, { storage } from '../../config/base'

class ProductUpdate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      categorias: {},
      anuncios: {},
      isLoading: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
 
  }

  componentDidMount() {

    const id = this.props.match.params.idAdverts
    base.fetch('anuncios/' + id, {
      context: this,
      asArray: false,
    }).then(data => {
      this.setState({
        anuncios: data
      })
      this.refs.categoria.value = data.categoria
      this.refs.descricao.value = data.descricao
      this.refs.fotoDefault.value = data.foto
      this.refs.nome.value = data.nome
      this.refs.preco.value = data.preco
      this.refs.telefone.value = data.telefone
      this.refs.vendedor.value = data.vendedor
    }).catch(error => {
      console.log(error)
    })

    base.fetch('categorias', {
      context: this,
      asArray: true,
      queries: {
        orderByChild: 'categoria'
      }
    }).then(data => {
      this.setState({
        categorias: data
      })
    }).catch(error => {
      console.log(error)
    })

  }

  handleSubmit(event) {
    this.setState({ isLoading: true })

    const file = this.refs.foto.files[0]
    const { name } = file
    const ref = storage.ref(name)
    ref
      .put(file)
      .then(img => {
        const novoAnuncio = {
          nome: this.refs.nome.value,
          preco: this.refs.preco.value,
          descricao: this.refs.descricao.value,
          vendedor: this.refs.vendedor.value,
          telefone: this.refs.telefone.value,
          foto: img.metadata.downloadURLs[0],
          categoria: this.refs.categoria.value
        }
        base.post(`anuncios/${this.refs.key.value}`, {
          data: novoAnuncio
        }).then((err) => {
          this.setState({ isLoading: false })
        })
      })
    event.preventDefault()
  }

  render() {
    return (

      <div className="container mb-5">
        <h1 className="mt-4 mb-3">Editar Anúncio
        <small> &nbsp;</small>
        </h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Admin</Link>
          </li>
          <li className="breadcrumb-item active">Editar Anúncio</li>
        </ol>

        <div className="row">

        {
          this.state.isLoading &&
          <div className="col-lg-12">
            <div className="alert alert-info" role="alert">
              <strong>Heads up!</strong> Atualizando anuncio, por favor aguarde <i className="fa fa-spinner fa-pulse fa-fw" aria-hidden="true"></i>
            </div>
          </div>
        }

          <div className="col-lg-12">

            <form onSubmit={this.handleSubmit}>
              <input type="hidden" ref="key" defaultValue={this.props.match.params.idAdverts} />

              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" className="form-control" ref="nome" id="nome" placeholder="Nome" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="categoria">Categoria</label>
                    <select ref="categoria" id="categoria" className="form-control">
                      <option defaultValue=""></option>
                      {
                        Object.keys(this.state.categorias).map(key => {
                          const cat = this.state.categorias[key]
                          if (this.state.anuncios.categoria === cat.url) {
                            return (
                              <option key={key} defaultValue={cat.url} selected>{cat.categoria}</option>
                            )
                          }
                        })
                      }
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="preco">Preço</label>
                    <input type="number" className="form-control" ref="preco" id="preco" placeholder="Preço" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="foto">Foto</label>
                    <input type="hidden" ref="fotoDefault" />
                    <input type="file" className="form-control" ref="foto" id="foto" placeholder="Foto" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea className="form-control" ref="descricao" id="descricao" rows="3" placeholder="Descrição"></textarea>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="vendedor">Vendedor</label>
                    <input type="text" className="form-control" ref="vendedor" id="vendedor" placeholder="Vendedor" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="telefone">Telefone</label>
                    <input type="text" className="form-control" ref="telefone" id="telefone" placeholder="Telefone" />
                  </div>
                </div>
              </div>

              <button type="reset" className="btn btn-secondary pull-left">Limpar</button>
              <button type="submit" className="btn btn-primary pull-right">Atualizar</button>
            </form>
          </div>
        </div>

      </div>
    )
  }
}

export default ProductUpdate
