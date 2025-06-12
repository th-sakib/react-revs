import { useState } from "react";
import PopUpForPortal from "./PopUpForPortal";

export default function ExamplePortal() {
  const [inputText, setInputText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(inputText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button onClick={handleClick}>copy</button>
      <PopUpForPortal copied={copied} />
    </div>
  );
}
