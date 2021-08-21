import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.scss';
// import { useCurrentUser, useDispatchCurrentUser } from '../../context/state';
import axios from 'axios';

const DesktopNav = ({ isAuthenticated }) => {
  // const user = useCurrentUser();

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
      <div className={styles.logoContainer}>
        <Link href='/'>InfluenceLogo</Link>
      </div>
      <nav className={styles.navMenu}>
        {isAuthenticated && (
          <span className={styles.navLink}>
            <Link href='/registration'>Sign up</Link>
          </span>
        )}
        {isAuthenticated && (
          <span className={styles.navLink}>
            <Link href='/login'>Log in</Link>
          </span>
        )}
        {isAuthenticated && (
          <span onClick={() => logOut()} className={styles.navLink}>
            <Link href='/'>Log out</Link>
          </span>
        )}
        {isAuthenticated && (
          <span className={styles.navLink}>
            <Link href='/profile'>Profile</Link>
          </span>
        )}
        <span className={styles.navLink}>
          <Link href='/browse'>Browse</Link>
        </span>
        <span className={styles.navLink}>
          <Link href='/'>Home</Link>
        </span>
      </nav>
    </div>
  );
};

export default DesktopNav;

// export async function getStaticProps(context) {
//   let isAuthenticated;
//   axios({
//     method: 'get',
//     url: 'http://localhost:1337/auth/local',
//     withCredentials: true,
//   })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((error) => {
//       console.log('An error occurred:', error);
//     });

//   return {
//     props: {
//       isAuthenticated,
//     },
//   };
// }
