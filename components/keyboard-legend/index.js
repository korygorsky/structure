import { Fragment, useContext } from "react";
import Key from "./key";
import {
  MODE_NAVIGATE,
  MODE_EDIT_CARD,
  MODE_EDIT_CARD_TITLE,
} from "../../data/modes";
import { StoreContext } from "../../data/store";

const KeyboardLegend = () => {
  const { mode, selectedCards } = useContext(StoreContext);
  const hasSelectedCards = selectedCards.length > 0 ? true : false;

  return (
    <div className="fixed flex flex-wrap justify-center bottom-0 right-0 left-0 px-8 py-4">
      {mode === MODE_NAVIGATE && (
        <Fragment>
          <Key action="Navigate">←↑→↓</Key>
          <Key action={`Select${hasSelectedCards ? " / Deselect" : ""}`}>
            space
          </Key>
          {!hasSelectedCards && (
            <Fragment>
              <Key action="Edit">enter</Key>
            </Fragment>
          )}
          {hasSelectedCards && (
            <Fragment>
              <Key action="Delete">Backspace</Key>
              <Key action="Clear Selection">esc</Key>
            </Fragment>
          )}
        </Fragment>
      )}
      {mode === MODE_EDIT_CARD && (
        <Fragment>
          <Key action="Navigate">↑↓</Key>
          <Key action="Edit Title">e</Key>
          <Key action="Back">esc</Key>
        </Fragment>
      )}
      {mode === MODE_EDIT_CARD_TITLE && (
        <Fragment>
          <Key action="Save">enter</Key>
          <Key action="Cancel">esc</Key>
        </Fragment>
      )}
    </div>
  );
};

export default KeyboardLegend;
