import React from 'react'
import styles from './Header.module.css'
import titleImage from '../../assets/LogoMain.png';
import Button from '../Button'


function Header({ children }) {


  return (
    <header className={styles.header}>
      <img src={titleImage} alt="Title" className={styles.titleImage} />
      <div className={styles.buttonsDiv}>
        <Button label="HOME" styleType="primary" onClick={() => { window.location.href = "/" }}  />
        <Button label="NOVO VÍDEO" styleType="secondary" onClick={() => { window.location.href = "/novo-video" }} />
      </div>
    </header>
  )
}

export default Header;
