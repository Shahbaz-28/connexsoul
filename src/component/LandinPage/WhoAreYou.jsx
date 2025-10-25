import React from 'react';
import { useTheme } from "next-themes";
import { MagicCard } from "../ui/magic-card";
import {motion} from 'framer-motion';
import {fadeIn} from '../../variant'; 

const WhoAreYou = () => {
  const { theme } = useTheme();
  const personas = [
    {
      imgSrc: '/images/cohyve-card-1.svg',
      title: 'For the Social Innovator',
      description: 'Launch your vision, find collaborators, and scale your impact-driven venture with the right resources and community support.',
    },
    {
      imgSrc: '/images/cohyve-card-2.svg',
      title: 'For the Creative Soul',
      description: 'Showcase your art, collaborate on meaningful projects, and connect with an audience that values creativity and social change.',
    },
    {
      imgSrc: '/images/cohyve-card-3.svg',
      title: 'For the Changemaker',
      description: 'Amplify your voice, partner with impactful brands, and inspire your followers to take action on causes that matter',
    },
    {
      imgSrc: '/images/cohyve-card-4.svg',
      title: 'For the Community Builder',
      description: 'Grow your community, organize events, and foster a space for connection and collaboration among like-minded individuals.',
    },
  ];

  return (
    <section className="bg-col">
      <div className="container max-w-[1100px] px-4">
        <div className="flex flex-col items-center justify-center pt-2 sm:pt-12 md:pt-2 pb-8 md:pb-10">
          <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{once: true}}
          className="f-Nohemi-Light-BF6438cc583f70b text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] text-[#FCFCD8] text-center leading-tight mb-3 md:mb-4 px-4">
            Who Are You?
          </motion.h2>
          <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{once: true}}
          className="f-Nohemi-Light-BF6438cc583f70b text-[15px] sm:text-[16px] md:text-[17px] text-[#FCFCD880] text-center leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-[800px] px-4">
            Are you a founder, a creator, an influencer, or a community leader? Find your place in our ecosystem.
          </motion.p>
         <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-4 w-full">
  {personas.map((persona, index) => (
    <motion.div 
      key={index}
      variants={fadeIn("up", 0.2 + index * 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
    >
      <MagicCard
        className='flex flex-col items-center justify-center text-center bg-[#30303066] bg-opacity-50 backdrop-blur-xl px-6 sm:px-7 md:px-8 pt-6 sm:pt-7 md:pt-8 pb-8 sm:pb-9 md:pb-10 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] border-0 cursor-pointer hover:bg-[#30303099] transition-all duration-300'
        gradientColor={theme === "dark" ? "#7d22ff" : "#7d22ff4d"}
      >
        <img 
          src={persona.imgSrc} 
          alt={persona.title}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-5 sm:mb-6 md:mb-7 mx-auto"
        />
        <h3 className="f-Nohemi-Light-BF6438cc583f70b text-[#FCFCD8] text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] leading-tight font-normal mb-3 sm:mb-4">
          {persona.title}
        </h3>
        <p className="f-Nohemi-Light-BF6438cc583f70b text-[#FCFCD880] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed font-normal">
          {persona.description}
        </p>
      </MagicCard>
    </motion.div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

export default WhoAreYou;

