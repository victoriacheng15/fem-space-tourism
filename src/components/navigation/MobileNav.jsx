import React, { useState } from 'react';
import Navlink from './Navlink';
import hamburger from '/assets/shared/icon-hamburger.svg';
import closeMenu from '/assets/shared/icon-close.svg';

const menu = (
  <ul className="flex flex-col gap-8 px-8 pt-20">
    <Navlink
      linkTo="/"
      span="00"
      linkName="home"
      linkClasses="text-2xl tracking-wider text-white uppercase font-barlow"
      spanClasses="mr-2"
    />
    <Navlink
      linkTo="destination"
      span="01"
      linkName="destination"
      linkClasses="text-2xl tracking-wider text-white uppercase font-barlow"
      spanClasses="mr-2"
    />
    <Navlink
      linkTo="crew"
      span="02"
      linkName="crew"
      linkClasses="text-2xl tracking-wider text-white uppercase font-barlow"
      spanClasses="mr-2"
    />
    <Navlink
      linkTo="technology"
      span="03"
      linkName="technology"
      linkClasses="text-2xl tracking-wider text-white uppercase font-barlow"
      spanClasses="mr-2"
    />
  </ul>
);

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div>
      <button onClick={toggleMenu} type="button" className="fixed z-40 pr-6 duration-300 right-8 top-8 md:hidden ease">
        {
          showMenu
            ? <img src={closeMenu} alt="close icon" />
            : <img src={hamburger} alt="hamburger menu" />
        }
      </button>
      {
        showMenu ? (
          <div className="fixed top-0 right-0 w-64 h-screen duration-300 translate-x-0 left-- bg-clrLight-925/50 backdrop-blur-sm before:absolute content-none before:w-full before:h-full before:bg-white/25 before:z-10 ease md:hidden">
            {menu}
          </div>
        ) : (
          <div className="fixed top-0 right-0 w-64 h-screen duration-300 translate-x-full bg-clrLight-925/50 backdrop-blur-sm before:absolute content-none before:w-full before:h-full before:bg-white/25 before:z-10 ease md:hidden">
            {menu}
          </div>
        )
      }
    </div>
  );
};

export default MobileNav;
