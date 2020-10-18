export const NAV_UP = "nav_up";

export const navUp = (state) => {
  const newFocusedCardIndex = Math.max(state.focusedCardIndex - 1, 0);
  const focusedCardId =
    state.structure[state.focusedColumnIndex][newFocusedCardIndex].id;
  return {
    ...state,
    focusedCardIndex: newFocusedCardIndex,
    activePart: 0,
    focusedCardId: focusedCardId,
  };
};
