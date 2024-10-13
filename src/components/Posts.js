import React from "react";
import { useState, useEffect } from "react";
import Post from "./Post";

const Posts = () => {
  const [post, setPost] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setPost(json)
      })
      .catch((error) => console.log(error.message))
  }, []);
  return (
    <div>
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
