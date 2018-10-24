import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className = "row nav">
      <h3 className = "col-sm-4 navText">Clicky Game</h3>
      <h3 className = "col-sm-4 navText">{props.headline}</h3>
      <h3 className = "col-sm-4 navText">Top Score: {props.topscore} | Score: {props.score}</h3>
    </div>
  )
}

export default Navbar;