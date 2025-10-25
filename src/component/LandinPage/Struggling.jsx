import React from 'react';
import { useTheme } from "next-themes";
import { MagicCard } from "../ui/magic-card";
import {motion} from 'framer-motion';
import {fadeIn} from '../../variant'; 

const Struggling = () => {
  const { theme } = useTheme();
  const challenges = [
    {
      imgSrc: '/images/cohyve-card-1.svg',
      title: 'Lack of design capacity',
      description: 'Multiple departments & people need designs, but not all tasks can be implemented in a timely manner.',
    },
    {
      imgSrc: '/images/cohyve-card-2.svg',
      title: 'Scaling design is difficult',
      description: 'No matter if freelancer, agency or in-house designer. It often takes months until the right resources are available.',
    },
    {
      imgSrc: '/images/cohyve-card-3.svg',
      title: 'Expensive & hard to plan',
      description: 'Projects with agencies & freelancers are supposed to offer relief, but often end in a cost and time chaos.',
    },
    {
      imgSrc: '/images/cohyve-card-4.svg',
      title: 'Slow Communication',
      description: 'Multiple departments & people need designs, but not all tasks can be implemented in a timely manner.',
    },
    {
      imgSrc: '/images/cohyve-card-5.svg',
      title: 'Fixed & Flexible contracts',
      description: 'No matter if freelancer, agency or in-house designer. It often takes months until the right resources are available.',
    },
    {
      imgSrc: '/images/cohyve-card-3.svg',
      title: 'Top talent is hard to find',
      description: 'Projects with agencies & freelancers are supposed to offer relief, but often end in a cost and time chaos.',
    },
  ];

  return (
    <section className="bg-col">
      <div className="container max-w-[1100px]">
        <div className="flex flex-col items-center justify-center pt-24">
          <motion.h2 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.9}}
          className="f-Nohemi-Light-BF6438cc583f70b text-[60px] text-[#FCFCD8] text-center leading-[60px] mb-20 max-w-[800px]">
            Is your company struggling with design?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {challenges.map((challenge, index) => (
              <div key={index}>
                <MagicCard
                className='bg-[#30303066] bg-opacity-50 backdrop-blur-xl text-center px-6 pt-8 pb-10 rounded-[30px] border-0 cursor-pointer'
                  gradientColor={theme === "dark" ? "#7d22ff" : "#7d22ff4d"}
                >
                  <img src={challenge.imgSrc} className="w-16 h-16 mx-auto mb-7" />
                  <h3 className="f-Nohemi-Light-BF6438cc583f70b text-[#FCFCD8] text-[33px] leading-[34px] font-normal text-center mb-5 max-w-[280px] mx-auto">{challenge.title}</h3>
                  <p className="f-Nohemi-Light-BF6438cc583f70b text-[#FCFCD880] text-[16px] leading-[25px] font-normal text-center">{challenge.description}</p>
                </MagicCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Struggling;
