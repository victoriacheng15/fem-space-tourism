import React from 'react';

const TravelInfo = ({ title, travel }) => (
  <div className="flex flex-col items-center justify-center">
    <h3 className="mb-4 text-sm tracking-widest uppercase font-barlow text-clrLight-925">{title}</h3>
    <p className="text-[1.75rem] uppercase font-barlow">
      {travel}
    </p>
  </div>
);

export default TravelInfo;
