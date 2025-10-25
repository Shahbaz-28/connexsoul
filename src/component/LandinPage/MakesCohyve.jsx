import React from "react";
import {motion} from 'framer-motion';
import {fadeIn} from '../../variant'; 

const MakesCohyve = () => {
  return (
    <>
      <section className="bg-[#0C0C0C] pt-20">
        <motion.h2 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.9}}
        className="f-Nohemi-Light-BF6438cc583f70b text-[50px] text-[#FCFCD8] text-center font-normal leading-[50px] pb-16 mx-auto max-w-[700px]">
          What makes cohyve unique
        </motion.h2>
        <div className="container max-w-[1100px] rounded-[30px] makes-bg">
          <div className="p-6">
            {/* Comparison Table */}
            <div className="py-4 px-6">
              <div className="grid grid-cols-5 text-center">
                {/* Header */}
                <div></div>
                <div className="f-Nohemi-Light-BF6438cc583f70b border-b-[1px] border-b-[#FCFCD826] text-[18px] leading-[20px] text-[#FCFCD8] pb-2 pt-4 flex items-start justify-center gap-1 bg-[#00000073] rounded-tr-[15px] rounded-tl-[15px]"> <span className="mb-1"><img src="/images/cohyve-yellow.svg" alt="" /></span> Cohyve</div>
                <div className="f-Nohemi-Light-BF6438cc583f70b border-b-[1px] border-b-[#FCFCD826] text-[18px] leading-[20px] text-[#FCFCD8] pb-2 pt-4">Platforms <br /> <span className="flex justify-center mt-[2px]"><img src="/images/triple-img.svg" alt="" /></span> </div>
                <div className="f-Nohemi-Light-BF6438cc583f70b border-b-[1px] border-b-[#FCFCD826] text-[18px] leading-[20px] text-[#FCFCD8] pb-2 pt-4">Freelancer</div>
                <div className="f-Nohemi-Light-BF6438cc583f70b border-b-[1px] border-b-[#FCFCD826] text-[18px] leading-[20px] text-[#FCFCD8] pb-2 pt-4">Agency</div>
              </div>

              {/* Rows */}
              {[
                { feature: "Pricing", cohyve: "Pay as you go", platforms: "Per task", freelancer: "Per task", agency: "Monthly Retainer" },
                { feature: "Unlimited Tasks", cohyve: "✔", platforms: "-", freelancer: "-", agency: "-" },
                { feature: "Unlimited Revisions", cohyve: "✔", platforms: "-", freelancer: "-", agency: "-" },
                { feature: "Pre-qualified designers", cohyve: "✔", platforms: "-", freelancer: "-", agency: "-" },
                { feature: "Design Manager", cohyve: "✔", platforms: "-", freelancer: "-", agency: "-" },
                { feature: "Design Backup", cohyve: "✔", platforms: "-", freelancer: "-", agency: "-" },
                { feature: "Real-time tracking", cohyve: "✔", platforms: "-", freelancer: "-", agency: "-" },
                { feature: "Turnaround Time", cohyve: "<48h", platforms: "Several Weeks", freelancer: "3 Weeks", agency: "1 Month" },
              ].map((row, index, data) => (
                <div key={index} className="grid grid-cols-5 text-center">
                  <div className="f-Nohemi-Light-BF6438cc583f70b text-[#FCFCD8] text-[18px] leading-[20px] text-start flex items-center max-w-[180px]">
                    {row.feature}
                  </div>
                  <div
                    className={`f-Nohemi-Light-BF6438cc583f70b border-b-[1px] border-b-[#FCFCD826] text-[18px] leading-[18px] text-[#FCFCD880] py-4 bg-[#00000073] 
      ${index === data.length - 1 ? "rounded-br-[15px] rounded-bl-[15px] !border-b-0" : ""}`}
                  >
                    {row.cohyve}
                  </div>
                  <div className={`f-Nohemi-Light-BF6438cc583f70b border-b-[1px] border-b-[#FCFCD826] text-[18px] leading-[18px] text-[#FCFCD880] py-4
      ${index === data.length - 1 ? "!border-b-0" : ""}`}>
                    {row.platforms}
                  </div>
                  <div className={`f-Nohemi-Light-BF6438cc583f70b border-b-[1px] border-b-[#FCFCD826] text-[18px] leading-[18px] text-[#FCFCD880] py-4
      ${index === data.length - 1 ? "!border-b-0" : ""}`}>
                    {row.freelancer}
                  </div>
                  <div className={`f-Nohemi-Light-BF6438cc583f70b border-b-[1px] border-b-[#FCFCD826] text-[18px] leading-[18px] text-[#FCFCD880] py-4 
      ${index === data.length - 1 ? "!border-b-0" : ""}`}>
                    {row.agency}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MakesCohyve;
