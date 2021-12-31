/* eslint-disable max-len */
import React from 'react';

const Home = () => (
  <main className="w-screen h-screen bg-no-repeat bg-cover pt-36 bg-home-mobile md:bg-home-tablet bpCustom:bg-home-desktop text-clrLight-925">
    <div className="flex flex-col items-center justify-center w-11/12 gap-40 m-auto max-w-screen-bpCustom">
      <div className="w-[28.125rem] flex flex-col justify-center items-center gap-4 m-auto">
        <h2 className="tracking-widest uppercase">so, you want to travel to</h2>
        <h1 className="font-semibold uppercase text-9xl font-bellefair">space</h1>
        <p className="leading-8 text-center">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </div>
      <div className="relative grid w-40 duration-300 bg-white rounded-full aspect-square place-items-center content-none after:absolute after:w-full after:h-full after:bg-white/25 after:rounded-full hover:after:scale-150 focus:after:scale-150 ease">
        <a href="explore" className="z-10 text-xl tracking-widest uppercase text-clrDark-925">explore</a>
      </div>
    </div>
  </main>
);

export default Home;
