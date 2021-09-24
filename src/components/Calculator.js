/* eslint-disable class-methods-use-this */
import React from 'react';

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-container">
        <input type="text" value={this.props.CalculatorScreen}></input>
        <table>
          <tr>
            <td className="bg-light-gray" onClick={this.props.handleClick}>AC</td>
            <td className="bg-light-gray" onClick={this.props.handleClick}>+/-</td>
            <td className="bg-light-gray" onClick={this.props.handleClick}>%</td>
            <td className="bg-orange" onClick={this.props.handleClick}>÷</td>
          </tr>
          <tr>
            <td className="bg-light-gray" onClick={this.props.handleClick}>7</td>
            <td className="bg-light-gray" onClick={this.props.handleClick}>8</td>
            <td className="bg-light-gray" onClick={this.props.handleClick}>9</td>
            <td className="bg-orange" onClick={this.props.handleClick}>x</td>
          </tr>
          <tr>
            <td className="bg-light-gray" onClick={this.props.handleClick}>4</td>
            <td className="bg-light-gray" onClick={this.props.handleClick}>5</td>
            <td className="bg-light-gray" onClick={this.props.handleClick}>6</td>
            <td className="bg-orange" onClick={this.props.handleClick}>-</td>
          </tr>
          <tr>
            <td className="bg-light-gray" onClick={this.props.handleClick}>1</td>
            <td className="bg-light-gray" onClick={this.props.handleClick}>2</td>
            <td className="bg-light-gray" onClick={this.props.handleClick}>3</td>
            <td className="bg-orange" onClick={this.props.handleClick}>+</td>
          </tr>
          <tr>
            <td className="bg-light-gray" colSpan="2" onClick={this.props.handleClick}>0</td>
            <td className="bg-light-gray" onClick={this.props.handleClick}>.</td>
            <td className="bg-orange" onClick={this.props.handleClick}>=</td>
          </tr>
        </table>
      </div>
    );
  }
}
