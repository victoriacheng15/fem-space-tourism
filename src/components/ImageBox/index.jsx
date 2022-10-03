import React from 'react';

const ImageBox = ({ classes, src, alt, cover, underline }) => (
  <div className={classes}>
    <img
      className={`${cover ? 'object-cover' : 'object-contain'} h-full w-full`}
      src={src}
      alt={alt}
    />
    {underline && <div className="h-0.5 w-full bg-white/25 md:hidden" />}
  </div>
);

export default ImageBox;
