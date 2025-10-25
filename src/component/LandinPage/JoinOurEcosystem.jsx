import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variant';


const JoinOurEcosystem = () => {
  // Separate state for each accordion item
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  return (
    <>
        <section className='pt-24 pb-8'>
    <div className="container">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="f-Nohemi-Light-BF6438cc583f70b text-[50px] text-[#FCFCD8] text-center font-normal leading-[50px] pb-16 mx-auto max-w-[600px]">
            Frequently Asked Questions.
          </motion.h2>
          <div
            id="accordion-collapse"
            data-accordion="collapse"
          >
            {/* Accordion Dropdown 1 */}
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className={`mt-3 bg-[#1B1B1B] flex items-center justify-between w-full border-b-[1px] border-solid border-[#0000000F] accordian-bt ${isOpen1
                  ? 'rounded-tl-[20px] rounded-tr-[20px]'
                  : 'rounded-[20px]'
                  }`}
                onClick={() => setIsOpen1(!isOpen1)}
                aria-expanded={isOpen1}
                aria-controls="accordion-collapse-body-1"
              >
                <span className="f-Nohemi-Light-BF6438cc583f70b text-[18px] sm:text-[23px] leading-[33px] sm:leading-[30px] font-normal text-[#FCFCD8] px-6 pb-4 pt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
                <img
                  src={isOpen1 ? '/images/cohyve-top-arrow.svg' : '/images/bottom-arrow.svg'}
                  className="mr-5 mt-1"
                  alt=""
                />
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className={`bg-[#1B1B1B] rounded-bl-[20px] rounded-br-[20px] transition-all duration-500 ease-in-out ${isOpen1 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="p-5 pl-0">
                <p className="f-Nohemi-Light-BF6438cc583f70b mb-2 text-[#FCFCD880] text-[16px] leading-[23px] font-normal px-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>

            {/* Accordion Dropdown 2 */}
            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                className={`mt-3 bg-[#1B1B1B] flex items-center justify-between w-full border-b-[1px] border-solid border-[#0000000F] accordian-bt ${isOpen2
                  ? 'rounded-tl-[20px] rounded-tr-[20px]'
                  : 'rounded-[20px]'
                  }`}
                onClick={() => setIsOpen2(!isOpen2)}
                aria-expanded={isOpen2}
                aria-controls="accordion-collapse-body-2"
              >
                <span className="f-Nohemi-Light-BF6438cc583f70b text-[18px] sm:text-[23px] leading-[33px] sm:leading-[30px] font-normal text-[#FCFCD8] px-6 pb-4 pt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
                <img
                  src={isOpen2 ? '/images/cohyve-top-arrow.svg' : '/images/bottom-arrow.svg'}
                  className="mr-5 mt-1"
                  alt=""
                />
              </button>
            </h2>
            <div
              id="accordion-collapse-body-2"
              className={`bg-[#1B1B1B] rounded-bl-[20px] rounded-br-[20px] transition-all duration-500 ease-in-out ${isOpen2 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              aria-labelledby="accordion-collapse-heading-2"
            >
              <div className="p-5 pl-0">
                <p className="f-Nohemi-Light-BF6438cc583f70b mb-2 text-[#FCFCD880] text-[16px] leading-[23px] font-normal px-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>

            {/* Accordion Dropdown 3 */}
            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                className={`mt-3 bg-[#1B1B1B] flex items-center justify-between w-full border-b-[1px] border-solid border-[#0000000F] accordian-bt ${isOpen3
                  ? 'rounded-tl-[20px] rounded-tr-[20px]'
                  : 'rounded-[20px]'
                  }`}
                onClick={() => setIsOpen3(!isOpen3)}
                aria-expanded={isOpen3}
                aria-controls="accordion-collapse-body-3"
              >
                <span className="f-Nohemi-Light-BF6438cc583f70b text-[18px] sm:text-[23px] leading-[33px] sm:leading-[30px] font-normal text-[#FCFCD8] px-6 pb-4 pt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
                <img
                  src={isOpen3 ? '/images/cohyve-top-arrow.svg' : '/images/bottom-arrow.svg'}
                  className="mr-5 mt-1"
                  alt=""
                />
              </button>
            </h2>
            <div
              id="accordion-collapse-body-3"
              className={`bg-[#1B1B1B] rounded-bl-[20px] rounded-br-[20px] transition-all duration-500 ease-in-out ${isOpen3 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              aria-labelledby="accordion-collapse-heading-3"
            >
              <div className="p-5 pl-0">
                <p className="f-Nohemi-Light-BF6438cc583f70b mb-2 text-[#FCFCD880] text-[16px] leading-[23px] font-normal px-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            {/* Accordion Dropdown 4 */}
            <h2 id="accordion-collapse-heading-4">
              <button
                type="button"
                className={`mt-3 bg-[#1B1B1B] flex items-center justify-between w-full border-b-[1px] border-solid border-[#0000000F] accordian-bt ${isOpen4
                  ? 'rounded-tl-[20px] rounded-tr-[20px]'
                  : 'rounded-[20px]'
                  }`}
                onClick={() => setIsOpen4(!isOpen4)}
                aria-expanded={isOpen4}
                aria-controls="accordion-collapse-body-4"
              >
                <span className="f-Nohemi-Light-BF6438cc583f70b text-[18px] sm:text-[23px] leading-[33px] sm:leading-[30px] font-normal text-[#FCFCD8] px-6 pb-4 pt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
                <img
                  src={isOpen4 ? '/images/cohyve-top-arrow.svg' : '/images/bottom-arrow.svg'}
                  className="mr-5 mt-1"
                  alt=""
                />
              </button>
            </h2>
            <div
              id="accordion-collapse-body-4"
              className={`bg-[#1B1B1B] rounded-bl-[20px] rounded-br-[20px] transition-all duration-500 ease-in-out ${isOpen4 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              aria-labelledby="accordion-collapse-heading-4"
            >
              <div className="p-5 pl-0">
                <p className="f-Nohemi-Light-BF6438cc583f70b mb-2 text-[#FCFCD880] text-[16px] leading-[23px] font-normal px-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            {/* Accordion Dropdown 5 */}
            <h2 id="accordion-collapse-heading-5">
              <button
                type="button"
                className={`mt-3 bg-[#1B1B1B] flex items-center justify-between w-full border-b-[1px] border-solid border-[#0000000F] accordian-bt ${isOpen5
                  ? 'rounded-tl-[20px] rounded-tr-[20px]'
                  : 'rounded-[20px]'
                  }`}
                onClick={() => setIsOpen5(!isOpen5)}
                aria-expanded={isOpen5}
                aria-controls="accordion-collapse-body-5"
              >
                <span className="f-Nohemi-Light-BF6438cc583f70b text-[18px] sm:text-[23px] leading-[33px] sm:leading-[30px] font-normal text-[#FCFCD8] px-6 pb-4 pt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
                <img
                  src={isOpen5 ? '/images/cohyve-top-arrow.svg' : '/images/bottom-arrow.svg'}
                  className="mr-5 mt-1"
                  alt=""
                />
              </button>
            </h2>
            <div
              id="accordion-collapse-body-5"
              className={`bg-[#1B1B1B] rounded-bl-[20px] rounded-br-[20px] transition-all duration-500 ease-in-out ${isOpen5 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              aria-labelledby="accordion-collapse-heading-5"
            >
              <div className="p-5 pl-0">
                <p className="f-Nohemi-Light-BF6438cc583f70b mb-2 text-[#FCFCD880] text-[16px] leading-[23px] font-normal px-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>     
    </section>
    </>
  )
}

export default JoinOurEcosystem
