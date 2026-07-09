import { useState } from "react";
import "./App.css";

import Navbar from "./Navbar";
import Input from "./Input";
import Post from "./Post";

let id = 1;

function App() {
  const [posts, setPosts] = useState([]);

  // เพิ่มโพสต์
  const addPost = (title) => {
    if (title.trim() === "") return;

    const newPost = {
      id: id++,
      title,
      liked: false,
      likes: 0,
      shares: 0,
      comments: [],
    };

    setPosts([newPost, ...posts]);
  };

  // ลบโพสต์
  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const toggleLike = (id) => {
    setPosts(
      posts.map((post) => {
        if (post.id !== id) return post;

        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
        };
      })
    );
  };

  const sharePost = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? {
              ...post,
              shares: post.shares + 1,
            }
          : post
      )
    );
  };

  // Comment
  const addComment = (id, comment) => {
    if (comment.trim() === "") return;

    setPosts(
      posts.map((post) =>
        post.id === id
          ? {
              ...post,
              comments: [...post.comments, comment],
            }
          : post
      )
    );
  };

  return (
    <>
      <Navbar />

      <Input addPost={addPost} />

      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          liked={post.liked}
          likes={post.likes}
          shares={post.shares}
          comments={post.comments}
          removePost={removePost}
          toggleLike={toggleLike}
          sharePost={sharePost}
          addComment={addComment}
        />
      ))}
    </>
  );
}

export default App;