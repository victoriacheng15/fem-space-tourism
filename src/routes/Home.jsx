/* eslint-disable max-len */
import React from 'react';
// component
import Explore from '../components/travel-info/Explore';

// content-none before:absolute before:inset-0 before:-z-10 before:w-ful before:h-screen before:bg-black

const Home = () => (
  <main className="pb-8 main-bg pt-36 md:pt-52 bpCustom:pt-96 bg-home-mobile md:bg-home-tablet bpCustom:bg-home-desktop text-clrLight-925 before:bg-home-mobile md:before:bg-home-table bpCustom:before:bg-home-desktop before:rotate-180">
    <div className="flex flex-col items-center justify-center w-11/12 gap-40 m-auto bpCustom:flex-row max-w-screen-bpCustom">
      <div className="flex flex-col items-center justify-center gap-4 bpCustom:items-start">
        <h2 className="tracking-widest uppercase">so, you want to travel to</h2>
        <h1 className="uppercase font-bellefair text-8xl md:text-[9.38rem]">space</h1>
        <p className="max-w-md leading-8 text-center bpCustom:text-left">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </div>
      <Explore />
    </div>
  </main>
);

export default Home;
