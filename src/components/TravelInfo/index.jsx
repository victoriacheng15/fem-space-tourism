import React from 'react';

const TravelInfo = ({ title, travel }) => (
  <div className="flex flex-col items-center justify-center">
    <h3 className="mb-4 font-barlow text-sm uppercase tracking-widest text-clrLight-925">
      {title}
    </h3>
    <p className="font-barlow text-[1.75rem] uppercase">{travel}</p>
  </div>
);

export default TravelInfo;
