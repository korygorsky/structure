import { useContext } from "react";
import DiagramColumn from "./column";
import { StoreContext } from "../data/store";

const Diagram = () => {
  const { structure } = useContext(StoreContext);
  return (
    <div className="flex mt-4">
      {structure.map((column, columnIndex) => (
        <DiagramColumn column={column} columnIndex={columnIndex} />
      ))}
    </div>
  );
};

export default Diagram;
