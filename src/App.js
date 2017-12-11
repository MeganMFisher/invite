import React, { Component } from 'react';
import router from './router';
import Header from './Components/Header/Header';
import './reset.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
      { router }
      </div>
    );
  }
}

export default App;
