/* eslint-disable class-methods-use-this */
import React from 'react';
import calculate from '../logic/calculate.js';

export default class Calculator extends React.Component {
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
      <div className="calculator-container">
        <input type="text" value={this.state.CalculatorScreen}></input>
        <table>
          <tr>
            <td className="bg-light-gray" onClick={this.handleClick}>AC</td>
            <td className="bg-light-gray" onClick={this.handleClick}>+/-</td>
            <td className="bg-light-gray" onClick={this.handleClick}>%</td>
            <td className="bg-orange" onClick={this.handleClick}>÷</td>
          </tr>
          <tr>
            <td className="bg-light-gray" onClick={this.handleClick}>7</td>
            <td className="bg-light-gray" onClick={this.handleClick}>8</td>
            <td className="bg-light-gray" onClick={this.handleClick}>9</td>
            <td className="bg-orange" onClick={this.handleClick}>x</td>
          </tr>
          <tr>
            <td className="bg-light-gray" onClick={this.handleClick}>4</td>
            <td className="bg-light-gray" onClick={this.handleClick}>5</td>
            <td className="bg-light-gray" onClick={this.handleClick}>6</td>
            <td className="bg-orange" onClick={this.handleClick}>-</td>
          </tr>
          <tr>
            <td className="bg-light-gray" onClick={this.handleClick}>1</td>
            <td className="bg-light-gray" onClick={this.handleClick}>2</td>
            <td className="bg-light-gray" onClick={this.handleClick}>3</td>
            <td className="bg-orange" onClick={this.handleClick}>+</td>
          </tr>
          <tr>
            <td className="bg-light-gray" colSpan="2" onClick={this.handleClick}>0</td>
            <td className="bg-light-gray" onClick={this.handleClick}>.</td>
            <td className="bg-orange" onClick={this.handleClick}>=</td>
          </tr>
        </table>
      </div>
    );
  }
}
