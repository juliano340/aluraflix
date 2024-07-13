// src/components/VideoCard.jsx
import React, { useState } from 'react';
import EditVideoModal from '../EditVideoModal';
import styles from './VideoCard.module.css';

const VideoCard = ({ video, onDelete, onSave }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div className={styles.card}>
      <img src={video.image} alt={video.title} className={styles.thumbnail} />
      <div className={styles.actions}>
        <button className={styles.deleteButton} onClick={() => onDelete(video.id)}>DELETAR</button>
        <button className={styles.editButton} onClick={() => setIsEditModalOpen(true)}>EDITAR</button>
      </div>
      <EditVideoModal 
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)} 
        video={video}
        onSave={(updatedVideo) => {
          onSave(updatedVideo);
          setIsEditModalOpen(false);
        }}
      />
    </div>
  );
};

export default VideoCard;
