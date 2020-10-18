export const EXIT_SELECTION_MODE = "exit_selection_mode";

export const exitSelectionMode = (state) => {
  return {
    ...state,
    selectedCards: [],
  };
};
