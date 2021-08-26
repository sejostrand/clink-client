import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.scss';
// import { useCurrentUser, useDispatchCurrentUser } from '../../context/state';
import { useAppContext } from '../../utils/context/state';
import cookieCutter from 'cookie-cutter';

const DesktopNav = (props) => {
  const currentUser = useAppContext();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const nav = document.getElementById('nav');
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos == 0) {
        nav.style.backgroundColor = 'white';
        nav.style.color = 'black';
      } else {
        nav.style.backgroundColor = 'rgba(20, 20, 20, 0.555)';
        nav.style.color = 'white';
      }
    };
  });

  const handleLogOut = () => {
    cookieCutter.set('token', '', { expires: new Date(0) });
    currentUser.isAuthenticated = false;
    window.location.reload();
  };

  return (
    <div className={styles.navContainer} id='nav'>
      <Link href='/'>
        <div className={styles.logoContainer}>Clink</div>
      </Link>

      <nav className={styles.navMenu}>
        {!currentUser.isAuthenticated && (
          <Link href='/registration'>
            <span className={styles.navLink}>Sign up</span>
          </Link>
        )}
        {!currentUser.isAuthenticated && (
          <Link href='/login'>
            <span className={styles.navLink}>Log in</span>
          </Link>
        )}
        {currentUser.isAuthenticated && (
          <Link href='/'>
            <span onClick={handleLogOut} className={styles.navLink}>
              Log out
            </span>
          </Link>
        )}
        {currentUser.isAuthenticated && (
          <Link href='/profile'>
            <span className={styles.navLink}>Profile</span>
          </Link>
        )}
        {currentUser.isAuthenticated && (
          <Link href='/account'>
            <span className={styles.navLink}>Account</span>
          </Link>
        )}

        <Link href='/browse'>
          <span className={styles.navLink}>Browse</span>
        </Link>

        <Link href='/'>
          <span className={styles.navLink}>Home</span>
        </Link>
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
