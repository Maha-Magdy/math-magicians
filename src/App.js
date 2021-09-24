/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */

import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator.js';
import calculate from './logic/calculate.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      dataObj: {},
      CalculatorScreen: 0,
    };
  }

  handleClick = (event) => {
    const buttonValue = event.target.innerText;
    this.setState(
      (state) => ({
        dataObj: calculate(state.dataObj, buttonValue),
      }),
      function () {
        let CalculatorScreen;

        if (this.state.dataObj.next == null && this.state.dataObj.total == null) {
          CalculatorScreen = 0;
        } else if (this.state.dataObj.next) {
          CalculatorScreen = this.state.dataObj.next;
        } else {
          CalculatorScreen = this.state.dataObj.total;
        }

        this.setState({
          CalculatorScreen,
        });
      },
    );
  };

  render() {
    return (
      <div className="App">
        <Calculator handleClick={this.handleClick} CalculatorScreen={this.state.CalculatorScreen}/>
      </div>
    );
  }
}
