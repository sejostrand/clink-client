import React from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import useMediaQuery from '../../utils/useMediaQuery';

const Navbar = (props) => {
  const isMobile = useMediaQuery('(max-width: 620px)');
  // const isMobile = false;

  return isMobile ? (
    <MobileNav refresh={props.refresh} setRefresh={props.setRefresh} />
  ) : (
    <DesktopNav refresh={props.refresh} setRefresh={props.setRefresh} />
  );
};

export default Navbar;
