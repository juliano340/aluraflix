// src/components/VideoCard.jsx
import React from 'react';
import styles from './VideoCard.module.css';

const VideoCard = ({ video, onDelete }) => {
  return (
    <div className={styles.card}>
      <img src={video.image} alt={video.title} className={styles.thumbnail} />
      <div className={styles.actions}>
        <button className={styles.deleteButton} onClick={() => onDelete(video.id)}>DELETAR</button>
        <button className={styles.editButton}>EDITAR</button>
      </div>
    </div>
  );
};

export default VideoCard;
