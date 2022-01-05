/* eslint-disable max-len */
import React from 'react';
// component
import Explore from '../components/travel-info/Explore';

const Home = () => (
  <main className="w-screen h-screen bg-no-repeat bg-cover pt-36 md:pt-52 bpCustom:pt-96 bg-home-mobile md:bg-home-tablet bpCustom:bg-home-desktop text-clrLight-925">
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
