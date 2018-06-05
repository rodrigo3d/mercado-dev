/**
 * React App Starter
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://react-app-starter.rodrigo3d.com
 * @see https://github.com/rodrigo3d/react-app-starter
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <footer className="container">
      <hr />
      <p className="float-right"><Link className="page-scroll" to="#page-top">Ir para o topo</Link></p>
      <p>© 2017-2018 Company, Inc. · <Link to="#">Privacy</Link> · <Link to="#">Terms</Link></p>
    </footer>
  );
};

class FooterApp extends React.Component {
  render() {
    return (
      <div>





        <footer className="text-muted">
          <div className="container">
            <p className="float-right">
              <a href="#">Back to top</a>
            </p>
            <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
            <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
          </div>
        </footer>

      </div>
    );
  }
}

export default FooterApp;

export {
  Footer,
}
