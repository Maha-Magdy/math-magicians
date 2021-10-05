/* eslint-disable class-methods-use-this */
/* eslint-disable  no-unused-vars */

import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator.js';
import Home from './components/Home.js';
import Quote from './components/Quote.js';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>
              <Link to="/" className="color-orange">Math Magicians</Link>
            </h1>
            <nav>
              <ul>
                <li>
                  <Link to="/" className="color-orange">Home</Link>
                </li>
                <li>
                  <Link to="/Calculator" className="color-orange">Calculator</Link>
                </li>
                <li>
                  <Link to="/quote" className="color-orange">Quote</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/Calculator">
              <Calculator />
            </Route>
            <Route path="/quote">
              <Quote />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
