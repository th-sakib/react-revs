import "./App.css";
import { usePersistedState } from "./hooks/usePersistedState";

function App() {
  const [count, setCount] = usePersistedState("count", 0);

  return (
    <>
      <div className="card">
        <p>{count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          increment
        </button>
      </div>
    </>
  );
}

export default App;
