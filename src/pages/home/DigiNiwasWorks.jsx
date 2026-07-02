import React from 'react';
import { 
  HiOutlineShieldCheck, 
  HiOutlineSearch, 
  HiOutlineUserGroup, 
//   HiOutlineArrowTrendingUp, 
  HiOutlineHome, 
  HiOutlineVolumeUp, 
  HiOutlineVideoCamera, 
  HiOutlineChartBar 
} from 'react-icons/hi';
import { GiHouse } from "react-icons/gi";
import { RiRobotLine, RiUserVoiceLine } from 'react-icons/ri';
import { FiUsers, FiArrowRight } from 'react-icons/fi';
import { BiHeadphone } from 'react-icons/bi';
import homelogo from '../../assets/images/homelogo.png'
import robot from '../../assets/images/robot.png'
import Background from '../../assets/images/Background.png'
import grow from '../../assets/images/grow.png'
import diginiwas from "../../assets/images/diginiwas.webp"

export default function DiginiwasWorks() {
  return (
    <section className="min-h-screen bg-[#274255]  text-white px-10 py-5 sm:pb-20  flex flex-col justify-between font-sans selection:bg-emerald-500 selection:text-black">
      
      <div className="max-w-7xl mx-auto text-center mb-16 relative w-full">
        <div className="flex items-center justify-evenly gap-2 text-2xl md:text-4xl font-bold tracking-wide uppercase">
          {/* <div  className='hidden sm:block'>
          <img src={"https://res.cloudinary.com/dhuabv2it/image/upload/v1780739165/logo-removebg-preview_sh6cxs.png"} className='sm:h-40 lg:h-48' />
          </div> */}
          <div className='flex flex-row gap-10 items-center'> 
            <span>   HOW </span>
          <span className="text-[#33cc99] ">
           <img src={diginiwas} className='sm:h-20' /> 

          </span> 
           <span> 
              WORKS
           </span>
           </div>
         
         {/* <div className='hidden sm:block'>
          <img src={homelogo} className='sm:h-40 lg:h-48' />
         </div> */}

        </div>
        
        <p className="text-slate-400 text-sm md:text-base mt-3 tracking-widest font-medium flex items-center justify-center gap-3">
          <span className="w-6 h-[1px] bg-slate-700"></span>
          Trust. AI. Connection. Growth.
          <span className="w-6 h-[1px] bg-slate-700"></span>
        </p>
      </div>

      {/* 4 Step Workflow Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-16 sm:gap-8 relative w-full mb-16">
        
        {/* STEP 01 */}
        <div  onClick={() =>
    document.getElementById("agent")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
  }  className="bg-[#061520]/60 border hover:scale-105  border-slate-800/80 rounded-2xl p-6 flex flex-col items-center text-center relative backdrop-blur-sm group hover:border-[#33cc99]/30 transition-all duration-300">
          <div className="absolute -top-6 bg-[#030a10] border border-slate-800 p-3 rounded-full text-xs font-semibold text-slate-400 tracking-wider">
            01
          </div>
          
          <div className="   flex items-center justify-center text-[#33cc99] mb-6 mt-5 relative   border-slate-700/50">
            {/* <HiOutlineShieldCheck size={42} /> */}
            <img src={Background} />
            {/* <span className="absolute bottom-1 right-1 bg-[#030a10] text-[#33cc99] rounded-full p-0.5 border border-slate-700">
              <HiOutlineShieldCheck size={14} />
            </span> */}
          </div>

          <h3 className="text-xl font-bold mb-3 tracking-tight">
            We Onboard <br /><span className="text-[#33cc99]">Verified</span> Agents
          </h3>
          
          <p className="text-slate-400 text-sm leading-relaxed mb-2 flex-grow">
            Every agent goes through onboarding and KYC verification to ensure a trusted network for our customers.
          </p>

          <div className="w-full bg-[#04111a] border border-slate-800/60 rounded-xl p-3 flex items-center gap-3 text-left">
            <HiOutlineShieldCheck className="text-[#33cc99] shrink-0" size={20} />
            <div className="text-xs font-medium text-slate-300">
              KYC Verified <br />
              <span className="text-slate-500 font-normal">Trusted Professionals</span>
            </div>
          </div>

          {/* Connected Connector Arrow for Large Screens */}
          <div className="hidden xl:block absolute top-1/2 -right-4 -translate-y-1/2 z-10 text-slate-700 pointer-events-none">
            <FiArrowRight size={20} className="animate-pulse" />
          </div>
        </div>

        {/* STEP 02 */}
        <div  onClick={() =>
    document.getElementById("niwas-ai")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
  }
  className="bg-[#061520]/60 border hover:scale-105 border-slate-800/80 rounded-2xl p-6 flex flex-col items-center text-center relative backdrop-blur-sm group hover:border-[#33cc99]/30 transition-all duration-300">
          <div className="absolute -top-6 bg-[#030a10] border border-slate-800 p-3  rounded-full text-xs font-semibold text-slate-400 tracking-wider">
            02
          </div>

          <div className="  flex items-center justify-center text-[#33cc99] mb-6 mt-2  r border-slate-700/50">
            {/* <RiRobotLine size={40} /> */}
            <img src={robot} />
          </div>

          <h3 className="text-xl font-bold mb-3 tracking-tight">
            Use <span className="text-[#33cc99]">Niwas AI</span> <br />for the Best
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-3  flex-grow">
            Niwas AI understands your needs and provides smart recommendations to help you find the best properties.
          </p>

          {/* Search Tags List Component */}
          <div className="w-full space-y-2 text-left">
            {['2BHK in Ambala under ₹30k', 'Commercial property near market', 'Villa under ₹80 Lakhs'].map((tag, idx) => (
              <div key={idx} className="w-full bg-[#04111a] border border-slate-800/60 rounded-xl p-2.5 flex items-center gap-2.5 text-xs text-slate-300">
                <HiOutlineSearch className="text-slate-500 shrink-0" size={14} />
                <span className="truncate">{tag}</span>
              </div>
            ))}
          </div>

          <div className="hidden xl:block absolute top-1/2 -right-4 -translate-y-1/2 z-10 text-slate-700 pointer-events-none">
            <FiArrowRight size={20} className="animate-pulse" />
          </div>
        </div>

        {/* STEP 03 */}
        <div  onClick={() =>
    document.getElementById("future")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
  }  className="bg-[#061520]/60 border hover:scale-105 border-slate-800/80 rounded-2xl p-6 flex flex-col items-center text-center relative backdrop-blur-sm group hover:border-[#33cc99]/30 transition-all duration-300">
          <div className="absolute -top-6 bg-[#030a10] border border-slate-800 p-3  rounded-full text-xs font-semibold text-slate-400 tracking-wider">
            03
          </div>

          <div className="  flex items-center justify-center text-[#33cc99] mb-6 mt-2   border-slate-700/50">
            {/* <FiUsers size={38} /> */}
            <img src={homelogo} className='w-56 h-44' />
          </div>

          <h3 className="text-xl font-bold mb-3 tracking-tight">
            Connect with <br /><span className="text-[#33cc99]">Verified & Trusted</span> Agents
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
            Connect with verified and trusted agents who can help you in every step of your real estate journey.
          </p>

          {/* Bullet Feature Set */}
          <div className="w-full space-y-2.5 text-left text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <RiUserVoiceLine size={16} className="text-[#33cc99] shrink-0" />
              <span>Expert Guidance</span>
            </div>
            <div className="flex items-center gap-3">
              <HiOutlineHome size={16} className="text-[#33cc99] shrink-0" />
              <span>Local Market Knowledge</span>
            </div>
            <div className="flex items-center gap-3">
              <HiOutlineShieldCheck size={16} className="text-[#33cc99] shrink-0" />
              <span>End-to-End Support</span>
            </div>
          </div>

          <div className="hidden xl:block absolute top-1/2 -right-4 -translate-y-1/2 z-10 text-slate-700 pointer-events-none">
            <FiArrowRight size={20} className="animate-pulse" />
          </div>
        </div>

        {/* STEP 04 */}
        <div onClick={() =>
    document.getElementById("list-property")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
  } className="bg-[#061520]/60 border hover:scale-105 border-slate-800/80 rounded-2xl p-6 flex flex-col items-center text-center relative backdrop-blur-sm group hover:border-[#33cc99]/30 transition-all duration-300">
          <div className="absolute -top-6 bg-[#030a10] border border-slate-800 p-3 rounded-full text-xs font-semibold text-slate-400 tracking-wider">
            04
          </div>

          <div className="   flex items-center justify-center text-[#33cc99] mb-6 mt-2   border-slate-700/50">
            {/* <HiOutlineArrowTrendingUp size={38} /> */}
           {/* <GiHouse size={38}/> */}
           <img src={grow} className='' />
          </div>

          <h3 className="text-xl font-bold mb-3 tracking-tight">
            List Properties <br />& <span className="text-[#33cc99]">Grow Digitally</span>
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
            List your properties in the easiest way and get maximum visibility through digital promotion.
          </p>

          {/* Action Bullet Features List */}
          <div className="w-full space-y-2.5 text-left text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <HiOutlineHome size={16} className="text-[#33cc99] shrink-0" />
              <span>Easy Property Listing</span>
            </div>
            <div className="flex items-center gap-3">
              <HiOutlineVolumeUp size={16} className="text-[#33cc99] shrink-0" />
              <span>Digital Promotion</span>
            </div>
            <div className="flex items-center gap-3">
              <HiOutlineVideoCamera size={16} className="text-[#33cc99] shrink-0" />
              <span>Video & Photography</span>
            </div>
            <div className="flex items-center gap-3">
              <HiOutlineChartBar size={16} className="text-[#33cc99] shrink-0" />
              <span>Branding & Visibility</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Features Horizontal Bar Container */}
      <div className="max-w-7xl mx-auto w-full  border-slate-800/80 pt-1 lg:pt-20  mb-1 sm:mb-3 ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center text-xs md:text-sm text-slate-400">
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 p-2">
            <HiOutlineShieldCheck  className="text-4xl sm:text-4xl md:text-5xl text-[#33cc99] shrink-0" />
            <span className="font-medium   lg:text-lg text-white">100% Verified Agents & Listings</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 p-2">
            <RiRobotLine  className="text-4xl  sm:text-4xl  md:text-5xl text-[#33cc99] shrink-0" />
            <span className="font-medium   sm:text-base lg:text-lg text-white">AI Powered Smart Search</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 p-2">
            <HiOutlineUserGroup  className="text-4xl  sm:text-4xl  md:text-5xl text-[#33cc99] shrink-0" />
            <span className="font-medium   sm:text-base lg:text-lg text-white">Happy Customers Everyday</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 p-2">
            {/* <HiOutlineArrowTrendingUp  className="text-4xl  sm:text-4xl text-[#33cc99] shrink-0" /> */}
            <GiHouse  className="text-4xl  sm:text-4xl md:text-5xl text-[#33cc99] shrink-0"/>
            <span className="font-medium   sm:text-base lg:text-lg text-white">Grow Your Real Estate Business</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 p-2 col-span-2 md:col-span-1">
            <BiHeadphone  className="text-4xl  sm:text-4xl md:text-5xl text-[#33cc99] shrink-0" />
            <span className="font-medium   sm:text-base lg:text-lg text-white">Dedicated Support</span>
          </div>

        </div>
      </div>

    </section>
  );
}