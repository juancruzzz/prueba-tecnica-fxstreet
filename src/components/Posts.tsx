import React from "react";
import "../assets/styles/components/_posts.scss";
import usePosts from "../hooks/usePost";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Posts: React.FC = () => {
  const { posts, loading, error } = usePosts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="post-header">
            <div className="post-feed">
              <FontAwesomeIcon icon={['far', 'file']} className="post-feed-icon" />
              <span className="post-feed-category">{post.feed}</span> &gt; <span className="post-subfeed-category">{post.subFeed}</span>
            </div>
            <div className="post-timestamp"><FontAwesomeIcon icon={['far', 'clock']} /> {new Date(post.publicationTime).toLocaleString()}</div>
          </div>
          <div className="post-body">
            <div className="post-title">{post.title}</div>
            <div className="post-author">
              <img src={post.author.imageUrl} alt={post.author.name} className="post-author-image" />
              <div className="post-author-info">
                <span className="post-author-name">{post.author.name}</span> - <span className="post-author-company">{post.author.companyName}</span>
              </div>
            </div>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          <div className="post-footer">
            <button className="post-action"><FontAwesomeIcon icon={['far', 'thumbs-up']} /> Like</button>
            <button className="post-action"><FontAwesomeIcon icon={['far', 'bookmark']} /> Save</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;