import React from 'react';
import styles from '../styles/Profile.module.scss';
import Image from 'next/image';
// import { useCurrentUser, useDispatchCurrentUser } from '../context/state';
import getProfile from '../utils/api/getProfile';
import { useAppContext } from '../utils/context/state';
import Navbar from '../components/Navbar/Navbar';

const Profile = ({ currentUser }) => {
  const user = useAppContext();
  console.log(user);
  return (
    <>
      <Navbar />
      <div className={styles.pageContainer}>
        <div className={styles.pageContent}>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Profile;

// export async function getStaticProps(context) {
//   const profileData = (await getProfileData()) || [];
//   let profileData;
//   return {
//     props: {
//       profileData,
//     },
//   };
// }

// static async function getInitialProps(ctx) {
//     // this is client side cookie that you want
//     const cookie = ctx.req ? ctx.req.headers.cookie : null

//     // and if you use fetch, you can manually attach cookie like this
//     fetch('is-authenticated', {
//         headers: {
//             cookie
//         }
//     }
// }
