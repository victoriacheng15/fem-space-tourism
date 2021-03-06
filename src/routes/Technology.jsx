import React, { useState } from 'react';
// hook
import { useFetchInfo } from '../hook/useFetchInfo';
// components
import PageTitle from '../components/titles/PageTitle';
import InfoTitle from '../components/titles/InfoTitle';
import Paragraph from '../components/titles/Paragraph';
import ImageBox from '../components/image-box/ImageBox';
// helper
import { techList } from '../listsHelper';

const Technology = () => {
  const { data } = useFetchInfo('technology');
  const [techName, setTechName] = useState('launch vehicle');

  const formatName = (name) => name.split(' ').join('-');

  const changeTech = (e) => setTechName(e.target.dataset.tech);

  return (
    <main className="pt-24 pb-8 text-white main-bg md:pt-36 bpCustom:pt-56 bg-technology-mobile md:bg-technology-tablet bpCustom:bg-technology-desktop before:bg-technology-mobile md:before:bg-technology-table bpCustom:before:bg-technology-desktop">
      <div className="m-auto max-w-screen-bpCustom">
        <PageTitle span="03" title="space launch 01" />
        <div className="flex flex-col items-center justify-center gap-10 bpCustom:gap-18 bpCustom:flex-row-reverse">
          <ImageBox
            classes="w-full h-[10.63rem] md:h-[19.38rem] bpCustom:w-[32.19rem] bpCustom:h-[32.94rem]"
            src={`./assets/technology/image-${formatName(techName)}-portrait.jpg`}
            alt={techName}
            cover
          />
          <section className="flex flex-col items-center justify-center w-7/12 bpCustom:gap-10 bpCustom:flex-row">
            <div className="flex items-center justify-center w-auto gap-4 mb-7 bpCustom:flex-col bpCustom:m-0">
              {
                techList.map((tech) => (
                  <button
                    key={tech.id}
                    onClick={changeTech}
                    data-tech={tech.name}
                    type="button"
                    className={`w-10 h-10 text-2xl bpCustom:w-20 bpCustom:h-20 md:w-16 md:h-16 tech-btn ${tech.name === techName ? 'tech-btn-active' : ''}`}
                  >
                    {tech.id}
                  </button>
                ))
              }
            </div>
            <div className="flex flex-col items-center justify-center w-auto gap-5 bpCustom:items-start">
              <h3 className="uppercase opacity-50 font-barlow">
                the terminology
              </h3>
              <InfoTitle title={techName} />
              <Paragraph
                paragraph={data.map((tech) => (tech.name.toLowerCase() === techName ? tech.info.description : ''))}
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Technology;
