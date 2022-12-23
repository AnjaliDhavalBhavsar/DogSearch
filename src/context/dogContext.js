import { createContext, useContext } from "react";

/**
 * create context
 */
const dogContext = createContext({});

export const { Provider } = dogContext;

/**
 * useDogContext
 */
export const useDogContext = () => useContext(dogContext);
