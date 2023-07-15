import React from 'react';
import styles from "../styles/components/projects.module.css"

function Projetos({title, imageSrc, text, buttonText, buttonUrl }) {


  const handleButtonClick = () => {
    window.location.href = buttonUrl;
  };

  return (
    <div className="card">
      <img src={imageSrc} alt={title} className={styles.card-image} />
      <div className={styles.card-content}>
        <h2 className={styles.card-title}>{title}</h2>
        <p className={styles.card-text}>{text}</p>
        <button className={styles.card-button} onClick={handleButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Projetos;