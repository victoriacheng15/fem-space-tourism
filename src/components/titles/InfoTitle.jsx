import React from 'react';

const InfoTitle = ({ title, largeText }) => (
  <h2 className={`${largeText ? ' text-[3.5rem] md:text-[5rem] bpCustom:text-[6.25rem]' : 'text-2xl md:text-[2.5rem] bpCustom:text-[3.5rem]'}  tracking-widest uppercase font-bellefair`}>
    {title}
  </h2>
);

export default InfoTitle;
