import React from 'react';
import getAllProfiles from '../utils/api/getAllProfiles';
import ProfileTile from '../components/ProfileTile/ProfileTile';

const Browse = ({ allProfiles }) => {
  console.log(allProfiles);
  return (
    <div>
      {allProfiles.map((profile) => {
        return <ProfileTile key={profile.id} data={profile} />;
      })}
    </div>
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
