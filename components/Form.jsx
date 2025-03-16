import React from 'react';

import { FaCheck } from 'react-icons/fa6';
import FormComponent from './FormComponent';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Form = () => {
  const uis = [
    ' Students who are eager to showcase their knowledge',
    ' Those interested in enhancing their learning experience',
    ' Individuals looking for opportunities to grow',
  ];

  return (
    <section className="xContainer  w-full h-[100vh]">
      <main className="bg-white w-full h-fit py-4 px-3  bg-linear-to-r flex flex-col lg:flex-row   gap-4 items-start  lg:justify-evenly drop-shadow-lg from-cyan-300 via-teal-100 to-blue-300">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
        </div>

        <div
          id="text-section "
          className=" lg:w-[60%] h-full  flex flex-col items-start justify-center gap-2  mt-8"
        >
          <h1 className="text-2xl font-bold text-cyan-800">
            Apply for the Talent Test
          </h1>
          <p className="mt-2 font-light">
            Ready to test your skills and take the next step in your{' '}
            <span className="font-bold">academic journey?</span> The Telent Test
            evaluates your abilities and brings you closer to{' '}
            <span className="font-bold text-cyan-600">success</span>!
          </p>
          <h1 className="text-indigo-600 font-bold">Who Can Apply?</h1>
          {uis.map((ui, ind) => {
            const icon = (
              <FaCheck className="bg-indigo-300 p-2 rounded-full text-3xl text-indigo-600" />
            );
            return (
              <ul
                key={ind}
                className="flex items-center gap-2 justify-between "
              >
                {icon}
                <li>{ui}</li>
              </ul>
            );
          })}
        </div>
        <div id="form-section" className="lg:w-[50%] h-full ">
          <div className="flex flex-col justify-center w-fit h-full gap-2.5 bg- p-3   shadow-2xl rounded-sm">
            <h1 className="font-extralight text-blue-600">Fill the Form</h1>
            <FormComponent />
          </div>
        </div>
      </main>
    </section>
  );
};
export default Form;
