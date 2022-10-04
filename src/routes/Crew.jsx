import React, { useState } from 'react';
import { useFetchInfo } from '../hook/useFetchInfo';
import { MainContainer, PageContainer, ContentContainer } from '../layouts';
import {
  PageTitle,
  InfoTitle,
  Paragraph,
  ImageBox,
  Button,
} from '../components';
import { crewList } from '../listsHelper';

const Crew = () => {
  const { data } = useFetchInfo('crew');
  const [crewName, setCrewName] = useState('douglas hurley');

  const formatName = (name) => name.split(' ').join('-');

  const changeCrew = (e) => setCrewName(e.target.dataset.name);

  return (
    <MainContainer pageType="crew">
      <PageContainer>
        <PageTitle span="02" title="meet your crew" />
        <ContentContainer pageName="crew">
          <ImageBox
            typeName="crew"
            src={`/assets/crew/image-${formatName(crewName)}.png`}
            alt={crewName}
            underline
          />
          <section className="flex flex-col items-center gap-9 md:flex-col-reverse bpCustom:gap-32">
            <div className="flex w-full items-center justify-center gap-4 bpCustom:justify-start">
              {crewList.map(({ id, name }) => (
                <Button
                  key={id}
                  onClick={changeCrew}
                  dataName={name}
                  pageName="crew"
                  pageClass={name === crewName ? 'crew-active' : ''}
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
          </section>
        </ContentContainer>
      </PageContainer>
    </MainContainer>
  );
};

export default Crew;
