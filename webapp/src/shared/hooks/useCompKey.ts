import { useCallback, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function useCompKey() {
  const [key, setKey] = useState(uuidv4());
  const renew = useCallback(() => {
    setKey(uuidv4());
  }, []);
  return useMemo(() => ({ compKey: key, renewCompKey: renew }), [key, renew]);
}
