import { useState, useEffect } from "react";

export default function Clock(props) {
  const [color, setColor] = useState(props.color);
  useEffect(() => {
    setColor(props.color);
  }, [props.color]);

  return <h1 style={{ color: color }}>{props.time}</h1>;
}
