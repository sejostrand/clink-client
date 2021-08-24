import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.scss';
// import { useCurrentUser, useDispatchCurrentUser } from '../../context/state';
import axios from 'axios';

const DesktopNav = () => {
  // const user = useCurrentUser();
  const isAuthenticated = true;

  const logOut = () => {
    axios
      .post('http://localhost:1337/logout')
      .then((res) => {
        console.log('User logged out.');
      })
      .catch((error) => {
        console.log('Unable to logout', error.response);
      });
  };

  return (
    <div className={styles.navContainer}>
      <Link href='/'>
        <div className={styles.logoContainer}>Clink</div>
      </Link>

      <nav className={styles.navMenu}></nav>
    </div>
  );
};

export default DesktopNav;

// export async function getStaticProps(context) {
//   const checkUser = () => {
//     let url = 'http://localhost:1337/users/me';
//     let response = axios
//       .get(url, { withCredentials: true })
//       .then((res) => true)
//       .catch((error) => console.log(error.response));
//     return response;
//   };

//   const isAuthenticated = (await checkUser()) || false;

//   return {
//     props: {
//       isAuthenticated,
//     },
//   };
// }
