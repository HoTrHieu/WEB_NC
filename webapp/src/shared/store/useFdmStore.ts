import { useCallback, useContext, useMemo } from "react";
import { FdmContext } from "./FdmStore";

type Dispatcher = (type: string, payload: any) => void;

export function useFdmStore(): [any, Dispatcher] {
  const [globalState, dispatch] = useContext(FdmContext) as any;
  const dispatcher = useCallback(
    (type: string, payload: any) => {
      dispatch({ type, payload });
    },
    [dispatch]
  );
  return useMemo(() => {
    return [globalState, dispatcher];
  }, [globalState, dispatcher]);
}
