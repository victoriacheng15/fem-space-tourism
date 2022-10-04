import React, { useEffect } from 'react';
import { ImageBox } from '..';
import HorLine from './HorLine';
import Links from './Links';
import MobileNav from './MobileNav';
import logo from '/assets/shared/logo.svg';

const Nav = () => {
  useEffect(() => {
    const links = document.querySelectorAll('[data-link]');
    links.forEach((link) =>
      link.addEventListener('click', () => {
        links.forEach((item) => item.classList.remove('link-active'));
        link.classList.add('link-active');
      })
    );
  }, []);

  return (
    <nav className="flex-end fixed top-0 left-1/2 z-50 flex h-auto w-full max-w-screen-bpCustom -translate-x-1/2 items-center justify-end md:h-24 bpCustom:top-10">
      <ImageBox src={logo} alt="logo" />
      <HorLine />
      <Links />
      <MobileNav />
    </nav>
  );
};
export default Nav;
