/**
 * Mercado Dev
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://mercado-dev.rodrigo3d.com
 * @see https://github.com/rodrigo3d/mercado-dev
 */

import React from 'react';

const envs = process.env;
const envssss = process.env.REACT_APP_NODE_ENV
class ENV extends React.Component {
  render() {
    return (
      <template-component>


        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">

              {
             JSON.stringify(envssss)
              }




              <table className="table">
                <thead>
                  <tr className="text-left">
                    <th scope="col">#</th>
                    <th scope="col">Variavel</th>
                    <th scope="col">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Object.keys(envs).map(key => {
                      return (
                        [
                          <tr className="text-left">
                            <th scope="row">1</th>
                            <td>{key}</td>
                            <td>{envs[key]}</td>
                          </tr>
                        ]

                      )
                    })
                  }
                </tbody>
              </table>

            </div>
          </div>
        </div>

        <div className="container marketing">
          <hr className="featurette-divider" />
        </div>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">

              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="" />
                  <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="container marketing">
          <hr className="featurette-divider" />
        </div>

      </template-component>
    );
  }
}

export default ENV;
