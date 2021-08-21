import React, { useState, useEffect } from 'react';
import { AppWrapper } from '../context/state';
import '../styles/styles.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import { callApi } from '../utils/callApi';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
