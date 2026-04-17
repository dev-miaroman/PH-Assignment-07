import React from 'react';
import { MoonLoader } from 'react-spinners';

const loading = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <MoonLoader color="#244d3f" />
    </div>
  );
};

export default loading;
