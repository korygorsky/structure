import Card from "./card/card";

const Column = ({ column, columnIndex }) => {
  return (
    <div className={`mr-4 ${columnIndex === 0 ? "ml-4" : ""}`}>
      {column.map((card, cardIndex) => (
        <Card card={card} cardIndex={cardIndex} columnIndex={columnIndex} />
      ))}
    </div>
  );
};

export default Column;
