import { createContext, useContext, useReducer } from "react";
const useGlobal = createContext();

const initialValue = {};
function reducer(state, action) {
  switch (action.type) {
  }
}
function ContextApi({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const { cart, aboutProduct } = state;

  return <useGlobal.Provider value={{}}>{children}</useGlobal.Provider>;
}

function valGlobal() {
  const data = useContext(useGlobal);
  return data;
}
export { valGlobal, ContextApi };
