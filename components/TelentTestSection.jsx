import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import { GrLinkNext } from 'react-icons/gr';
import { CardSpotlightDemo } from '../components/CardSpot';
const TelentTestSection = () => {
  const participants = [
    'Get a chance to win a 100% scholarship',
    ' Compete with top candidates',
    'Win exciting rewards & opportunities',
    'Get valuable insights into your strengths',
  ];

  return (
    <>
      <section className="xContainer w-full h-fit ">
        <main className="w-full flex  flex-wrap gap-4 items-center justify-evenly h-full bg-gradient-to-r  py-10 from-green-50 via-green-50 to-green-100 rounded-lg">
          <div className="  lg:w-[50%] h-full  flex flex-col items-start justify-between gap-3  pl-4  ">
            <div className="flex items-center justify-center gap-2 bg-indigo-200 rounded-full px-3 cursor-pointer transition-all duration-300 group">
              <div className="w-2 h-2 bg-indigo-400 border border-indigo-600 rounded-full"></div>
              <span className="text-indigo-600">24/3/2025</span>
              <GrLinkNext className="text-indigo-600 font-bold transform transition-transform duration-300 group-hover:translate-x-2" />
            </div>

            <h1 className="text-[14px] lg:text-3xl font-bold">
              Talent Test :{' '}
              <span className="text-green-600">Unleash Your Potential!</span>
            </h1>
            <h2 className="font-light underline text-sm">
              Prove Your Skills & Shine Bright
            </h2>
            <p className="text-[12px] lg:text-[15px] text-star tracking-tight">
              Showcase your skills and take on the challenge! Join our Talent
              Test to prove your academic excellence, creativity, and
              problem-solving abilities.{' '}
              <span className="text-green-700">Let your talent shine!</span>
            </p>
            <h2 className="text-indigo-400 font-bold">Why Participate?</h2>
            {participants.map((par, ind) => {
              const icon = (
                <FaCheck className="bg-green-200 p-2 rounded-full text-3xl text-green-600" />
              );
              return (
                <ul className="flex" key={ind}>
                  <li className="flex items-center gap-4 text-green-600 text-[12px] lg:text-lg">
                    {icon} <span>{par}</span>{' '}
                  </li>
                </ul>
              );
            })}
          </div>
          <div>
            <CardSpotlightDemo />
          </div>
        </main>
      </section>
    </>
  );
};

export default TelentTestSection;
