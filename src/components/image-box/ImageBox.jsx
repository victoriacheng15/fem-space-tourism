import React from 'react';

const ImageBox = ({ classes, src, alt, cover, underline }) => (
  <div className={classes}>
    <img
      className={`${cover ? 'object-cover' : 'object-contain'} w-full h-full`}
      src={src}
      alt={alt}
    />
    {underline && <div className="w-full h-0.5 bg-white/25 md:hidden" />}
  </div>
);

export default ImageBox;
