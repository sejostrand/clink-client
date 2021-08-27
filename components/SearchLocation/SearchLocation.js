import React, { useState } from 'react';
import styles from '../../styles/SearchLocation.module.scss';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import useMediaQuery from '../../utils/useMediaQuery';
import axios from 'axios';

const SearchLocation = () => {
  const isMobile = useMediaQuery('(max-width: 420px)');

  const [location, setLocation] = useState('');

  const getScreenWidth = () => {
    let screenWidth = window.screen.width;
    return `${screenWidth * 0.8}px`;
  };

  const formAction = () => {
    window.localStorage.setItem(
      'address',
      location ? location.value.terms[location.value.terms.length - 2] : null
    );
    console.log(location.value.terms[location.value.terms.length - 2]);
  };
  return (
    <>
      <form className={styles.searchContainer}>
        <h2 className={styles.caption}>Where are you looking?</h2>
        <GooglePlacesAutocomplete
          apiKey='AIzaSyCihiKTkNOfynfEBYtcu_nm8RNSMguXURY'
          autocompletionRequest={{ types: ['(cities)'] }}
          selectProps={{
            location,
            onChange: setLocation,
            placeholder: 'Select a city',
            styles: {
              container: (provided) => ({
                ...provided,
                width: isMobile ? getScreenWidth() : '360px',
              }),
            },
          }}
        />
        <button type='submit'>Go</button>
      </form>
      <button onClick={() => formAction()}>Check</button>
    </>
  );
};

export default SearchLocation;
