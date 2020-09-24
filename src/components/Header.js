import React from "react";
import { Link } from "react-router-dom";
import "./header.less";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="nav-item">
        Home
      </Link>
      <Link to="/calculator" className="nav-item">
        在线计算器
      </Link>
      <Link to="/timer" className="nav-item">
        在线倒计时器
      </Link>
    </div>
  );
};

export default Header;
