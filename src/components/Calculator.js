/* eslint-disable class-methods-use-this */
import React from 'react';

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-container">
        <input type="text"></input>
        <table>
          <tr>
            <td className="bg-light-gray">AC</td>
            <td className="bg-light-gray">+/-</td>
            <td className="bg-light-gray">%</td>
            <td className="bg-orange">÷</td>
          </tr>
          <tr>
            <td className="bg-light-gray">7</td>
            <td className="bg-light-gray">8</td>
            <td className="bg-light-gray">9</td>
            <td className="bg-orange">×</td>
          </tr>
          <tr>
            <td className="bg-light-gray">4</td>
            <td className="bg-light-gray">5</td>
            <td className="bg-light-gray">6</td>
            <td className="bg-orange">-</td>
          </tr>
          <tr>
            <td className="bg-light-gray">1</td>
            <td className="bg-light-gray">2</td>
            <td className="bg-light-gray">3</td>
            <td className="bg-orange">+</td>
          </tr>
          <tr>
            <td className="bg-light-gray" colSpan="2">0</td>
            <td className="bg-light-gray">.</td>
            <td className="bg-orange">=</td>
          </tr>
        </table>
      </div>
    );
  }
}
