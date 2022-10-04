import React, { useState } from 'react';
import { useFetchInfo } from '../hook/useFetchInfo';
import {
  MainContainer,
  PageContainer,
  ContentContainer,
  SectionContainer,
} from '../layouts';
import {
  PageTitle,
  InfoTitle,
  Paragraph,
  ImageBox,
  PageButton,
  TravelInfo,
} from '../components';
import { planetList, DESTINATIONS } from '../config';

const Destination = () => {
  const { data } = useFetchInfo(DESTINATIONS);
  const [planetName, setPlanetName] = useState('moon');

  const changePlanet = (e) => setPlanetName(e.target.dataset.name);

  return (
    <MainContainer compName={DESTINATIONS}>
      <PageContainer>
        <PageTitle span="01" title="pick your destination" />
        <ContentContainer compName={DESTINATIONS}>
          <ImageBox
            compName={DESTINATIONS}
            src={`./assets/destination/image-${planetName}.png`}
            alt={planetName}
          />
          <SectionContainer compName={DESTINATIONS}>
            <div className="mb-7 flex w-full items-center justify-center gap-4">
              {planetList.map(({ id, name }) => (
                <PageButton
                  key={id}
                  onClick={changePlanet}
                  dataName={name}
                  compName={DESTINATIONS}
                  compClass={name === planetName ? 'link-active' : ''}
                  btnContext={name}
                />
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
          </SectionContainer>
        </ContentContainer>
      </PageContainer>
    </MainContainer>
  );
};

export default Destination;
