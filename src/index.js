/**
 * React App Starter
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://react-app-starter.rodrigo3d.com
 * @see https://github.com/rodrigo3d/react-app-starter
 */

import React from 'react';
import ReactDOM from 'react-dom';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'font-awesome/css/font-awesome.css';
// import './index.css';

import "./carousel.css";

import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
