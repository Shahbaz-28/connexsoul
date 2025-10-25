import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CreativeServiceSlider = () => {
  const sliderRef = useRef(null); // Reference for slider instance

  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    cursor.innerHTML = `
      <img src="/images/cohyve-left-arrow.svg" alt="Left Arrow" />
      <h5>Drag</h5>
      <img src="/images/cohyve-right-arrow.svg" alt="Right Arrow" />
    `;
    document.body.appendChild(cursor);

    const handleMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseEnter = () => {
      cursor.style.display = 'flex';
    };

    const handleMouseLeave = () => {
      cursor.style.display = 'none';
    };

    const slider = document.querySelector('.cursor-hide');
    slider.addEventListener('mousemove', handleMouseMove);
    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      slider.removeEventListener('mousemove', handleMouseMove);
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeChild(cursor);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "25%",
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "15%",
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "10%",
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleSliderClick = (e) => {
    const sliderWidth = e.currentTarget.offsetWidth;
    const clickPosition = e.clientX; // Mouse X-coordinate
    const halfWidth = sliderWidth / 2;

    if (clickPosition < halfWidth) {
      // Click on the left half
      sliderRef.current.slickPrev();
    } else {
      // Click on the right half
      sliderRef.current.slickNext();
    }
  };

  const FirstCardBtn = [
    {
      title: 'Illustrations',
    },
    {
      title: 'Web Graphics',
    },
    {
      title: 'Icons',
    },
    {
      title: 'Marketing material',
    },
    {
      title: 'Infographics',
    },
  ];

  const SecondCardBtn = [
    {
      title: 'Ad design',
    },
    {
      title: 'Display ads',
    },
    {
      title: 'Native ads',
    },
    {
      title: 'Social media ads',
    },
    {
      title: 'Animated ads',
    },
  ];

  const ThirdCardBtn = [
    {
      title: 'Motion graphics',
    },
    {
      title: 'Digital ads',
    },
    {
      title: 'Explainer videos',
    },
    {
      title: 'Logo animation',
    },
    {
      title: 'Presentations',
    },
  ];

  return (
    <section className="pt-20 cursor-hide">
      <div
        className="flex items-center w-full"
        onClick={handleSliderClick} // Handle click events
      >
        <div className="w-full max-h-[300px]">
          <Slider {...settings} ref={sliderRef}>
            {/* Illustration Design Panel */}
            <div className='h-[325px]'>
            <div className="max-h-[300px] bg-[#1E1E1E80] rounded-[30px] p-6 relative z-20">
              <div className="grid grid-cols-2 gap-2 max-h-[300px]">
                <div className="p-6 pr-0 col-span-1">
                  <h2 className="f-Nohemi-Light-BF6438cc583f70b text-[30px] text-[#FCFCD8] leading-[30px] max-w-[150px]">
                    Illustration Design
                  </h2>
                  <p className="f-Nohemi-Light-BF6438cc583f70b text-[14px] text-[#FCFCD880] leading-[16px] pt-5">
                    On-brand illustrations for your business or marketing efforts
                    that act as an extension of your company.
                  </p>
                  <div className="flex flex-wrap gap-[7px] mt-5">
                    {FirstCardBtn.map((FirstCardBtn, index) => (
                      <div key={index}>
                        <button className="f-Nohemi-Light-BF6438cc583f70b flex items-center bg-[#30303066] rounded-[14px] px-[10px] pt-2 pb-1 text-[#FCFCD8] text-[12px]">
                          {FirstCardBtn.title}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='col-span-1'>
                  <img src="/images/slider-card-1.svg" alt="" className='mx-auto first-img' />
                </div>
              </div>
            </div>
            </div>
            {/* Card Panel */}
            <div>
            <div className="max-h-[300px] bg-[#1E1E1E80] rounded-[30px] p-6 relative z-20">
              <div className="grid grid-cols-2 gap-2">
                <div className="p-6 pr-0 col-span-1">
                  <h2 className="f-Nohemi-Light-BF6438cc583f70b text-[30px] text-[#FCFCD8] leading-[30px] max-w-[150px]">
                  Ad design & creative
                  </h2>
                  <p className="f-Nohemi-Light-BF6438cc583f70b text-[14px] text-[#FCFCD880] leading-[16px] pt-5">
                  Static and motion ad creative, concepts and variation for testing your way for better results.
                  </p>
                  <div className="flex flex-wrap gap-[7px] mt-5">
                    {FirstCardBtn.map((FirstCardBtn, index) => (
                      <div key={index}>
                        <button className="f-Nohemi-Light-BF6438cc583f70b flex items-center bg-[#30303066] rounded-[14px] px-[10px] pt-2 pb-1 text-[#FCFCD8] text-[12px]">
                          {FirstCardBtn.title}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='col-span-1'>
                  <img src="/images/slider-card-2.svg" alt="" className='mx-auto max-w-[240px] second-img' />
                </div>
              </div>
            </div>
            </div>
            {/* Creative Design Panel */}
            <div className="max-h-[400px]">
            <div className="max-h-[300px] bg-[#1E1E1E80] rounded-[30px] p-6 relative z-20">
              <div className="grid grid-cols-2 gap-2">
                <div className="p-6 pr-0 col-span-1">
                  <h2 className="f-Nohemi-Light-BF6438cc583f70b text-[30px] text-[#FCFCD8] leading-[30px] max-w-[150px]">
                  Motion
                  Design
                  </h2>
                  <p className="f-Nohemi-Light-BF6438cc583f70b text-[14px] text-[#FCFCD880] leading-[16px] pt-5">
                  Motion graphics designed to enhance your website, digital campaigns, presentations and digital ads.
                  </p>
                  <div className="flex flex-wrap gap-[7px] mt-5">
                    {FirstCardBtn.map((FirstCardBtn, index) => (
                      <div key={index}>
                        <button className="f-Nohemi-Light-BF6438cc583f70b flex items-center bg-[#30303066] rounded-[14px] px-[10px] pt-2 pb-1 text-[#FCFCD8] text-[12px]">
                          {FirstCardBtn.title}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='col-span-1'>
                  <img src="/images/slider-card-3.svg" alt="" className='mx-auto third-img' />
                </div>
              </div>
            </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CreativeServiceSlider;
