// src/components/NewVideoForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { categories } from '../../categories';
import styles from './NewVideoForm.module.css';

const NewVideoForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newVideo = { title, category, image, video, description };
    
    try {
      await axios.post('http://localhost:3001/videos', newVideo);
      alert('Vídeo cadastrado com sucesso!');
      // Limpar o formulário
      setTitle('');
      setCategory('');
      setImage('');
      setVideo('');
      setDescription('');
    } catch (error) {
      console.error('Erro ao cadastrar o vídeo:', error);
      alert('Erro ao cadastrar o vídeo.');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>NOVO VÍDEO</h2>
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
          value={video} 
          onChange={(e) => setVideo(e.target.value)} 
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
        <button type="submit" className={styles.submitButton}>GUARDAR</button>
        <button type="button" className={styles.clearButton} onClick={() => {
          setTitle('');
          setCategory('');
          setImage('');
          setVideo('');
          setDescription('');
        }}>LIMPAR</button>
      </div>
    </form>
  );
};

export default NewVideoForm;
