export const TOGGLE_CARD_SELECTION = "toggle_card_selection";

export const toggleCardSelection = (state) => {
  if (state.selectedCards.includes(state.focusedCardId)) {
    return {
      ...state,
      selectedCards: state.selectedCards.filter((selectedCardId) => {
        return !(selectedCardId === state.focusedCardId);
      }),
    };
  } else {
    return {
      ...state,
      selectedCards: [...state.selectedCards, state.focusedCardId],
    };
  }
};
