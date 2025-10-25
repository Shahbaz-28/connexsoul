import React, { useState, useEffect, useRef } from 'react';
import ShinyButton from "../ui/shiny-button";
import NavBar from './NavBar';
import Banner from './Banner';
import CreativeService from './CreativeService';
import GlimpseWork from './GlimpseWork';
import FutureOfDesign from './FutureOfDesign';
import FooterFrequently from './FooterFrequently';
import JoinOurEcosystem from './JoinOurEcosystem';
import DesignTeam from './DesignTeam';
import MakesCohyve from './MakesCohyve';
import HyveWallet from './HyveWallet';
import CreativeServiceSlider from './CreativeServiceSlider';
import CxFounder from './CxFounder';
import WhoAreYou from './WhoAreYou';

const HomeLandingPage = () => {
  const [showButton, setShowButton] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const bannerVisible = entries.some(
          (entry) => entry.target === bannerRef.current && entry.isIntersecting
        );

        setShowButton(!bannerVisible);
      },
      { threshold: 0.1 }
    );

    if (bannerRef.current) observer.observe(bannerRef.current);

    return () => {
      if (bannerRef.current) observer.unobserve(bannerRef.current);
    };
  }, []);

  return (
    <>
    <div>
      {/* <NavBar /> */}
      <div ref={bannerRef}>
        <Banner />
      </div>
      <CxFounder />
      {/* <DesignTeam />
      <CreativeService /> */}
      {/* <CreativeServiceSlider />
      <MakesCohyve />
      <GlimpseWork />
      <FutureOfDesign />
      <HyveWallet />
      <JoinOurEcosystem /> */}
      <FooterFrequently />
    </div>
    </>
  );
};

export default HomeLandingPage;
