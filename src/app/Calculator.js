import React, { Component } from "react";
import "./calculator.less";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }
  numBtnList = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
  operatorBtnList = ["+", "-", "*"];

  handleNumBtnClick = e => {
    this.setState({
      input: this.state.input + e.target.value
    });
  };

  handleOperatorBtnClick = e => {
    const input = this.state.input;
    const value = e.target.value;
    if (!this.operatorBtnList.includes(input[input.length - 1])) {
      this.setState({
        input: input + value
      });
    }
  };

  handleResult = () => {
    this.setState({
      input: eval(this.state.input)
    });
  };

  handleReset = () => {
    this.setState({
      input: ""
    });
  };
  render() {
    return (
      <div className="calculator">
        <h1>在线计算器</h1>
        <div className="calculator-main">
          <input
            type="text"
            className="form-control form-control-lg"
            id="show"
            value={this.state.input}
            readOnly
          />
          <div className="btn-list">
            {this.operatorBtnList.map((name, index) => (
              <button
                key={index}
                type="button"
                className="btn btn-primary btn-lg"
                value={name}
                onClick={this.handleOperatorBtnClick}
              >
                {name}
              </button>
            ))}
            {this.numBtnList.map((name, index) => (
              <button
                key={index}
                type="button"
                className="btn btn-primary btn-lg"
                value={name}
                onClick={this.handleNumBtnClick}
              >
                {name}
              </button>
            ))}
            <button
              type="button"
              className="btn btn-danger btn-lg"
              onClick={this.handleReset}
            >
              C
            </button>
            <button
              type="button"
              className="btn btn-success btn-lg"
              onClick={this.handleResult}
            >
              =
            </button>
          </div>
        </div>
        <a href="/home">回到首页</a>
      </div>
    );
  }
}

export default Calculator;
