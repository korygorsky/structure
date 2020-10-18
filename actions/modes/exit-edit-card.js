import { MODE_NAVIGATE } from "../../data/modes";

export const EXIT_EDIT_CARD_MODE = "exit_edit_card_mode";

export const exitEditCardMode = (state) => {
  return {
    ...state,
    mode: MODE_NAVIGATE,
  };
};
