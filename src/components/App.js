import React, { Component } from 'react';
import { connect } from 'react-redux';
import Reactotron from 'reactotron-react-js';
import * as actions from '../actions/index';
import Button from './Button';
import CounterResults from './CounterResults';
import logo from '../assets/logo.svg';
import './App.css';

export class App extends Component {
  render() {
    Reactotron.log('hello rendering world');
    Reactotron.log({ numbers: [1, 2, 3], boolean: false, nested: { here: 'we go' } });
    Reactotron.warn('*glares*');
    Reactotron.error('Now you\'ve done it.');
    Reactotron.display({
      name: 'KNOCK KNOCK',
      preview: 'Who\'s there?',
      value: 'Orange.'
    });
    Reactotron.display({
      name: 'ORANGE',
      preview: 'Who?',
      value: 'Orange you glad you don\'t know me in real life?',
      important: true
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React+Redux Example</h1>
        </header>
        <div className="App-body">
          <p className="introText">This is a basic React+Redux example built using create-react-app. It can be used as a walking skeleton for your base React+Redux app which you can then build out. It contains all the basic boilerplate code for action creators, action types, reducers, and initial state.</p>
          <Button clickHandler={this.props.incrementCounter} buttonText="Increment Counter" />
          <Button clickHandler={this.props.decrementCounter} buttonText="Decrement Counter" />
          <Button clickHandler={this.props.resetCounter} buttonText="Reset Counter" />
          <CounterResults />
        </div>
        <div className="App-footer">
          <a href="https://github.com/thawkin3/redux-example" target="_blank" rel="noopener noreferrer">https://github.com/thawkin3/redux-example</a>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);
