import { useState, useEffect, useRef } from "react";
import { FiSearch, FiArrowRight, FiMapPin } from "react-icons/fi";
import {
  MdVerified,
  MdLocationOn,
  MdHome,
  MdSearch,
  MdFavorite,
  MdPerson,
  MdSmartToy,
  MdGroups,
  MdApartment,
  MdCheckCircle,
} from "react-icons/md";
import {
  RiShieldCheckLine,
  RiMedalLine,
  RiBrainLine,
  RiBuilding2Line,
} from "react-icons/ri";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { IoSearch, IoLocationSharp, IoLocationOutline } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi2";
import { LuFileSpreadsheet } from "react-icons/lu";
import back from "../assets/images/back.png";
import niwas from "../assets/images/niwas.png";
import dashboard from "../assets/images/dashboard.png";
import property from "../assets/images/property.png";
import { TbHomeSignal } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import { FaApple } from "react-icons/fa"
import { IoLogoGooglePlaystore } from "react-icons/io5";

import { HiUsers } from "react-icons/hi";
import { TfiHeadphone } from "react-icons/tfi";
import { MdVerifiedUser } from "react-icons/md";
import { WiTime3 } from "react-icons/wi";
import { CircleCheckBig } from 'lucide-react';

import React from "react";
import { FiHeadphones } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FaHandshake, FaBuilding, FaShieldAlt } from "react-icons/fa";
 import house from "../assets/images/house.webp"
  import calender from "../assets/images/calender.webp"
   import camera from "../assets/images/camera.webp"
    import human from "../assets/images/human.webp"
     import mic from "../assets/images/mic.webp"
  import notes from "../assets/images/notes.webp"

import { Link } from "react-router-dom";


const services = [
  {
    img: house,
    title: "Home Loan Assistance",
    desc: "Get hassle-free home loans with the best interest rates. We connect you with trusted banks and financial partners.",
  },
  {
    img: camera,
    title: "Property Photography & Videography",
    desc: "Professional photos, videos and reels that highlight the best of your property and attract serious buyers/tenants.",
  },
  {
    img: mic,
    icon: "promotion",
    title: "Digital Property Promotion",
    desc: "Get maximum visibility with our digital marketing, social media promotion, featured listings and premium exposure.",
  },
  {
    img: calender,
    title: "Property Management",
    badge: "Coming Soon",
    desc: "End-to-end rental management, tenant tracking, maintenance coordination and rent reminders - all in one place.",
  },
  {
    img: human,
    title: "Retired Government Officers Network",
    desc: "We onboard retired government officials as trusted DigiNiwas partners and local property advisors. A second career. A bigger purpose.",
  },
  {
    img: notes,
    title: "Documentation & Verification Support",
    desc: "Assistance with property documentation, verification and all related legal formalities for a worry-free experience.",
  },
];
 
const stats = [
  { icon: <FiUsers />, value: "5000+", label: "Happy Clients" },
  { icon: <FaHandshake />, value: "100+", label: "Verified Partners" },
  { icon: <FaBuilding />, value: "1000+", label: "Properties Sold/Rented" },
  { icon: <FaShieldAlt />, value: "Trusted", label: "Across Ambala" },
];
 

const bgImages = [
  "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

    const featuress = [
         { icon: MdVerifiedUser, title: "Trusted network",  },
         { icon: HiUsers, title: "Verified partner",},
         { icon: WiTime3, title: "End to end support  ",  },
         { icon: CircleCheckBig, title: "100% Genuine ", },
       ]

export default function HeroSection() {
  const [currentBg, setCurrentBg] = useState(0);
  const [fade, setFade] = useState(true);


  return (
    <div className=" h-full font-sans bg-[#274255] text-white">
      {/* <Navbar /> */}
      <Hero currentBg={currentBg} fade={fade} />
    </div>
  );
}

function Hero({ currentBg, fade }) {
  return (
    <section className=" sm:min-h-screen max-w-7xl overflow-hidden py-5 sm:py-0 mx-auto">

      <div className="absolute inset-0 bg-[#274255] " />
      <div className=" ">
        <div className="relative z-10 flex flex-col   sm:py-10  ">
          <div className="flex-1 flex flex-col  lg:flex-row items-center lg:items-center justify-evenly    pt-2 pb-6 gap-2">
            <LeftContent />
            <RightPhones />
          </div>

            <section className="bg-[#274255] w-full px-4 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-16 lg:py-20">
               <div className="max-w-7xl mx-auto gap-6 sm:gap-8 md:gap-10 lg:gap-16 flex flex-col">
                        <div className="text-center mb-8 sm:mb-10 md:mb-12 flex flex-col gap-2   ">
                        <h1 className="text-2xl sm:text-4xl md:text-5xl  font-bold text-white">
                            Everything You Need.
                        </h1>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#33cc99] mt-1">
                            All Under One Roof.
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg mt-3 font- max-w-xl mx-auto px-2">
                            Powerful services designed to support buyers, sellers, agents and investors
                            at every step of their real estate journey.
                        </p>
                        </div>
                
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                        {services.map((s, i) => (
                            <div
                            key={i}
                            className="bg-[#1c2f3d] rounded-xl p-4 sm:p-5 md:p-6 flex flex-col"
                            >
                            <div className="h-20 sm:h-24 md:h-28 flex items-center justify-center mb-3 sm:mb-4">
                                {s.img ? (
                                <img
                                    src={s.img}
                                    alt={s.title}
                                    className="h-full object-contain"
                                />
                                ) : (
                                <div className="flex items-center gap-2">
                                    <FiHeadphones className="text-[#33cc99] text-3xl sm:text-4xl md:text-5xl" />
                                </div>
                                )}
                            </div>
                
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                                <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg">
                                {s.title}
                                </h3>
                                {s.badge && (
                                <span className="text-[10px] sm:text-xs bg-[#33cc99]/20 text-[#33cc99] px-2 py-0.5 rounded-full font-medium">
                                    {s.badge}
                                </span>
                                )}
                            </div>
                
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-1">
                                {s.desc}
                            </p>
                
                            <button className="flex items-center gap-1 text-[#33cc99] text-xs sm:text-sm font-semibold mt-4">
                                Learn More <FiArrowRight />
                            </button>
                            </div>
                        ))}
                        </div>
                
                        <div className="bg-[#1c2f3d] rounded-xl mt-6 sm:mt-8 p-4 sm:p-5 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3 sm:gap-4 text-center sm:text-left">
                            <div className="bg-[#33cc99]/20 p-2.5 sm:p-3 rounded-full">
                            <FiHeadphones className="text-[#33cc99] text-lg sm:text-xl" />
                            </div>
                            <div>
                            <h4 className="text-[#33cc99] font-semibold text-sm sm:text-base">
                                We're Here to Help You
                            </h4>
                            <p className="text-gray-400 text-xs sm:text-sm">
                                Have a question or need help with any service? Our team is just a message away.
                            </p>
                            </div>
                        </div>
                        <button className="bg-[#33cc99] text-[#0f1c26] font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg flex items-center gap-2 whitespace-nowrap">
                            Contact Our Team <FiArrowRight />
                        </button>
                        </div>
                
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10 text-center">
                        {stats.map((st, i) => (
                            <div key={i} className="flex flex-col items-center">
                            <div className="text-[#33cc99] text-lg sm:text-4xl mb-1.5">
                                {st.icon}
                            </div>
                            <p className="text-white font-bold text-sm  sm:text-xl">
                                {st.value}
                            </p>
                            <p className="text-gray-400 text-sm sm:text-lg">{st.label}</p>
                            </div>
                        ))}
                        </div>
                 </div>
            </section>
        </div>
      </div>

    </section>
  );
}

function LeftContent() {
 
  return (
    <div className="flex-1  max-w-full lg:max-w-[50%] xl:max-w-[50%] text-center lg:text-left ">

      <h1 className="text-3xl sm:text-3xl md:text-4xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
        <span className="text-white"> Diginiwas  <span className="text-[#33cc99]">Services</span></span>
      
      </h1>
      <h2 className="text-3xl sm:text-4xl  font-semibold leading-tight mb-4 sm:mb-6">
        <span className=""> More than just property deals</span>
      </h2>

      <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
       Be go beyond, buying, selling and renting. Diginiwas offers a renge of trusted services to make your property journey smooth, secure succesful. 
      </p>

         <div> 
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 max-w-xl">
              {featuress.map((f,id) => (
                <div
                  key={id}
                  className="rounded-xl border border-[#1f3a3f] bg-[#0d2329]/60 p-3 sm:p-4 flex flex-col justify-center items-center gap-2"
                >
                  <div className="w-9 h-9 hover:scale-110 duration-100 transition-all rounded-md text-[#2dd4a8] flex items-center justify-center">
                    <f.icon size={26} />
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold leading-tight whitespace-nowrap">
                    <div>{f.title}</div>
          
                  </div>
                </div>
              ))}
            </div>
    
          </div>
    </div>
  );
}

function RightPhones() {
  return (
    <div className="flex-1 flex flex-col items-center lg:items-end  w-full lg:max-w-[55%] mt-8 lg:mt-0 ">

      <div className=" relative flex items-center justify-center w-full  max-w-5xl mx-auto h-full  sm:h-[340px] md:h-[420px] lg:h-[500px]">
        <div
          className=" "
        >
          <img
            src={
              "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="Niwas AI"
            className="w-full  h-96 rounded-[24px]"
          />
        </div>
      </div>
    </div>
  );
}
