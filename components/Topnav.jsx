import React from 'react';

import { BsStars } from 'react-icons/bs';
const Topnav = ({ text, span, icons }) => {
  return (
    <div className="w-full  h-14 bg-linear-to-r from-green-400 via-green-200 to-green-500 flex xContainer justify-start items-center gap-2">
      <div>
        <BsStars className="text-orange-500" />
      </div>
      <div>
        <p className="flex items-center">
          <span className="font-bold text-[9px] lg:text-sm"> {span}</span>
          <span className="text-[9px] lg:text-[16px]">{text}</span>
          <span className="hidden lg:block">{icons}</span>
        </p>
      </div>
    </div>
  );
};

export default Topnav;
