import React from 'react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import logo from '/assets/shared/logo.svg';

const Nav = () => {
  // const [active, setActive] = useState(false);

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

  // const isActive = () => {
  //   setActive(true);
  // };

  const generateLinks = linkList.map((link) => (
    <li key={link.id} className="text-2xl h-full">
      <Link
        id={link.id}
        to={link.href}
        className="flex items-center tracking-wider text-white uppercase font-barlow relative h-full content-none link-hover"
      >
        <span className="hidden mr-2 bpCustom:inline-block">{link.span}</span>
        {link.name}
      </Link>
    </li>
  ));

  return (
    <nav className="fixed top-0 flex items-center justify-end w-full h-auto -translate-x-1/2 flex-end left-1/2 md:h-24 max-w-screen-bpCustom">
      <div className="absolute top-6 left-6 md:top-7 md:left-10 bpCustom:left-14">
        <img className="w-10 aspect-square" src={logo} alt="logo" />
      </div>
      <div className="h-px w-[30rem] bg-white/50 relative left-6 hidden bpCustom:block" />
      <ul className="items-center hidden w-auto h-full px-12 md:flex bg-white/20 gap-9 lg:px-32">
        {generateLinks}
      </ul>
      <MobileNav />
    </nav>
  );
};
export default Nav;
