import cookieCutter from 'cookie-cutter';
import { useAppContext } from '../../utils/context/state';

const handleLogOut = () => {
  cookieCutter.set('token', '', { expires: new Date(0) });
};

export default handleLogOut;
