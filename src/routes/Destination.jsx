import React, { useState } from 'react';
import { useFetchInfo } from '../hook/useFetchInfo';
import { MainContainer, PageContainer } from '../layouts';
import { PageTitle, InfoTitle, Paragraph } from '../components/Titles';
import TravelInfo from '../components/TravelInfo';
import ImageBox from '../components/ImageBox';
import { planetList } from '../listsHelper';

const Destination = () => {
  const { data } = useFetchInfo('destinations');
  const [planetName, setPlanetName] = useState('moon');

  const changePlanet = (e) => setPlanetName(e.target.dataset.planet);

  return (
    <MainContainer pageType="destination">
      <PageContainer>
        <PageTitle span="01" title="pick your destination" />
        <div className="flex flex-col items-center justify-center gap-10 bpCustom:flex-row bpCustom:gap-20">
          <ImageBox
            typeName="destination"
            src={`./assets/destination/image-${planetName}.png`}
            alt={planetName}
          />
          <section className="flex flex-col items-center">
            <div className="mb-7 flex w-full items-center justify-center gap-4">
              {planetList.map((planet) => (
                <button
                  key={planet.id}
                  onClick={changePlanet}
                  data-planet={planet.name}
                  type="button"
                  className={`link-hover relative h-full pb-2 font-barlow text-lg uppercase tracking-widest content-none ${
                    planet.name === planetName ? 'link-active' : 'inactive'
                  }`}
                >
                  {planet.name}
                </button>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <InfoTitle title={planetName} largeText />
              <Paragraph
                paragraph={data.map((planet) =>
                  planet.name.toLowerCase() === planetName
                    ? planet.info.description
                    : ''
                )}
              />
              <div className="mb-8 h-0.5 w-full bg-white/50" />
              <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row">
                <TravelInfo
                  title="avg. distance"
                  travel={data.map((planet) =>
                    planet.name.toLowerCase() === planetName
                      ? planet.info.distance
                      : ''
                  )}
                />
                <TravelInfo
                  title="est. travel time"
                  travel={data.map((planet) =>
                    planet.name.toLowerCase() === planetName
                      ? planet.info.travel
                      : ''
                  )}
                />
              </div>
            </div>
          </section>
        </div>
      </PageContainer>
    </MainContainer>
  );
};

export default Destination;
