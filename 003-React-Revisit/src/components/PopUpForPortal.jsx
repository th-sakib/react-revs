import { createPortal } from "react-dom";
export default function PopUpForPortal({ copied }) {
  return createPortal(
    <div style={{ color: "red" }}>{!!copied && "Copied to clicpboard"}</div>,
    document.body
  );
}
