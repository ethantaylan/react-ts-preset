import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";

export interface GlobalContext {
  darkMode: boolean;
}

const initialState: GlobalContext = {
  darkMode: true,
};

const reducer = (state: GlobalContext, action: any): GlobalContext => {
  switch (action.type) {
    case "DARK":
      return {
        darkMode: true,
      };
    case "LIGHT":
      return {
        darkMode: false,
      };
    default:
      return state;
  }
};

export const StateContext = createContext<GlobalContext>(initialState);

export const DispatchContext = createContext<Dispatch<any> | undefined>(
  undefined
);

export const GlobalContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContext => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("Must be used within a ThemeProvider");
  }
  return context;
};

export const useGlobalDispatch = (): Dispatch<any> => {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) {
    throw new Error("Must be used within a ThemeProvider");
  }
  return dispatch;
};
