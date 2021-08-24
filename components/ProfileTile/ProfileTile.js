import React from 'react';
import styles from '../../styles/ProfileTile.module.scss';
import Image from 'next/image';

const ProfileTile = (props) => {
  return (
    <div className={styles.tileContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src={props.data.cover.url}
          width={160}
          height={(props.data.cover.height * 160) / props.data.cover.width}
          alt='profile'
        ></Image>
      </div>
      <a className={styles.name}>{props.data.displayName}</a>
      <a className={styles.title}>{props.data.displayTitle}</a>
    </div>
  );
};

export default ProfileTile;
