'use client';

import React, { useEffect } from 'react';
import {
  CardBody,
  CardContainer,
  CardItem,
} from '../src/components/ui/3d-card';

export function CardDemo({ opportunities }) {
  useEffect(() => {
    const img = new window.Image(); // Correct usage of the 'new' operator
    img.src = 'your-image-url.jpg';
  }, []);
  return (
    <CardContainer className="inter-var cursor-pointer  lg:h-[450px]">
      <CardBody className="bg-linear-to-r  h-fit lg:h-[450px] from-teal-200 via-pink-200 to-blue-300 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6   ">
        <div className="bg-linear-to-r bg-teal-300 px-4 w-fit flex items-center gap-2 rounded-3xl">
          <div className="w-1 h-1 p-1 rounded-full bg-teal-400 border-teal-800 border-[1px] text-teal-600"></div>
          Most Popular
        </div>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-teal-600 dark:text-white"
        >
          Computer Science
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Computer Science applies logic and technology to develop software,
          systems, and innovative solutions.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?ga=GA1.1.239588547.1720344315&semt=ais_hybrid"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            {opportunities?.map((opertunity, index) => {
              return (
                <div
                  key={index}
                  className="bg-purple-300 px-3 rounded-2xl text-purple-700 py-2 text-[10px]"
                >
                  {opertunity}
                </div>
              );
            })}
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
