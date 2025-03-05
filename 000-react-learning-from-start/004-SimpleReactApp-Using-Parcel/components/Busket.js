import React from "react";
import PropTypes from "prop-types";

function Busket({ appleCount, busketCount }) {
  return (
    <div>
      <h2>{appleCount} apple</h2>
      <p> {busketCount} busket</p>
    </div>
  );
}

Busket.propTypes = {
  appleCount: PropTypes.number.isRequired,
  busketCount: PropTypes.number,
};

// Busket.defaultProps = {
//   appleCount: 0,
//   basketCount: 0,
// };

export default Busket;
