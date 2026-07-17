import { useState } from "react";
import PropTypes from "prop-types";
import "./Input.css";

function Input({ addPost }) {
  const [input, setInput] = useState("");

  const handlePost = () => {
    if (!input.trim()) return;

    addPost(input);
    setInput("");
  };

  return (
    <div className="Input">

      <div className="Input__box">

        <img
          className="Input__avatar"
          src="https://i.pravatar.cc/150?img=5"
          alt="avatar"
        />

        <input
          className="Input__field"
          type="text"
          placeholder="คุณกำลังคิดอะไรอยู่?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handlePost();
          }}
        />

      </div>

      <div className="Input__actions">

        <button>
          📹 Live Video
        </button>

        <button>
          🖼️ Photo/Video
        </button>

        <button>
          😊 Feeling
        </button>

      </div>

      <button
        className="Input__button"
        onClick={handlePost}
      >
        Post
      </button>

    </div>
  );
}

Input.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default Input;