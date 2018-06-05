/**
 * Mercado Dev
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://mercado-dev.rodrigo3d.com
 * @see https://github.com/rodrigo3d/mercado-dev
 */

import React from 'react';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const Footer = (props) => {
  return (
      <div>
        <footer className="text-muted">
          <div className="container">
            <p className="float-right">
              <HashLink to="/#home-body" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Back to top</HashLink>
            </p>
            <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
            <p>New to Bootstrap? <Link to="../../">Visit the homepage</Link> or read our <Link to="../../getting-started/">getting started guide</Link>.</p>
          </div>
        </footer>
      </div>
  );
};

export default Footer;
