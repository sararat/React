import { useState } from "react";
import PropTypes from "prop-types";

function Input({ addPost }) {
  const [input, setInput] = useState("");

  function onChange(event) {
    setInput(event.target.value);
  }

  function onKeyDown(event) {
    if (event.key === "Enter" && input.trim()) {
      addPost(input);
      setInput("");
    }
  }

  return (
    <div className="Input">
      <div className="Input__header">สร้างโพสต์</div>

      <input
        className="Input__field"
        type="text"
        placeholder="คุณกำลังคิดอะไรอยู่?"
        value={input}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

Input.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default Input;