import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import titleImage from '../../assets/LogoMain.png';
import Button from '../Button';

function Header() {
  const location = useLocation();

  const isNovoVideoRoute = location.pathname === '/novo-video';

  return (
    <header className={styles.header}>
      <img src={titleImage} alt="Title" className={styles.titleImage} />
      <div className={styles.buttonsDiv}>
        <Button 
          label="HOME" 
          styleType={isNovoVideoRoute ? "secondary" : "primary"} 
          onClick={() => { window.location.href = "/" }}  
        />
        <Button 
          label="NOVO VÍDEO" 
          styleType={isNovoVideoRoute ? "primary" : "secondary"} 
          onClick={() => { window.location.href = "/novo-video" }} 
        />
      </div>
    </header>
  );
}

export default Header;
