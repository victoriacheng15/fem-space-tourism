import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// components
import ImageBox from '../ImageBox';
import MobileNav from './MobileNav';
// image
import logo from '/assets/shared/logo.svg';
// helper
import { linkList } from '../../listsHelper';

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
      <div className="relative left-6 hidden h-px w-[30rem] bg-white/50 bpCustom:block" />
      <ul className="hidden h-full w-auto items-center gap-9 bg-white/20 px-12 md:flex lg:px-32">
        {linkList.map((link) => (
          <li key={link.id} className="h-full text-lg">
            <Link
              data-link
              to={link.href}
              className={`link-hover relative flex h-full items-center font-barlow uppercase tracking-wider text-white content-none ${
                link.name === 'home' ? 'link-active' : ''
              }`}
            >
              <span className="mr-2 hidden bpCustom:inline-block">
                {link.span}
              </span>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <MobileNav />
    </nav>
  );
};
export default Nav;
