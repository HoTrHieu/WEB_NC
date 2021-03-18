import { IAction } from "./types/IAction";

export function FdmReducer(state: any, action: IAction) {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload || '' }
    case 'SET_USER':
      return { ...state, user: action.payload }
  }
};