import Image from 'next/image';
import styles from '../styles/Home.module.scss';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      {/* <div className={styles.gradientBar}></div> */}
      <Navbar />
      <Hero />
      <div className={styles.container}></div>
    </div>
  );
}
