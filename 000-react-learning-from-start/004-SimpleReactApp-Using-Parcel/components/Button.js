import React from "react";
import "./Button.css";

const Button = ({ img, handleClick, tooltip }) => {
  return (
    <button onClick={handleClick} title={tooltip}>
      <img src={img} alt="image" />
    </button>
  );
};

export default Button;
