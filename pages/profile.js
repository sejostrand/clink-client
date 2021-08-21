import React, { useState, useEffect } from 'react';
import styles from '../styles/Profile.module.scss';
import axios from 'axios';
// import { useCurrentUser, useDispatchCurrentUser } from '../context/state';

const Profile = ({ userData }) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <button onClick={() => console.log(userData)}>Click me</button>
        <div>
          <div>{userData.firstName + ' ' + userData.lastName}</div>
          <div>{userData.email}</div>
          <div>{userData.mobileNumber}</div>
          <div>{userData.instagramAccount}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

export async function getStaticProps(context) {
  const getUserData = () => {
    let url = 'http://localhost:1337/users/me';
    let response = axios
      .get(url, { withCredentials: true })
      .then((res) => res.data)
      .catch((error) => console.log(error.response));
    return response;
  };

  const userData = (await getUserData()) || [];

  return {
    props: {
      userData,
    },
  };
}
