import { NAV_UP, navUp } from "./navigation/up";
import { NAV_RIGHT, navRight } from "./navigation/right";
import { NAV_LEFT, navLeft } from "./navigation/left";
import { NAV_DOWN, navDown } from "./navigation/down";
import {
  ENTER_EDIT_CARD_MODE,
  enterEditCardMode,
} from "./modes/enter-edit-card";
import { EXIT_EDIT_CARD_MODE, exitEditCardMode } from "./modes/exit-edit-card";
import {
  ENTER_EDIT_CARD_TITLE_MODE,
  enterEditCardTitleMode,
} from "./modes/enter-edit-card-title";
import {
  EXIT_EDIT_CARD_TITLE_MODE,
  exitEditCardTitleMode,
} from "./modes/exit-edit-card-title";
import { EXIT_SELECTION_MODE, exitSelectionMode } from "./modes/exit-selection";
import { TOGGLE_CARD_SELECTION, toggleCardSelection } from "./toggle-selection";

export const actions = {
  NAV_RIGHT,
  NAV_LEFT,
  NAV_UP,
  NAV_DOWN,
  ENTER_EDIT_CARD_MODE,
  EXIT_EDIT_CARD_MODE,
  ENTER_EDIT_CARD_TITLE_MODE,
  EXIT_EDIT_CARD_TITLE_MODE,
  EXIT_SELECTION_MODE,
  TOGGLE_CARD_SELECTION,
};

export const resolvers = {
  navRight,
  navLeft,
  navUp,
  navDown,
  enterEditCardMode,
  exitEditCardMode,
  enterEditCardTitleMode,
  exitEditCardTitleMode,
  exitSelectionMode,
  toggleCardSelection,
};

export function reducer(state, action) {
  switch (action.type) {
    case actions.NAV_RIGHT:
      return resolvers.navRight(state);
    case actions.NAV_LEFT:
      return resolvers.navLeft(state);
    case actions.NAV_UP:
      return resolvers.navUp(state);
    case actions.NAV_DOWN:
      return resolvers.navDown(state);
    case actions.ENTER_EDIT_CARD_MODE:
      return resolvers.enterEditCardMode(state);
    case actions.EXIT_EDIT_CARD_MODE:
      return resolvers.exitEditCardMode(state);
    case actions.ENTER_EDIT_CARD_TITLE_MODE:
      return resolvers.enterEditCardTitleMode(state);
    case actions.EXIT_EDIT_CARD_TITLE_MODE:
      return resolvers.exitEditCardTitleMode(state);
    case actions.EXIT_SELECTION_MODE:
      return resolvers.exitSelectionMode(state);
    case actions.TOGGLE_CARD_SELECTION:
      return resolvers.toggleCardSelection(state);
    default:
      throw new Error();
  }
}
