import React, { Component } from 'react';
import {Link} from 'react-router-dom'
//import './App.css';

class header  extends Component {


  render() {
    return (

      <div className="main-menu">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Link to="/" >
                <div className="white menu-title">
                  Identity
                </div>
               </Link>
            </div>
          </div>
        </div>
      </div>
  
    );
  }
}

export default header;
