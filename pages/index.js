import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

const Diagram = ({ structure, activeColumn, activeRow }) => {
  return (
    <div className="flex">
      {structure.map((column, columnIndex) => {
        const isActiveColumn = columnIndex === activeColumn;
        return (
          <div className={`mr-4 ${columnIndex === 0 ? "ml-4" : ""}`}>
            {column.map((row, rowIndex) => {
              const isActiveRow = isActiveColumn && rowIndex === activeRow;
              return (
                <ul
                  className={`border border-solid ${
                    isActiveRow ? "border-blue-500" : "border-gray-300"
                  } shadow mb-4`}
                >
                  <li className="p-2 border-b border-solid border-gray-300">
                    {row.title}
                  </li>
                  <ul>
                    {row.parts.map((part, partIndex) => {
                      return <li className="p-2">{part.name}</li>;
                    })}
                  </ul>
                </ul>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const initialStructure = [
  [
    { title: "First Screen", parts: [{ name: "Part 1" }] },
    { title: "Second Screen", parts: [] }
  ],
  [
    { title: "First Screen", parts: [] },
    { title: "Second Screen", parts: [] }
  ]
];

export default function IndexPage() {
  const [structure, setStructure] = useState(initialStructure);
  const [amount, setAmount] = useState(0);
  const [activeColumn, setActiveColumn] = useState(0);
  const [activeRow, setActiveRow] = useState(0);
  const [depth, setDepth] = useState(0);

  const addRow = () => {
    alert(amount);
  };

  useHotkeys("right", () => {
    console.log(depth);
    if (depth === 0) {
      setActiveColumn((prevAmount) => {
        return Math.min(prevAmount + 1, structure.length - 1);
      });
      setActiveRow(0);
    }
  });
  useHotkeys("left", () => {
    console.log(depth);
    if (depth === 0) {
      setActiveColumn((prevAmount) => {
        return Math.max(prevAmount - 1, 0);
      });
      setActiveRow(0);
    }
  });
  useHotkeys("up", () => {
    console.log(depth);
    if (depth === 0) {
      setActiveRow((prevAmount) => {
        return Math.min(prevAmount + 1, 0);
      });
    }
  });
  useHotkeys("down", () => {
    console.log(depth);
    if (depth === 0) {
      setActiveRow((prevAmount) => {
        return Math.max(prevAmount - 1, structure[activeColumn].length - 1);
      });
    }
  });
  useHotkeys("enter", () => {
    setDepth((prevDepth) => Math.min(prevDepth + 1, 2));
  });
  useHotkeys("escape", () => {
    setDepth((prevDepth) => Math.max(prevDepth - 1, 0));
  });
  return (
    <div>
      <div>activeColumn: {activeColumn}</div>
      <div>activeRow: {activeRow}</div>
      <div>depth: {depth}</div>
      <Diagram
        structure={structure}
        activeColumn={activeColumn}
        activeRow={activeRow}
      />
    </div>
  );
}
