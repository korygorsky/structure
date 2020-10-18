import { useEffect, useRef, useState, useContext } from "react";
import { StoreContext } from "../../data/store";

const Title = ({ value, isEditing }) => {
  const { dispatch } = useContext(StoreContext);
  const inputEl = useRef(null);
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    if (isEditing) {
      inputEl.current.focus();
      inputEl.current.select();
    }
  }, [isEditing]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter" || e.key === "Escape") {
      inputEl.current.blur();
      console.log(e.key);
      //   window.dispatchEvent(
      //     new KeyboardEvent("keyup", {
      //       key: e.key,
      //     })
      //   );
    }
  };

  return (
    <div className="p-2 font-bold border-b border-solid border-gray-300">
      {!isEditing && value}
      {isEditing && (
        <input
          ref={inputEl}
          type="text"
          value={inputValue}
          onKeyUp={handleKeyUp}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default Title;
