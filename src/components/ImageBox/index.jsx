import React from 'react';

const ImageBox = ({ src, alt, cover, underline, compName = 'nav' }) => {
  const types = {
    destinations:
      'w-[10.63rem] md:w-[18.75rem] bpCustom:w-[27.81rem] aspect-square',
    crew: 'w-[20.44rem] h-[14rem] md:w-[28.5rem] md:h-[35.75rem] bpCustom:w-[35.5rem] bpCustom:h-[44.5rem]',
    technology:
      'w-full h-[10.63rem] md:h-[19.38rem] bpCustom:w-[32.19rem] bpCustom:h-[32.94rem]',
    nav: 'w-10 h-10 absolute top-6 left-6 md:top-7 md:left-10 bpCustom:left-14',
  };

  return (
    <div className={types[compName]}>
      <img
        className={`${cover ? 'object-cover' : 'object-contain'} h-full w-full`}
        src={src}
        alt={alt}
      />
      {underline && <div className="h-0.5 w-full bg-white/25 md:hidden" />}
    </div>
  );
};

export default ImageBox;
