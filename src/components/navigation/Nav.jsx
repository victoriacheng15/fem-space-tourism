import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// components
import ImageBox from '../image-box/ImageBox';
import MobileNav from './MobileNav';
// image
import logo from '/assets/shared/logo.svg';
// helper
import { linkList } from '../../listsHelper';

const Nav = () => {
  useEffect(() => {
    const links = document.querySelectorAll('[data-link]');
    links.forEach((link) => link.addEventListener('click', () => {
      links.forEach((item) => item.classList.remove('link-active'));
      link.classList.add('link-active');
    }));
  }, []);

  return (
    <nav className="fixed top-0 z-50 flex items-center justify-end w-full h-auto -translate-x-1/2 flex-end left-1/2 md:h-24 max-w-screen-bpCustom bpCustom:top-10">
      <ImageBox classes="w-10 h-10 absolute top-6 left-6 md:top-7 md:left-10 bpCustom:left-14" src={logo} alt="logo" />
      <div className="h-px w-[30rem] bg-white/50 relative left-6 hidden bpCustom:block" />
      <ul className="items-center hidden w-auto h-full px-12 md:flex bg-white/20 gap-9 lg:px-32">
        {
          linkList.map((link) => (
            <li key={link.id} className="h-full text-lg">
              <Link
                data-link
                to={link.href}
                className={`relative flex items-center h-full tracking-wider text-white uppercase font-barlow content-none link-hover ${link.name === 'home' ? 'link-active' : ''}`}
              >
                <span className="hidden mr-2 bpCustom:inline-block">{link.span}</span>
                {link.name}
              </Link>
            </li>
          ))
        }
      </ul>
      <MobileNav />
    </nav>
  );
};
export default Nav;
