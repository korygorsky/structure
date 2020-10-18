import React, { useReducer } from "react";
import { reducer } from "../actions/index";
import initialStateGenerator from "./initial-state-generator";

export const StoreContext = React.createContext(null);

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, null, initialStateGenerator);

  const hasSelectedCards = state.selectedCards.length > 0 ? true : false;

  const store = {
    dispatch,
    structure: state.structure,
    mode: state.mode,
    focusedColumnIndex: state.focusedColumnIndex,
    focusedCardIndex: state.focusedCardIndex,
    focusedCardId: state.focusedCardId,
    activePart: state.activePart,
    selectedCards: state.selectedCards,
    hasSelectedCards,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
