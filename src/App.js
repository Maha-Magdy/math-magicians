/* eslint-disable class-methods-use-this */
/* eslint-disable  no-unused-vars */

import React from 'react';
import './App.css';
import Calculator from './components/Calculator.js';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Calculator/>
      </div>
    );
  }
}
