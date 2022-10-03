/* eslint-disable max-len */
import React from 'react';
// component
import Explore from '../components/TravelInfo/Explore';

// content-none before:absolute before:inset-0 before:-z-10 before:w-ful before:h-screen before:bg-black

const Home = () => (
  <main className="main-bg bg-home-mobile md:bg-home-tablet bpCustom:bg-home-desktop before:bg-home-mobile md:before:bg-home-table bpCustom:before:bg-home-desktop pb-8 pt-36 text-clrLight-925 before:rotate-180 md:pt-52 bpCustom:pt-96">
    <div className="m-auto flex w-11/12 max-w-screen-bpCustom flex-col items-center justify-center gap-40 bpCustom:flex-row">
      <div className="flex flex-col items-center justify-center gap-4 bpCustom:items-start">
        <h2 className="uppercase tracking-widest">so, you want to travel to</h2>
        <h1 className="font-bellefair text-8xl uppercase md:text-[9.38rem]">
          space
        </h1>
        <p className="max-w-md text-center leading-8 bpCustom:text-left">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Explore />
    </div>
  </main>
);

export default Home;
