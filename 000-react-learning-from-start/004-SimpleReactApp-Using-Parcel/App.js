import Busket from "./components/Busket";
import Button from "./components/Button";
import leftArrow from "./public/images/left-arrow-svgrepo-com.svg";
import rightArrow from "./public/images/right-arrow-svgrepo-com.svg";

import "./App.css";
import { useState } from "react";

const App = () => {
  // we need to use states here because if we use variables we need to re-render our functional component using root.render() every time we click on a button. but if we keep the state react will autometic detect and render the state.
  const [rightAppleCount, setRightAppleCount] = useState(0);
  const [leftAppleCount, setLeftAppleCount] = useState(10);
  const clickRightArrow = () => {
    if (leftAppleCount > 0) {
      setLeftAppleCount(leftAppleCount - 1);
      setRightAppleCount(rightAppleCount + 1);
    }
  };
  const clickLeftArrow = () => {
    if (rightAppleCount > 0) {
      setLeftAppleCount(leftAppleCount + 1);
      setRightAppleCount(rightAppleCount - 1);
    }
  };

  return (
    <section>
      <Busket appleCount={leftAppleCount} busketCount={1} />
      <Button
        img={leftArrow}
        tooltip="Left Arrow"
        handleClick={clickLeftArrow}
      />
      <Button
        img={rightArrow}
        tooltip="Right Arrow"
        handleClick={clickRightArrow}
      />
      <Busket appleCount={rightAppleCount} busketCount={2} />
    </section>
  );
};

export default App;
