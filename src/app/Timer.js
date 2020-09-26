import React, { Component } from "react";
import "./timer.less";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: "",
      timeLeft: 0,
      isStart: false,
      timerId: ""
    };
  }

  handleSetTime = e => {
    const value = e.target.value;
    if (value.match("^[0-9]*$")) {
      this.setState({
        time: e.target.value,
        timeLeft: e.target.value
      });
    }
  };

  handleReset = () => {
    this.setState({
      time: "",
      timeLeft: 0,
      isStart: false
    });
    clearInterval(this.state.timerId);
  };

  handleStartAndStop = () => {
    if (this.state.timeLeft > 0) {
      this.setState(
        {
          isStart: !this.state.isStart
        },
        () => {
          if (this.state.isStart) {
            this.timer();
          } else {
            clearInterval(this.state.timerId);
          }
        }
      );
    }
  };

  timer = () => {
    let timeLeft = this.state.timeLeft;
    const timerId = setInterval(() => {
      timeLeft--;
      this.setState(
        {
          timerId: timerId,
          timeLeft: timeLeft
        },
        () => {
          if (timeLeft == 0) {
            clearInterval(this.state.timerId);
            this.setState({
              isStart: false,
              time: ""
            });
          }
        }
      );
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.state.timerId);
  };
  render() {
    return (
      <div className="timer">
        <h1>在线倒计时器</h1>
        <div className="timer-main">
          <div className="form-group row">
            <label htmlFor="time" className="col-sm-3 col-form-label">
              设置时间 (秒) :
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                id="time"
                value={this.state.time}
                onChange={this.handleSetTime}
              />
            </div>
          </div>
          <div className="countdown">
            <span>{this.state.timeLeft}</span>
            <span>Seconds</span>
          </div>
          <div className="btns">
            <button
              type="button"
              className="btn btn-danger btn-lg"
              onClick={this.handleReset}
            >
              Reset
            </button>
            <button
              type="button"
              className="btn btn-success btn-lg"
              onClick={this.handleStartAndStop}
            >
              {this.state.isStart ? "Stop" : "Start"}
            </button>
          </div>
        </div>
        <a href="/home">回到首页</a>
      </div>
    );
  }
}

export default Timer;
