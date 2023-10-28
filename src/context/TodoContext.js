
import { createContext, useContext } from "react";

export const TodoStateContext =  createContext(null);
export const TodoDispatcherContext = createContext(null);


export const useTodoState = () => useContext(TodoStateContext);
export const useTododispatcher = ()=> useContext(TodoDispatcherContext);