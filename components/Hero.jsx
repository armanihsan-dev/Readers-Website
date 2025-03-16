import React from 'react';
import { TypingAnimationDemo } from './TypingAnimation';
import '../src/assets/girl-image.png';
import AnimatedTooltipPreview from './ToolTip';
import { PiStudentBold } from 'react-icons/pi';

const Hero = () => {
  return (
    <>
      <div className="flex w-full  h-[100vh] xContainer relative ">
        <div className="w-[80%]  h-[750px] lg:h-full bg-linear-to-r from-[#E1FFEE] rounded-l-3xl "></div>
        <div className="w-[20%] bg-[#E4FFFF] h-[750px] lg:h-full rounded-r-3xl"></div>
        <div className="   absolute flex flex-col lg:flex-row items-start lg:items-center  w-[95%] h-[92%] justify-evenly px-5 gap-10  ">
          <div id="text-div" className="mt-5 ">
            <TypingAnimationDemo text="The Readers Swabi" />
            <h1 className=" text-3xl lg:text-5xl font-bold">
              Quality <span className="text-green-700">Education</span> <br />
              By Any Means <br /> Necessary.
            </h1>
            <button className="mt-6 bg-green-500 hover:bg-green-800 transition text-white px-3 py-2 rounded-full cursor-pointer ">
              Enroll Now
            </button>
          </div>
          <div className="relative ">
            {' '}
            <img
              src="../src/assets/girl-image.png"
              alt="female-student"
              className="w-72 rounded-2xl"
            />
            <div className="absolute  shadow-lg rounded-3xl le  left-5 bottom-[-90px]  lg:left-[-150px] lg:bottom-[-30px]  bg-white  flex items-center py-2  flex-col">
              <h2 className="font-bold text-center">
                Learn from best <br />{' '}
                <span className="text-green-600">instructors</span>
              </h2>
              <AnimatedTooltipPreview />
            </div>
            <div className="absolute  top-[-50px] right-[-30px] lg:right-[-50px]  shadow-lg rounded-xl  bg-white  flex items-center justify-center py-2 px-4 flex-col gap-2">
              <PiStudentBold className="text-3xl bg-green-200 p-1 rounded-full text-green-700" />
              <h2 className=" text-center">
                1500+
                <br /> <span className="text-green-600">Students</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Hero;
