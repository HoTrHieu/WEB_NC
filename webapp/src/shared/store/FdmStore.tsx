import React, { createContext, useReducer } from "react";
import { FdmReducer } from "./FdmReducer";

const initialState = {
  searchTerm: "",
};

export const FdmContext = createContext(initialState);

export function FdmStore(props: any) {
  const [state, dispatch] = useReducer(FdmReducer, initialState);
  return (
    <FdmContext.Provider value={[state, dispatch] as any}>
      {props.children}
    </FdmContext.Provider>
  );
}
