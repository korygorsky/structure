import { useState, useContext } from "react";
import { StoreContext } from "../data/store";
import { useHotkeys } from "react-hotkeys-hook";
import { actions } from "../actions/index";

import {
  MODE_NAVIGATE,
  MODE_EDIT_CARD,
  MODE_EDIT_CARD_TITLE,
} from "../data/modes";

const useHotKeys = () => {
  const { dispatch, mode, hasSelectedCards } = useContext(StoreContext);

  useHotkeys(
    "right",
    () => {
      if (mode === MODE_NAVIGATE) {
        dispatch({ type: actions.NAV_RIGHT });
      }
    },
    {},
    [mode]
  );
  useHotkeys(
    "left",
    () => {
      if (mode === MODE_NAVIGATE) {
        dispatch({ type: actions.NAV_LEFT });
      }
    },
    {},
    [mode]
  );
  useHotkeys(
    "up",
    () => {
      if (mode === MODE_NAVIGATE) {
        dispatch({ type: actions.NAV_UP });
      }
    },
    {},
    [mode]
  );
  useHotkeys(
    "down",
    () => {
      if (mode === MODE_NAVIGATE) {
        dispatch({ type: actions.NAV_DOWN });
      } else if (mode === MODE_EDIT_CARD) {
        // setActivePart((prevPart) => {
        //   const partCount =
        //     structure[focusedColumnIndex][focusedCardIndex].parts.length;
        //   return Math.max(prevPart - 1, partCount - 1);
        // });
      }
    },
    {},
    [mode]
  );
  useHotkeys(
    "enter",
    () => {
      if (mode === MODE_NAVIGATE) {
        dispatch({ type: actions.ENTER_EDIT_CARD_MODE });
      }
    },
    {},
    [mode]
  );
  useHotkeys(
    "escape",
    () => {
      if (mode === MODE_NAVIGATE && hasSelectedCards) {
        dispatch({ type: actions.EXIT_SELECTION_MODE });
      } else if (mode === MODE_EDIT_CARD) {
        dispatch({ type: actions.EXIT_EDIT_CARD_MODE });
      } else if (mode === MODE_EDIT_CARD_TITLE) {
        dispatch({ type: actions.EXIT_EDIT_CARD_TITLE_MODE });
      }
    },
    {},
    [mode, hasSelectedCards]
  );
  useHotkeys(
    "e",
    () => {
      if (mode === MODE_EDIT_CARD) {
        dispatch({ type: actions.ENTER_EDIT_CARD_TITLE_MODE });
      }
    },
    { keyup: true, keydown: false },
    [mode]
  );
  useHotkeys(
    "space",
    () => {
      if (mode === MODE_NAVIGATE) {
        dispatch({ type: actions.TOGGLE_CARD_SELECTION });
      }
    },
    {},
    [mode]
  );

  return [];
};

export default useHotKeys;
