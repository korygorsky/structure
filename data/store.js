import React, { useState, useReducer } from "react";
import { MODE_NAVIGATE } from "../data/modes";
import { actions, resolvers } from "../actions/index";

const initialStateGenerator = () => {
  return {
    structure: [
      [
        { title: "First Screen", parts: [{ name: "Part 1" }] },
        { title: "Second Screen", parts: [] },
        { title: "Third Screen", parts: [] },
        { title: "Fourth Screen", parts: [] },
      ],
      [
        { title: "First Screen", parts: [] },
        { title: "Second Screen", parts: [] },
      ],

      [{ title: "First Screen", parts: [] }],
    ],
    mode: MODE_NAVIGATE,
    focusedColumnIndex: 0,
    focusedCardIndex: 0,
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
  const [activePart, setActivePart] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);

  const hasSelectedCards = state.selectedCards.length > 0 ? true : false;

  const store = {
    dispatch,
    // data
    structure: state.structure,
    mode: state.mode,
    focusedColumnIndex: state.focusedColumnIndex,
    focusedCardIndex: state.focusedCardIndex,
    activePart: state.activePart,
    selectedCards: state.selectedCards,
    hasSelectedCards,
    // setters

    setActivePart,
    setSelectedCards,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
