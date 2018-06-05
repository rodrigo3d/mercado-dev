/**
 * React App Starter
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://react-app-starter.rodrigo3d.com
 * @see https://github.com/rodrigo3d/react-app-starter
 */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Footer } from '../Partials/footer'
import Header from '../Partials/header'

import HomePage from '../Home'


class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Route exact path="/" component={() => <HomePage />} />
      </div>
      </Router>
    );
  }
}

export default App;
