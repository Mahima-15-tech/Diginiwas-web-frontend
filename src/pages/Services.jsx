// import { useState, useEffect, useRef } from "react";
// import { FiSearch, FiArrowRight, FiMapPin } from "react-icons/fi";
// import {
//   MdVerified,
//   MdLocationOn,
//   MdHome,
//   MdSearch,
//   MdFavorite,
//   MdPerson,
//   MdSmartToy,
//   MdGroups,
//   MdApartment,
//   MdCheckCircle,
// } from "react-icons/md";
// import {
//   RiShieldCheckLine,
//   RiMedalLine,
//   RiBrainLine,
//   RiBuilding2Line,
// } from "react-icons/ri";
// import { FaHouseCircleCheck } from "react-icons/fa6";
// import { IoLocation } from "react-icons/io5";
// import { IoSearch, IoLocationSharp, IoLocationOutline } from "react-icons/io5";
// import { HiSparkles } from "react-icons/hi2";
// import { LuFileSpreadsheet } from "react-icons/lu";
// import back from "../assets/images/back.png";
// import niwas from "../assets/images/niwas.png";
// import dashboard from "../assets/images/dashboard.png";
// import property from "../assets/images/property.png";
// import { TbHomeSignal } from "react-icons/tb";
// import { CiMobile3 } from "react-icons/ci";
// import { FaApple } from "react-icons/fa"
// import { IoLogoGooglePlaystore } from "react-icons/io5";

// import { HiUsers } from "react-icons/hi";
// import { TfiHeadphone } from "react-icons/tfi";
// import { MdVerifiedUser } from "react-icons/md";
// import { WiTime3 } from "react-icons/wi";
// import { CircleCheckBig, Home } from 'lucide-react';

// import React from "react";
// import { FiHeadphones } from "react-icons/fi";
// import { FiUsers } from "react-icons/fi";
// import { FaHandshake, FaBuilding, FaShieldAlt } from "react-icons/fa";
//  import house from "../assets/images/house.webp"
//   import calender from "../assets/images/calender.webp"
//    import camera from "../assets/images/camera.webp"
//     import human from "../assets/images/human.webp"
//      import mic from "../assets/images/mic.webp"
//   import notes from "../assets/images/notes.webp"
// import bg from "../assets/images/bg.webp"
// import bg2 from "../assets/images/bg2.webp"
// import bg3 from "../assets/images/bg3.webp"
// const bgImages = [
//   bg,bg2,bg3
// ];

// import { Link } from "react-router-dom";

// const services = [
//   {
//     img: house,
//     title: "Home Loan Assistance",
//     desc: "Get hassle-free home loans with the best interest rates. We connect you with trusted banks and financial partners.",
//   },
//   {
//     img: camera,
//     title: "Property Photography & Videography",
//     desc: "Professional photos, videos and reels that highlight the best of your property and attract serious buyers/tenants.",
//   },
//   {
//     img: mic,
//     icon: "promotion",
//     title: "Digital Property Promotion",
//     desc: "Get maximum visibility with our digital marketing, social media promotion, featured listings and premium exposure.",
//   },
//   {
//     img: calender,
//     title: "Property Management",
//     badge: "Coming Soon",
//     desc: "End-to-end rental management, tenant tracking, maintenance coordination and rent reminders - all in one place.",
//   },
//   {
//     img: human,
//     title: "Retired Government Officers Network",
//     desc: "We onboard retired government officials as trusted DigiNiwas partners and local property advisors. A second career. A bigger purpose.",
//   },
//   {
//     img: notes,
//     title: "Documentation & Verification Support",
//     desc: "Assistance with property documentation, verification and all related legal formalities for a worry-free experience.",
//   },
// ];
 
// const stats = [
//   { icon: <FiUsers />, value: "100%", label: "Verified agents" },
//   { icon: <FaHandshake />, value: "", label: "Easy property listing" },
//   { icon: <FaBuilding />, value: "100%", label: "Genuine Leads" },
//   { icon: <FaShieldAlt />, value: "AI Powered", label: "Search" },
// ];
 

// // const bgImages = [
// //   "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // ];

//     const featuress = [
//          { icon: MdVerifiedUser, title: "Trusted network",  },
//          { icon: HiUsers, title: "Verified partner",},
//          { icon: WiTime3, title: "End to end support  ",  },
//          { icon: CircleCheckBig, title: "100% Genuine ", },
//        ]

// export default function HeroSection() {
//   const [currentBg, setCurrentBg] = useState(0);
//   const [fade, setFade] = useState(true);
   

//    useEffect(() => {
//       const interval = setInterval(() => {
//         setFade(false);
//         setTimeout(() => {
//           setCurrentBg((prev) => (prev + 1) % bgImages.length);
//           setFade(true);
//         }, 500);
//       }, 10000);
//       return () => clearInterval(interval);
//     }, []);


//   return (
//     <div className=" h-full font-sans bg-[#274255] text-white">
//       {/* <Navbar /> */}
//       <Hero currentBg={currentBg} fade={fade} />
//     </div>
//   );
// }

// function Hero({ currentBg, fade }) {
//   const [showComingSoon, setShowComingSoon] = useState(false);
//   return (
//     <section className=" sm:min-h-screen max-w-7xl overflow-hidden py-5 sm:py-0 mx-auto">
       
        
//       <div className="absolute inset-0 bg-gradient-to-r from-[#274255]/95 via-[#274255]/60 to-transparent " />
//       <div className=" ">
//         <div className="relative z-10 flex flex-col   sm:py-10  ">
//           <div> </div>
//           <div className="flex-1 flex flex-col  lg:flex-row items-center lg:items-center justify-evenly    pt-2 pb-6 gap-2">
//             <LeftContent />
//             <RightPhones />
//           </div>

//             <section className="bg-[#274255] w-full px-4 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-16 lg:py-20">
//                <div className="max-w-7xl mx-auto gap-6 sm:gap-8 md:gap-10 lg:gap-16 flex flex-col">
//                         <div className="text-center mb-8 sm:mb-10 md:mb-12 flex flex-col gap-2   ">
//                         <h1 className="text-2xl sm:text-4xl md:text-5xl  font-bold text-white">
//                             Everything You Need.
//                         </h1>
//                         <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#33cc99] mt-1">
//                             All Under One Roof.
//                         </h2>
//                         <p className="text-gray-400 text-base md:text-lg mt-3 font- max-w-xl mx-auto px-2">
//                             Powerful services designed to support buyers, sellers, agents and investors
//                             at every step of their real estate journey.
//                         </p>
//                         </div>
                
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
//                         {services.map((s, i) => (
//                             <div
//                             key={i}
//                             className="bg-[#1c2f3d] rounded-xl p-4 sm:p-5 md:p-6 flex flex-col hover:border-2 hover:border-[#33cc99] hover:scale-100 transition-all duration-1000"
//                             >
//                             <div className="h-20 sm:h-24 md:h-28 flex items-center justify-center mb-3 sm:mb-4">
//                                 {s.img ? (
//                                 <img
//                                     src={s.img}
//                                     alt={s.title}
//                                     className="h-full object-contain"
//                                 />
//                                 ) : (
//                                 <div className="flex items-center gap-2">
//                                     <FiHeadphones className="text-[#33cc99] text-3xl sm:text-4xl md:text-5xl" />
//                                 </div>
//                                 )}
//                             </div>
                
//                             <div className="flex items-center gap-2 mb-2 flex-wrap">
//                                 <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg">
//                                 {s.title}
//                                 </h3>
//                                 {s.badge && (
//                                 <span className="text-[10px] sm:text-xs bg-[#33cc99]/20 text-[#33cc99] px-2 py-0.5 rounded-full font-medium">
//                                     {s.badge}
//                                 </span>
//                                 )}
//                             </div>
                
//                             <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-1">
//                                 {s.desc}
//                             </p>
                
//                             <button onClick={() => setShowComingSoon(true)} className="flex items-center gap-1 text-[#33cc99] text-xs sm:text-sm font-semibold mt-4">
//                                 Learn More <FiArrowRight />
//                             </button>
//                             </div>
//                         ))}
//                         </div>
                
//                         <div className="bg-[#1c2f3d] rounded-xl mt-6 sm:mt-8 p-4 sm:p-5 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
//                         <div className="flex items-center gap-3 sm:gap-4 text-center sm:text-left">
//                             <div className="bg-[#33cc99]/20 p-2.5 sm:p-3 rounded-full">
//                             <FiHeadphones className="text-[#33cc99] text-lg sm:text-xl" />
//                             </div>
//                             <div>
//                             <h4 className="text-[#33cc99] font-semibold text-sm sm:text-base">
//                                 We're Here to Help You
//                             </h4>
//                             <p className="text-gray-400 text-xs sm:text-sm">
//                                 Have a question or need help with any service? Our team is just a message away.
//                             </p>
//                             </div>
//                         </div>
//                         <button className="bg-[#33cc99] text-[#0f1c26] font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg flex items-center gap-2 whitespace-nowrap">
//                             Contact Our Team <FiArrowRight />
//                         </button>
//                         </div>
                
//                         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10 text-center">
//                         {stats.map((st, i) => (
//                             <div key={i} className="flex flex-col items-center">
//                             <div className="text-[#33cc99] text-lg sm:text-4xl mb-1.5">
//                                 {st.icon}
//                             </div>
//                             <p className="text-white font-bold text-sm  sm:text-xl">
//                                 {st.value}
//                             </p>
//                             <p className="text-gray-400 text-sm sm:text-lg">{st.label}</p>
//                             </div>
//                         ))}
//                         </div>
//                  </div>
//             </section>
//         </div>
//       </div>

//           {showComingSoon && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">

//           <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-[fadeIn_.25s_ease]">

//             {/* Top */}

//             <div className="bg-[#0F2E46] py-8 flex justify-center">
//               <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">

//                 <div className="w-14 h-14 rounded-full bg-[#EAF7F2] flex items-center justify-center">

//                   <Home size={34} className="text-[#1CB46D]" />

//                 </div>
//               </div>
//             </div>

//             {/* Body */}

//             <div className="px-8 py-8 text-center">

//               <h2 className="text-2xl font-bold text-[#0F2E46]">
//                 Mobile App
//               </h2>

//               <h3 className="text-xl font-semibold text-[#1CB46D] mt-1">
//                 Coming Soon 🚀
//               </h3>

//               <p className="text-[#6F6F6F] text-sm leading-7 mt-5">
//                 We're building an amazing DigiNiwas mobile experience.
//                 <br />
//                 Soon you'll be able to explore properties,
//                 chat with Niwas AI and connect with verified experts
//                 directly from our app.
//               </p>

//               <button
//                 onClick={() => setShowComingSoon(false)}
//                 className="mt-8 w-full bg-[#0F2E46] hover:bg-[#173D5B] transition text-white py-3 rounded-xl font-semibold"
//               >
//                 Got it
//               </button>

//             </div>

//           </div>

//         </div>
//       )}


//     </section>
//   );
// }

// function LeftContent() {
 
//   return (
//     <div className="flex-1  max-w-full lg:max-w-[50%] xl:max-w-[50%] text-center lg:text-left ">

//       <h1 className="text-3xl sm:text-3xl md:text-4xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
//         <span className="text-white"> Diginiwas  <span className="text-[#33cc99]">Services</span></span>
      
//       </h1>
//       <h2 className="text-3xl sm:text-4xl  font-semibold leading-tight mb-4 sm:mb-6">
//         <span className=""> More than just property deals</span>
//       </h2>

//       <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
//        Be go beyond, buying, selling and renting. Diginiwas offers a renge of trusted services to make your property journey smooth, secure succesful. 
//       </p>

//          <div> 
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 max-w-xl">
//               {featuress.map((f,id) => (
//                 <div
//                   key={id}
//                   className="rounded-xl border border-[#1f3a3f] bg-[#0d2329]/60 p-3 sm:p-4 flex flex-col justify-center items-center gap-2"
//                 >
//                   <div className="w-9 h-9 hover:scale-110 duration-100 transition-all rounded-md text-[#2dd4a8] flex items-center justify-center">
//                     <f.icon size={26} />
//                   </div>
//                   <div className="text-[11px] sm:text-xs font-semibold leading-tight whitespace-nowrap">
//                     <div>{f.title}</div>
          
//                   </div>
//                 </div>
//               ))}
//             </div>
    
//           </div>
//     </div>
//   );
// }

// function RightPhones() {
//   return (
//     <div className="flex-1 flex flex-col items-center lg:items-end  w-full lg:max-w-[55%] mt-8 lg:mt-0 ">

//       <div className=" relative flex items-center justify-center w-full  max-w-5xl mx-auto h-full  sm:h-[340px] md:h-[420px] lg:h-[500px]">
//         <div
//           className=" "
//         >
//           <img
//             src={
//               "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             }
//             alt="Niwas AI"
//             className="w-full  h-96 rounded-[24px]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }





// import { useState, useEffect, useRef } from "react";
// import { FiSearch, FiArrowRight, FiMapPin } from "react-icons/fi";
// import {
//   MdVerified,
//   MdLocationOn,
//   MdHome,
//   MdSearch,
//   MdFavorite,
//   MdPerson,
//   MdSmartToy,
//   MdGroups,
//   MdApartment,
//   MdCheckCircle,
// } from "react-icons/md";
// import {
//   RiShieldCheckLine,
//   RiMedalLine,
//   RiBrainLine,
//   RiBuilding2Line,
// } from "react-icons/ri";
// import { FaHouseCircleCheck } from "react-icons/fa6";
// import { IoLocation } from "react-icons/io5";
// import { IoSearch, IoLocationSharp, IoLocationOutline } from "react-icons/io5";
// import { HiSparkles } from "react-icons/hi2";
// import { LuFileSpreadsheet } from "react-icons/lu";
// import back from "../assets/images/back.png";
// import niwas from "../assets/images/niwas.png";
// import dashboard from "../assets/images/dashboard.png";
// import property from "../assets/images/property.png";
// import { TbHomeSignal } from "react-icons/tb";
// import { CiMobile3 } from "react-icons/ci";
// import { FaApple } from "react-icons/fa"
// import { IoLogoGooglePlaystore } from "react-icons/io5";

// import { HiUsers } from "react-icons/hi";
// import { TfiHeadphone } from "react-icons/tfi";
// import { MdVerifiedUser } from "react-icons/md";
// import { WiTime3 } from "react-icons/wi";
// import { CircleCheckBig, Home } from 'lucide-react';

// import React from "react";
// import { FiHeadphones } from "react-icons/fi";
// import { FiUsers } from "react-icons/fi";
// import { FaHandshake, FaBuilding, FaShieldAlt } from "react-icons/fa";
//  import house from "../assets/images/house.webp"
//   import calender from "../assets/images/calender.webp"
//    import camera from "../assets/images/camera.webp"
//     import human from "../assets/images/human.webp"
//      import mic from "../assets/images/mic.webp"
//   import notes from "../assets/images/notes.webp"
// import bg from "../assets/images/bg.webp"
// import bg2 from "../assets/images/bg2.webp"
// import bg3 from "../assets/images/bg3.webp"
// const bgImages = [
//   bg,bg2,bg3
// ];

// import { Link } from "react-router-dom";

// const services = [
//   {
//     img: house,
//     title: "Home Loan Assistance",
//     desc: "Get hassle-free home loans with the best interest rates. We connect you with trusted banks and financial partners.",
//   },
//   {
//     img: camera,
//     title: "Property Photography & Videography",
//     desc: "Professional photos, videos and reels that highlight the best of your property and attract serious buyers/tenants.",
//   },
//   {
//     img: mic,
//     icon: "promotion",
//     title: "Digital Property Promotion",
//     desc: "Get maximum visibility with our digital marketing, social media promotion, featured listings and premium exposure.",
//   },
//   {
//     img: calender,
//     title: "Property Management",
//     badge: "Coming Soon",
//     desc: "End-to-end rental management, tenant tracking, maintenance coordination and rent reminders - all in one place.",
//   },
//   {
//     img: human,
//     title: "Retired Government Officers Network",
//     desc: "We onboard retired government officials as trusted DigiNiwas partners and local property advisors. A second career. A bigger purpose.",
//   },
//   {
//     img: notes,
//     title: "Documentation & Verification Support",
//     desc: "Assistance with property documentation, verification and all related legal formalities for a worry-free experience.",
//   },
// ];
 
// const stats = [
//   { icon: <FiUsers />, value: "100%", label: "Verified agents" },
//   { icon: <FaHandshake />, value: "", label: "Easy property listing" },
//   { icon: <FaBuilding />, value: "100%", label: "Genuine Leads" },
//   { icon: <FaShieldAlt />, value: "", label: "AI Powered" },
// ];
 

// // const bgImages = [
// //   "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // ];

//     const featuress = [
//          { icon: MdVerifiedUser, title: "Trusted network",  },
//          { icon: HiUsers, title: "Verified partner",},
//          { icon: WiTime3, title: "End to end support  ",  },
//          { icon: CircleCheckBig, title: "100% Genuine ", },
//        ]

// export default function HeroSection() {
//   const [currentBg, setCurrentBg] = useState(0);
//   const [fade, setFade] = useState(true);
   

//    useEffect(() => {
//       const interval = setInterval(() => {
//         setFade(false);
//         setTimeout(() => {
//           setCurrentBg((prev) => (prev + 1) % bgImages.length);
//           setFade(true);
//         }, 500);
//       }, 10000);
//       return () => clearInterval(interval);
//     }, []);


//   return (
//     <div className=" h-full font-sans bg-gradient-to-r from-transparent via-[#1c3345]/40 to-[#1c3345] lg:from-transparent lg:via-[#1c3345]/20 lg:to-[#1c3345] text-white">
//       {/* keyframes for card + stat animations */}
//       <style>{`
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(18px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes floatGlow {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           50% { transform: translate(-6px, 6px) scale(1.08); }
//         }
//         @keyframes shimmer {
//           0% { background-position: -200% 0; }
//           100% { background-position: 200% 0; }
//         }
//         .service-card {
//           animation: fadeInUp 0.6s ease both;
//         }
//         .stat-card {
//           animation: fadeInUp 0.6s ease both;
//         }
//         .stat-icon-glow {
//           animation: floatGlow 4s ease-in-out infinite;
//         }
//       `}</style>
//       {/* <Navbar /> */}
//       <Hero currentBg={currentBg} fade={fade} />
//     </div>
//   );
// }

// function Hero({ currentBg, fade }) {
//   const [showComingSoon, setShowComingSoon] = useState(false);
//   return (
//     <> 
//     <section className="relative ">
        
      
//       <div className="absolute  inset-0 bg-gradient-to-r from-transparent via-[#1c3345]/40 to-[#1c3345] lg:from-transparent lg:via-[#1c3345]/20 lg:to-[#1c3345] lg:to-[63%] " />
//         <div className="absolute inset-0 -z-20">
//         <img
//           src={bgImages[currentBg]}
//           alt=""
//           className={`w-full h-full object-cover transition-opacity duration-700 ${
//             fade ? "opacity-100" : "opacity-0"
//           }`}
//         />
//       </div>
//         <div className="relative z-10 px-5 sm:px-10 xl:max-w-7xl mx-auto flex flex-col   sm:py-12  ">
           
//           <div className="flex-1 flex flex-col  lg:flex-row items-center lg:items-center justify-evenly    pt-2 pb-6 gap-2">
//             <LeftContent />
//             <RightPhones />
//           </div>
//         </div>

// </section>
//             <section className="bg-[#274255] w-full px-4 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-16 lg:py-20">
//                <div className="max-w-7xl mx-auto gap-6 sm:gap-8 md:gap-10 lg:gap-16 flex flex-col">
//                         <div className="text-center mb-8 sm:mb-10 md:mb-12 flex flex-col gap-2   ">
//                         <h1 className="text-2xl sm:text-4xl md:text-5xl  font-bold text-white">
//                             Everything You Need.
//                         </h1>
//                         <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#33cc99] mt-1">
//                             All Under One Roof.
//                         </h2>
//                         <p className="text-gray-400 text-base md:text-lg mt-3 font- max-w-xl mx-auto px-2">
//                             Powerful services designed to support buyers, sellers, agents and investors
//                             at every step of their real estate journey.
//                         </p>
//                         </div>
                
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
//                         {services.map((s, i) => (
//                             <div
//                             key={i}
//                             style={{ animationDelay: `${i * 0.08}s` }}
//                             className="service-card group relative overflow-hidden rounded-xl p-4 sm:p-5 md:p-6 flex flex-col
//                                        bg-[#1c2f3d]/70 border border-white/10
//                                        transition-all duration-500 ease-out
//                                        hover:-translate-y-1.5
//                                        hover:bg-white/10 hover:backdrop-blur-xl hover:backdrop-saturate-150
//                                        hover:border-[#33cc99]/40
//                                        hover:shadow-[0_8px_40px_-8px_rgba(51,204,153,0.35)]"
//                             >
//                             {/* glassmorphism glow blob, only visible on hover */}
//                             <div className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#33cc99]/0 group-hover:bg-[#33cc99]/25 blur-3xl transition-all duration-700" />
//                             <div className="pointer-events-none absolute -bottom-16 -left-10 w-32 h-32 rounded-full bg-[#33cc99]/0 group-hover:bg-[#33cc99]/10 blur-3xl transition-all duration-700" />

//                             <div className="relative z-10 h-20 sm:h-24 md:h-28 flex items-center justify-center mb-3 sm:mb-4">
//                                 {s.img ? (
//                                 <img
//                                     src={s.img}
//                                     alt={s.title}
//                                     className="h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-1"
//                                 />
//                                 ) : (
//                                 <div className="flex items-center gap-2">
//                                     <FiHeadphones className="text-[#33cc99] text-3xl sm:text-4xl md:text-5xl" />
//                                 </div>
//                                 )}
//                             </div>
                
//                             <div className="relative z-10 flex items-center gap-2 mb-2 flex-wrap">
//                                 <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg transition-colors duration-300 group-hover:text-[#33cc99]">
//                                 {s.title}
//                                 </h3>
//                                 {s.badge && (
//                                 <span className="text-[10px] sm:text-xs bg-[#33cc99]/20 text-[#33cc99] px-2 py-0.5 rounded-full font-medium border border-[#33cc99]/30">
//                                     {s.badge}
//                                 </span>
//                                 )}
//                             </div>
                
//                             <p className="relative z-10 text-gray-400 text-xs sm:text-sm leading-relaxed flex-1 transition-colors duration-300 group-hover:text-gray-200">
//                                 {s.desc}
//                             </p>
                
//                             <button
//                                 onClick={() => setShowComingSoon(true)}
//                                 className="relative z-10 flex items-center gap-1 text-[#33cc99] text-xs sm:text-sm font-semibold mt-4 transition-all duration-300 group-hover:gap-2"
//                             >
//                                 Learn More
//                                 <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
//                             </button>

                  
//                             <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#33cc99] to-[#33cc99]/0 transition-all duration-500 group-hover:w-full" />
//                             </div>
//                         ))}
//                         </div>
                
//                         <div className="bg-[#1c2f3d]/70 backdrop-blur-sm border border-white/10 rounded-xl mt-6 sm:mt-8 p-4 sm:p-5 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 transition-all duration-500 hover:border-[#33cc99]/30 hover:shadow-[0_8px_30px_-10px_rgba(51,204,153,0.3)]">
//                         <div className="flex items-center gap-3 sm:gap-4 text-center sm:text-left">
//                             <div className="bg-[#33cc99]/20 p-2.5 sm:p-3 rounded-full">
//                             <FiHeadphones className="text-[#33cc99] text-lg sm:text-xl" />
//                             </div>
//                             <div>
//                             <h4 className="text-[#33cc99] font-semibold text-sm sm:text-base">
//                                 We're Here to Help You
//                             </h4>
//                             <p className="text-gray-400 text-xs sm:text-sm">
//                                 Have a question or need help with any service? Our team is just a message away.
//                             </p>
//                             </div>
//                         </div>
//                         <button className="bg-[#33cc99] text-[#0f1c26] font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg flex items-center gap-2 whitespace-nowrap transition-transform duration-300 hover:scale-105">
//                             Contact Our Team <FiArrowRight />
//                         </button>
//                         </div>
                
//                         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10">
//                         {stats.map((st, i) => (
//                             <div
//                             key={i}
//                             style={{ animationDelay: `${i * 0.12}s` }}
//                             className="stat-card group relative flex flex-col items-center text-center gap-1.5
//                                        rounded-2xl p-5 sm:p-6
//                                        bg-white/5 backdrop-blur-md border border-white/10
//                                        transition-all duration-500 ease-out
//                                        hover:-translate-y-2 hover:bg-[#33cc99]/10
//                                        hover:border-[#33cc99]/40
//                                        hover:shadow-[0_12px_40px_-12px_rgba(51,204,153,0.45)]"
//                             >
//                             <div className="relative mb-2">
//                                 <div className="stat-icon-glow absolute inset-0 rounded-full bg-[#33cc99]/25 blur-xl scale-100 group-hover:scale-150 transition-transform duration-500" />
//                                 <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#33cc99]/10 border border-[#33cc99]/30 flex items-center justify-center text-[#33cc99] text-lg sm:text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
//                                 {st.icon}
//                                 </div>
//                             </div>

//                              <div className="h-8 sm:h-10 flex items-center justify-center">
//                             {st.value && (
//                                 <p className="text-white font-bold text-sm sm:text-xl tracking-tight">
//                                 {st.value}
//                                 </p>
//                             )}
//                             </div>
//                             <p className="text-gray-400 text-sm sm:text-base transition-colors duration-300 group-hover:text-[#33cc99]">
//                                 {st.label}
//                             </p>

//                             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-[#33cc99] transition-all duration-500 group-hover:w-2/3 rounded-full" />
//                             </div>
//                         ))}
//                         </div>
//                  </div>
//             </section>
        
    

//           {showComingSoon && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">

//           <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-[fadeIn_.25s_ease]">

//             {/* Top */}

//             <div className="bg-[#0F2E46] py-8 flex justify-center">
//               <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">

//                 <div className="w-14 h-14 rounded-full bg-[#EAF7F2] flex items-center justify-center">

//                   <Home size={34} className="text-[#1CB46D]" />

//                 </div>
//               </div>
//             </div>

//             {/* Body */}

//             <div className="px-8 py-8 text-center">

//               <h2 className="text-2xl font-bold text-[#0F2E46]">
//                 Mobile App
//               </h2>

//               <h3 className="text-xl font-semibold text-[#1CB46D] mt-1">
//                 Coming Soon 🚀
//               </h3>

//               <p className="text-[#6F6F6F] text-sm leading-7 mt-5">
//                 We're building an amazing DigiNiwas mobile experience.
//                 <br />
//                 Soon you'll be able to explore properties,
//                 chat with Niwas AI and connect with verified experts
//                 directly from our app.
//               </p>

//               <button
//                 onClick={() => setShowComingSoon(false)}
//                 className="mt-8 w-full bg-[#0F2E46] hover:bg-[#173D5B] transition text-white py-3 rounded-xl font-semibold"
//               >
//                 Got it
//               </button>

//             </div>

//           </div>

//         </div>
//       )}


    
//     </>
//   );
// }

// function LeftContent() {
 
//   return (
//     <div className="flex-1  max-w-full lg:max-w-[50%] xl:max-w-[50%] text-center lg:text-left py-4 sm:py-0 ">

//       <h1 className="text-3xl sm:text-3xl md:text-4xl xl:text-6xl font-bold leading-tight mb- sm:mb-6">
//         <span className="text-white"> Diginiwas  <span className="text-[#33cc99]">Services</span></span>
      
//       </h1>
//       <h2 className="text-3xl sm:text-4xl  font-semibold leading-tight mb-4 sm:mb-6">
//         <span className=""> More than just property deals</span>
//       </h2>

//       <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
//        Be go beyond, buying, selling and renting. Diginiwas offers a renge of trusted services to make your property journey smooth, secure succesful. 
//       </p>

//          <div> 
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 max-w-xl">
//               {featuress.map((f,id) => (
//                 <div
//                   key={id}
//                   className="rounded-xl border border-[#1f3a3f] bg-[#0d2329]/60 p-3 sm:p-4 flex flex-col justify-center items-center gap-2"
//                 >
//                   <div className="w-9 h-9 hover:scale-110 duration-100 transition-all rounded-md text-[#2dd4a8] flex items-center justify-center">
//                     <f.icon size={26} />
//                   </div>
//                   <div className="text-[11px] sm:text-xs font-semibold leading-tight whitespace-nowrap">
//                     <div>{f.title}</div>
          
//                   </div>
//                 </div>
//               ))}
//             </div>
    
//           </div>
//     </div>
//   );
// }

// function RightPhones() {
//   return (
//     <div className="flex-1 flex flex-col items-center lg:items-end  w-full lg:max-w-[55%] mt-8 lg:mt-0 ">

//       <div className=" relative flex items-center justify-center w-full  max-w-5xl mx-auto h-full  sm:h-[340px] md:h-[420px] lg:h-[500px]">
//         <div
//           className=" "
//         >
//           <img
//             src={
//               "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             }
//             alt="Niwas AI"
//             className="w-full  h-96 rounded-[24px]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }






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
import { CircleCheckBig, Home } from 'lucide-react';

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
import bg from "../assets/images/bg.webp"
import bg2 from "../assets/images/bg2.webp"
import bg3 from "../assets/images/bg3.webp"
import { Smartphone, Bell , X} from "lucide-react";

// Popup
const bgImages = [
  bg,bg2,bg3
];

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
  { icon: <FiUsers />, value: "100%", label: "Verified agents" },
  { icon: <FaHandshake />, value: "", label: "Easy property listing" },
  { icon: <FaBuilding />, value: "100%", label: "Genuine Leads" },
  { icon: <FaShieldAlt />, value: "", label: "AI Powered" },
];
 

// const bgImages = [
//   "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];

    const featuress = [
         { icon: MdVerifiedUser, title: "Trusted network",  },
         { icon: HiUsers, title: "Verified partner",},
         { icon: WiTime3, title: "End to end support  ",  },
         { icon: CircleCheckBig, title: "100% Genuine ", },
       ]

export default function HeroSection() {
  const [currentBg, setCurrentBg] = useState(0);
  const [fade, setFade] = useState(true);
   

   useEffect(() => {
      const interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setCurrentBg((prev) => (prev + 1) % bgImages.length);
          setFade(true);
        }, 500);
      }, 10000);
      return () => clearInterval(interval);
    }, []);


  return (
    <div className=" h-full font-sans bg-gradient-to-r from-transparent via-[#1c3345]/40 to-[#1c3345] lg:from-transparent lg:via-[#1c3345]/20 lg:to-[#1c3345] text-white">
      {/* keyframes for card + stat animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatGlow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-6px, 6px) scale(1.08); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .service-card {
          animation: fadeInUp 0.6s ease both;
        }
        .stat-card {
          animation: fadeInUp 0.6s ease both;
        }
        .stat-icon-glow {
          animation: floatGlow 4s ease-in-out infinite;
        }
      `}</style>
      {/* <Navbar /> */}
      <Hero currentBg={currentBg} fade={fade} />
    </div>
  );
}

function Hero({ currentBg, fade }) {
  const [showComingSoon, setShowComingSoon] = useState(false);
  return (
    <> 
    <section className="relative ">
        
      
      <div className="absolute  inset-0 bg-gradient-to-r from-transparent via-[#1c3345]/40 to-[#1c3345] lg:from-transparent lg:via-[#1c3345]/20 lg:to-[#1c3345] lg:to-[63%] " />
        <div className="absolute inset-0 -z-20">
        <img
          src={bgImages[currentBg]}
          alt=""
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
        <div className="relative z-10 px-5 sm:px-10 xl:max-w-7xl mx-auto flex flex-col   sm:py-12  ">
           
          <div className="flex-1 flex flex-col  lg:flex-row items-center lg:items-center justify-evenly    pt-2 pb-6 gap-2">
            <LeftContent />
            <RightPhones />
          </div>
        </div>

</section>
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
                            style={{ animationDelay: `${i * 0.08}s` }}
                            className="service-card group relative overflow-hidden rounded-xl p-4 sm:p-5 md:p-6 flex flex-col
                                       bg-[#1c2f3d]/70 border border-white/10
                                       transition-all duration-500 ease-out
                                       hover:-translate-y-1.5
                                       hover:bg-white/10 hover:backdrop-blur-xl hover:backdrop-saturate-150
                                       hover:border-[#33cc99]/40
                                       hover:shadow-[0_8px_40px_-8px_rgba(51,204,153,0.35)]"
                            >
                            {/* glassmorphism glow blob, only visible on hover */}
                            <div className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#33cc99]/0 group-hover:bg-[#33cc99]/25 blur-3xl transition-all duration-700" />
                            <div className="pointer-events-none absolute -bottom-16 -left-10 w-32 h-32 rounded-full bg-[#33cc99]/0 group-hover:bg-[#33cc99]/10 blur-3xl transition-all duration-700" />

                            <div className="relative z-10 h-20 sm:h-24 md:h-28 flex items-center justify-center mb-3 sm:mb-4">
                                {s.img ? (
                                <img
                                    src={s.img}
                                    alt={s.title}
                                    className="h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-1"
                                />
                                ) : (
                                <div className="flex items-center gap-2">
                                    <FiHeadphones className="text-[#33cc99] text-3xl sm:text-4xl md:text-5xl" />
                                </div>
                                )}
                            </div>
                
                            <div className="relative z-10 flex items-center gap-2 mb-2 flex-wrap">
                                <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg transition-colors duration-300 group-hover:text-[#33cc99]">
                                {s.title}
                                </h3>
                                {s.badge && (
                                <span className="text-[10px] sm:text-xs bg-[#33cc99]/20 text-[#33cc99] px-2 py-0.5 rounded-full font-medium border border-[#33cc99]/30">
                                    {s.badge}
                                </span>
                                )}
                            </div>
                
                            <p className="relative z-10 text-gray-400 text-xs sm:text-sm leading-relaxed flex-1 transition-colors duration-300 group-hover:text-gray-200">
                                {s.desc}
                            </p>
                
                            <button
                                onClick={() => setShowComingSoon(true)}
                                className="relative z-10 flex items-center gap-1 text-[#33cc99] text-xs sm:text-sm font-semibold mt-4 transition-all duration-300 group-hover:gap-2"
                            >
                                Learn More
                                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </button>

                  
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#33cc99] to-[#33cc99]/0 transition-all duration-500 group-hover:w-full" />
                            </div>
                        ))}
                        </div>
                
                        <div className="bg-[#1c2f3d]/70 backdrop-blur-sm border border-white/10 rounded-xl mt-6 sm:mt-8 p-4 sm:p-5 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 transition-all duration-500 hover:border-[#33cc99]/30 hover:shadow-[0_8px_30px_-10px_rgba(51,204,153,0.3)]">
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
                        <button className="bg-[#33cc99] text-[#0f1c26] font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg flex items-center gap-2 whitespace-nowrap transition-transform duration-300 hover:scale-105">
                            Contact Our Team <FiArrowRight />
                        </button>
                        </div>
                
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10">
                        {stats.map((st, i) => (
                            <div
                            key={i}
                            style={{ animationDelay: `${i * 0.12}s` }}
                            className="stat-card group relative flex flex-col items-center text-center gap-1.5
                                       rounded-2xl p-5 sm:p-6
                                       bg-white/5 backdrop-blur-md border border-white/10
                                       transition-all duration-500 ease-out
                                       hover:-translate-y-2 hover:bg-[#33cc99]/10
                                       hover:border-[#33cc99]/40
                                       hover:shadow-[0_12px_40px_-12px_rgba(51,204,153,0.45)]"
                            >
                            <div className="relative mb-2">
                                <div className="stat-icon-glow absolute inset-0 rounded-full bg-[#33cc99]/25 blur-xl scale-100 group-hover:scale-150 transition-transform duration-500" />
                                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#33cc99]/10 border border-[#33cc99]/30 flex items-center justify-center text-[#33cc99] text-lg sm:text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                                {st.icon}
                                </div>
                            </div>

                             <div className="h-8 sm:h-10 flex items-center justify-center">
                            {st.value && (
                                <p className="text-white font-bold text-sm sm:text-xl tracking-tight">
                                {st.value}
                                </p>
                            )}
                            </div>
                            <p className="text-gray-400 text-sm sm:text-base transition-colors duration-300 group-hover:text-[#33cc99]">
                                {st.label}
                            </p>

                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-[#33cc99] transition-all duration-500 group-hover:w-2/3 rounded-full" />
                            </div>
                        ))}
                        </div>
                 </div>
            </section>
        
    

          {showComingSoon && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">

          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-[fadeIn_.25s_ease]">

            {/* Top */}

            <div className="bg-[#0F2E46] py-8 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">

                <div className="w-14 h-14 rounded-full bg-[#EAF7F2] flex items-center justify-center">

                  <Home size={34} className="text-[#1CB46D]" />

                </div>
              </div>
            </div>

            {/* Body */}

            {/* <div className="px-8 py-8 text-center">

              <h2 className="text-2xl font-bold text-[#0F2E46]">
                Mobile App
              </h2>

              <h3 className="text-xl font-semibold text-[#1CB46D] mt-1">
                Coming Soon 🚀
              </h3>

              <p className="text-[#6F6F6F] text-sm leading-7 mt-5">
                We're building an amazing DigiNiwas mobile experience.
                <br />
                Soon you'll be able to explore properties,
                chat with Niwas AI and connect with verified experts
                directly from our app.
              </p>

              <button
                onClick={() => setShowComingSoon(false)}
                className="mt-8 w-full bg-[#0F2E46] hover:bg-[#173D5B] transition text-white py-3 rounded-xl font-semibold"
              >
                Got it
              </button>

            </div> */}




{showComingSoon && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out] p-4"
    onClick={() => setShowComingSoon(false)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-2xl overflow-hidden rounded-3xl p-[2px] shadow-2xl animate-[popIn_0.3s_cubic-bezier(0.34,1.56,0.64,1)]"
      style={{
        background: "linear-gradient(135deg, #1CB46D, #274255, #1CB46D)",
      }}
    >
      {/* Animated gradient background card */}
      <div
        className="relative overflow-hidden rounded-[calc(1.5rem-2px)] px-8 py-8 text-center"
        style={{
          background:
            "linear-gradient(-45deg, #0F2E46, #1CB46D, #173D5B, #0F2E46)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 8s ease infinite",
        }}
      >
        {/* Glass overlay on top of gradient */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(2px)",
          }}
        />

        {/* Floating glow blobs for extra depth */}
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#1CB46D]/30 blur-3xl animate-pulse [animation-delay:1s]" />

        {/* Close button */}
        <button
          onClick={() => setShowComingSoon(false)}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/20 hover:text-white"
        >
          <X size={16} />
        </button>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon badge */}
          {/* <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 shadow-lg">
            <Smartphone size={26} className="text-white" strokeWidth={2} />
          </div> */}

       

          {/* Heading */}
          <h2 className="mt-4 text-2xl font-bold text-white">
            Mobile App
          </h2>

   {/* Badge pill */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-semibold text-white mt-2">
            <Bell size={12} /> Launching Soon
          </span>
          {/* <h3 className="mt-1 flex items-center justify-center gap-1.5 text-lg font-semibold text-[#e8fff2]">
            Coming Soon <span className="inline-block animate-bounce">🚀</span>
          </h3> */}

          {/* Description */}
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/80">
            We're building an amazing DigiNiwas mobile experience. Soon you'll
            be able to explore properties, chat with Niwas AI, and connect
            with verified experts — directly from our app.
          </p>

          {/* Feature chips */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {["Explore Properties", "Chat with AI", "Verified Experts"].map((f) => (
              <span
                key={f}
                className="rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-white"
              >
                {f}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => setShowComingSoon(false)}
            className="mt-6 rounded-xl bg-white px-10 py-3 font-semibold text-[#0F2E46] shadow-md transition-all hover:bg-[#e8fff2] hover:shadow-lg active:scale-[0.98]"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  </div>
)}

{/* Animations */}
<style>{`
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes popIn {
    from { opacity: 0; transform: scale(0.85) translateY(10px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`}</style>
          </div>

        </div>
      )}


    
    </>
  );
}

function LeftContent() {
 
  return (
    <div className="flex-1  max-w-full lg:max-w-[50%] xl:max-w-[50%] text-center lg:text-left py-4 sm:py-0 ">

      <h1 className="text-3xl sm:text-3xl md:text-4xl xl:text-6xl font-bold leading-tight mb- sm:mb-6">
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