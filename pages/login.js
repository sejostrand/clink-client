import React, { useState, useEffect } from 'react';
import styles from '../styles/Login.module.scss';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [redirect, setRedirect] = useState(false);

  // useEffect(() => {
  //   if (redirect == true) {
  //     window.location.assign('/login');
  //   }
  // }, [redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:1337/auth/local',
      data: {
        identifier: email,
        password: password,
        withCredentials: true,
      },
    })
      .then((res) => {
        console.log('User profile', res.data.user);
        // setRedirect(true);
      })
      .catch((error) => {
        console.log('An error occurred:', error);
      });
    console.log(email, password);
  };

  const testUser = () => {
    axios({
      method: 'get',
      url: 'http://localhost:1337/users/me',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log('An error occurred:', error);
      });

    // axios
    //   .get('http://localhost:1337/users/me', {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Accept: 'application/json',
    //     },
    //   })
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));

    // fetch('http://localhost:1337/users/me', {
    //   headers: {
    //     Accept: 'application/json',
    //     'content-type': 'application/json',
    //   },
    //   credentials: 'include',
    // })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <form
          className={styles.formContainer}
          action={'/profile'}
          method={'POST'}
          onSubmit={handleSubmit}
        >
          <div className={styles.field}>
            <label className={styles.fieldLabel}>Email</label>
            <input
              className={styles.fieldInput}
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>Password</label>
            <input
              className={styles.fieldInput}
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button type='submit' className={styles.submitButton}>
            Log in
          </button>
        </form>
        <button onClick={testUser}>Get user data</button>
      </div>
    </div>
  );
};

export default Login;
