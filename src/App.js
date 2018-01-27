import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './header';
import Home from './home';
import Account from './Account';


class App extends Component {

  render() {
    return (
      <div>        
        <Router>
          <div>
            <Header />
            <main>  
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/account" component={Account} />
              </Switch>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
