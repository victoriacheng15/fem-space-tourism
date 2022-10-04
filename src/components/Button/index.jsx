import React from 'react';

const PageButton = ({ onClick, compName, compClass, dataName, btnContext }) => {
  const typeComp = {
    destinations:
      'link-hover relative h-full pb-2 font-barlow text-lg uppercase tracking-widest content-none',
    crew: 'relative h-2.5 w-2.5 rounded-full bg-white/25 text-transparent content-none before:absolute before:h-full before:w-full before:rounded-full',
    technology:
      'tech-btn h-10 w-10 text-2xl md:h-16 md:w-16 bpCustom:h-20 bpCustom:w-20',
  };
  return (
    <button
      onClick={onClick}
      data-name={dataName}
      type="button"
      className={`${typeComp[compName]} ${compClass}`}
    >
      {btnContext}
    </button>
  );
};

export default PageButton;
