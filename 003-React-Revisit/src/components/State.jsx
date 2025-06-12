import { useState } from "react";

export default function State() {
  const [value, setValue] = useState({ name: "meaw", age: 13 });
  const handleClick = () => {
    // first copy the object
    const newObj = { ...value, age: 20 };
    setValue(newObj);
  };
  return (
    <div>
      <p>{value}</p>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
