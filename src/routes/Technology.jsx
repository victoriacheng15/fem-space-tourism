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
import { techList, TECH } from '../config';

const Technology = () => {
  const { data } = useFetchInfo(TECH);
  const [techName, setTechName] = useState('launch vehicle');

  const formatName = (name) => name.split(' ').join('-');

  const changeTech = (e) => setTechName(e.target.dataset.name);

  return (
    <MainContainer compName={TECH}>
      <PageContainer>
        <PageTitle span="03" title="space launch 01" />
        <ContentContainer compName={TECH}>
          <ImageBox
            compName={TECH}
            src={`./assets/technology/image-${formatName(
              techName
            )}-portrait.jpg`}
            alt={techName}
            cover
          />
          <SectionContainer compName={TECH}>
            <div className="mb-7 flex w-auto items-center justify-center gap-4 bpCustom:m-0 bpCustom:flex-col">
              {techList.map(({ id, name }) => (
                <PageButton
                  key={id}
                  onClick={changeTech}
                  dataName={name}
                  compName={TECH}
                  compClass={name === techName ? 'tech-btn-active' : ''}
                  btnContext={id}
                />
              ))}
            </div>
            <div className="flex w-auto flex-col items-center justify-center gap-5 bpCustom:items-start">
              <h3 className="font-barlow uppercase opacity-50">
                the terminology
              </h3>
              <InfoTitle title={techName} />
              <Paragraph
                paragraph={data.map((tech) =>
                  tech.name.toLowerCase() === techName
                    ? tech.info.description
                    : ''
                )}
              />
            </div>
          </SectionContainer>
        </ContentContainer>
      </PageContainer>
    </MainContainer>
  );
};

export default Technology;
