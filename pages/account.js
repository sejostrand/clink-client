import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/Account.module.scss';

const account = () => {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
    </div>
  );
};

export default account;
