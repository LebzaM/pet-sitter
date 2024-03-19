import React from 'react'
import { FaDog } from 'react-icons/fa';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center space-x-2 animate-pulse">
        <FaDog className="text-4xl text-gray-600" />
        <div className="text-lg font-semibold font-gaya">Loading...</div>
      </div>
    </div>
  );
};

export default Loader;