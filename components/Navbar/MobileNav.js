import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.scss';
// import { useCurrentUser, useDispatchCurrentUser } from '../../context/state';
import { useAppContext } from '../../utils/context/state';
import cookieCutter from 'cookie-cutter';
import { CgMenu } from 'react-icons/cg';

const DesktopNav = () => {
  const currentUser = useAppContext();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const nav = document.getElementById('nav');
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos == 0) {
        nav.style.backgroundColor = 'white';
        nav.style.color = 'black';
      } else {
        nav.style.backgroundColor = 'rgba(20, 20, 20, 0.7)';
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
        <Link href='/browse'>
          <span className={styles.navLink}>Browse</span>
        </Link>
      </nav>
      <span onClick={() => setIsOpen(!isOpen)} className={styles.menuIcon}>
        <CgMenu />
      </span>
      {isOpen && (
        <div className={styles.dropDownContainer}>
          {!currentUser.isAuthenticated && (
            <Link href='/registration'>
              <span className={styles.dropDownLink}>SignUp</span>
            </Link>
          )}
          {!currentUser.isAuthenticated && (
            <Link href='/login'>
              <span className={styles.dropDownLink}>LogIn</span>
            </Link>
          )}
          {currentUser.isAuthenticated && (
            <Link href='/account'>
              <span className={styles.dropDownLink}>Account</span>
            </Link>
          )}
          {currentUser.isAuthenticated && (
            <Link href='/profile'>
              <span className={styles.dropDownLink}>Profile</span>
            </Link>
          )}
          {currentUser.isAuthenticated && (
            <Link href='/'>
              <span onClick={handleLogOut} className={styles.dropDownLink}>
                LogOut
              </span>
            </Link>
          )}
        </div>
      )}
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
