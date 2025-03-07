import { createContext, useContext } from "react";
import { TUser } from "../components/ContextExample/ContextExample";

/**
 * ******************* why undefined *****************
 * We know that this context only hold/store User data.
 *
 * But incase we try to access this context in container which is not wrapped with context
 *
 * the useContext hook will return undefined
 *
 * so we have to mention that and handle this case
 *
 * by creating a custom hook
 */

export const UserContext = createContext<TUser | undefined>(undefined);

export const useUserContext = () => {
  const user = useContext(UserContext);

  if (user === undefined) {
    throw new Error(
      "useUserContext must be used in within the provided components"
    );
  }

  return user;
};
