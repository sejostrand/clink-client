import React from 'react';
import getAllProfiles from '../utils/api/getAllProfiles';
import ProfileTile from '../components/ProfileTile/ProfileTile';
import Navbar from '../components/Navbar/Navbar';

const Browse = ({ allProfiles }) => {
  console.log(allProfiles);
  return (
    <>
      <Navbar />
      <div>
        {allProfiles.map((profile) => {
          return <ProfileTile key={profile.id} data={profile} />;
        })}
      </div>
    </>
  );
};

export default Browse;

export async function getStaticProps(context) {
  const allProfiles = (await getAllProfiles()) || [];

  return {
    props: {
      allProfiles,
    },
  };
}
