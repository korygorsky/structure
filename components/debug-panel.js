import { useContext } from "react";
import { StoreContext } from "../data/store";

const DebugPanel = () => {
  const {
    focusedColumnIndex,
    focusedCardIndex,
    focusedCardId,
    mode,
  } = useContext(StoreContext);
  return (
    <div className="fixed bg-white text-sm right-0 top-0 m-2 py-2 px-3 border border-solid border-gray-400 rounded-lg">
      <div>
        <span className="text-gray-600">focusedColumnIndex:</span>{" "}
        {focusedColumnIndex}
      </div>
      <div>
        <span className="text-gray-600">focusedCardIndex:</span>{" "}
        {focusedCardIndex}
      </div>
      <div>
        <span className="text-gray-600">focusedCardId:</span> {focusedCardId}
      </div>
      <div>
        <span className="text-gray-600">mode:</span> {mode}
      </div>
    </div>
  );
};

export default DebugPanel;
