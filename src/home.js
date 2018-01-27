import React, { Component } from 'react';
import './App.css';

import {Link} from 'react-router-dom'

class Home extends Component {

  render() {
    return (
      <div>
        <div id="back-image">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="the-text">
                  <div className="subtitle  fs-35 ac avenyr-next">
                    Selecciona un servicio que desees utilizar
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">              
                <div className="flex-box">
                  <Link to="/account" >
                    <div className="item red white fs-20 transition">
                      Aeropuerto
                    </div>
                  </Link>
                  <Link to="/account" >
                  <div className="item yellow white fs-20 transition">
                    Banco
                  </div>
                    </Link>
                  <Link to="/account" >
                  <div className="item blue white fs-20 transition">
                    Firma
                  </div>
                    </Link>
                  <Link to="/account" >
                  <div className="item green white fs-20 transition">
                   Otro
                  </div>
                   </Link>
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>
    );
  }
}

export default Home;
