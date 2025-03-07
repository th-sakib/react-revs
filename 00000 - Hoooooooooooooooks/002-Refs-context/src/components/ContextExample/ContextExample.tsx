import { useState } from "react";
import ChildContainer from "./Childs/ChildContainer";
import { UserContext } from "../../contexts/UserContext";

export type TUser = {
  name: string;
  age: number;
};

/**
 * ********************* Context *****************
 * 1. First have to create a provider its the UserContext.ts exporting the context by createContext() method
 * 2. Then consume it by using "useCotext() hook"
 */

function ContextExample() {
  // lets assume we have to pass this state to the grandChildContainer
  // WE will use Context for this
  const [user] = useState<TUser>({
    name: "Anonymous",
    age: NaN,
  });

  return (
    <div>
      <h1>Parent Context</h1>
      <UserContext.Provider value={user}>
        <ChildContainer />
      </UserContext.Provider>
    </div>
  );
}

export default ContextExample;
