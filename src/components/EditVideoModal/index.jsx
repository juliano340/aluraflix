// src/components/EditVideoModal.jsx
import React, { useState, useEffect } from 'react';
import styles from './EditVideoModal.module.css';
import { categories } from '../../categories';

const EditVideoModal = ({ isOpen, onClose, video, onSave }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (video) {
      setTitle(video.title);
      setCategory(video.category);
      setImage(video.image);
      setVideoUrl(video.video);
      setDescription(video.description);
    }
  }, [video]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedVideo = { ...video, title, category, image, video: videoUrl, description };
    onSave(updatedVideo);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2>Editar Card</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Título</label>
            <input 
              type="text" 
              id="title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Ingresse o título" 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="category">Categoria</label>
            <select 
              id="category" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Selecione uma categoria</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="image">Imagem</label>
            <input 
              type="text" 
              id="image" 
              value={image} 
              onChange={(e) => setImage(e.target.value)} 
              placeholder="Digite o link da imagem" 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="video">Vídeo</label>
            <input 
              type="text" 
              id="video" 
              value={videoUrl} 
              onChange={(e) => setVideoUrl(e.target.value)} 
              placeholder="Digite o link do vídeo" 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Descrição</label>
            <textarea 
              id="description" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              placeholder="Sobre o que é esse vídeo?" 
            ></textarea>
          </div>
          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.submitButton}>SALVAR</button>
            <button type="button" className={styles.clearButton} onClick={() => {
              setTitle('');
              setCategory('');
              setImage('');
              setVideoUrl('');
              setDescription('');
            }}>LIMPAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditVideoModal;
