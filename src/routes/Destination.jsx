import React, { useState } from 'react';
// hook
import { useFetchInfo } from '../hook/useFetchInfo';
// components
import PageTitle from '../components/titles/PageTitle';
import InfoTitle from '../components/titles/InfoTitle';
import Paragraph from '../components/titles/Paragraph';
import TravelInfo from '../components/travel-info/TravelInfo';
import ImageBox from '../components/image-box/ImageBox';
// helper
import { planetList } from '../listsHelper';

const Destination = () => {
  const { data } = useFetchInfo('destinations');
  const [planetName, setPlanetName] = useState('moon');

  const changePlanet = (e) => setPlanetName(e.target.dataset.planet);

  return (
    <main className="pt-24 pb-8 text-white main-bg md:pt-36 bpCustom:pt-56 bg-destination-mobile md:bg-destination-tablet bpCustom:bg-destination-desktop before:bg-destination-mobile md:before:bg-destination-table bpCustom:before:bg-destination-desktop">
      <div className="m-auto max-w-screen-bpCustom">
        <PageTitle span="01" title="pick your destination" />
        <div className="flex flex-col items-center justify-center gap-10 bpCustom:gap-20 bpCustom:flex-row">
          <ImageBox
            classes="w-[10.63rem] md:w-[18.75rem] bpCustom:w-[27.81rem] aspect-square"
            src={`./assets/destination/image-${planetName}.png`}
            alt={planetName}
          />
          <section className="flex flex-col items-center">
            <div className="flex items-center justify-center w-full gap-4 mb-7">
              {
                planetList.map((planet) => (
                  <button
                    key={planet.id}
                    onClick={changePlanet}
                    data-planet={planet.name}
                    type="button"
                    className={`relative h-full pb-2 text-lg tracking-widest uppercase content-none link-hover font-barlow ${planet.name === planetName ? 'link-active' : 'inactive'}`}
                  >
                    {planet.name}
                  </button>
                ))
              }
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <InfoTitle title={planetName} largeText />
              <Paragraph
                paragraph={data.map((planet) => (planet.name.toLowerCase() === planetName ? planet.info.description : ''))}
              />
              <div className="w-full h-0.5 bg-white/50 mb-8" />
              <div className="flex flex-col items-center justify-center w-full gap-10 md:flex-row">
                <TravelInfo
                  title="avg. distance"
                  travel={data.map((planet) => (planet.name.toLowerCase() === planetName ? planet.info.distance : ''))}
                />
                <TravelInfo
                  title="est. travel time"
                  travel={data.map((planet) => (planet.name.toLowerCase() === planetName ? planet.info.travel : ''))}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Destination;
