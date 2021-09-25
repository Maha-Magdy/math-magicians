/* eslint-disable class-methods-use-this */
import React, { useState, useEffect } from 'react';
import calculate from '../logic/calculate.js';

export default function Calculator() {
  const [dataObj, setDataObj] = useState({});
  const [calculatorScreen, setCalculatorScreen] = useState(0);

  useEffect(() => {
    let calculatorScreen;

    if (dataObj.next == null && dataObj.total == null) {
      calculatorScreen = 0;
    } else if (dataObj.next) {
      calculatorScreen = dataObj.next;
    } else {
      calculatorScreen = dataObj.total;
    }

    setCalculatorScreen(calculatorScreen);
  }, [dataObj]);

  const handleClick = (event) => {
    const buttonValue = event.target.innerText;
    setDataObj(calculate(dataObj, buttonValue));
  };

  return (
    <div className="calculator-container">
      <input type="text" value={calculatorScreen}></input>
      <table>
        <tr>
          <td className="bg-light-gray" onClick={handleClick}>
            AC
          </td>
          <td className="bg-light-gray" onClick={handleClick}>
            +/-
          </td>
          <td className="bg-light-gray" onClick={handleClick}>
            %
          </td>
          <td className="bg-orange" onClick={handleClick}>
            ÷
          </td>
        </tr>
        <tr>
          <td className="bg-light-gray" onClick={handleClick}>
            7
          </td>
          <td className="bg-light-gray" onClick={handleClick}>
            8
          </td>
          <td className="bg-light-gray" onClick={handleClick}>
            9
          </td>
          <td className="bg-orange" onClick={handleClick}>
            x
          </td>
        </tr>
        <tr>
          <td className="bg-light-gray" onClick={handleClick}>
            4
          </td>
          <td className="bg-light-gray" onClick={handleClick}>
            5
          </td>
          <td className="bg-light-gray" onClick={handleClick}>
            6
          </td>
          <td className="bg-orange" onClick={handleClick}>
            -
          </td>
        </tr>
        <tr>
          <td className="bg-light-gray" onClick={handleClick}>
            1
          </td>
          <td className="bg-light-gray" onClick={handleClick}>
            2
          </td>
          <td className="bg-light-gray" onClick={handleClick}>
            3
          </td>
          <td className="bg-orange" onClick={handleClick}>
            +
          </td>
        </tr>
        <tr>
          <td className="bg-light-gray" colSpan="2" onClick={handleClick}>
            0
          </td>
          <td className="bg-light-gray" onClick={handleClick}>
            .
          </td>
          <td className="bg-orange" onClick={handleClick}>
            =
          </td>
        </tr>
      </table>
    </div>
  );
}
