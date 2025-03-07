import { useUserContext } from "../../../../contexts/UserContext";

function SiblingGrandChild() {
  const user = useUserContext();
  return (
    <div className="p-2 border-red">
      <h2>singling of grand child</h2>
      <p>I have access to user.</p>
      <p>here is the proof: {user?.name}</p>
    </div>
  );
}

export default SiblingGrandChild;
