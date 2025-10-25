import React from 'react';
import { useTheme } from "next-themes";
import { MagicCard } from "../ui/magic-card";
import {motion} from 'framer-motion';
import {fadeIn} from '../../variant'; 

const CxFounder = () => {
  const { theme } = useTheme();
  const perks = [
    {
      imgSrc: '/images/cohyve-card-1.svg',
      title: 'Early access & product feedback',
      description: 'Be the first to experience new features and shape the future of our platform with your valuable insights.',
    },
    {
      imgSrc: '/images/cohyve-card-2.svg',
      title: 'Lifetime CxFounder Badge on Profile',
      description: 'Stand out with an exclusive badge that recognizes you as one of our founding members forever.',
    },
    {
      imgSrc: '/images/cohyve-card-3.svg',
      title: 'Lifetime share in monetization revenue',
      description: 'Earn passive income as a founding member with a permanent stake in our platform\'s success.',
    },
    {
      imgSrc: '/images/cohyve-card-4.svg',
      title: 'Lifetime rewards and earning opportunities',
      description: 'Unlock exclusive benefits and continuous earning potential reserved only for CxFounders.',
    },
  ];

  return (
    <section className="bg-col">
      <div className="container max-w-[1100px] px-4">
        <div className="flex flex-col items-center justify-center pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-12">
          <motion.h2 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.9}}
          className="f-Nohemi-Light-BF6438cc583f70b text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] text-[#FCFCD8] text-center leading-tight mb-4 sm:mb-6 md:mb-8 max-w-[900px] px-4">
            Be Among the First Get Recognized as CxFounder
          </motion.h2>
          <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.9}}
          className="f-Nohemi-Light-BF6438cc583f70b text-[14px] sm:text-[16px] md:text-[18px] text-[#FCFCD880] text-center leading-relaxed mb-8 sm:mb-12 md:mb-16 max-w-[700px] px-4">
            CxFounder perks:
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 w-full">
            {perks.map((perk, index) => (
              <div key={index}>
                <MagicCard
                className='bg-[#30303066] bg-opacity-50 backdrop-blur-xl text-center px-4 sm:px-6 pt-6 sm:pt-8 pb-8 sm:pb-10 rounded-[20px] sm:rounded-[30px] border-0 cursor-pointer'
                  gradientColor={theme === "dark" ? "#7d22ff" : "#7d22ff4d"}
                >
                  <img src={perk.imgSrc} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 md:mb-7" />
                  <h3 className="f-Nohemi-Light-BF6438cc583f70b text-[#FCFCD8] text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] leading-tight font-normal text-center mb-3 sm:mb-4 md:mb-5 max-w-[280px] mx-auto">{perk.title}</h3>
                  <p className="f-Nohemi-Light-BF6438cc583f70b text-[#FCFCD880] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed font-normal text-center">{perk.description}</p>
                </MagicCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CxFounder;

