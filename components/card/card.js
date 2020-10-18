import { useContext } from "react";
import { StoreContext } from "../../data/store";
import Part from "../part";
import Title from "./title";
import SelectionBubble from "./selection-bubble";
import useCard from "../../hooks/useCard";

const Card = ({ card }) => {
  const { selectedCards } = useContext(StoreContext);

  const [focused, selected, editingTitle, classNames] = useCard(card);

  return (
    <div
      className={`relative ${classNames} bg-white rounded-lg w-56 border-solid shadow mb-4`}
    >
      {selectedCards.length > 0 && <SelectionBubble selected={selected} />}
      <Title value={card.title} isEditing={editingTitle} />
      <div>
        {card.parts.map((part, partIndex) => (
          <Part part={part} partIndex={partIndex} />
        ))}
        {card.parts.length === 0 && !focused && (
          <div className="p-2 text-sm text-gray-600">(None)</div>
        )}
        {card.parts.length === 0 && focused && (
          <div className="p-2 text-sm text-gray-600">(Add +)</div>
        )}
      </div>
    </div>
  );
};

export default Card;
