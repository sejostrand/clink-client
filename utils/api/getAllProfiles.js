import axios from 'axios';

const getAllProfiles = () => {
  let data = axios
    .get('http://localhost:1337/profiles', {
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
    })
    .then((res) => res.data)
    .catch((err) => err.response);
  return data;
};

export default getAllProfiles;
