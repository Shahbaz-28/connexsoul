import React from 'react';
import { RainbowButton } from "../ui/rainbow-button";
import { TextHoverEffect } from "../ui/text-hover-effect";
import 'flowbite';

const FooterFrequently = () => {
  

  return (
    <>
      <section className="bg-col-footer pb-5 px-4">
      <div className="container bg-[#30303066] rounded-[20px] md:rounded-[30px] max-w-[1100px] !relative mx-auto">
      </div>
        <footer className="px-4">
          <div className="container mx-auto">
            <div className='ml-0 lg:ml-[-28px] flex justify-center lg:justify-start'>
              <TextHoverEffect text="cx" />
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default FooterFrequently;
