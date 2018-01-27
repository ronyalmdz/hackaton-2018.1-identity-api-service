import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import './App.css';

class Account extends Component {
 constructor(props){
    super(props)
    this.state = {
      delay: 300,
      result: '',
      dataQr: [],
    }
    this.handleScan = this.handleScan.bind(this)

  }
  handleScan(data){
    if(data){
      this.setState({
        result: data,
      })
      this.getData()
    }

  }
  handleError(err){
    console.error(err)
  }
  
  getData(){
    fetch('http://192.168.10.207:1337/store/'+this.state.result)
     .then((response) => {
       return response.json()
     })
     .then((data) => {
       this.setState({ dataQr: data })      
       console.log(this.state.dataQr.firstName)        
     })
     .catch(err => /* handle errors here */ console.error(err))
  }

  render() {
    return (
      <div>
        <div id="back-image">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="the-text">
                  <div>
                    <QrReader
                      delay={this.state.delay}
                      onError={this.handleError}
                      onScan={this.handleScan}
                      style={{ width: '100%' }}
                      />
                   
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-md-offset-2">
                <div className="the-text fs-25">
                  Acerca tu código a la camara de tu computadora para poder recibir tus datos.  
                </div>
                <div className="m50 fs-18">
                   <p>{this.state.result}</p>
                  <p> Nombre: {this.state.dataQr.firstName}</p>
                  <p> Apellido: {this.state.dataQr.lastName}</p>
                  <p> Fecha de nacimiento: {this.state.dataQr.birthDate}</p>
                  <p> DUI: {this.state.dataQr.dui}</p>
                  <p> Pasaporte: {this.state.dataQr.passport}</p>
                </div>
              </div>
            </div>           
          </div>
         </div>
      </div>
    );
  }
}

export default Account;
