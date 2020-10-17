import { useContext } from "react";
import DiagramColumn from "./column";
import { StoreContext } from "../../data/store";

const Diagram = () => {
  const { structure } = useContext(StoreContext);
  return (
    <div className="" style={{ display: "flex", flexBasis: "300px" }}>
      {structure.map((column, columnIndex) => (
        <DiagramColumn column={column} columnIndex={columnIndex} />
      ))}
    </div>
  );
};

export default Diagram;
