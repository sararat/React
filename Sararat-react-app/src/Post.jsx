import { useState } from "react";
import PropTypes from "prop-types";
import { BiSolidLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

function Post({
  id,
  title,
  liked,
  likes,
  shares,
  comments,
  removePost,
  toggleLike,
  sharePost,
  addComment,
}) {
  const [text, setText] = useState("");
  const [showComment, setShowComment] = useState(false);
  const handleComment = () => {
    if (text.trim() === "") return;

    addComment(id, text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleComment();
    }
  };

  return (
    <div className="Post">
      {/* ปุ่มลบ */}
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
          src={`https://picsum.photos/700/400?random=${id}`}
          alt="Post"
        />
      </div>


      <div className="Post__status">

        <div className="Post__likeCount">
          {likes > 0 && (
            <>
              <span className="LikeIcon">
                <BiSolidLike size={12} />
              </span>

              <span>{likes} คน</span>
            </>
          )}
        </div>

        <div className="Post__count">
          {comments.length} ความคิดเห็น · {shares} แชร์
        </div>

      </div>

      <div className="Post__actions">

        <button
          className={liked ? "liked" : ""}
          onClick={() => toggleLike(id)}
        >
          <BiSolidLike size={20} />
          ถูกใจ
        </button>

        <button
          onClick={() => setShowComment(!showComment)}
        >
          <FaRegCommentDots size={18} />
          แสดงความคิดเห็น
        </button>

        <button
          onClick={() => sharePost(id)}
        >
          <IoShareSocial size={20} />
          แชร์
        </button>

      </div>

      {showComment && (
        <div className="Post__comment">

          <input
            type="text"
            placeholder="เขียนความคิดเห็น..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button onClick={handleComment}>
            ส่ง
          </button>

        </div>
      )}

      {comments.length > 0 && (
        <div className="Post__comments">

          {comments.map((comment, index) => (
            <div className="Comment" key={index}>

              <img
                className="Comment__avatar"
                src={`https://i.pravatar.cc/40?img=${id + index}`}
                alt="Avatar"
              />

              <div className="Comment__bubble">
                <strong>Sararat W</strong>
                <p>{comment}</p>
              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  shares: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  removePost: PropTypes.func.isRequired,
  toggleLike: PropTypes.func.isRequired,
  sharePost: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
};

export default Post;