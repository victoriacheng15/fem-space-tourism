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
} from '../components';
import { crewList, CREW } from '../config';

const Crew = () => {
  const { data } = useFetchInfo(CREW);
  const [crewName, setCrewName] = useState('douglas hurley');

  const formatName = (name) => name.split(' ').join('-');

  const changeCrew = (e) => setCrewName(e.target.dataset.name);

  return (
    <MainContainer compName={CREW}>
      <PageContainer>
        <PageTitle span="02" title="meet your crew" />
        <ContentContainer compName={CREW}>
          <ImageBox
            compName={CREW}
            src={`/assets/crew/image-${formatName(crewName)}.png`}
            alt={crewName}
            underline
          />
          <SectionContainer compName={CREW}>
            <div className="flex w-full items-center justify-center gap-4 bpCustom:justify-start">
              {crewList.map(({ id, name }) => (
                <PageButton
                  key={id}
                  onClick={changeCrew}
                  dataName={name}
                  compName={CREW}
                  compClass={name === crewName ? 'crew-active' : ''}
                  btnContext={name}
                />
              ))}
            </div>
            <div className="flex flex-col items-center justify-center gap-4 bpCustom:items-start">
              <h3 className="font-bellefair uppercase opacity-50 md:text-[1.625rem] bpCustom:text-[2rem]">
                {data.map((crew) =>
                  crew.name.toLowerCase() === crewName ? crew.info.role : ''
                )}
              </h3>
              <InfoTitle title={crewName} />
              <Paragraph
                paragraph={data.map((crew) =>
                  crew.name.toLowerCase() === crewName ? crew.info.bio : ''
                )}
              />
            </div>
          </SectionContainer>
        </ContentContainer>
      </PageContainer>
    </MainContainer>
  );
};

export default Crew;
