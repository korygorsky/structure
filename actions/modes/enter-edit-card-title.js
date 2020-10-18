import { MODE_EDIT_CARD_TITLE } from "../../data/modes";

export const ENTER_EDIT_CARD_TITLE_MODE = "enter_edit_card_title_mode";

export const enterEditCardTitleMode = (state) => {
  return {
    ...state,
    mode: MODE_EDIT_CARD_TITLE,
  };
};
