// @author Rodrigo Ribeiro - me@rodrigo3d.com

import React, { Component } from 'react';
import base from '../../Firebase';


// import HomeAdverts from './adverts'
// import HomeHeader from './header'
// import HomeCategories from './categories'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      anuncios: {},
      categorias: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    base.bindToState('categorias', {
      context: this,
      asArray: true,
      state: 'categorias'
    })

    base.fetch('anuncios', {
      context: this,
      asArray: true,
      queries: {
        limitToLast: 3
      }
    }).then(data => {
      this.setState({
        anuncios: data,
        isLoading: false
      })
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    let index = 0
    return (
      <section style={{backgroundColor: '#fcfcfc'}}>
        {/*<HomeHeader />*/}
        <div className="container mb-5 mt-5">
          {
            this.state.isLoading &&
            <div className="row">
              <div className="col-lg-12">
                <p className="text-center">
                  <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-secondary" aria-hidden="true"></i>
                </p>
              </div>
            </div>
          }
          <div className="row">
            {
              // !this.state.isLoading && Object.keys(this.state.anuncios).map(key => {
              //   const anuncio = this.state.anuncios[key]
              //   return <HomeAdverts anuncio={anuncio} key={key} />
              // })
            }
          </div>
          {
            // !this.state.isLoading &&
            // <div className="row">
            //   <div className="col-lg-12 text-center">
            //     <h3>Categorias</h3>
            //   </div>
            // </div>
          }
          <hr />
          <div className="row">
            {
              // !this.state.isLoading && this.state.categorias.map((cat, indice) => {
              //   return [
              //     <HomeCategories categoria={cat} key={indice} />,
              //     ++index % 4 === 0 && <div key={'c' + indice} className="w-100"></div>
              //   ]
              // })
            }
          </div>
        </div>
      </section>
    )
  }
}

export default Home
