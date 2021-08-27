import { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import cookieCutter from 'cookie-cutter';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState([]);
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    if (cookieCutter.get('token') != undefined) {
      setIsAuthenticated(true);
      axios
        .get('http://localhost:1337/users/me', {
          headers: {
            Accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'Bearer ' + cookieCutter.get('token'),
          },
        })
        .then((res) => setUserData(res.data))
        .catch((err) => console.log(err.response));
    }
  }, [isAuthenticated]);

  let state = {
    isAuthenticated: isAuthenticated,
    userData: userData,
    profileData: profileData,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
