import React, { useState } from 'react';
// hook
import { useFetchInfo } from '../hook/useFetchInfo';
// components
import PageTitle from '../components/titles/PageTitle';
import InfoTitle from '../components/titles/InfoTitle';
import Paragraph from '../components/titles/Paragraph';
import ImageBox from '../components/image-box/ImageBox';
// helper
import { crewList } from '../listsHelper';

const Crew = () => {
  const { data } = useFetchInfo('crew');
  const [crewName, setCrewName] = useState('douglas hurley');

  const formatName = (name) => name.split(' ').join('-');

  const changeCrew = (e) => setCrewName(e.target.dataset.crew);

  return (
    <main className="pt-20 pb-8 text-white main-bg md:pt-36 bpCustom:pt-52 bg-crew-mobile md:bg-crew-tablet bpCustom:bg-crew-desktop before:bg-crew-mobile md:before:bg-crew-table bpCustom:before:bg-crew-desktop">
      <div className="m-auto max-w-screen-bpCustom">
        <PageTitle span="02" title="meet your crew" />
        <div className="flex flex-col items-center justify-center gap-10 bpCustom:gap-32 bpCustom:flex-row-reverse md:flex-col-reverse">
          <ImageBox
            classes="w-[20.44rem] h-[14rem] md:w-[28.5rem] md:h-[35.75rem] bpCustom:w-[35.5rem] bpCustom:h-[44.5rem]"
            src={`/assets/crew/image-${formatName(crewName)}.png`}
            alt={crewName}
            underline
          />
          <section className="flex flex-col items-center md:flex-col-reverse gap-9 bpCustom:gap-32">
            <div className="flex items-center justify-center w-full gap-4 bpCustom:justify-start">
              {
                crewList.map((crew) => (
                  <button
                    key={crew.id}
                    onClick={changeCrew}
                    data-crew={crew.name}
                    type="button"
                    className={`w-2.5 h-2.5 text-transparent rounded-full bg-white/25 relative content-none before:absolute before:w-full before:h-full before:rounded-full ${crew.name === crewName ? 'crew-active' : ''}`}
                  >
                    {crew.name}
                  </button>
                ))
              }
            </div>
            <div className="flex flex-col items-center justify-center gap-4 bpCustom:items-start">
              <h3 className="uppercase opacity-50 md:text-[1.625rem] bpCustom:text-[2rem] font-bellefair">
                {data.map((crew) => (crew.name.toLowerCase() === crewName ? crew.info.role : ''))}
              </h3>
              <InfoTitle title={crewName} />
              <Paragraph
                paragraph={data.map((crew) => (crew.name.toLowerCase() === crewName ? crew.info.bio : ''))}
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Crew;
