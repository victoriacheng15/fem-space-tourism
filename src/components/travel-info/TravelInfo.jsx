import React from 'react';

const TravelInfo = ({ travel }) => (
  <div className="flex flex-col items-center justify-center">
    <h3 className="mb-4 tracking-widest uppercase font-barlow">avg. distance</h3>
    <p className="text-3xl uppercase font-barlow">
      {travel}
    </p>
  </div>
);

export default TravelInfo;
