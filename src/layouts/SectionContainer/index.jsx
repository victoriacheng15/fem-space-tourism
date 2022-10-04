import React from 'react';

const SectionContainer = ({ children, compName }) => {
  const pages = {
    destinations: 'flex flex-col items-center',
    crew: 'flex flex-col items-center gap-9 md:flex-col-reverse bpCustom:gap-32',
    technology:
      'flex w-7/12 flex-col items-center justify-center bpCustom:flex-row bpCustom:gap-10',
  };

  return <div className={pages[compName]}>{children}</div>;
};

export default SectionContainer;
