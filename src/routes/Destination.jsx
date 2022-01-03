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
    <main className="w-screen h-screen pt-36 md:pt-52 bpCustom:pt-96 text-white bg-no-repeat bg-cover bg-destination-mobile md:bg-destination-tablet bpCustom:bg-destination-desktop">
      <div className="w-11/12 m-auto max-w-screen-bpCustom">
        <h1 className="text-xl tracking-widest text-center text-white uppercase font-barlow mb-9">
          <span className="mr-3 opacity-60">01</span>
          pick your destination
        </h1>
        <div className="mb-6 w-[10.625rem] md:w-[18.75rem] aspect-square grid place-items-center m-auto">
          <img
            src={`./assets/destination/image-${planetName}.png`}
            alt={planetName}
          />
        </div>
        <div className="flex items-center justify-center w-full gap-4 mb-7">
          {
            planetList.map((planet) => (
              <button
                key={planet.id}
                onClick={changePlanet}
                data-name={planet.name}
                type="button"
                className="relative h-full content-none link-hover pb-2 uppercase tracking-widest text-lg font-barlow"
              >
                {planet.name}
              </button>
            ))
          }
        </div>
        <section className="w-80 md:w-[35.625rem] m-auto grid place-items-center p-4">
          <h1 className="text-5xl uppercase mb-5 font-bellefair">{planetName}</h1>
          <p className=" text-base leading-7 text-center mb-8 font-barlow">
            {
              data.map((planet) => (planet.name.toLowerCase() === planetName ? planet.info.description : ''))
            }
          </p>
          <div className="w-full h-0.5 bg-white/50 mb-8" />
          <div className="flex flex-col gap-10 justify-center items-center md:flex-row w-full">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-base uppercase tracking-widest font-barlow mb-4">avg. distance</h2>
              <p className="text-3xl uppercase">
                {data.map((planet) => (planet.name.toLowerCase() === planetName ? planet.info.distance : ''))}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-md uppercase tracking-widest font-barlow mb-4">est. travel time</h3>
              <p className="text-3xl uppercase">
                {data.map((planet) => (planet.name.toLowerCase() === planetName ? planet.info.travel : ''))}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Destination;
