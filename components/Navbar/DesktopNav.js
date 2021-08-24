import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.scss';
// import { useCurrentUser, useDispatchCurrentUser } from '../../context/state';
import handleLogOut from '../../utils/api/handleLogOut';

const DesktopNav = () => {
  // const user = useCurrentUser();
  const isAuthenticated = true;

  return (
    <div className={styles.navContainer}>
      <Link href='/'>
        <div className={styles.logoContainer}>Clink</div>
      </Link>

      <nav className={styles.navMenu}>
        {isAuthenticated && (
          <Link href='/registration'>
            <span className={styles.navLink}>Sign up</span>
          </Link>
        )}
        {isAuthenticated && (
          <Link href='/login'>
            <span className={styles.navLink}>Log in</span>
          </Link>
        )}
        {isAuthenticated && (
          <Link href='/'>
            <span onClick={handleLogOut} className={styles.navLink}>
              Log out
            </span>
          </Link>
        )}
        {isAuthenticated && (
          <Link href='/profile'>
            <span className={styles.navLink}>Profile</span>
          </Link>
        )}
        {isAuthenticated && (
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
