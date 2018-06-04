/**
 * Minhas Séries
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://mercado-dev.rodrigo3d.com
 * @see https://github.com/rodrigo3d/mercado-dev
 */

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../config/base'

const INITIAL_STATE = {
  error: null
};

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});


class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      anuncios: {},
      isLoading: false,

      isAuthing: true,
      isLoggedIn: false,
      user: null,
      isInvalid: false

    }
    //this.state = { ...INITIAL_STATE };


    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {



  }


  handleSignUp(event) {

    this.setState({
      isInvalid: true
    })
    //const username = this.refs.username.value
    const email = this.refs.email.value
    const passwdOne = this.refs.passwdOne.value


    auth.createUserWithEmailAndPassword(email, passwdOne)
      .then(authUser => {

        alert(authUser.uid)

        //   // Create a user in your own accessible Firebase Database too
        //   // db.doCreateUser(authUser.uid, username, email)
        //   //   .then(() => {
        //   //     this.setState(() => ({ ...INITIAL_STATE }));
        //   //     history.push('/');
        //   //   })
        //   //   .catch(error => {
        //   //     this.setState(updateByPropertyName('error', error));
        //   //   });

      })
      .catch(error => {
        console.log(error)
        //alert(error)
        // this.state = { ...INITIAL_STATE };

        // this.setState({
        //   error: error.message
        // })

        this.setState(updateByPropertyName('error', error.message));
        //this.setState(updateByPropertyName('error', null));
      });

    event.preventDefault();

  }

  render() {
    const username = this.refs.username
    const passwdOne = this.refs.passwdOne
    const passwdTwo = this.refs.passwdTwo



    return (
      <div className="container mb-5 text-center">
        <h1 className="mt-4 mb-3">SignUp
        <small>&nbsp;</small>
        </h1>
        <hr />
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/SignUp">SignUp</Link>
          </li>
          <li className="breadcrumb-item active">Admin</li>
        </ol>

        <div className="row">
          <div className="col-lg-4">
          </div>
          <div className="col-lg-4">

            {
              this.state.error &&
              <div className="alert alert-danger alert-dismissible" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <strong>Atenção!</strong> {this.state.error}
              </div>
            }

            <form onSubmit={this.handleSignUp}>
              <div className="form-group">
                <input type="text" className="form-control" ref="username" id="username" placeholder="Nome" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" ref="email" id="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" ref="passwdOne" id="passwdOne" placeholder="Senha" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" ref="passwdTwo" id="passwdTwo" placeholder="Confirmar Senha" />
              </div>
              <button type="submit" className="btn btn-primary btn-block" disabled={this.state.isInvalid}>Salvar</button>
            </form>

          </div>
        </div>
      </div>
    )
  }
}

SignUp.defaultProps = {
  base: 'dark'
}
export default SignUp
