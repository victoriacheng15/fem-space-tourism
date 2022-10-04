import React, { useState } from 'react';
import { useFetchInfo } from '../hook/useFetchInfo';
import { MainContainer, PageContainer } from '../layouts';
import { PageTitle, InfoTitle, Paragraph } from '../components/Titles';
import ImageBox from '../components/ImageBox';
import { techList } from '../listsHelper';

const Technology = () => {
  const { data } = useFetchInfo('technology');
  const [techName, setTechName] = useState('launch vehicle');

  const formatName = (name) => name.split(' ').join('-');

  const changeTech = (e) => setTechName(e.target.dataset.tech);

  return (
    <MainContainer pageType="technology">
      <PageContainer>
        <PageTitle span="03" title="space launch 01" />
        <div className="bpCustom:gap-18 flex flex-col items-center justify-center gap-10 bpCustom:flex-row-reverse">
          <ImageBox
            typeName="technology"
            src={`./assets/technology/image-${formatName(
              techName
            )}-portrait.jpg`}
            alt={techName}
            cover
          />
          <section className="flex w-7/12 flex-col items-center justify-center bpCustom:flex-row bpCustom:gap-10">
            <div className="mb-7 flex w-auto items-center justify-center gap-4 bpCustom:m-0 bpCustom:flex-col">
              {techList.map((tech) => (
                <button
                  key={tech.id}
                  onClick={changeTech}
                  data-tech={tech.name}
                  type="button"
                  className={`tech-btn h-10 w-10 text-2xl md:h-16 md:w-16 bpCustom:h-20 bpCustom:w-20 ${
                    tech.name === techName ? 'tech-btn-active' : ''
                  }`}
                >
                  {tech.id}
                </button>
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
          </section>
        </div>
      </PageContainer>
    </MainContainer>
  );
};

export default Technology;
