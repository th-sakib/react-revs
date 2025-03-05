import React from "react";
import "./Button.css";
import PropTypes from "prop-types";
// import PropTypes from "prop-types";

const Button = ({ img, handleClick, tooltip }) => {
  return (
    <button onClick={handleClick} title={tooltip}>
      <img src={img} alt="image" />
    </button>
  );
};

Button.propTypes = {
  img: PropTypes.string,
  handleClick: PropTypes.func,
  tooltip: PropTypes.string,
};

export default Button;
