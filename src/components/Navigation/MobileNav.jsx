import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburger from '/assets/shared/icon-hamburger.svg';
import closeMenu from '/assets/shared/icon-close.svg';
// helper
import { linkList } from '../../listsHelper';

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const generateLinks = linkList.map((link) => (
    <li key={link.id} className="text-2xl">
      <Link
        id={link.id}
        to={link.href}
        className="font-barlow uppercase tracking-wider text-white"
      >
        <span className="mr-2">{link.span}</span>
        {link.name}
      </Link>
    </li>
  ));

  return (
    <div className="relative top-0 right-0 h-screen w-64 md:hidden">
      <button
        onClick={toggleMenu}
        type="button"
        className="ease absolute right-8 top-8 z-10 pr-6 duration-300 md:hidden"
      >
        {showMenu ? (
          <img src={closeMenu} alt="close icon" />
        ) : (
          <img src={hamburger} alt="hamburger menu" />
        )}
      </button>
      <div
        className={`absolute top-0 right-0 h-full w-full duration-300 ${
          showMenu ? 'translate-x-0' : 'translate-x-full'
        } before:bg-clrLight-925/55 ease backdrop-blur-xl content-none before:absolute before:z-10 before:h-full before:w-full md:hidden`}
      >
        <ul className="relative z-20 flex flex-col gap-8 px-8 pt-32">
          {generateLinks}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
