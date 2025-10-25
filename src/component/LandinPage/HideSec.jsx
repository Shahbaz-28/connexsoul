import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa6";


const HideSec = () => {
  const [activeTab, setActiveTab] = useState("creators"); // State to track active tab
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide index
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true); // Show message
    setTimeout(() => setShowMessage(false), 5000); // Hide message after 5 seconds
  };

  const settings = {
    dots: false, // Pagination dots
    infinite: false, // Prevent infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 2, // Visible slides
    slidesToScroll: 2, // Slides to scroll at a time
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex); // Update the current slide index
    },
    nextArrow: (
      <img
        src="/images/R-arrow.svg"
        alt="Next"
        className="cursor-pointer w-6 h-6"
      />
    ),
    prevArrow: (
      <img
        src={`${currentSlide === 0 ? "/images/L-arrow.svg" : "/images/SR-arrow.svg"}`}
        alt="Previous"
        className={`cursor-pointer w-6 h-6 ${currentSlide === 0 ? "opacity-50 pointer-events-none" : ""
          }`}
      />

    ),
  };
  return (
    <>
      <section className="bg-[#0C0C0C] mt-12 rounded-[30px] absolute z-20">
        <div className="container">
          <div className="bg-[#1F1F1FEB] text-white p-7 pb-14 rounded-[30px] mx-auto">
            {/* Main container */}
            <div className="grid grid-cols-11 gap-6">
              {/* Left Panel */}
              <div className="col-span-3 flex flex-col space-y-6 border-r-[1px] border-r-[#343433]">
                <div>
                  <h2 className="f-Nohemi-Medium-BF6438cc581a509 text-[20px] text-[#FCFCD8] leading-[21px]">
                    Our Ecosystem
                  </h2>
                  <div className="flex items-center mt-10 gap-8 border-b-[1px] border-b-[#343433] pb-2 w-[95%] relative">
                    <p
                      className={`f-Nohemi-Light-BF6438cc583f70b text-[12px] leading-[10px] cursor-pointer ${activeTab === "creators" ? "text-[#FCFCD8]" : "text-[#FCFCD880]"}`}
                      onClick={() => setActiveTab("creators")}
                    >
                      For Creators
                    </p>
                    <p
                      className={`f-Nohemi-Light-BF6438cc583f70b text-[12px] leading-[10px] cursor-pointer ${activeTab === "brands" ? "text-[#FCFCD8]" : "text-[#FCFCD880]"}`}
                      onClick={() => setActiveTab("brands")}
                    >
                      For Brands
                    </p>
                  </div>

                  <div
                    className={`grediant-b-c mt-[-1px] absolute transition-all duration-300 ${activeTab === "brands" ? "left-[130px]" : "left-[33px]"}`}
                  ></div>

                </div>

                {/* Shared Content */}
                <div>
                  <div className="flex items-center gap-3 pb-5 pt-2">
                    <span className="bg-[#302F2F] rounded-[15px] p-4">
                      <img src="/images/cohyve-al.svg" alt="" />
                    </span>
                    <div>
                      <h4 className="f-Nohemi-Medium-BF6438cc581a509 flex items-center gap-3 text-[20px] text-[#FCFCD8] leading-[20px]">
                        <span>Cohyve</span>
                        <img src="/images/cohyve-alpha.svg" alt="" />
                      </h4>
                      <p className="f-Nohemi-Light-BF6438cc583f70b text-[10px] mt-[6px] text-[#FCFCD899] leading-[10px] max-w-[170px]">
                        Your all-in-one design management tool
                      </p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-[19px] text-[#FCFCD8] leading-[21px] f-Nohemi-Light-BF6438cc583f70b">
                      More Products Coming Soon
                    </h3>
                    <p className="f-Nohemi-Light-BF6438cc583f70b text-[11px] mt-1 text-[#FCFCD899] leading-[15px] max-w-[200px]">
                      Stay up to date about new launches by joining our newsletter.
                    </p>
                  </div>
                  <div className="pt-8 relative">
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="f-Nohemi-Light-BF6438cc583f70b w-[90%] px-4 pb-4 h-[55px] pt-5 rounded-[25px] bg-[#302F2F] text-[10px] text-[#FFFFFF80] placeholder:text-[13px] placeholder:text-[#FFFFFF80]"
                    />
                    <button
                      onClick={handleClick}
                      className="f-Nohemi-Light-BF6438cc583f70b absolute top-[42px] right-9 bg-[#242323F0] border-[0.5px] border-[#FCFCD814] px-[8px] pb-2 pt-3 rounded-[15px] text-[9px] text-[#FCFCD8]"
                    >
                      Join Our Newsletter
                    </button>
                    {/* Thank You Message */}
                    {showMessage && (
                      <p className="f-Nohemi-Light-BF6438cc583f70b text-[11px] mt-3 text-[#FCFCD899] leading-[16px] max-w-[230px]">
                        Thank you for your interest! You will receive updates about our product launches.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Middle Panel */}
              <div className="col-span-5 space-y-6 pr-4 pl-4">
                <div className="flex items-center justify-between">
                  <h2 className="f-Nohemi-Light-BF6438cc583f70b text-[20px] text-[#FCFCD8] leading-[21px]">
                    Initiatives
                  </h2>
                </div>
                {/* Slider */}
                <Slider {...settings}>
                  {/* Slide 1 */}
                  <div>
                    <div className="relative">
                      <img
                        src="/images/exp.svg"
                        alt="Experience Lab"
                        className="h-[160px]"
                      />
                      <button className="f-Nohemi-Light-BF6438cc583f70b absolute top-[6px] right-[6px] px-[5px] pb-[1px] pt-[4px] text-[10px] text-[#FCFCD8] bg-[#2E2E2E] rounded-[5px]">
                        Masterclass
                      </button>
                    </div>
                    <p className="f-Nohemi-Light-BF6438cc583f70b text-[19px] text-[#FCFCD8] leading-[22px] pt-5">
                      A Nex-gen experience lab for design students
                    </p>
                    <button className="f-Nohemi-Light-BF6438cc583f70b mt-7 text-[14px] text-[#FCFCD899] leading-[16px]">
                      Know More
                    </button>
                  </div>
                  {/* Slide 2 */}
                  <div className="pl-3">
                    <div className="bg-[#1B1B1B] h-[160px] rounded-bl-[10px] rounded-tl-[10px] border-[1px] border-[#FCFCD808]"></div>
                    <p className="f-Nohemi-Light-BF6438cc583f70b text-[19px] text-[#FCFCD8] leading-[22px] pt-5">
                      A Nex-gen experience lab for designers
                    </p>
                    <button className="f-Nohemi-Light-BF6438cc583f70b mt-7 text-[14px] text-[#FCFCD899] leading-[16px]">
                      Know More
                    </button>
                  </div>
                  {/* Additional Slides */}
                  <div>
                    <div className="relative">
                      <img
                        src="/images/exp.svg"
                        alt="Experience Lab"
                        className="h-[160px]"
                      />
                      <button className="f-Nohemi-Light-BF6438cc583f70b absolute top-[6px] right-[6px] px-[5px] pb-[1px] pt-[4px] text-[10px] text-[#FCFCD8] bg-[#2E2E2E] rounded-[5px]">
                        Masterclass
                      </button>
                    </div>
                    <p className="f-Nohemi-Light-BF6438cc583f70b text-[19px] text-[#FCFCD8] leading-[22px] pt-5">
                      A Nex-gen experience lab for design students
                    </p>
                    <button className="f-Nohemi-Light-BF6438cc583f70b mt-7 text-[14px] text-[#FCFCD899] leading-[16px]">
                      Know More
                    </button>
                  </div>
                  <div className="pl-4">
                    <div className="bg-[#1B1B1B] h-[160px] rounded-bl-[10px] rounded-tl-[10px] border-[1px] border-[#FCFCD808]"></div>
                    <p className="f-Nohemi-Light-BF6438cc583f70b text-[19px] text-[#FCFCD8] leading-[22px] pt-5">
                      A Nex-gen experience lab for designers
                    </p>
                    <button className="f-Nohemi-Light-BF6438cc583f70b mt-7 text-[14px] text-[#FCFCD899] leading-[16px]">
                      Know More
                    </button>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src="/images/exp.svg"
                        alt="Experience Lab"
                        className="h-[160px]"
                      />
                      <button className="f-Nohemi-Light-BF6438cc583f70b absolute top-[6px] right-[6px] px-[5px] pb-[1px] pt-[4px] text-[10px] text-[#FCFCD8] bg-[#2E2E2E] rounded-[5px]">
                        Masterclass
                      </button>
                    </div>
                    <p className="f-Nohemi-Light-BF6438cc583f70b text-[19px] text-[#FCFCD8] leading-[22px] pt-5">
                      A Nex-gen experience lab for design students
                    </p>
                    <button className="f-Nohemi-Light-BF6438cc583f70b mt-7 text-[14px] text-[#FCFCD899] leading-[16px]">
                      Know More
                    </button>
                  </div>
                  <div className="pl-4">
                    <div className="bg-[#1B1B1B] h-[160px] rounded-bl-[10px] rounded-tl-[10px] border-[1px] border-[#FCFCD808]"></div>
                    <p className="f-Nohemi-Light-BF6438cc583f70b text-[19px] text-[#FCFCD8] leading-[22px] pt-5">
                      A Nex-gen experience lab for designers
                    </p>
                    <button className="f-Nohemi-Light-BF6438cc583f70b mt-7 text-[14px] text-[#FCFCD899] leading-[16px]">
                      Know More
                    </button>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src="/images/exp.svg"
                        alt="Experience Lab"
                        className="h-[160px]"
                      />
                      <button className="f-Nohemi-Light-BF6438cc583f70b absolute top-[6px] right-[6px] px-[5px] pb-[1px] pt-[4px] text-[10px] text-[#FCFCD8] bg-[#2E2E2E] rounded-[5px]">
                        Masterclass
                      </button>
                    </div>
                    <p className="f-Nohemi-Light-BF6438cc583f70b text-[19px] text-[#FCFCD8] leading-[22px] pt-5">
                      A Nex-gen experience lab for design students
                    </p>
                    <button className="f-Nohemi-Light-BF6438cc583f70b mt-7 text-[14px] text-[#FCFCD899] leading-[16px]">
                      Know More
                    </button>
                  </div>
                  <div className="pl-4">
                    <div className="bg-[#1B1B1B] h-[160px] rounded-bl-[10px] rounded-tl-[10px] border-[1px] border-[#FCFCD808]"></div>
                    <p className="f-Nohemi-Light-BF6438cc583f70b text-[19px] text-[#FCFCD8] leading-[22px] pt-5">
                      A Nex-gen experience lab for designers
                    </p>
                    <button className="f-Nohemi-Light-BF6438cc583f70b mt-7 text-[14px] text-[#FCFCD899] leading-[16px]">
                      Know More
                    </button>
                  </div>
                </Slider>
              </div>
              {/* Right Panel */}
              <div className="col-span-3 space-y-6 border-l-[1px] border-l-[#343433] pl-6">
                <h2 className="f-Nohemi-Light-BF6438cc583f70b text-[20px] text-[#FCFCD8] leading-[21px]">Updates</h2>
                <div className="bg-[#1B1B1B] p-4 pb-5 rounded-[20px] max-h-[310px] overflow-y-scroll scrollbar-hide">
                  <div className="p-[10px] rounded-[10px] bg-[#1E1E1E]">
                    <div className="flex items-center gap-4">
                      <button className="f-Nohemi-Light-BF6438cc583f70b px-3 pb-1 pt-2 text-[12px] text-[#FCFCD8] bg-[#2E2E2E] rounded-[10px]">Update</button>
                      <p className="f-Nohemi-Light-BF6438cc583f70b text-[14px] text-[#FCFCD880] leading-[17px]">1 Dec 2024</p>
                    </div>
                    <div className="flex items-center gap-4 mt-5">
                      <div className="p-4 pb-0 bg-[#383838] rounded-[12px]">
                        <img src="/images/cohyve-ubdate-1.svg" alt="" className="w-[90px]" />
                      </div>
                      <p className="f-Nohemi-Light-BF6438cc583f70b text-[13px] text-[#FCFCD8] leading-[14.50px]">Now Accept payments through our integrated wallet system.</p>
                    </div>
                  </div>
                  <div className="p-[10px] rounded-[10px] bg-[#1E1E1E] mt-4">
                    <div className="flex items-center gap-4">
                      <button className="f-Nohemi-Light-BF6438cc583f70b px-3 pb-1 pt-2 text-[12px] text-[#FCFCD8] bg-[#2E2E2E] rounded-[10px]">Update</button>
                      <p className="f-Nohemi-Light-BF6438cc583f70b text-[14px] text-[#FCFCD880] leading-[17px]">1 Dec 2024</p>
                    </div>
                    <div className="flex items-center gap-4 mt-5">
                      <div className="p-1 bg-[#383838] rounded-[12px] flex items-center">
                        <img src="/images/cohyve-ubdate-2.svg" alt="" className="w-[130px]" />
                      </div>
                      <p className="f-Nohemi-Light-BF6438cc583f70b text-[13px] text-[#FCFCD8] leading-[14.50px]">Introducing RUMI
                        your smartest AI manager.</p>
                    </div>
                  </div>
                  <div className="p-[10px] rounded-[10px] bg-[#1E1E1E] mt-4">
                    <div className="flex items-center gap-4">
                      <button className="f-Nohemi-Light-BF6438cc583f70b px-3 pb-1 pt-2 text-[12px] text-[#FCFCD8] bg-[#2E2E2E] rounded-[10px]">Update</button>
                      <p className="f-Nohemi-Light-BF6438cc583f70b text-[14px] text-[#FCFCD880] leading-[17px]">1 Dec 2024</p>
                    </div>
                    <div className="flex items-center gap-4 mt-5">
                      <div className="p-4 pb-0 bg-[#383838] rounded-[12px]">
                        <img src="/images/cohyve-ubdate-1.svg" alt="" className="w-[90px]" />
                      </div>
                      <p className="f-Nohemi-Light-BF6438cc583f70b text-[13px] text-[#FCFCD8] leading-[14.50px]">Now Accept payments through our integrated wallet system.</p>
                    </div>
                  </div>
                  <div className="p-[10px] rounded-[10px] bg-[#1E1E1E] mt-4">
                    <div className="flex items-center gap-4">
                      <button className="f-Nohemi-Light-BF6438cc583f70b px-3 pb-1 pt-2 text-[12px] text-[#FCFCD8] bg-[#2E2E2E] rounded-[10px]">Update</button>
                      <p className="f-Nohemi-Light-BF6438cc583f70b text-[14px] text-[#FCFCD880] leading-[17px]">1 Dec 2024</p>
                    </div>
                    <div className="flex items-center gap-4 mt-5">
                      <div className="p-4 pb-0 bg-[#383838] rounded-[12px]">
                        <img src="/images/cohyve-ubdate-1.svg" alt="" className="w-[90px]" />
                      </div>
                      <p className="f-Nohemi-Light-BF6438cc583f70b text-[13px] text-[#FCFCD8] leading-[14.50px]">Now Accept payments through our integrated wallet system.</p>
                    </div>
                  </div>
                  {/* <button className="f-Nohemi-Light-BF6438cc583f70b mt-2 ml-4 text-[14px] text-[#FCFCD880] leading-16px">View All</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HideSec;