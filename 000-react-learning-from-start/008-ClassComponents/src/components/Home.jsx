import { useEffect } from "react";
import NewCounter from "./newCounter";
import OldCounter from "./OldCounter";

export default function Home() {
  return (
    <>
      <h1 className="text-xl">Welcome to Our Home</h1>
      <NewCounter name="New Counter" />
      <OldCounter name=" Old Counter" />
    </>
  );
}
