// src/components/VideoGallery.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategorySection from '../CategorySection';
import { categories } from '../../categories';
import styles from './VideoGallery.module.css';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/videos');
        setVideos(response.data);
      } catch (error) {
        console.error('Erro ao buscar vídeos:', error);
      }
    };

    fetchVideos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/videos/${id}`);
      setVideos(videos.filter(video => video.id !== id));
    } catch (error) {
      console.error('Erro ao deletar o vídeo:', error);
      alert('Erro ao deletar o vídeo.');
    }
  };

  const categorizedVideos = categories.map(category => ({
    category,
    videos: videos.filter(video => video.category === category).slice(0, 3), // Limita a 3 vídeos por categoria
  }));

  return (
    <div className={styles.gallery}>
      {categorizedVideos.map(({ category, videos }) => (
        <CategorySection key={category} category={category} videos={videos} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default VideoGallery;
