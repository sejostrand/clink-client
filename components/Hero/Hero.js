import React from 'react';
import styles from '../../styles/Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.heroTitle}>Clink</h1>
      <h2 className={styles.heroSubTitle}>Find your creative link.</h2>
      <h2 className={styles.heroSubTitle}>Wherever you are.</h2>
      <h2 className={styles.heroSubTitle}>Whenever you need.</h2>
      <h2 className={styles.heroSubTitle}>Clink up.</h2>
    </div>
  );
};

export default Hero;
