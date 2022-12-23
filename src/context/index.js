import { useReducer } from "react";

import { Provider } from "./dogContext";
import { ActionType } from "../constants";

export const initialState = {
  dogList: [],
  isNameAscSort: false,
  isHeightAscSort: false,
  isLifeSpanAscSort: false,
};

const reducer = (state, { type, payload }) =>
  ({
    [ActionType.SET_DOG_LIST]: {
      ...state,
      dogList: payload,
    },
    [ActionType.SORT_DOG_BY_HEIGHT_ASC]: {
      ...state,
      isHeightAscSort: true,
      dogList: payload,
    },
    [ActionType.SORT_DOG_BY_HEIGHT_DESC]: {
      ...state,
      isHeightAscSort: false,
      dogList: payload,
    },
    [ActionType.SORT_DOG_BY_NAME_ASC]: {
      ...state,
      isNameAscSort: true,
      dogList: payload,
    },
    [ActionType.SORT_DOG_BY_NAME_DEC]: {
      ...state,
      isNameAscSort: false,
      dogList: payload,
    },
    [ActionType.SORT_DOG_BY_LIFE_ASC]: {
      ...state,

      isLifeSpanAscSort: true,
      dogList: payload,
    },
    [ActionType.SORT_DOG_BY_LIFE_DESC]: {
      ...state,
      isLifeSpanAscSort: false,
      dogList: payload,
    },
    [ActionType.RESET_DOG_LIST]: {
      ...state,
      dogList: null,
    },
  }[type] || state);

/**
 * DogDataProvider
 */
const DogDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchAction = (type, payload) => {
    dispatch({ type, payload });
  };

  return <Provider value={{ state, dispatchAction }}>{children}</Provider>;
};

export default DogDataProvider;
