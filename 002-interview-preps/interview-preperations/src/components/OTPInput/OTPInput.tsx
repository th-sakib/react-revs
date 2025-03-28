import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import "./OTPInput.css";

const REQUIRED_INPUT_FIELDS = 6;

export default function OTPInput() {
  const [inputFields, setInputFields] = useState<string[]>(
    Array.from({ length: REQUIRED_INPUT_FIELDS }, () => "")
  );

  const inputRef = useRef<{ [key: number]: HTMLInputElement | null }>({});

  const handleChange = (value: string, index: number) => {
    const newValue = value.trim();

    if (Number.isNaN(Number(newValue))) return;

    const newArr = [...inputFields];
    newArr[index] = newValue.slice(-1);

    setInputFields(newArr);

    if (newValue && inputRef.current && inputRef.current[index + 1]) {
      inputRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ): void => {
    if (
      e.currentTarget instanceof HTMLInputElement &&
      !e.currentTarget.value &&
      e.code === "Backspace"
    ) {
      inputRef.current?.[index - 1]?.focus();
    }
  };

  useEffect(() => {
    if (inputRef.current && inputRef.current[0]) {
      inputRef.current[0]?.focus();
    }
  }, []);

  return (
    <div>
      <h1>OTP Input Box</h1>
      <div>
        {inputFields.map((input, index) => (
          <input
            type="text"
            className="input"
            key={index}
            ref={(el) => {
              inputRef.current[index] = el;
            }}
            value={inputFields[index]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e.target.value, index)
            }
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
    </div>
  );
}
