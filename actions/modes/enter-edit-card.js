import { MODE_EDIT_CARD } from "../../data/modes";

export const ENTER_EDIT_CARD_MODE = "enter_edit_card_mode";

export const enterEditCardMode = (state) => {
  return {
    ...state,
    mode: MODE_EDIT_CARD,
  };
};
