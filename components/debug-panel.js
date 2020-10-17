import { useContext } from "react";
import { StoreContext } from "../data/store";

const DebugPanel = () => {
  const { focusedColumnIndex, focusedCardIndex, mode } = useContext(
    StoreContext
  );
  return (
    <div>
      <div>focusedColumnIndex: {focusedColumnIndex}</div>
      <div>focusedCardIndex: {focusedCardIndex}</div>
      <div>mode: {mode}</div>
    </div>
  );
};

export default DebugPanel;
