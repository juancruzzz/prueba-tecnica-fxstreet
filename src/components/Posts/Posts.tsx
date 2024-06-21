import React, { useRef } from "react";
import "../../assets/styles/components/_posts.scss";
import usePosts from "../../hooks/usePost";
import { Post as PostInterface } from '../../types/post';
import Post from "./Post.component";

const Posts: React.FC<{ filter: string }> = ({ filter }) => {
  const { posts, loading, error } = usePosts();
  const postsRef = useRef<HTMLDivElement>(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredPosts = posts.filter((post: PostInterface) => 
    filter === 'latest' ? !post.isPopular : post.isPopular
  );

  return (
    <div className="posts" ref={postsRef}>
      {filteredPosts.map((post: PostInterface) => (
        <Post key={post.id} post={post} parentRef={postsRef} />
      ))}
    </div>
  );
};

export default Posts;
