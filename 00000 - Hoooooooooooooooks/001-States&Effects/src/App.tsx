import { useEffect, useState } from "react";

/**
 * States are memory of component.
 * It Changes over time
 * if anything changes but can be derived from state should not consider it a state
 */

/** ********************* useState ********************
 * useState is a hook provided by react to handle states.
 * This hook returns an array with currentState and a function that change the state.
 * state change triggers re-renders.
 */

/** ******************* useEffect ***********************
 * Effects: Effects are those which doesn't exists in react eco-system
 * like direct dom menipulation, fetching data and so on
 * useEffect is used to synchronize outer world with react
 */

function App() {
  const [count, setCount] = useState<number>(100);

  useEffect(() => {
    console.log(count); // body
    console.log("start synchronizing");
    return () => {
      // cleanup function
      console.log("cleaning up, when component unmount");
      console.log("stop synchronizing");
    };
  }, [count]); // dependency array

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
