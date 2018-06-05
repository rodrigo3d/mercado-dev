/**
 * React App Starter
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://react-app-starter.rodrigo3d.com
 * @see https://github.com/rodrigo3d/react-app-starter
 */

import React from 'react';


import Footer from '../Partials/Footer'

import Carousel from './carousel';

class App extends React.Component {
  render() {
    return (







      <main role="main">
        <Carousel />



        <div className="container marketing">





          <hr className="featurette-divider" />



          <hr className="featurette-divider" />


        </div>

        <Footer />

      </main>



    );
  }
}

export default App;
