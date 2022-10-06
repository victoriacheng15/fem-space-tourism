import React from 'react';

const Explore = () => (
  <div className="ease relative grid aspect-square w-40 place-items-center rounded-full bg-slate-100 duration-300 content-none after:absolute after:h-full after:w-full after:rounded-full after:bg-slate-100/25 hover:after:scale-150 focus:after:scale-150 md:w-60 bpCustom:w-72">
    <p className="relative z-30 text-center text-xl uppercase tracking-widest text-clrDark-925">
      explore
      <br />
      <span className="text-xs">hover effect only</span>
    </p>
  </div>
);

export default Explore;
