import React from 'react';

const Button = ({
  key,
  onClick,
  pageName = 'destination',
  pageClass,
  dataName,
  btnContext,
}) => {
  const typePage = {
    destination:
      'link-hover relative h-full pb-2 font-barlow text-lg uppercase tracking-widest content-none',
    crew: 'relative h-2.5 w-2.5 rounded-full bg-white/25 text-transparent content-none before:absolute before:h-full before:w-full before:rounded-full',
    technology:
      'tech-btn h-10 w-10 text-2xl md:h-16 md:w-16 bpCustom:h-20 bpCustom:w-20',
  };
  return (
    <button
      key={key}
      onClick={onClick}
      data-name={dataName}
      type="button"
      className={`${typePage[pageName]} ${pageClass}`}
    >
      {btnContext}
    </button>
  );
};

export default Button;
