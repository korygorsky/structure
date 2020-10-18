import { useContext } from "react";
import { StoreContext } from "../data/store";

const DebugPanel = () => {
  const { focusedColumnIndex, focusedCardIndex, mode } = useContext(
    StoreContext
  );
  return (
    <div className="fixed right-0 top-0">
      <div>focusedColumnIndex: {focusedColumnIndex}</div>
      <div>focusedCardIndex: {focusedCardIndex}</div>
      <div>mode: {mode}</div>
    </div>
  );
};

export default DebugPanel;
