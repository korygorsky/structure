import React, { useState, useReducer } from "react";
import uniqid from "uniqid";
import { MODE_EDIT_CARD, MODE_NAVIGATE } from "../data/modes";
import { actions, resolvers } from "../actions/index";

const initialStateGenerator = () => {
  const firstCardId = uniqid();
  return {
    structure: [[{ id: firstCardId, title: "Entry Point", parts: [] }]],
    mode: MODE_EDIT_CARD,
    focusedColumnIndex: 0,
    focusedCardIndex: 0,
    focusedCardId: firstCardId,
    activePart: 0,
    selectedCards: [],
  };
};

function reducer(state, action) {
  switch (action.type) {
    case actions.NAV_RIGHT:
      return resolvers.navRight(state);
    case actions.NAV_LEFT:
      return resolvers.navLeft(state);
    case actions.NAV_UP:
      return resolvers.navUp(state);
    case actions.NAV_DOWN:
      return resolvers.navDown(state);
    case actions.ENTER_EDIT_MODE:
      return resolvers.enterEditMode(state);
    case actions.ENTER_EDIT_CARD_TITLE_MODE:
      return resolvers.enterEditCardTitleMode(state);
    case actions.EXIT_SELECTION_MODE:
      return resolvers.exitSelectionMode(state);
    case actions.EXIT_EDIT_MODE:
      return resolvers.exitEditMode(state);
    case actions.EXIT_EDIT_CARD_TITLE_MODE:
      return resolvers.exitEditCardTitleMode(state);
    case actions.TOGGLE_CARD_SELECTION:
      return resolvers.toggleCardSelection(state);
    default:
      throw new Error();
  }
}

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
