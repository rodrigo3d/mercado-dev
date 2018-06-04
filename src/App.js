import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Header from './components/iHeader'
import Footer from './components/iFooter'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Categories from './components/Categories'
import Adverts from './components/Adverts'

import Admin from './components/Admin'

import LoginPage from './components/Account/login'
import SingUpPage from './components/Account/signup'


import AdvertsListing from './components/Admin/AdvertsListing'
import AdvertsCreate from './components/Admin/AdvertsCreate'
import AdvertsUpdate from './components/Admin/AdvertsUpdate'
import NotFound from './components/NotFound'

import * as routes from './config/routes'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      categorias: []

    }



  }

  render() {
    return (
      <Router>
        <div className="App">


          <Header />
          <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/categories' exact component={Categories} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/contact/:return' exact component={Contact} />
          <Route path='/categories/:urlCategories' exact component={Categories} />
          <Route path='/categories/:urlCategories/:urlProduct' exact component={Adverts} />

          <Route path={routes.ADMIN} exact component={Admin} />

          <Route path={routes.LOGIN} exact component={LoginPage} />
          <Route path={routes.SIGNUP} exact component={SingUpPage} />

          <Route path='/admin/adverts' exact component={AdvertsListing} />
          <Route path='/admin/adverts/create' exact component={AdvertsCreate} />
          <Route path='/admin/adverts/update/:idAdverts' exact component={AdvertsUpdate} />
          <Route path='/admin/adverts/delete/:idAdverts' exact component={AdvertsListing} />

          <Route component={NotFound} />

          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App
