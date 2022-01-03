import React, { useState, useEffect } from 'react';
import { useFetchInfo } from '../hook/useFetchInfo';
import PageTitle from '../components/titles/PageTitle';
import InfoTitle from '../components/titles/InfoTitle';
import Paragraph from '../components/titles/Paragraph';
import ImageBox from '../components/image-box/ImageBox';

const Crew = () => {
  const { data } = useFetchInfo('crew');
  const [crewName, setCrewName] = useState('douglas hurley');

  const formatName = (name) => name.split(' ').join('-');

  const changeCrew = (e) => {
    const { dataset } = e.target;
    setCrewName(dataset.crew);
  };

  const crewList = [
    { id: 1, name: 'douglas hurley' },
    { id: 2, name: 'mark shuttleworth' },
    { id: 3, name: 'victor glover' },
    { id: 4, name: 'anousheh ansari' },
  ];

  useEffect(() => {
    const buttons = document.querySelectorAll('[data-crew]');
    buttons.forEach((button) => button.addEventListener('click', () => {
      buttons.forEach((btn) => btn.classList.remove('crew-active'));
      button.classList.add('crew-active');
    }));
  }, []);

  return (
    <main className="w-screen h-screen pt-20 text-white bg-no-repeat bg-cover md:pt-36 bpCustom:pt-52 bg-crew-mobile md:bg-crew-tablet bpCustom:bg-crew-desktop">
      <div className="m-auto max-w-screen-bpCustom">
        <PageTitle span="02" title="meet your crew" />
        <div className="flex flex-col items-center justify-center gap-10 bpCustom:gap-32 bpCustom:flex-row-reverse md:flex-col-reverse">
          <ImageBox
            classes="w-[327px] h-[223px] md:w-[456px] md:h-[572px] bpCustom:w-[568px] bpCustom:h-[712px]"
            src={`/assets/crew/image-${formatName(crewName)}.png`}
            alt={crewName}
            underline
          />
          <section className="flex flex-col items-center md:flex-col-reverse gap-9 bpCustom:gap-32">
            <div className="flex items-center justify-center w-full gap-4 bpCustom:justify-start">
              {
                crewList.map((crew) => (crew.name === crewName ? (
                  <button
                    key={crew.id}
                    data-crew={crew.name}
                    onClick={changeCrew}
                    type="button"
                    className="w-2.5 h-2.5 text-transparent rounded-full bg-white/25 relative content-none before:absolute before:w-full before:h-full before:rounded-full crew-active"
                  >
                    {crew.name}
                  </button>
                ) : (
                  <button
                    key={crew.id}
                    data-crew={crew.name}
                    onClick={changeCrew}
                    type="button"
                    className="w-2.5 h-2.5 text-transparent rounded-full bg-white/25 relative content-none before:absolute before:w-full before:h-full before:rounded-full"
                  >
                    {crew.name}
                  </button>
                )))
              }
            </div>
            <div className="flex flex-col items-center justify-center gap-4 bpCustom:items-start">
              <h3 className="uppercase opacity-50 font-bellefair">
                {data.map((crew) => (crew.name.toLowerCase() === crewName ? crew.info.role : ''))}
              </h3>
              <InfoTitle title={crewName} />
              <Paragraph paragraph={data.map((crew) => (crew.name.toLowerCase() === crewName ? crew.info.bio : ''))} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Crew;
