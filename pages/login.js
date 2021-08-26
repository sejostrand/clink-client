import React, { useState, useEffect } from 'react';
import styles from '../styles/Login.module.scss';
import handleLogin from '../utils/api/handleLogIn';
import Navbar from '../components/Navbar/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Navbar />
      <div className={styles.pageContainer}>
        <div className={styles.pageContent}>
          <form
            className={styles.formContainer}
            // action={'/profile'}
            method={'POST'}
            onSubmit={(e) => handleLogin(e, email, password)}
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
        </div>
      </div>
    </>
  );
};

export default Login;
