import React from 'react';
import styles from '../styles/Profile.module.scss';
// import { useCurrentUser, useDispatchCurrentUser } from '../context/state';
import getUser from '../utils/api/getUser';

const Profile = () => {
  const userData = {
    confirmed: true,
    blocked: false,
    available: true,
    showcase: [],
    _id: '611f8759f20a8540a44f8582',
    firstName: 'demo',
    lastName: 'demo',
    username: 'demo@demo.com',
    email: 'demo@demo.com',
    mobileNumber: '+441234567891',
    instagramAccount: 'demo@demo.com',
    provider: 'local',
    createdAt: '2021-08-20T10:43:37.544Z',
    updatedAt: '2021-08-20T10:43:37.612Z',
    __v: 0,
    role: {
      _id: '611d58144db3de077467a560',
      name: 'Authenticated',
      description: 'Default role given to authenticated user.',
      type: 'authenticated',
      __v: 0,
      id: '611d58144db3de077467a560',
    },
    id: '611f8759f20a8540a44f8582',
  };
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <div>
          <div>{userData.firstName + ' ' + userData.lastName}</div>
          <div>{userData.email}</div>
          <div>{userData.mobileNumber}</div>
          <div>{userData.instagramAccount}</div>
          <button onClick={getUser}>getUser</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

// export async function getStaticProps(context) {
// const getUserData = () => {
//   let url = 'http://localhost:1337/users/me';
//   let response = axios
//     .get(url, { withCredentials: true })
//     .then((res) => res.data)
//     .catch((error) => console.log(error.response));
//   return response;
// };
// const userData = (await getUserData()) || [];
// return {
//   props: {
//     userData,
//   },
// };
// }
