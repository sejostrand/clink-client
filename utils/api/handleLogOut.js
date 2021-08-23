import cookieCutter from 'cookie-cutter';

const handleLogOut = () => {
  cookieCutter.set('token', '', { expires: new Date(0) });
};

export default handleLogOut;
