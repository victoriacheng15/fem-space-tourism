import React from 'react';

const ContentContainer = ({ pageName = 'home', children }) => {
  const typePage = {
    home: 'flex flex-col items-center justify-center gap-4 bpCustom:items-start',
    destination:
      'flex flex-col items-center justify-center gap-10 bpCustom:flex-row bpCustom:gap-20',
    crew: 'flex flex-col items-center justify-center gap-10 md:flex-col-reverse bpCustom:flex-row-reverse bpCustom:gap-32',
    techology:
      'bpCustom:gap-18 flex flex-col items-center justify-center gap-10 bpCustom:flex-row-reverse',
  };

  return <div className={typePage[pageName]}>{children}</div>;
};

export default ContentContainer;
