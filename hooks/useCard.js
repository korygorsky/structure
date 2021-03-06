import { useState, useContext } from "react";
import { StoreContext } from "../data/store";
import {
  MODE_NAVIGATE,
  MODE_EDIT_CARD,
  MODE_EDIT_CARD_TITLE,
} from "../data/modes";

const useCard = (card) => {
  const { mode, selectedCards, focusedCardId } = useContext(StoreContext);
  const isFocusedCard = focusedCardId === card.id;
  const focused = isFocusedCard && mode === MODE_EDIT_CARD;
  const editingTitle = isFocusedCard && mode === MODE_EDIT_CARD_TITLE;
  const selected =
    mode === MODE_NAVIGATE &&
    selectedCards.filter((selectedCardId) => {
      return selectedCardId === card.id;
    }).length > 0;

  let borderColor = "border-gray-300";
  let borderSize = "border-2";

  if (mode === MODE_NAVIGATE && isFocusedCard) {
    borderColor = "border-blue-500";
  } else if (selected) {
    //  borderColor = "border-green-500";
  } else if (focused || editingTitle) {
    borderColor = "border-blue-500";
    borderSize = "border-4";
  }

  const classNames = `${borderSize} ${borderColor}`;

  return [focused, selected, editingTitle, classNames];
};

export default useCard;
