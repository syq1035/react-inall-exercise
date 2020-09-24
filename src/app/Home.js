import React from "react";
import "./home.less";
import bgIcon from "../images/hero-image.png";
import timerIcon from "../images/timer.png";
import calculatorIcon from "../images/calculator.png";

const Home = () => {
  return (
    <div className="home">
      <div className="bg">
        <img src={bgIcon} alt="bg" />
        <div className="bg-text">在线实用工具</div>
      </div>
      <div className="feature">
        <div>
          <a href="/calculator">
            <img
              src={calculatorIcon}
              alt="calculator"
              className="calculator-icon"
            />
          </a>
          <a href="/calculator">计算器</a>
        </div>
        <div>
          <a href="/timer">
            <img src={timerIcon} alt="timer" className="timer-icon" />
          </a>
          <a href="/timer">计时器</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
