import { useState } from "react";

/**
 * States are memory of component.
 * It Changes over time
 * if anything changes but can be derived from state should not consider it a state
 */

function App() {
  const [count, setCount] = useState<number>(100);
  return (
    <div>
      <h1>State</h1>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  );
}

export default App;
