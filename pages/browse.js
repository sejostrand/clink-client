import React from 'react';
import getAllProfiles from '../utils/api/getAllProfiles';
import ProfileTile from '../components/ProfileTile/ProfileTile';
import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/Browse.module.scss';

const Browse = ({ allProfiles }) => {
  console.log(allProfiles);
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <div>
        {allProfiles.map((profile) => {
          return <ProfileTile key={profile.id} data={profile} />;
        })}
      </div>
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
