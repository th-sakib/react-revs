import React from "react";

function Busket({ appleCount = 0, busketCount = 0 }) {
  return (
    <div>
      <h2>{appleCount} apple</h2>
      <p> {busketCount} busket</p>
    </div>
  );
}

export default Busket;
