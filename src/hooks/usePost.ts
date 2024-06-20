import { useState, useEffect } from 'react';
import useApi from './useApi';
import { Post } from '../types/post';

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { api, loading, error } = useApi();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export default usePosts;
