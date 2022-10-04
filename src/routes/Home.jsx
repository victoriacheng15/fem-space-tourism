import React from 'react';
import { MainContainer, HomeContainer } from '../layouts';
import { Explore } from '../components';

const Home = () => (
  <MainContainer>
    <HomeContainer>
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
    </HomeContainer>
  </MainContainer>
);

export default Home;
