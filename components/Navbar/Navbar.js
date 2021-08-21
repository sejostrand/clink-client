import React from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import useMediaQuery from '../../utils/useMediaQuery';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width: 620px)');
  return isMobile ? <MobileNav /> : <DesktopNav />;
};

export default Navbar;
