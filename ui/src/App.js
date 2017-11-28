import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApplicationContainer from './App-container/app.container.js';
import Store from './store/store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <ApplicationContainer />
      </Provider>
    );
  }
}

export default App;
