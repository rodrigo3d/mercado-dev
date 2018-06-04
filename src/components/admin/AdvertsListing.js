/////////////////////////////////////////////////
// @package Mercado Dev
//
// @author Rodrigo Ribeiro - me@rodrigo3d.com
/////////////////////////////////////////////////

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import base from '../../config/base'

class ProductListing extends Component {

  constructor(props) {
    super(props)
    this.state = {
      anuncios: {},
      isLoading: false
    }
    this.submitDelete = this.submitDelete.bind(this)
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    base.fetch('anuncios', {
      context: this,
      asArray: true
    }).then(data => {
      this.setState({
        anuncios: data,
        isLoading: false
      })
    }).catch(error => {
      console.log(error)
    })
  }

  componentWillUnmount() {
    
  }

  submitDelete(event) {
    //const id = this.refs.id
    //alert(id)
    //const email = event.target.href
    const email2 = this.props.match.params.idAdverts
    console.log(email2)

    //   this.ref = base.syncDoc('users/user-1-doc',
    //   context: this,
    //   state: 'users'
    // );

    base.remove('anuncios/' + email2)
      .then(() => {
        alert(123)
      }).catch(error => {
        //handle error
      });

    // confirmAlert({
    //   title: 'Confirm to submit',                        // Title dialog
    //   message: 'Are you sure to do this.',               // Message dialog
    //   childrenElement: () => <div>Custom UI</div>,       // Custom UI or Component
    //   confirmLabel: 'Confirm',                           // Text button confirm
    //   cancelLabel: 'Cancel',                             // Text button cancel
    //   onConfirm: () => {
    //     //alert(email)

    //   },    // Action after Confirm
    //   onCancel: () => {
    //     event.preventDefault()
    //   },      // Action after Cancel
    // })

    //event.preventDefault()
  }

  render() {
    return (
      <div className="container">
        <h1 className="mt-4 mb-3">Produtos
          <small> &nbsp;</small>
        </h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Admin</Link>
          </li>
          <li className="breadcrumb-item active">Produtos</li>
        </ol>
        {JSON.stringify(this.props.match.params.idAdverts)}

        <div className="row">
          <div className="col-lg-12">
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th width="05%">#</th>
                  <th width="30%">Nome</th>
                  <th>Categoria</th>
                  <th>Foto</th>
                  <th>Vendedor</th>
                  <th>Telefone</th>
                  <th width="15%">Ações</th>
                </tr>
              </thead>
              <tbody>
                {
                  Object.keys(this.state.anuncios).map(key => {
                    const anuncio = this.state.anuncios[key]
                    return (
                      <tr key={key}>
                        <td></td>
                        <td>{anuncio.nome}</td>
                        <td>{anuncio.categoria}</td>
                        <td><Link to={`${anuncio.foto}`} target="_blank"><i className="fa fa-picture-o"></i></Link></td>
                        <td>{anuncio.vendedor}</td>
                        <td>{anuncio.telefone}</td>
                        <td>
                          <Link className="btn btn-primary btn-sm" to={`/admin/adverts/update/${anuncio.key}`}>Editar</Link>
                          &nbsp;
                          <a className="btn btn-danger btn-sm" name="del" href={`/admin/adverts/delete/${anuncio.key}`} onClick={this.submitDelete} >Excluir</a>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductListing
