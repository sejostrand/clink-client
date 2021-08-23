import axios from 'axios';
import cookieCutter from 'cookie-cutter';

const handleLogOut = () => {
  axios
    .post('http://localhost:1337/logout')
    .then((res) => {
      console.log('User logged out.');
    })
    .catch((error) => {
      console.log('Unable to logout', error.response);
    });
  cookieCutter.set('token', '', { expires: new Date(0) });
};

export default handleLogOut;
