import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import SearchLocation from '../components/SearchLocation/SearchLocation';

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.networkContainer}>
        <img
          className={styles.network}
          src='/network.svg'
          alt='An SVG of an eye'
        />
      </div>
      <Navbar />
      <Hero />
      <SearchLocation />
    </div>
  );
}
