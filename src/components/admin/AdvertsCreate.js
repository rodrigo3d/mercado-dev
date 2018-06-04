/////////////////////////////////////////////////
// @package Mercado Dev
//
// @author Rodrigo Ribeiro - me@rodrigo3d.com
/////////////////////////////////////////////////

import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import base, { storage } from '../../config/base'

class AdvertsCreate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      categorias: {},
      anuncios: {},
      sucess: false,
      formType: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.setUpdate = this.setUpdate.bind(this)
    // this.checkForm = this.checkForm.bind(this)


    // this.checkForm()

  }

  componentDidMount() {


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




  handleSubmit(event) {
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
        base.push('anuncios', {
          data: novoAnuncio
        }).then((err) => {
          this.setState({ sucess: true })
        })
      })
    event.preventDefault()
  }

  render() {
    return (
      <div className="container mb-5">
        <h1 className="mt-4 mb-3">Novo Anúncio
          <small> &nbsp;</small>
        </h1>

        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/admin">Admin</Link>
          </li>
          <li className="breadcrumb-item active">Novo Anúncio</li>
        </ol>

        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={this.handleSubmit}>

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
                      <option value=""></option>
                      {
                        Object.keys(this.state.categorias).map(key => {
                          const cat = this.state.categorias[key]
                          return (
                            <option key={key} value={cat.url}>{cat.categoria}</option>
                          )
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
              <button type="submit" className="btn btn-primary pull-right">Salvar</button>
            </form>
          </div>
        </div>

      </div>
    )
  }
}

export default AdvertsCreate
