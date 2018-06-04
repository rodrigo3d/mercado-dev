/////////////////////////////////////////////////
// @package Mercado Dev
//
// @author Rodrigo Ribeiro - me@rodrigo3d.com
/////////////////////////////////////////////////

import React from 'react'
import { Link } from 'react-router-dom'

const Contact = (props) => {
  return (
    <div className="container mb-5">

      <h1 className="mt-4 mb-3">Contato
        <small> &nbsp;</small>
      </h1>

      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Contato</li>
      </ol>

      <div className="row">
        {
          props.match.params.return &&
          <div className="col-lg-12">
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">Well done!</h4>
              <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
              <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </div>
          </div>
        }

        <div className="col-lg-8 mb-4">
          <img className="card-img-top" src="http://www.thehindubusinessline.com/multimedia/dynamic/01199/googlemaps_1199833f.jpg" alt="Foto" height="400" />
        </div>

        <div className="col-lg-4 mb-4">
          <h3>Detalhes do contato</h3>
          <p><i className="fa fa-map-marker"></i>
             &nbsp;81900-090
            <br />Curitiba - PR - Brasil
            <br />
          </p>
          <p>
            <abbr title="Phone"><i className="fa fa-phone"></i></abbr> +55 41 995511894
          </p>
          <p>
            <abbr title="Email"><i className="fa fa-envelope-o"></i></abbr> <a href="mailto:me@rodrigo3d.com">me@rodrigo3d.com</a>
          </p>
          <p>
            <abbr title="Hours"><i className="fa fa-calendar-o"></i></abbr> Segunda - Sexta: 8:00 as 18:00
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">

          <h3>Envie uma mensagem</h3>

          <form name="sentMessage" id="contactForm" method="POST" action="https://formspree.io/me@rodrigo3d.com" >
            <input type="hidden" name="_subject" value="[Formulário de Contato] - MercadoDev" />
            <input type="hidden" name="_language" value="pt" />
            <input type="hidden" name="_next" value="http://localhost:3000/contact" />

            <div className="control-group form-group">
              <div className="controls">
                <label>Nome:</label>
                <input type="text" className="form-control" name="name" id="name" required="required" />
                <p className="help-block"></p>
              </div>
            </div>

            <div className="control-group form-group">
              <div className="controls">
                <label>Telefone:</label>
                <input type="tel" className="form-control" name="phone" id="phone" required="required" />
                <div className="help-block"></div>
              </div>
            </div>

            <div className="control-group form-group">
              <div className="controls">
                <label>Email:</label>
                <input type="email" className="form-control" name="email" id="email" required="required" />
                <div className="help-block"></div>
              </div>
            </div>

            <div className="control-group form-group">
              <div className="controls">
                <label>Mensagem:</label>
                <textarea rows="10" cols="100" className="form-control" name="message" id="message" required="required" maxLength="999" style={{ resize: "none" }}></textarea>
                <div className="help-block"></div>
              </div>
            </div>

            <div id="success"></div>
            <button type="submit" className="btn btn-primary" id="sendMessageButton">Enviar Mensagem</button>
          </form>

        </div>
      </div>

    </div>
  )
}

export default Contact
