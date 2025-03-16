import React from 'react';
import { MdOutlineReportProblem } from 'react-icons/md';

const Morque = () => {
  const studies = [
    {
      img: MdOutlineReportProblem, // ✅ Directly store the component
      title: 'Problem Solving',
    },
    {
      img: MdOutlineReportProblem,
      title: 'Group Learning',
    },
    {
      img: MdOutlineReportProblem,
      title: 'Multiple Courses',
    },
    {
      img: MdOutlineReportProblem,
      title: 'Practical Tasks',
    },
  ];

  return (
    <section className="w-full xContainer mt-10 flex items-center flex-wrap gap-2 justify-between">
      {studies.map((study, index) => {
        const Icon = study.img; // ✅ Assign component before using
        return (
          <div
            key={index} // ✅ Always use a unique key when mapping
            className="w-fit cursor-pointer bg-green-100 drop-shadow-md rounded-sm p-[2px]"
          >
            <div className="flex items-center justify-center gap-2 bg-white rounded-sm p-2 lg:py-7 lg:px-10">
              <span className="text-green-500 lg:text-3xl">
                <Icon /> {/* ✅ Render icon component */}
              </span>
              <p className="text-green-700 text-[12px]  lg:text-lg">
                {study.title}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Morque;
