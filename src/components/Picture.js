import React from "react";
import "./Picture.css";

const Picture = (props) => {
  return (
    <img className = "pictureImg" 
    src= {props.link} 
    onClick= {() => props.clicker(props.id)}
    />
  )
}

export default Picture;