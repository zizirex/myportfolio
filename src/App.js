import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from './logo.svg';
import Header from './component/Header'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
      </div>
    );
  }
}

export default App;
