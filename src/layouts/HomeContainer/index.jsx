import React from 'react';

const HomeContainer = ({ children }) => {
  return (
    <div className="mx-auto flex w-11/12 max-w-screen-bpCustom flex-col items-center justify-center gap-28 bpCustom:flex-row">
      {children}
    </div>
  );
};

export default HomeContainer;
