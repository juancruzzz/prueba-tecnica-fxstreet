import { faBookmark as fasBookmark, faHeart as fasHeart } from '@fortawesome/free-regular-svg-icons';
import { faFile, faBookmark as farBookmark, faHeart as farHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import "../../assets/styles/components/_posts.scss";
import { Post as PostInterface } from '../../types/post';
import DropdownMenu from '../commons/DropdownMenu';

const Post: React.FC<{ post: PostInterface, parentRef: React.RefObject<HTMLDivElement> }> = ({ post, parentRef }) => {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    };

    const handleSave = () => {
        setSaved(!saved);
    };

    return (
        <div className="post" key={ post.id }>
            <div className="post-header">
                <div className="post-feed">
                    <FontAwesomeIcon icon={ faFile } className="post-feed-icon" />
                    <span className="post-feed-category">{ post.feed }</span>
                    <span className="post-subfeed-category">&gt; { post.subFeed }</span>
                </div>
                <div className="post-timestamp">
                    <FontAwesomeIcon icon={ ['far', 'clock'] } /> { new Date(post.publicationTime).toLocaleString() }
                </div>
            </div>
            <div className="post-body">
                <div className="post-author">
                    <img src={ post.author.imageUrl } alt={ post.author.name } className="post-author-image" />
                    <div className="post-author-info">
                        <div className="post-author-company">
                            <span>{ post.author.companyName }</span> | <span>{ post.author.name }</span>
                        </div>
                        <div className="post-title">{ post.title }</div>
                    </div>
                </div>
                <div className="post-content" dangerouslySetInnerHTML={ { __html: post.content } } />
            </div>
            <div className="post-footer">
                <button className={ `post-action like ${ liked ? 'active' : '' }` } onClick={ handleLike }>
                    <FontAwesomeIcon icon={ liked ? farHeart : fasHeart } />
                    {liked ? 'Liked!' : 'Like'}
                </button>
                <button className={ `post-action save ${ saved ? 'active' : '' }` } onClick={ handleSave }>
                    <FontAwesomeIcon icon={ saved ? farBookmark : fasBookmark } />
                    {saved ? 'Saved!' : 'Save'}
                </button>
                <DropdownMenu parentRef={ parentRef } />
            </div>
        </div>
    );
};

export default Post;
