import React, { useState } from 'react';
import styles from '../styles/Profile.module.scss';
import Image from 'next/image';
// import { useCurrentUser, useDispatchCurrentUser } from '../context/state';
import getProfile from '../utils/api/getProfile';
import { useAppContext } from '../utils/context/state';
import Navbar from '../components/Navbar/Navbar';

const Profile = ({ currentUser }) => {
  const [editSwitch, setEditSwitch] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const user = useAppContext();
  console.log(user);
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <div className={styles.pageContent}>
        <div className={styles.detailsContainer}>
          <div className={styles.field}>
            <span className={styles.label}>{user.userData.displayName}</span>
            <input
              className={styles.textInput}
              placeholder={user.userData.displayName}
            />
          </div>
          <div className={styles.field}>
            <span className={styles.label}>{user.userData.displayTitle}</span>
            <input
              className={styles.textInput}
              placeholder={user.userData.displayTitle}
            />
          </div>
          <div className={styles.field}>
            <span className={styles.label}>{user.userData.active}</span>

            <input type='checkbox' className={styles.textInput} />
          </div>
          {user.userData.about}
        </div>
      </div>
    </div>
  );
};

export default Profile;
