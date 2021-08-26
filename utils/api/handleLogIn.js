import axios from 'axios';
import cookieCutter from 'cookie-cutter';

const handleLogin = (e, email, password) => {
  e.preventDefault();
  axios({
    method: 'post',
    url: 'http://localhost:1337/auth/local',
    data: {
      identifier: email,
      password: password,
    },
  })
    .then((res) => {
      console.log('User profile', res.data);
      cookieCutter.set('token', res.data.jwt);
      cookieCutter.set('userId', res.data.user.id);
      window.location.assign('/');
    })
    .catch((error) => {
      console.log('An error occurred:', error);
    });
};

export default handleLogin;
