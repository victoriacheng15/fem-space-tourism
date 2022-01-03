import React from 'react';

const PageTitle = ({ span, title }) => (
  <h1 className="text-3xl tracking-widest text-center text-white uppercase md:text-left md:pl-9 font-barlow mb-9 bpCustom:text-left bpCustom:pl-40 bpCustom:mb-20">
    <span className="mr-3 opacity-60">{span}</span>
    {title}
  </h1>
);

export default PageTitle;
