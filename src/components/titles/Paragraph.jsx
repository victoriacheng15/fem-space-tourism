import React from 'react';

const Paragraph = ({ paragraph }) => (
  <p className="w-80 md:w-[35.625rem] bpCustom:w-[27.8125rem] font-barlow leading-7 text-center bpCustom:text-left">
    {paragraph}
  </p>
);

export default Paragraph;
