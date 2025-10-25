import React, { useState, useEffect, useRef } from "react";
import ShinyButton from "../ui/shiny-button";
import { cn } from "../../lib/utils";
import Marquee from "../ui/marquee";
import {motion} from 'framer-motion';
import {fadeIn} from '../../variant'; 
import { RainbowButton } from "../ui/rainbow-button";
import WhoAreYou from './WhoAreYou';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false); // Added state to track visibility
  const sectionRef = useRef(null); // Reference for the section


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Intersection Observer to detect visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust for fine-grained control
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="bg-color-b">
        <div className="container pt-[1px] md:pt-[40px] lg:pt-[30px] px-4 md:px-2">
          <div className="text-center">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="!max-w-[900px] mx-auto">
              <h2
                className="f-Nohemi-Light-BF6438cc583f70b mt-10 text-[50px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-[44px] sm:leading-[60px] md:leading-[76px] lg:leading-[96px] text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FCFCD8] via-[#FCFCD8] to-[#7d22ff]">
                ConnexSoul
              </h2>
              <p className="f-Nohemi-Light-BF6438cc583f70b text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-[#FCFCD880] text-center leading-[22px] sm:leading-[26px] md:leading-relaxed pt-3 md:pt-4 max-w-[80%] sm:max-w-[600px] mx-auto">
                Connecting India's Creative Souls for a Better Future.
              </p>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-3 pt-4 md:pt-10 lg:pt-6">
          <RainbowButton 
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdE01Y7UmyVvkv6FGWIVPg-6kMDb7ZBhoYWovE5ulcrF3kauw/viewform', '_blank')}
            className="f-Nohemi-Light-BF6438cc583f70b hover:border-gray-600 hover:border-[1px] hover:bg-[#1F1F1FEB] hover:text-[#FCFCD8] duration-300 rounded-[14px] text-[#0C0C0C] text-[15px] flex items-center justify-center px-6 pb-2 pt-3 border-[1px] border-[#FCFCD80F] cursor-pointer w-auto">
          Join Waitlist
          </RainbowButton>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center pt-4 md:pt-10 w-full">
            <p className="f-Nohemi-Light-BF6438cc583f70b text-[10px] sm:text-[15px] md:text-[16px] lg:text-[17px] text-[#FCFCD880] text-center leading-[16px] sm:leading-[26px] md:leading-[28px] max-w-[90%] sm:max-w-[700px] lg:max-w-[800px] mx-auto px-4">
              Welcome to ConnexSoul, an inclusive Made-in-India platform where creative innovators, influencers, and community builders unite for social impact. Join our beta and help shape the future of collaboration
            </p>
          </motion.div>
            </div>
      </section>
      
      {/* CX Showcase Section */}
      <section className="bg-col py-10 md:py-20">
        <div className="container max-w-[1400px] px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{once: true}}
          >
            {/* Top Row - 2 Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{once: true}}
                className="relative group overflow-hidden rounded-[20px] md:rounded-[24px] shadow-lg"
              >
                <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                  <img 
                    src="/cx (1).jpeg" 
                    alt="ConnexSoul Community" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{once: true}}
                className="relative group overflow-hidden rounded-[20px] md:rounded-[24px] shadow-lg"
              >
                <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                  <img 
                    src="/cx (2).jpeg" 
                    alt="ConnexSoul Collaboration" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Row - 3 Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{once: true}}
                className="relative group overflow-hidden rounded-[20px] md:rounded-[24px] shadow-lg"
              >
                <div className="relative h-[250px] md:h-[300px] overflow-hidden">
                  <img 
                    src="/cx (3).jpeg" 
                    alt="ConnexSoul Innovation" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{once: true}}
                className="relative group overflow-hidden rounded-[20px] md:rounded-[24px] shadow-lg"
              >
                <div className="relative h-[250px] md:h-[300px] overflow-hidden">
                  <img 
                    src="/cx (4).jpeg" 
                    alt="ConnexSoul Creativity" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{once: true}}
                className="relative group overflow-hidden rounded-[20px] md:rounded-[24px] shadow-lg sm:col-span-2 md:col-span-1"
              >
                <div className="relative h-[250px] md:h-[300px] overflow-hidden">
                  <img 
                    src="/cx (5).jpeg" 
                    alt="ConnexSoul Purpose" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Are You Section */}
      <WhoAreYou />
    </>
  );
};

export default Banner;
