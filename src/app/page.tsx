"use client";

import axios from "axios";
import { useEffect, useState } from "react";

// Post 데이터의 타입 정의
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Main = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get<Post[]>("/api/posts");
        setPosts(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Next Practice</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Error: {error.message}</h2>
      ) : (
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Main;
