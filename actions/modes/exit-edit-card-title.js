import { MODE_EDIT_CARD } from "../../data/modes";

export const EXIT_EDIT_CARD_TITLE_MODE = "exit_edit_card_title_mode";

export const exitEditCardTitleMode = (state) => {
  return {
    ...state,
    mode: MODE_EDIT_CARD,
  };
};
