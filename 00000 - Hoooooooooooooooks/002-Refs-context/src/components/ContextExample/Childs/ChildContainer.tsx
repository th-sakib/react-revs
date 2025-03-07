import GrandChildContainer from "./GrandChilds/GrandChildContainer";
import SiblingGrandChild from "./GrandChilds/SiblingGrandChild";

function ChildContainer() {
  return (
    <div className="border p-2">
      <h2>Child component</h2>
      <GrandChildContainer />
      <SiblingGrandChild />
    </div>
  );
}

export default ChildContainer;
