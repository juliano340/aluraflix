// Banner.jsx
import React from 'react';
import styles from './Banner.module.css';
import bgbanner from '../../assets/img/bg-banner.png';

function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <div className={styles.tag}>FRONTEND</div>
          <h1>SEO com React</h1>
          <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </p>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.card} style={{ backgroundImage: `url(${bgbanner})` }}></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
