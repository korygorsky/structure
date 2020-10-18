export const NAV_LEFT = "nav_left";

export const navLeft = (state) => {
  const newColumn = Math.max(state.focusedColumnIndex - 1, 0);
  const newCardIndex = Math.min(
    state.focusedCardIndex,
    state.structure[newColumn].length - 1
  );
  const focusedCardId = state.structure[newColumn][newCardIndex].id;
  return {
    ...state,
    focusedColumnIndex: newColumn,
    focusedCardIndex: newCardIndex,
    focusedCardId: focusedCardId,
    activePart: 0,
  };
};
