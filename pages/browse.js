import React from 'react';

const Browse = () => {
  return <div>Browse</div>;
};

export default Browse;

export async function getStaticProps(context) {
  const getAllProfiles = () => {
    let url = 'http://localhost:1337/profiles';
    let response = axios
      .get(url, { withCredentials: true })
      .then((res) => res.data)
      .catch((error) => console.log(error.response));
    return response;
  };

  const allProfiles = (await getAllProfiles()) || [];

  return {
    props: {
      allProfiles,
    },
  };
}
