import React, { useState, useEffect } from "react";
import PostCard from "./components/PostCard";
import { fetchPosts } from "./services/api";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll";
import "./styles/styles.css";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchPosts(page);

      setPosts((prev) => [...prev, ...data]);
      setHasMore(data.length > 0);
      setLoading(false);
    };

    load();
  }, [page]);

  const lastElementRef = useInfiniteScroll(loading, hasMore, setPage);

  return (
    <div className="container">
      <h2>Infinite Scroll Feed</h2>

      {posts.map((post, index) => {
        if (index === posts.length - 1) {
          return (
            <div ref={lastElementRef} key={post.id}>
              <PostCard post={post} />
            </div>
          );
        }
        return <PostCard key={`${post.id}-${index}`} post={post} />;
      })}

      {loading && <p className="loading">Loading...</p>}
      {!hasMore && <p className="end">No more data</p>}
    </div>
  );
}
