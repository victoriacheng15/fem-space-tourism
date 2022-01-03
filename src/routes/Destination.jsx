import React, { useState, useEffect } from 'react';
import { useFetchInfo } from '../hook/useFetchInfo';

const Destination = () => {
  const { data } = useFetchInfo('destinations');
  const [planetName, setPlanetName] = useState('moon');

  const changePlanet = (e) => {
    const { dataset } = e.target;
    setPlanetName(dataset.name);
  };

  const planetList = [
    { id: 1, name: 'moon' },
    { id: 2, name: 'mars' },
    { id: 3, name: 'europa' },
    { id: 4, name: 'titan' },
  ];

  useEffect(() => {
    const buttons = document.querySelectorAll('[data-name]');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        buttons.forEach((btn) => btn.classList.remove('link-active'));
        button.classList.add('link-active');
      });
    });
  }, []);

  return (
    <main className="w-screen h-screen text-white bg-no-repeat bg-cover pt-36 md:pt-52 bpCustom:pt-96 bg-destination-mobile md:bg-destination-tablet bpCustom:bg-destination-desktop">
      <div className="m-auto max-w-screen-bpCustom">
        <h1 className="text-3xl tracking-widest text-center text-white uppercase font-barlow mb-9 bpCustom:text-left bpCustom:pl-40 bpCustom:mb-20">
          <span className="mr-3 opacity-60">01</span>
          pick your destination
        </h1>
        <div className="flex flex-col items-center justify-center gap-10 bpCustom:gap-20 bpCustom:flex-row">
          <div className="grid mb-6 place-items-center">
            <img
              className="w-[10.625rem] md:w-[18.75rem] bpCustom:w-[27.8125rem] aspect-square"
              src={`./assets/destination/image-${planetName}.png`}
              alt={planetName}
            />
          </div>
          <section className="flex flex-col items-center">
            <div className="flex items-center justify-center w-full gap-4 mb-7">
              {
            planetList.map((planet) => (
              <button
                key={planet.id}
                onClick={changePlanet}
                data-name={planet.name}
                type="button"
                className="relative h-full pb-2 text-lg tracking-widest uppercase content-none link-hover font-barlow"
              >
                {planet.name}
              </button>
            ))
          }
            </div>
            <h1 className="mb-5 text-5xl uppercase font-bellefair">{planetName}</h1>
            <p className=" text-base leading-7 text-center mb-8 font-barlow w-80 md:w-[35.625rem] bpCustom:w-[27.8125rem]">
              {
              data.map((planet) => (planet.name.toLowerCase() === planetName ? planet.info.description : ''))
            }
            </p>
            <div className="w-full h-0.5 bg-white/50 mb-8" />
            <div className="flex flex-col items-center justify-center w-full gap-10 md:flex-row">
              <div className="flex flex-col items-center justify-center">
                <h2 className="mb-4 text-base tracking-widest uppercase font-barlow">avg. distance</h2>
                <p className="text-3xl uppercase">
                  {data.map((planet) => (planet.name.toLowerCase() === planetName ? planet.info.distance : ''))}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="mb-4 tracking-widest uppercase text-md font-barlow">est. travel time</h3>
                <p className="text-3xl uppercase">
                  {data.map((planet) => (planet.name.toLowerCase() === planetName ? planet.info.travel : ''))}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Destination;
