import React from 'react';

import Navlink from './Navlink';
import MobileNav from './MobileNav';
import logo from '/assets/shared/logo.svg';

const Nav = () => (
  <nav className="fixed top-0 flex items-center justify-end w-full h-auto -translate-x-1/2 flex-end left-1/2 md:h-24 max-w-screen-bpCustom">
    <div className="absolute top-6 left-6 md:top-7 md:left-10 bpCustom:left-14">
      <img className="w-10 aspect-square" src={logo} alt="logo" />
    </div>
    <div className="h-px w-[30rem] bg-white/50 relative left-6 hidden bpCustom:block" />
    <ul className="items-center hidden w-auto h-full px-12 md:flex bg-white/20 gap-9 lg:px-32">
      <Navlink
        linkTo="/"
        span="00"
        linkName="home"
        liClasses="relative grid h-full text-2xl content-none place-items-center link-active link-hover"
        linkClasses="tracking-wider text-white uppercase font-barlow"
        spanClasses="hidden mr-2 bpCustom:inline-block"
      />
      <Navlink
        linkTo="destination"
        span="01"
        linkName="destination"
        liClasses="relative grid h-full text-2xl content-none place-items-center link-active link-hover"
        linkClasses="tracking-wider text-white uppercase font-barlow"
        spanClasses="hidden mr-2 bpCustom:inline-block"
      />
      <Navlink
        linkTo="crew"
        span="02"
        linkName="crew"
        liClasses="relative grid h-full text-2xl content-none place-items-center link-active link-hover"
        linkClasses="tracking-wider text-white uppercase font-barlow"
        spanClasses="hidden mr-2 bpCustom:inline-block"
      />
      <Navlink
        linkTo="technology"
        span="03"
        linkName="technology"
        liClasses="relative grid h-full text-2xl content-none place-items-center link-active link-hover"
        linkClasses="tracking-wider text-white uppercase font-barlow"
        spanClasses="hidden mr-2 bpCustom:inline-block"
      />
    </ul>
    <MobileNav />
  </nav>
);
export default Nav;
