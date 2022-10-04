import React, { useReducer } from 'react';
import HamburgerButton from '../Button/HamburgerButton';
import MobileLinks from './MobileLinks';

const MobileNav = () => {
  const [showMenu, setShowMenu] = useReducer((prevMode) => !prevMode, false);

  return (
    <div className="relative top-0 right-0 h-screen w-64 md:hidden">
      <HamburgerButton onClick={setShowMenu} showMenu={showMenu} />
      <div
        className={`absolute top-0 right-0 h-full w-full duration-300 ${
          showMenu ? 'translate-x-0' : 'translate-x-full'
        } before:bg-clrLight-925/55 ease backdrop-blur-xl content-none before:absolute before:z-10 before:h-full before:w-full md:hidden`}
      >
        <MobileLinks />
      </div>
    </div>
  );
};

export default MobileNav;
