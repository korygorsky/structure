const SelectionBubble = ({ selected }) => {
  return (
    <div
      className={`absolute inset-offset-top-right w-6 h-6 flex align-items justify-center ${
        selected ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-300"
      } rounded-full shadow`}
    >
      {selected ? "✓" : "ⅹ"}
    </div>
  );
};

export default SelectionBubble;
