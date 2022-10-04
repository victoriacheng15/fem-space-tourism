import React from 'react';

const ContentContainer = ({ children, compName = 'home' }) => {
  const classes = {
    home: 'flex flex-col items-center justify-center gap-4 bpCustom:items-start',
    destinations:
      'flex flex-col items-center justify-center gap-10 bpCustom:flex-row bpCustom:gap-20',
    crew: 'flex flex-col items-center justify-center gap-10 md:flex-col-reverse bpCustom:flex-row-reverse bpCustom:gap-32',
    technology:
      'bpCustom:gap-18 flex flex-col items-center justify-center gap-10 bpCustom:flex-row-reverse',
  };

  return <div className={classes[compName]}>{children}</div>;
};

export default ContentContainer;
