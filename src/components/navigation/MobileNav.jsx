import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburger from '/assets/shared/icon-hamburger.svg';
import closeMenu from '/assets/shared/icon-close.svg';

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const linkList = [
    {
      id: 1,
      span: '00',
      href: '/',
      name: 'home',
    },
    {
      id: 2,
      span: '01',
      href: 'destination',
      name: 'destination',
    },
    {
      id: 3,
      span: '02',
      href: 'crew',
      name: 'crew',
    },
    {
      id: 4,
      span: '03',
      href: 'technology',
      name: 'technology',
    },
  ];

  const generateLinks = linkList.map((link) => (
    <li key={link.id} className="text-2xl">
      <Link
        id={link.id}
        to={link.href}
        className="tracking-wider text-white uppercase font-barlow"
      >
        <span className="mr-2">{link.span}</span>
        {link.name}
      </Link>
    </li>
  ));

  return (
    <div className="relative top-0 right-0 w-64 h-screen md:hidden">
      <button onClick={toggleMenu} type="button" className="absolute z-10 pr-6 duration-300 right-8 top-8 md:hidden ease">
        {
          showMenu
            ? <img src={closeMenu} alt="close icon" />
            : <img src={hamburger} alt="hamburger menu" />
        }
      </button>
      <div className={`absolute top-0 right-0 w-full h-full duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'} backdrop-blur-sm before:absolute content-none before:w-full before:h-full before:bg-clrLight-925/50 before:z-10 ease md:hidden`}>
        <ul className="relative z-20 flex flex-col gap-8 px-8 pt-32">
          {generateLinks}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
