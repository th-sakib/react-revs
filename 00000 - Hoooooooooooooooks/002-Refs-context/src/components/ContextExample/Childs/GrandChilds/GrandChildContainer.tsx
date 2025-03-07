import { useUserContext } from "../../../../contexts/UserContext";

function GrandChildContainer() {
  const user = useUserContext();

  return (
    <div className="border-red p-2">
      <h2>Grand Child</h2>
      <p>I have access to user.</p>
      <p>here is the proof: {user?.name}</p>
    </div>
  );
}

export default GrandChildContainer;
