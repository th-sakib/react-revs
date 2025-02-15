import { useEffect, useState } from "react";
import {
  getLocalStroageItem,
  setLocalStorageItem,
} from "../utils/localStorage";

export const usePersistedState = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState(() => {
    const item = getLocalStroageItem(key);
    return (item as T) || initialValue;
  });

  useEffect(() => {
    setLocalStorageItem(key, value);
  }, [value]);

  return [value, setValue] as const;
};
