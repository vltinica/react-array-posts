import React from "react";
import { useState, useEffect } from "react";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("")

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message));
  }, []);

  if(error) {
    return (
      <h1>Error: {error}</h1>
    )
  }
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
      <Post />
    </div>
  );
};

export default Posts;
