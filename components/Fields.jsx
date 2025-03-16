import React from 'react';
import { CardDemo } from './CardDemo';

const Fields = () => {
  const field = [
    {
      img: 'https://img.freepik.com/free-photo/young-male-psysician-with-patient-measuring-blood-pressure_1303-17877.jpg?ga=GA1.1.239588547.1720344315&semt=ais_hybrid',
      title: '  Medical (Healthcare & Medicine)',
      description:
        'The medical field studies the human body, diagnoses , and develops treatments',
      opportunities: ['Doctor', 'Paramedic', 'Surgeon', 'Pharmacist'],
    },
    {
      img: 'https://img.freepik.com/premium-photo/young-factory-worker-working-with-adept-robotic-arm_31965-32485.jpg?ga=GA1.1.239588547.1720344315&semt=ais_hybrid',
      title: 'Engineering',
      description:
        'Engineering applies science and technology to design, build, and innovate real solutions.',
      opportunities: ['Civil ', 'Mechanical ', 'Electrical ', 'Software '],
    },
  ];

  return (
    <section className="relative border w-full h-fit mb-16 xContainer mt-[30rem] lg:mt-20">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#99f6e4,transparent)]"></div>
      </div>
      <main className="w-full h-full ">
        <h1 className=" text-xl lg:text-3xl font-medium">What We Offer</h1>
        <h2 className="mt-1  lg:text-lg font-light text-purple-700">
          Discover the Best Fields for Your Future
        </h2>
        <div
          id="fields"
          className="w-full h-full  flex gap-4 flex-col lg:flex-row  items-center  "
        >
          {field.map((field, index) => {
            return (
              <div
                key={index}
                className="w-full lg:w-[30%] h-[450px] pb-2 flex justify-between p-2 flex-col gap-2 bg-gray-800 rounded-t-xl hover:scale-105 cursor-pointer transition"
              >
                <img src={field.img} alt="Medical" className="rounded-t-xl" />

                <h1 className="font-bold text-white">{field.title}</h1>
                <p className="font-light text-amber-50 tracking-tight">
                  {field.description}
                </p>
                <h1 className="text-purple-300 font-bold">
                  Career Opportunities
                </h1>

                <div className="flex items-center justify-between flex-wrap gap-2">
                  {field.opportunities?.map((opertunity, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-purple-300 px-3  rounded-2xl text-purple-700 py-2 text-[10px]"
                      >
                        {opertunity}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <CardDemo
            opportunities={[
              'Software Developer',
              ' Data Scientist',
              'AI Engineer',
              'Machine Learning',
            ]}
          />
        </div>
      </main>
    </section>
  );
};

export default Fields;
