import { useEffect, useState } from "react";

export default function Test() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setValue((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, [value]);

  return <div style={{ color: "white" }}>{value}</div>;
}
