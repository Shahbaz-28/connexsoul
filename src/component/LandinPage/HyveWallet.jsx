// import { Button } from "../ui/shiny-button"
import React from "react";
import { RainbowButton } from "../ui/rainbow-button";

export default function HyveWallet() {
  return (
   <>
    <section className="pt-28">
      <div className="container rounded-[30px] hyvewallet relative">
      <div className="flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 py-6 pl-14">
          <div className="space-y-2">
            <p className="f-Nohemi-Light-BF6438cc583f70b text-[22px] text-[#FCFCD8] leading-[22px]">Introducing</p>
            <div className="flex items-center gap-4">
              <h1 className="f-Nohemi-Light-BF6438cc583f70b text-[52px] text-[#FCFCD8] leading-[52px] pt-4">Hyve Wallet</h1>
              <img src="/images/cohyve-beta.svg" alt="" className="w-[50px] pt-3" />
            </div>
          </div>
          
          <p className="f-Nohemi-Light-BF6438cc583f70b text-[17px] text-[#FCFCD880] leading-[26px] pt-2 pb-4">
            Don&apos;t let the work suffer due to tidy approval process.
            Kickstart the process instantly with hyve wallet now and
            pay back at your own terms.
          </p>
          
          <RainbowButton className="f-Nohemi-Light-BF6438cc583f70b hover:border-gray-600 hover:border-[1px] hover:bg-[#1F1F1FEB] hover:text-[#FCFCD8] duration-300 rounded-[14px] text-[#0C0C0C] text-[15px] flex items-center justify-center px-5 pb-2 pt-3 border-[1px] border-[#FCFCD80F]">
          Book Demo
          </RainbowButton>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-rose-500/30 blur-3xl opacity-20 rounded-full" />
          <img 
            src="/images/hyve-wallet.svg" 
            alt="Credit card held in hand"
            className="mx-auto max-w-[240px]"
          />
        </div>
      </div>
    </div>
      </div>
    </section>
   </>
  )
}

