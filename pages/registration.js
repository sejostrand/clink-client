import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Registration.module.scss';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [instagram, setInstagram] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (redirect == true) {
      window.location.assign('/login');
    }
  }, [redirect]);

  const checkDetails = () => {
    if (
      password == password2 &&
      password.length >= 8 &&
      isValidPhoneNumber(mobile) &&
      firstName != '' &&
      lastName != '' &&
      email != '' &&
      instagram != ''
    ) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // axios
    //   .post('http://localhost:1337/auth/local/register', {
    //     firstName: firstName,
    //     lastName: lastName,
    //     username: email,
    //     email: email,
    //     mobileNumber: mobile,
    //     password: password,
    //     instagramAccount: instagram,
    //   })
    //   .then((response) => {
    //     console.log('Successful registration');
    //     window.localStorage.setItem('userToken', response.data.jwt);
    //     setRedirect(true);
    //   })
    //   .catch((error) => {
    //     console.log('An error occurred:', error.response);
    //   });
  };

  return (
    <main className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <form
          className={styles.formContainer}
          action={'/profile'}
          method={'POST'}
          onSubmit={handleSubmit}
        >
          <div className={styles.field}>
            <label className={styles.fieldLabel}>First name</label>
            <input
              className={styles.fieldInput}
              type='text'
              placeholder='Your name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>Last name</label>
            <input
              className={styles.fieldInput}
              type='text'
              placeholder='Your last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
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
            <label className={styles.fieldLabel}>Mobile Number</label>
            <PhoneInput
              placeholder='Enter phone number'
              value={mobile}
              onChange={setMobile}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>Instagram</label>
            <input
              className={styles.fieldInput}
              type='text'
              placeholder='Your instagram username'
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
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
          <div className={styles.field}>
            <label className={styles.fieldLabel}>Confirm Password</label>
            <input
              className={styles.fieldInput}
              type='password'
              placeholder='Confirm password'
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            ></input>
          </div>
          <button
            className={styles.submitButton}
            type='submit'
            disabled={checkDetails()}
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default Registration;
