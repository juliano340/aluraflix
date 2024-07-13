// src/components/CategorySection.jsx
import React from 'react';
import VideoCard from '../VideoCard';
import styles from './CategorySection.module.css';

const CategorySection = ({ category, videos, onDelete, onSave }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{category}</h2>
      <div className={styles.videoList}>
        {videos.map(video => (
          <VideoCard key={video.id} video={video} onDelete={onDelete} onSave={onSave} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
