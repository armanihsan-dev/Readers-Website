import React from 'react';

const Footer = () => {
  return (
    <section className="w-full h-[30vh] mt-36 lg:mt-0 xContainer ">
      <div className="relative h-full w-full bg-white flex items-center justify-between flex-col lg:flex-row">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className=" w-fit">
          <h1 className="font-light text-pink-400 text-sm lg:text-lg">
            The Readers School & Group Of colleges Swabi , KPK ,{' '}
            <span className="font-bold text-black">Pakistan</span>
          </h1>
          <div className="flex gap-5 mt-1">
            <span>+92 0000000000</span>
            <span>+92 0000000000</span>
          </div>
        </div>
        <div className="flex gap-7 items-center ">
          <i className="fa-brands fa-whatsapp  text-[24px]   "></i>
          <i className="fa-brands fa-facebook  text-[21px]   "></i>
          <i className="fa-brands fa-tiktok"></i>
        </div>
      </div>
    </section>
  );
};

export default Footer;
