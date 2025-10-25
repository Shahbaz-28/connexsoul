import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variant';

const GlimpseWork = () => {
  return (
    <section className='pt-20'>
      <div className="conatiner max-w-[1100px] mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className="f-Nohemi-Light-BF6438cc583f70b text-[60px] text-[#FCFCD8] text-center font-semibold leading-[60px] mb-16 mx-auto max-w-[700px]">
          One centralised app, infinite possibilities
        </motion.h2>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-5">
            <div className='p-9 pb-0 bg-[#30303066] rounded-[30px] overflow-hidden'>
              <div className="scale-100 hover:scale-105 duration-300 cursor-pointer">
              <h4 className='f-Nohemi-Light-BF6438cc583f70b text-[22px] leading-[22px] text-[#FCFCD8]'>Projects</h4>
              <p className='f-Nohemi-Light-BF6438cc583f70b text-[16px] leading-[23px] text-[#FCFCD880] pt-4'>Effortlessly organise your design files, Create Folders, invite your team and collaborate with ease.</p>
              <img src="/images/glimps-1.svg" alt="" className='mt-5' />
              </div>
            </div>
          </div>
          <div className="col-span-7">
            <div className='px-10 pb-10 pt-0 bg-[#30303066] rounded-[30px] overflow-hidden'>
            <div className="scale-100 hover:scale-105 duration-300 cursor-pointer">
            <div className='mb-10 flex justify-center gap-4'>
             <img src="/images/glimpse-2.svg" alt="" className='!max-w-[42%]' />
             <img src="/images/glimpse-3.svg" alt="" className='!max-w-[58%]' />
             </div>
              <h4 className='f-Nohemi-Light-BF6438cc583f70b text-[22px] leading-[22px] text-[#FCFCD8]'>Collaborate</h4>
              <p className='f-Nohemi-Light-BF6438cc583f70b text-[15px] leading-[21px] text-[#FCFCD880] pt-5 max-w-[220px]'>Work seamlessly by just adding comments to your files.</p>
            </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 pt-6">
          <div className="col-span-4">
          <div className='p-10 pb-0 bg-[#30303066] rounded-[30px] overflow-hidden'>
            <div className="scale-100 hover:scale-105 duration-300 cursor-pointer">
            <h4 className='f-Nohemi-Light-BF6438cc583f70b text-[22px] leading-[22px] text-[#FCFCD8]'>Brand Kit</h4>
              <p className='f-Nohemi-Light-BF6438cc583f70b text-[16px] leading-[23px] text-[#FCFCD880] pt-4'>Centralised Brand assets for easy accessibility.</p>
              <img src="/images/glimpse-last.svg" alt="" className='mt-5' />
            </div>
            </div>
          </div>
          <div className="col-span-4">
          <div className='pt-3 pb-7 bg-[#30303066] rounded-[30px] overflow-hidden'>
           <div className="scale-100 hover:scale-105 duration-300 cursor-pointer">
           <div className='relative'>
              <img src="/images/ai.1.svg" alt="" className='max-w-[300px] mx-auto' />
              <img src="/images/ai.2.svg" alt="" className='absolute top-[95px]' />
              <img src="/images/ai.3.svg" alt="" className='max-w-[300px] mx-auto' />
            </div>
            <div className='px-8'>
            <h4 className='f-Nohemi-Light-BF6438cc583f70b text-[22px] leading-[22px] text-[#FCFCD8] pt-7'>AI support by your side</h4>
            <p className='f-Nohemi-Light-BF6438cc583f70b text-[14px] leading-[23px] text-[#FCFCD880] pt-3'>Work smarter with AI powered platform.</p>
            </div>
           </div>
            </div>
          </div>
          <div className="col-span-4">
          <div className='p-8 pb-0 pr-0 bg-[#30303066] rounded-[30px] overflow-hidden'>
           <div className="scale-100 hover:scale-105 duration-300 cursor-pointer">
           <h4 className='f-Nohemi-Light-BF6438cc583f70b text-[22px] leading-[22px] text-[#FCFCD8]'>No Limitation</h4>
              <p className='f-Nohemi-Light-BF6438cc583f70b text-[15px] leading-[23px] text-[#FCFCD880] max-w-[300px] pt-4'>Share with your team mates or external teams.</p>
              <img src="/images/glimpse-last.svg" alt="" className='mt-5' />
           </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlimpseWork;