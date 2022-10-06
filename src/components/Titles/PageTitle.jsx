import React from 'react';

const PageTitle = ({ span, title }) => (
  <h1 className="mb-9 text-center font-barlow uppercase tracking-widest text-slate-100 md:pl-9 md:text-left md:text-[1.25rem] bpCustom:mb-20 bpCustom:pl-40 bpCustom:text-left bpCustom:text-3xl">
    <span className="mr-3 opacity-60">{span}</span>
    {title}
  </h1>
);

export default PageTitle;
