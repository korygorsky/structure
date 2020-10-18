export const NAV_RIGHT = "nav_right";

export const navRight = (state) => {
  const numberOfColumns = state.structure.length;
  const newColumn = Math.min(state.focusedColumnIndex + 1, numberOfColumns - 1);
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
