/* eslint-disable class-methods-use-this */
import { useState, useEffect } from 'react';
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
      <div className="calculator-screen">
        <p>{calculatorScreen}</p>
      </div>
      <table>
        <thead>
        <tr>
          <th className="bg-light-gray" onClick={handleClick}>
            AC
          </th>
          <th className="bg-light-gray" onClick={handleClick}>
            +/-
          </th>
          <th className="bg-light-gray" onClick={handleClick}>
            %
          </th>
          <th className="bg-orange" onClick={handleClick}>
            ÷
          </th>
        </tr>
        </thead>

        <tbody>
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
          <th className="bg-orange" onClick={handleClick}>
            x
          </th>
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
          <th className="bg-orange" onClick={handleClick}>
            -
          </th>
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
          <th className="bg-orange" onClick={handleClick}>
            +
          </th>
        </tr>
        <tr>
          <td className="bg-light-gray" colSpan="2" onClick={handleClick}>
            0
          </td>
          <td className="bg-light-gray" onClick={handleClick}>
            .
          </td>
          <th className="bg-orange" onClick={handleClick}>
            =
          </th>
        </tr>
        </tbody>
      </table>
    </div>
  );
}
