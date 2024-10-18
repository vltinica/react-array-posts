import React from "react";
import { useState, useEffect } from "react";
import Post from "./Post";

const url = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    try {
      const res = await fetch(url);
      const posts = await res.json();
      setPosts(posts);
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  },[]);

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setPosts(data))
  //     .catch((error) => setError(error.message))
  //     .finally(() => setIsLoading(false));
  // }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <div>
      {isLoading ? (
        <div className="loadingStyle">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <h1>Posts</h1>
          <hr />
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
