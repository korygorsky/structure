import {
  MODE_NAVIGATE,
  MODE_EDIT_CARD,
  MODE_EDIT_CARD_TITLE,
} from "../data/modes";

export const actions = {
  NAV_RIGHT: "nav_right",
  NAV_LEFT: "nav_left",
  NAV_UP: "nav_up",
  NAV_DOWN: "nav_down",
  ENTER_EDIT_MODE: "enter_edit_mode",
  ENTER_EDIT_CARD_TITLE_MODE: "enter_edit_card_title_mode",
  EXIT_SELECTION_MODE: "exit_selection_mode",
  EXIT_EDIT_MODE: "exit_edit_mode",
  EXIT_EDIT_CARD_TITLE_MODE: "exit_edit_card_title_mode",
  TOGGLE_CARD_SELECTION: "toggle_card_selection",
};

export const resolvers = {
  navRight: (state) => {
    const numberOfColumns = state.structure.length;
    const newColumn = Math.min(
      state.focusedColumnIndex + 1,
      numberOfColumns - 1
    );
    const newCardIndex = Math.min(
      state.focusedCardIndex,
      state.structure[newColumn].length - 1
    );
    return {
      ...state,
      focusedColumnIndex: newColumn,
      focusedCardIndex: newCardIndex,
      activePart: 0,
    };
  },
  navLeft: (state) => {
    const newColumn = Math.max(state.focusedColumnIndex - 1, 0);
    const newCardIndex = Math.min(
      state.focusedCardIndex,
      state.structure[newColumn].length - 1
    );

    return {
      ...state,
      focusedColumnIndex: newColumn,
      focusedCardIndex: newCardIndex,
      activePart: 0,
    };
  },
  navUp: (state) => {
    const newCardIndex = Math.max(state.focusedCardIndex - 1, 0);
    return {
      ...state,
      focusedCardIndex: newCardIndex,
      activePart: 0,
    };
  },
  navDown: (state) => {
    const cardCount = state.structure[state.focusedColumnIndex].length;
    const newFocusedCardIndex = Math.min(
      state.focusedCardIndex + 1,
      cardCount - 1
    );

    return {
      ...state,
      focusedCardIndex: newFocusedCardIndex,
      activePart: 0,
    };
  },
  enterEditMode: (state) => {
    return {
      ...state,
      mode: MODE_EDIT_CARD,
    };
  },
  enterEditCardTitleMode: (state) => {
    return {
      ...state,
      mode: MODE_EDIT_CARD_TITLE,
    };
  },
  exitSelectionMode: (state) => {
    return {
      ...state,
      selectedCards: [],
    };
  },
  exitEditMode: (state) => {
    return {
      ...state,
      mode: MODE_NAVIGATE,
    };
  },
  exitEditCardTitleMode: (state) => {
    return {
      ...state,
      mode: MODE_EDIT_CARD,
    };
  },
  toggleCardSelection: (state) => {
    const isAlreadySelected =
      state.selectedCards.filter((selectedCard) => {
        return (
          selectedCard.card === state.focusedCardIndex &&
          selectedCard.column === state.focusedColumnIndex
        );
      }).length > 0;
    const previouslySelectedCards = state.selectedCards;

    if (isAlreadySelected) {
      return {
        ...state,
        selectedCards: previouslySelectedCards.filter((selectedCard) => {
          return !(
            selectedCard.card === state.focusedCardIndex &&
            selectedCard.column === state.focusedColumnIndex
          );
        }),
      };
    } else {
      return {
        ...state,
        selectedCards: [
          ...previouslySelectedCards,
          { card: state.focusedCardIndex, column: state.focusedColumnIndex },
        ],
      };
    }
  },
};
