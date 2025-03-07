import { useEffect, useRef } from "react";

function DomMenipulationWithlRefs() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <h1>Handle input using ref</h1>
      <label htmlFor="testingFocus">Input Autometic focus: </label>

      <input
        ref={inputRef}
        name="testingFocus"
        type="text"
        placeholder="Enter a string"
      />
    </>
  );
}

export default DomMenipulationWithlRefs;
