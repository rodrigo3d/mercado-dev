/**
 * Mercado Dev
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://mercado-dev.rodrigo3d.com
 * @see https://github.com/rodrigo3d/mercado-dev
 */

import React from 'react';
import { HashRouter, BrowserRouter, Route } from 'react-router-dom';


import Footer from '../Partials/footer';


/*
class App extends React.Component {
  render() {
    return (
      <div className="App">
ss
      </div>
    );
  }
}

export default App;
*/

// import Footer from '../Partials/footer'
// import Header from '../Partials/header'

// import HomePage from '../Home'
// import SeriesPage from '../Series'

// import AccountPage from '../Account'
// import SignInPage from '../Account/signin'
// import SignUpPage from '../Account/signup'
// import ForgetPage from '../Account/forget'

// import AdminPage from '../Admin'

// import AdminListingGenresPage from '../Admin/Genres/listing'
// import AdminEditingGenresPage from '../Admin/Genres/editing'
// import AdminListingSeriesPage from '../Admin/Series/listing'
// import AdminEditingSeriesPage from '../Admin/Series/editing'
// import AdminListingStatusPage from '../Admin/Status/listing'
// import AdminEditingStatusPage from '../Admin/Status/editing'


// import Navigation from '../Navigation';
// import LandingPage from '../Landing';
// import SignUpPage from '../SignUp';
// import PasswordForgetPage from '../PasswordForget';
// import HomePage from '../Home';
// import AccountPage from '../Account';

// import TemplatePage from '../Template';

// import AdminUpdatePage from '../Admin/update';

import Header from '../Partials/header';

import HomePage from '../Home';


import CategoriesPage from '../Categories';

import AboutPage from '../About';

import ContactPage from '../Contact';

import EnvPage from '../ENV';


import withAuthentication from '../Session/withAuthentication'
import './App.css'

const App = () =>
  <HashRouter>
    <div role="main">

      <Header />
      <br /> <br /> <br />

      <main role="main">

        {/* <Route exact path="/" component={HomePage} /> */}

        <Route exact path="/categories" component={() => <CategoriesPage />} />

        <Route exact path="/about" component={() => <AboutPage />} />

        <Route exact path="/contact" component={() => <ContactPage />} />

        <Route exact path="/env" component={() => <EnvPage />} />


        <div className="container marketing">
          <hr className="featurette-divider" />
        </div>
      </main>
      <Footer />

      {/*
    <Header />
    <br /><br /><br />
    <Route exact path="/" component={() => <HomePage />} />
    <Route exact path="/series" component={() => <SeriesPage />} />
    <Route exact path="/series/genre/:genre" component={() => <SeriesPage />} />
    <Route exact path="/series/status/:status" component={() => <SeriesPage />} />

    <Route exact path="/account" component={() => <AccountPage />} />
    <Route exact path="/account/signin" component={() => <SignInPage />} />
    <Route exact path="/account/signup" component={() => <SignUpPage />} />
    <Route exact path="/account/forget" component={() => <ForgetPage />} />

    <Route exact path="/admin" component={() => <AdminPage />} />

    <Route exact path="/admin/genres/list" component={() => <AdminListingGenresPage />} />
    <Route exact path="/admin/genres/msg/:msg" component={() => <AdminListingGenresPage />} />
    <Route exact path="/admin/genres/create" component={() => <AdminEditingGenresPage />} />
    <Route exact path="/admin/genres/update/:id" component={() => <AdminEditingGenresPage />} />
    <Route exact path="/admin/series/list" component={() => <AdminListingSeriesPage />} />
    <Route exact path="/admin/series/msg/:msg" component={() => <AdminListingSeriesPage />} />
    <Route exact path="/admin/series/create" component={() => <AdminEditingSeriesPage />} />
    <Route exact path="/admin/series/update/:id" component={() => <AdminEditingSeriesPage />} />
    <Route exact path="/admin/status/list" component={() => <AdminListingStatusPage />} />
    <Route exact path="/admin/status/msg/:msg" component={() => <AdminListingStatusPage />} />
    <Route exact path="/admin/status/create" component={() => <AdminEditingStatusPage />} />
    <Route exact path="/admin/status/update/:id" component={() => <AdminEditingStatusPage />} />


    <br /><br /><br />
    <Footer />
  */}

    </div>

  </HashRouter>

export default withAuthentication(App)
