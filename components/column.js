import Card from "./card/card";

const Column = ({ column, columnIndex }) => {
  return (
    <div className={`mr-4 ${columnIndex === 0 ? "ml-4" : ""}`}>
      {column.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
};

export default Column;
