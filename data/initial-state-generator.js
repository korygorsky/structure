import uniqid from "uniqid";
import { MODE_EDIT_CARD } from "./modes";

const initialStateGenerator = () => {
  const firstCardId = uniqid();
  return {
    structure: [[{ id: firstCardId, title: "Entry Point", parts: [] }]],
    mode: MODE_EDIT_CARD,
    focusedColumnIndex: 0,
    focusedCardIndex: 0,
    focusedCardId: firstCardId,
    activePart: 0,
    selectedCards: [],
  };
};

export default initialStateGenerator;
