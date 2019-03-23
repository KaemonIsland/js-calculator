import React, { Component } from 'react';
import './App.css';

import Clear from './components/Clear';
import Numbers from './components/Numbers';
import Operators from './components/Operators';
import Execute from './components/Execute';
import Decimal from './components/Decimal';
import Display from './components/Display';

import { connect } from 'react-redux'
import { addToEquation, executeEquation, clearInput } from './store'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '0'
    }

    this.clearInput = this.clearInput.bind(this);
    this.addStateInput = this.addStateInput.bind(this);
    this.executeEquation = this.executeEquation.bind(this);
  }

  checkNum = num => {
    return /[0-9]/.test(num);
  }

  checkOperator = op => {
    return /[+\-/*]/.test(op);
  }

  addStateInput = input => {
    let state = this.state.input;

    let newInput = this.checkInput(input, state);

    this.setState({ input: newInput })
  }

  checkInput = (input, state) => {
    if (this.checkNum(input)) {
      if (state === '0') {
        return input;
      } else if (this.checkOperator(state)) {
        this.props.addInput(state);
        return input;
      } else {
        return state + input;
      }
    } else if (input === '.') {
      if (state.includes('.')) {
        return state;
      } else {
        return state + input;
      }
    } else if (this.checkOperator(input)) {
      if (this.checkOperator(state)) {
        return input;
      } else if (state === '0') {
        return '0';
      } else {
        this.props.addInput(state);
        return input;
      }
    }
  }

  clearInput = () => {
    this.setState({ input: '0' });
    this.props.clear();
  }

  executeEquation = () => {
    this.props.addInput(this.state.input);
    this.setState({ input: '' })
    this.props.execute();
  }

  render() {
    return (
      <div className="App calc-wrapper">
        <Display
          equation={this.props.equation}
          input={this.state.input}
        />
        <Clear clear={this.clearInput} />
        <Operators input={this.addStateInput} />
        <Numbers input={this.addStateInput} />
        <Decimal input={this.addStateInput}/>
        <Execute execute={this.executeEquation} />
      </div>
    );
  }
}

let mapStateToProps = state => {
  return state;
}

let mapDispatchToProps = dispatch => {
  return {
    execute: () => dispatch(executeEquation()),
    clear: () => dispatch(clearInput()),
    addInput: input => dispatch(addToEquation(input))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
