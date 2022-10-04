import React from 'react';
import hamburger from '/assets/shared/icon-hamburger.svg';
import closeMenu from '/assets/shared/icon-close.svg';

const HamburgerButton = ({ onClick, showMenu }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="ease absolute right-8 top-8 z-10 pr-6 duration-300 md:hidden"
    >
      {showMenu ? (
        <img src={closeMenu} alt="close icon" />
      ) : (
        <img src={hamburger} alt="hamburger menu" />
      )}
    </button>
  );
};

export default HamburgerButton;
