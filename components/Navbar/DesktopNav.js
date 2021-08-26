import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.scss';
// import { useCurrentUser, useDispatchCurrentUser } from '../../context/state';
import { useAppContext } from '../../utils/context/state';
import cookieCutter from 'cookie-cutter';
import { CgMenu } from 'react-icons/cg';

const DesktopNav = (props) => {
  const currentUser = useAppContext();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const nav = document.getElementById('nav');
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos == 0) {
        nav.style.backgroundColor = 'white';
        nav.style.color = 'black';
      } else {
        nav.style.backgroundColor = 'rgba(20, 20, 20, 0.7)';
        nav.style.color = 'white';

        //hide nav
        if (prevScrollpos > currentScrollPos) {
          document.getElementById('nav').style.top = '0.5rem';
        } else {
          document.getElementById('nav').style.top = '-4rem';
        }
        prevScrollpos = currentScrollPos;
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
            <span className={styles.navLink}>SignUp</span>
          </Link>
        )}
        {!currentUser.isAuthenticated && (
          <Link href='/login'>
            <span className={styles.navLink}>LogIn</span>
          </Link>
        )}
        <Link href='/browse'>
          <span className={styles.navLink}>Browse</span>
        </Link>
      </nav>
      {currentUser.isAuthenticated && (
        <>
          <span onClick={() => setIsOpen(!isOpen)} className={styles.menuIcon}>
            <CgMenu />
          </span>
          {isOpen && (
            <div className={styles.dropDownContainer}>
              <Link href='/account'>
                <span className={styles.dropDownLink}>Account</span>
              </Link>
              <Link href='/profile'>
                <span className={styles.dropDownLink}>MyProfile</span>
              </Link>
              <Link href='/'>
                <span onClick={handleLogOut} className={styles.dropDownLink}>
                  LogOut
                </span>
              </Link>
            </div>
          )}
        </>
      )}
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
