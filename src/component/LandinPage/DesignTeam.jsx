// BriefingComponent.js
import React, { useState } from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../../variant'; 

const DesignTeam = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const toggleVisibility = (step) => {
    setActiveStep(step);
    setIsVisible(step === 1);
    setIsVisible2(step === 2);
    setIsVisible3(step === 3);
  };

  const card = [
    {
      id: 1,
      img: "/images/cohyve-card1.svg",
      description: "Work with top 1% designer around the globe"
    },
    {
      id: 2,
      img: "/images/cohyve-card2.svg",
      description: "Ultra-fast project turnaround time"
    },
    {
      id: 3,
      img: "/images/cohyve-card3.svg",
      description: "No fuss, everything curated on your budget"
    },
  ];

  return (
    <>
      <section className='bg-[#0C0C0C] pt-24'>
        <motion.h2 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.9}}
        className="f-Nohemi-Light-BF6438cc583f70b text-[50px] text-[#FCFCD8] text-center font-medium leading-[50px] pb-20 mx-auto max-w-[600px]">
          Cohyve is your extended design team at
          automation
        </motion.h2>
        <div className="container max-w-[1100px] border-[1px] border-[#FCFCD81A] rounded-[30px] bg-colo">
          <div className="flex">
            {/* Sidebar */}
            <div className="w-[350px] p-[15px] flex flex-col space-y-6 rounded-tl-[20px] rounded-bl-[20px] border-r-[1px] border-r-[#FCFCD81A]">
              <div className="space-y-4">
                {/* First Button */}
                <div onClick={() => toggleVisibility(1)}>
                  <button
                    className={`px-4 rounded-[15px] border-[1px] border-[#FFFFFF1A] w-full ${activeStep === 1 ? 'bg-grediant-btn py-7' : 'bg-[#30303021] py-4'
                      }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img src="/images/badge-one.svg" alt="" />
                        <span className="f-Nohemi-Light-BF6438cc583f70b text-[20px] text-[#FCFCD8] leading-[25px] font-normal ml-3">
                          Briefing
                        </span>
                      </div>
                      <div>
                        <img src="/images/close-btn.svg" alt="" />
                      </div>
                    </div>
                    {isVisible && (
                      <div>
                        <h4 className="f-Nohemi-Light-BF6438cc583f70b text-[19px] text-start text-[#FCFCD8] leading-[18px] py-8">
                          Tell us which designs you need
                        </h4>
                        <p className="f-Nohemi-Light-BF6438cc583f70b text-[18px] text-[#FCFCD880] leading-[28px] pb-16 text-start">
                          Multiple departments & people need designs, but not all tasks cans be implemented in a timely manner.
                        </p>
                      </div>
                    )}
                  </button>
                </div>

                {/* Second Button */}
                <div onClick={() => toggleVisibility(2)}>
                  <button
                    className={`px-4 rounded-[15px] border-[1px] border-[#FFFFFF1A] w-full ${activeStep === 2 ? 'bg-grediant-btn py-7' : 'bg-[#30303021] py-4'
                      }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img src="/images/badge-two.svg" alt="" />
                        <span className="f-Nohemi-Light-BF6438cc583f70b text-[20px] text-[#FCFCD8] leading-[25px] font-normal ml-3">
                          Draft & Feedback
                        </span>
                      </div>
                      <div>
                        <img src="/images/close-btn.svg" alt="" />
                      </div>
                    </div>
                    {isVisible2 && (
                      <div>
                        <h4 className="f-Nohemi-Light-BF6438cc583f70b text-[19px] text-start text-[#FCFCD8] leading-[18px] py-8">
                          Tell us which designs you need
                        </h4>
                        <p className="f-Nohemi-Light-BF6438cc583f70b text-[18px] text-[#FCFCD880] leading-[28px] pb-16 text-start">
                          Multiple departments & people need designs, but not all tasks can be implemented in a timely manner.
                        </p>
                      </div>
                    )}
                  </button>
                </div>

                {/* Third Button */}
                <div onClick={() => toggleVisibility(3)}>
                  <button
                    className={`px-4 rounded-[15px] border-[1px] border-[#FFFFFF1A] w-full ${activeStep === 3 ? 'bg-grediant-btn py-7' : 'bg-[#30303021] py-4'
                      }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img src="/images/badge-three.svg" alt="" />
                        <span className="f-Nohemi-Light-BF6438cc583f70b text-[20px] text-[#FCFCD8] leading-[25px] font-normal ml-3">
                          Download
                        </span>
                      </div>
                      <div>
                        <img src="/images/close-btn.svg" alt="" />
                      </div>
                    </div>
                    {isVisible3 && (
                      <div>
                        <h4 className="f-Nohemi-Light-BF6438cc583f70b text-[19px] text-start text-[#FCFCD8] leading-[18px] py-8">
                          Tell us which designs you need
                        </h4>
                        <p className="f-Nohemi-Light-BF6438cc583f70b text-[18px] text-[#FCFCD880] leading-[28px] pb-16 text-start">
                          Multiple departments & people need designs, but not all tasks can be implemented in a timely manner.
                        </p>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-8 pb-0 pr-0">
              <div className="grid grid-cols-1 gap-4">
                {activeStep === 1 && (
                  <img src="/images/second-dashboard.svg" alt="" className='rounded-br-[30px]' />
                )}
                {activeStep === 2 && (
                  <div className="p-6 rounded-lg">
                    <h2 className="text-[40px] text-[#fff] font-bold">Hello World</h2>
                  </div>
                )}
                {activeStep === 3 && (
                  <div className="p-6 rounded-lg">
                    <h2 className="text-[40px] text-[#fff] font-bold">Hello World</h2>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
       <div className="container max-w-[1100px] pt-6">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {card.map((card, index) => (
              <div key={card.id} className="p-6 rounded-[30px] text-center bg-[#30303066]">
                <img
                  src={card.img}
                  alt="User Avatar"
                  className={`!w-[300px] mx-auto mb-4 ${index === 0 ? "max-h-[200px]" : ""}`}
                />
                <p className={`f-Nohemi-Light-BF6438cc583f70b text-[#FCFCD8] text-[19px] leading-[32px] max-w-[240px] text-center mx-auto ${index === 1 ? "pt-12" : ""}`}>{card.description}</p>
              </div>
            ))}
          </div>
       </div>
      </section>
    </>
  );
};

export default DesignTeam;
