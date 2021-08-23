import axios from 'axios';
import cookieCutter from 'cookie-cutter';

const getUser = () => {
  axios
    .get('http://localhost:1337/users/me', {
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer ' + cookieCutter.get('token'),
      },
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.response));
};

export default getUser;
