import React, { useState, useEffect } from 'react';
import { useFetchInfo } from '../hook/useFetchInfo';

const Technology = () => {
  const { data } = useFetchInfo('technology');
  const [techName, setTechName] = useState('launch vehicle');

  const formatName = (name) => name.split(' ').join('-');

  const changeTech = (e) => {
    const { dataset } = e.target;
    setTechName(dataset.tech);
  };

  const techList = [
    { id: 1, name: 'launch vehicle' },
    { id: 2, name: 'spaceport' },
    { id: 3, name: 'space capsule' },
  ];

  useEffect(() => {
    const buttons = document.querySelectorAll('[data-tech]');
    buttons.forEach((button) => button.addEventListener('click', () => {
      buttons.forEach((btn) => btn.classList.remove('tech-btn-active'));
      button.classList.add('tech-btn-active');
    }));
  }, []);

  return (
    <main className="w-screen h-screen pt-24 text-white bg-no-repeat bg-cover md:pt-36 bpCustom:pt-56 bg-technology-mobile md:bg-technology-tablet bpCustom:bg-technology-desktop">
      <div className="m-auto max-w-screen-bpCustom">
        <h1 className="text-3xl tracking-widest text-center text-white uppercase md:text-left md:pl-9 font-barlow mb-9 bpCustom:text-left bpCustom:pl-40 bpCustom:mb-20">
          <span className="mr-3 opacity-60">03</span>
          space launch 01
        </h1>
        <div className="flex flex-col items-center justify-center gap-10 bpCustom:gap-20 bpCustom:flex-row-reverse">
          <div className="w-screen h-[10.625rem] md:h-[19.375rem] bpCustom:w-[32.1875rem] bpCustom:h-[527px] bpCustom:relative bpCustom:-right-[140px]">
            <img
              className="object-cover w-full h-full"
              src={`./assets/technology/image-${formatName(techName)}-portrait.jpg`}
              alt={techName}
            />
          </div>
          <section className="flex flex-col items-center bpCustom:gap-10 bpCustom:flex-row">
            <div className="flex items-center justify-center w-full gap-4 mb-7 bpCustom:flex-col">
              {
                techList.map((tech) => (tech.name === techName
                  ? (
                    <button
                      key={tech.id}
                      onClick={changeTech}
                      data-tech={tech.name}
                      type="button"
                      className="w-10 h-10 text-2xl bpCustom:w-20 bpCustom:h-20 md:w-16 md:h-16 tech-btn tech-btn-active"
                    >
                      {tech.id}
                    </button>
                  ) : (
                    <button
                      key={tech.id}
                      onClick={changeTech}
                      data-tech={tech.name}
                      type="button"
                      className="w-10 h-10 text-2xl bpCustom:w-20 bpCustom:h-20 md:w-16 md:h-16 tech-btn"
                    >
                      {tech.id}
                    </button>
                  )))
              }
            </div>
            <div className="flex flex-col items-center justify-center bpCustom:items-start">
              <h3 className="mb-4 text-sm uppercase opacity-50 font-barlow">
                the terminology
              </h3>
              <h2 className="mb-6 text-2xl tracking-widest uppercase font-bellefair">
                {techName}
              </h2>
              <p className="w-80 md:w-[35.625rem] bpCustom:w-[27.8125rem] font-barlow leading-7 text-center bpCustom:text-left">
                {data.map((tech) => (tech.name.toLowerCase() === techName ? tech.info.description : ''))}
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Technology;
