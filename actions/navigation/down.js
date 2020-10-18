export const NAV_DOWN = "nav_down";

export const navDown = (state) => {
  const cardCount = state.structure[state.focusedColumnIndex].length;
  const newFocusedCardIndex = Math.min(
    state.focusedCardIndex + 1,
    cardCount - 1
  );
  const focusedCardId =
    state.structure[state.focusedColumnIndex][newFocusedCardIndex].id;

  return {
    ...state,
    focusedCardIndex: newFocusedCardIndex,
    focusedCardId: focusedCardId,
    activePart: 0,
  };
};
