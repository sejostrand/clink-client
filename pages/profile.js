import React from 'react';
import styles from '../styles/Profile.module.scss';
import Image from 'next/image';
// import { useCurrentUser, useDispatchCurrentUser } from '../context/state';
import getProfile from '../utils/api/getProfile';

const Profile = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <div></div>
      </div>
    </div>
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
