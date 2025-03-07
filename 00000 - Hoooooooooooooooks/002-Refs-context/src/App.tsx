import { useRef, useState } from "react";
import "./App.css";
import DomMenipulationWithlRefs from "./DomMenipulationWithlRefs";
import ContextExample from "./components/ContextExample/ContextExample";

function App() {
  const [count, setCount] = useState(0);
  const [path, setPath] = useState(location.pathname);

  const countRef = useRef(0);

  /** ************** useState **************
   * 1. state update is asynchronous.
   * 2. trigger re-render
   * 3. setCount shedules the update for the next render, for that the log inside handleIncrement will be the old value (current value)
   * 4. as the handleIncrement will not call in the second render autometically it won't get updated with new value
   */

  /** **************** useRef ******************
   * 1. ref update is synchronous
   * 2. useRef has no argument it returns {current: undefined}
   * 3. In this case it returns {current: 0}
   * 4. As it is synchronous the console.log()
   */

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++; // not trigger re-render

    console.log("state: ", count);
    console.log("ref: ", countRef.current);
  };

  // this is for loading context component when link is clicked
  const handleLinkClick = (urlName: string) => {
    history.pushState("", "", urlName);
    setPath(`/${urlName}`);
  };

  return (
    <>
      <section>
        {path === "/context" ? (
          <a className="cusor-pointer" onClick={() => handleLinkClick("/")}>
            Home
          </a>
        ) : (
          <a
            className="cusor-pointer"
            onClick={() => handleLinkClick("context")}
          >
            Navigate to Context example component
          </a>
        )}
      </section>

      <div>
        {path === "/context" ? (
          <ContextExample />
        ) : (
          <>
            <section>
              <h1>Refs</h1>

              <p>state: {count}</p>
              <p>ref: {countRef.current}</p>
              <button onClick={handleIncrement}>increase</button>
            </section>
            <section>
              <DomMenipulationWithlRefs />
            </section>
          </>
        )}
      </div>
    </>
  );
}

export default App;
