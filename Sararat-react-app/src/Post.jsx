import PropTypes from "prop-types";

function Post({ id, title, removePost }) {
  return (
    <div className="Post">
      <button
        className="Post__delete"
        onClick={() => removePost(id)}
      >
        ✖
      </button>

      <div className="Post__header">
        <img
          className="Post__avatar"
          src={`https://i.pravatar.cc/50?img=${id}`}
          alt="Avatar"
        />

        <div>
          <h3 className="Post__name">Sararat W</h3>
          <p className="Post__time">1 ชั่วโมงที่แล้ว</p>
        </div>
      </div>

      <div className="Post__content">
        <p>{title}</p>

        <img
          className="Post__image"
          src={`https://picsum.photos/800/500?random=${id}`}
          alt={title}
        />
      </div>

      <div className="Post__actions">
        <button>👍 ถูกใจ</button>
        <button>💬 แสดงความคิดเห็น</button>
        <button>↗ แชร์</button>
      </div>
    </div>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  removePost: PropTypes.func.isRequired,
};

export default Post;