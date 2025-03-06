import { useState } from "react";
import "./App.css";
import FunctionalComp from "./components/FunctionalComp";
import ClassComp from "./components/ClassComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>transforming functional comp. into class component</h2>
      <FunctionalComp name="Functinal component" />
      <ClassComp />
    </>
  );
}

export default App;
