/* eslint-disable class-methods-use-this */

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
