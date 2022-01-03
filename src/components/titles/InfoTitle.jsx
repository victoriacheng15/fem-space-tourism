import React from 'react';

const InfoTitle = ({ title, largeText }) => (
  <h2 className={`${largeText ? 'text-5xl' : 'text-2xl'} tracking-widest uppercase font-bellefair`}>
    {title}
  </h2>
);

export default InfoTitle;
