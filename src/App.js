import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import Header from './components/Partials/header'
import Footer from './components/Partials/footer'

import SignInPage from './components/Account/signin'

import NotFound from './components/NotFound'

import Home from './components/Home'
import Categories from './components/Categories'
import AdvertsPage from './components/Adverts'

import AdminPage from './components/Admin'
import AdminCreatePage from './components/Admin/create'
import * as routes from './config/routes'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">


        <Header />
          <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/categories' exact component={Categories} />
          <Route path='/categories/:urlCategory' exact component={Categories} />
          <Route path='/adverts/:urlProduct' exact component={AdvertsPage} />

          <Route path={routes.SIGN_IN} exact component={SignInPage} />

          <Route path={routes.ADMIN} exact component={AdminPage} />
          <Route path={routes.ADMIN_CREATE} exact component={AdminCreatePage} />

           <Route component={NotFound} />
         </Switch>



          <Footer />
        </div>
      </Router>
    );
  }
}

export default App
