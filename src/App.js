import React, { Component } from 'react';

import Main from './containers/Main';
import {Footer} from './components/Footer';
import logo_head from './assets/logo/logo_head.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo_head} className="head_logo" alt="merehead" />
        </header>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
