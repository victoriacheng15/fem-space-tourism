import React from 'react';

const MainContainer = ({ children, compName = 'home' }) => {
  const classes = {
    home: 'main-bg bg-home-mobile md:bg-home-tablet bpCustom:bg-home-desktop before:bg-home-mobile md:before:bg-home-table bpCustom:before:bg-home-desktop pb-10 pt-36 text-clrLight-925 before:rotate-180 md:pt-52 bpCustom:pt-96',
    crew: 'main-bg bg-crew-mobile md:bg-crew-tablet bpCustom:bg-crew-desktop before:bg-crew-mobile md:before:bg-crew-table bpCustom:before:bg-crew-desktop pt-20 pb-8 text-white md:pt-36 bpCustom:pt-52',
    destinations:
      'main-bg bg-destination-mobile md:bg-destination-tablet bpCustom:bg-destination-desktop before:bg-destination-mobile md:before:bg-destination-table bpCustom:before:bg-destination-desktop pt-24 pb-8 text-white md:pt-36 bpCustom:pt-56',
    technology:
      'main-bg bg-technology-mobile md:bg-technology-tablet bpCustom:bg-technology-desktop before:bg-technology-mobile md:before:bg-technology-table bpCustom:before:bg-technology-desktop pt-24 pb-8 text-white md:pt-36 bpCustom:pt-56',
  };

  return <main className={classes[compName]}>{children}</main>;
};

export default MainContainer;
