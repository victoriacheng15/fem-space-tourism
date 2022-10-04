import React, { useState } from 'react';
import { useFetchInfo } from '../hook/useFetchInfo';
import { MainContainer, PageContainer } from '../layouts';
import { PageTitle, InfoTitle, Paragraph } from '../components/Titles';
import ImageBox from '../components/ImageBox';
import { crewList } from '../listsHelper';

const Crew = () => {
  const { data } = useFetchInfo('crew');
  const [crewName, setCrewName] = useState('douglas hurley');

  const formatName = (name) => name.split(' ').join('-');

  const changeCrew = (e) => setCrewName(e.target.dataset.crew);

  return (
    <MainContainer pageType="crew">
      <PageContainer>
        <PageTitle span="02" title="meet your crew" />
        <div className="flex flex-col items-center justify-center gap-10 md:flex-col-reverse bpCustom:flex-row-reverse bpCustom:gap-32">
          <ImageBox
            typeName="crew"
            src={`/assets/crew/image-${formatName(crewName)}.png`}
            alt={crewName}
            underline
          />
          <section className="flex flex-col items-center gap-9 md:flex-col-reverse bpCustom:gap-32">
            <div className="flex w-full items-center justify-center gap-4 bpCustom:justify-start">
              {crewList.map((crew) => (
                <button
                  key={crew.id}
                  onClick={changeCrew}
                  data-crew={crew.name}
                  type="button"
                  className={`relative h-2.5 w-2.5 rounded-full bg-white/25 text-transparent content-none before:absolute before:h-full before:w-full before:rounded-full ${
                    crew.name === crewName ? 'crew-active' : ''
                  }`}
                >
                  {crew.name}
                </button>
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
          </section>
        </div>
      </PageContainer>
    </MainContainer>
  );
};

export default Crew;
