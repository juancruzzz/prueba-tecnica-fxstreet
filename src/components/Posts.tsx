import React from "react";
import usePosts from "../hooks/usePost";

const Posts: React.FC = () => {
  const { posts, loading, error } = usePosts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.subFeed}</p>
            <div>
              <img src={post.author.imageUrl} alt={post.author.name} width="50" />
              <p>{post.author.name} - {post.author.companyName}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
