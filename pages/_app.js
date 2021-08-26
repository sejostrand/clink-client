import React, { useState, useEffect } from 'react';
import '../styles/global.scss';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { AppWrapper } from '../utils/context/state';
function MyApp({ Component, pageProps }) {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    console.log('refreshed');
  }, [refresh]);

  return (
    <AppWrapper>
      <Component {...pageProps} />
      <Footer />
    </AppWrapper>
  );
}

export default MyApp;
