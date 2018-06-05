/**
 * React App Starter
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://react-app-starter.rodrigo3d.com
 * @see https://github.com/rodrigo3d/react-app-starter
 */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Partials/header';

import HomePage from '../Home';
import CategoriesPage from '../Categories';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={() => <HomePage />} />
          <Route exact path="/categories" component={() => <CategoriesPage />} />
        </div>
      </Router>
    );
  };
};

export default App;
