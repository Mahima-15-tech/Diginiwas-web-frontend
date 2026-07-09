// import { useState, useEffect, useRef } from "react";
// import { FiSearch, FiArrowRight, FiMapPin } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import axios from "../../api/axios";
// import MapSection from './MapSection'
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
// import { FaHouseCircleCheck, FaAngleDown } from "react-icons/fa6";
// import { IoLocation } from "react-icons/io5";
// import { IoSearch, IoLocationSharp, IoLocationOutline } from "react-icons/io5";
// import { HiSparkles } from "react-icons/hi2";
// import { LuFileSpreadsheet } from "react-icons/lu";
// import back from "../../assets/images/back.png";
// import niwas from "../../assets/images/niwas.png";
// import dashboard from "../../assets/images/dashboard.png";
// import property from "../../assets/images/property.png";
// import { TbHomeSignal } from "react-icons/tb";
// import { CiMobile3 } from "react-icons/ci";
// import { FaApple } from "react-icons/fa"
// import { IoLogoGooglePlaystore } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import bg from "../../assets/images/bg.webp"
// import bg2 from "../../assets/images/bg2.webp"
// import bg3 from "../../assets/images/bg3.webp"
// const bgImages = [
//   bg,bg2,bg3
// ];

// export default function HeroSection() {

//   const [heroData, setHeroData] = useState(null);
//   const navigate = useNavigate();
//   const [currentBg, setCurrentBg] = useState(0);
//   const [fade, setFade] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(false);
//       setTimeout(() => {
//         setCurrentBg((prev) => (prev + 1) % bgImages.length);
//         setFade(true);
//       }, 500);
//     }, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     getHeroSection();
//   }, []);

//   const getHeroSection = async () => {
//     try {
//       const res = await axios.get("/cms/hero");

//       setHeroData(res.data.hero);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const targetAgents =
//     parseInt(heroData?.verifiedAgents) || 150;

//   const targetProperties =
//     parseInt(heroData?.propertiesListed) || 500;

//   const targetCustomers =
//     parseInt(heroData?.happyCustomers) || 1000;

//   const targetLocalities =
//     parseInt(heroData?.localitiesCovered) || 25;

//   return (
//     <div className="sm:min-h-screen h-full font-sans bg-[#0d1b2a] text-white">
//       {/* <Navbar /> */}
//       <Hero
//         currentBg={currentBg}
//         fade={fade}
//         heroData={heroData}
//       />
//     </div>
//   );
// }

// // function Hero({ currentBg, fade, heroData }) {
// //   return (
// //     <section className="relative sm:min-h-screen overflow-hidden py-5 sm:py-0 px-5">
// //       <div
// //         className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
// //         style={{
// //           backgroundImage: `url(${bgImages[currentBg]})`,
// //           opacity:  1,
// //         }}
// //       />
// //       <div className="absolute inset-0 bg-gradient-to-r from-[#274255]/95 via-[#274255]/60 to-transparent " />
// //       <div className=" ">
// //         <div className="relative z-10 flex flex-col  sm:py-10  ">
// //           {/* <div className="flex-1 flex flex-col  lg:flex-row items-center lg:items-end justify-between px-4 sm:px-6 lg:px-10 xl:px-14 pt-8 sm:pt-12 lg:pt-16 pb-6 gap-8 lg:gap-4">
    
// //             <LeftContent heroData={heroData} />
// //             <RightPhones heroData={heroData} />
// //           </div> */}
// //           <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-14 pt-8 sm:pt-12 lg:pt-16 pb-6 gap-10">
// //           <LeftContent heroData={heroData} />
// //           <RightPhones heroData={heroData} />
// //         </div>
// //           <div className="flex flex-row justify-center px-4 sm:px-6 lg:px-10 xl:px-14 ">
// //             <StatsBar heroData={heroData} />
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// function Hero({ currentBg, fade, heroData }) {
//   return (
//     <section className="relative sm:min-h-screen overflow-hidden py-5 sm:py-0 px-5 bg-[#1c3345]">
//       {/* Background Image Carousel - Half se zyada area cover karega (65% width) */}
//       <div
//         className="absolute top-0 left-0 h-full w-full lg:w-[65%] bg-cover bg-center transition-all duration-1000"
//         style={{
//           backgroundImage: `url(${bgImages[currentBg]})`,
//           opacity: 1, // Opacity low rakhi hai jisse text clean dikhe
//         }}
//       />
      
//       {/* Smooth Gradient Overlay - Jo image ko exact phone ke pehle pure solid color me convert kar dega */}
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1c3345]/40 to-[#1c3345] lg:from-transparent lg:via-[#1c3345]/20 lg:to-[#1c3345] lg:to-[63%]" />

//       <div className="relative z-10">
//         <div className="flex flex-col sm:py-10">
//           <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-14 pt-8 sm:pt-12 lg:pt-16 pb-6 gap-10 mt-10">
//             <LeftContent heroData={heroData} />
//             <RightPhones heroData={heroData} />
//           </div>
//           <div className="flex flex-row justify-center px-4 sm:px-6 lg:px-10 xl:px-14">
//             <StatsBar heroData={heroData} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function LeftContent({ heroData }) {

//   const [btn, setBtn] = useState('search')
// const [location, setLocation] = useState("");
// const navigate = useNavigate();

// const handleSearch = () => {
//   if (!location.trim()) return;
//   navigate(`/explore-property?city=${encodeURIComponent(location.trim())}`);
// };
//   return (
//     <div className="flex-1  max-w-full lg:max-w-[50%] xl:max-w-[50%] text-center lg:text-left ">
//       <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 mb-4 sm:mb-6">
//         <MdLocationOn className="text-[#00d9a6] text-sm" />
//         <span className="text-white text-xs sm:text-sm font-medium">
//           अपना Shahr, अपना Platform.
//         </span>
//       </div>

//       {/* <h1 className="text-3xl sm:text-3xl md:text-4xl xl:text-5xl font-black leading-tight mb-4 sm:mb-6">
//         <span className="text-[#33cc99]">Ghar</span>
//         <span className="text-white"> ki Talaash bhi,</span>
//         <br />
//         <span className="text-[#33cc99]">Vishwas</span>
//         <span className="text-white"> bhi.</span>
//       </h1> */}
//       <h1 className="text-3xl sm:text-3xl md:text-4xl xl:text-5xl font-black leading-tight mb-4 sm:mb-6">
//         <span className="text-[#33cc99]">
//           {heroData?.headingLine1 || "Ghar ki Talaash bhi,"}
//         </span>

//         <br />

//         <span className="text-white">
//           {heroData?.headingLine2 || "Vishwas bhi."}
//         </span>
//       </h1>
//       <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
//         Buy, Rent, Sell ya Lease — DigiNiwas aur Niwas AI ke saath property
//         dhoondhna ab hua simple.
//       </p>

//       <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10">
//         <Link to="/explore-property">
//           <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-white/20 transition-all text-sm sm:text-base">
//             Explore Properties <FiArrowRight />
//           </button>
//         </Link>
//         <Link to="/niwas-ai">
//           <button className="flex items-center gap-2 bg-[#33cc99] text-[#0d1b2a] font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-[#33cc99] transition-all text-sm sm:text-base">
//             Try Niwas AI <HiSparkles />
//           </button>
//         </Link>
//       </div>


//       <div className="w-full max-w-5xl mx-auto lg:mx-0 bg-[#274255] border border-white/20 rounded-2xl overflow-hidden shadow-lg">
//         <div className="flex flex-col xl:flex-row items-stretch sm:items-center gap-0 sm:gap-2  ite">
//           <div className="px-2 pt-5 pb-4   ite">
//             <h2 className="text-2xl md:text-3xl font-semibold text-white whitespace-nowrap">
//               Find Your Perfect Property
//             </h2>

//             <p className="text-white/70 text-sm md:text-base mt-2">
//               Search, Buy, Rent, Lease – Your Next Move Starts Here
//             </p>
//           </div>

//           <div className="px-3 xl:pt-4 pb-4">
//             <div className="flex  flex-row w-full justify-evenly  rounded-xl overflow-hidden border border-white/20  ">
//               <button className={`text-white px-4 py-3  ${btn === 'search' ? 'bg-[#33cc99]' : 'bg-[#274255]'}   font-semibold flex items-center justify-center gap-2`}>
//                 Buy/Sell
//               </button>

//               <button onClick={() => { setBtn('rent') }} className={`text-white px-4 py-3  ${btn === 'rent' ? 'bg-[#33cc99]' : 'bg-[#274255]'}   font-semibold flex items-center justify-center gap-2`}>
//                 <LuFileSpreadsheet /> Rent
//               </button>

//               <button onClick={() => { setBtn('lease') }} className={`text-white px-4 py-3  ${btn === 'lease' ? 'bg-[#33cc99]' : 'bg-[#274255]'}   font-semibold flex items-center justify-center gap-2`}>
//                 <TbHomeSignal />
//                 Lease
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-white/10"></div>

//         <div className="p-5">
//           <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
//             <div className="flex-1 relative">
//               <IoLocationOutline className="absolute left-0 top-1 text-[#33cc99] text-2xl" />

//               <div className="pl-10">
//                 <p className="text-white text-left font-medium">
//                   Enter Location
//                 </p>

//                 {/* <input
//                   type="text"
//                   placeholder="e.g., Ambala, Haryana"
//                   className="w-full bg-transparent text-white/70 placeholder:text-white/50 outline-none mt-1"
//                 /> */}
//                 <input
//   type="text"
//   value={location}
//   onChange={(e) => setLocation(e.target.value)}
//   onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//   placeholder="e.g., Jaipur"
//   className="w-full bg-transparent text-white/70 placeholder:text-white/50 outline-none mt-1"
// />
//               </div>
//             </div>

//             <div className="hidden lg:block h-14 w-px bg-white/20"></div>

//             <div className="flex-1 relative">
//               <FaHouseCircleCheck className="absolute left-0 top-1 text-[#33cc99] text-2xl" />

//               <div className="pl-10">
//                 <p className="text-white text-left font-medium">
//                   Property Type
//                 </p>
//                 <div className="relative mt-2">
//                   <select className="w-full bg-transparent text-white/70 outline-none appearance-none cursor-pointer mt-1">
//                     <option className="text-black">
//                       Select Property Type
//                     </option>
//                     <option className="text-black">House</option>
//                     <option className="text-black">Flat</option>
//                     <option className="text-black">Commercial</option>
//                   </select>
//                   <FaAngleDown className="absolute right-0 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none" />
//                 </div>
//               </div>
//             </div>

//             {/* <button className="bg-[#33cc99] hover:bg-[#2fc18f] transition-all px-8 py-4 rounded-xl flex items-center justify-center gap-2 text-white font-semibold whitespace-nowrap">
//               <IoSearch className="text-lg text-white" />
//               Search
//             </button> */}
//             <button
//   onClick={handleSearch}
//   className="bg-[#33cc99] hover:bg-[#2fc18f] transition-all px-8 py-4 rounded-xl flex items-center justify-center gap-2 text-white font-semibold whitespace-nowrap"
// >
//   <IoSearch className="text-lg text-white" />
//   Search
// </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function RightPhones({ heroData }) {
//   return (
//     <div className="flex-1 hidden md:flex flex-col items-center lg:items-end  w-full lg:max-w-[55%] mt-8 lg:mt-0 ">


//       <div className=" relative flex items-end justify-center w-full  max-w-5xl mx-auto h-full  sm:h-[340px] md:h-[420px] lg:h-[500px]">
//         <div
//           className="
//     absolute
//     left-[5%]
//     sm:left-[8%]
//     md:left-[20%]
//     lg:left-[12%]
//     bottom-10
//     z-20
//     w-32
//     sm:w-40
//     md:w-56
//     lg:w-60
//     xl:w-72
//     -rotate-6
//      hover:scale-110
//      hover:rotate-0
//       transition-all
//     duration-500
//     ease-out
//     drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)] [transform:perspective(700px)_rotateY(-20deg)]
//        hover:[transform:perspective(700px)_rotateY(0deg)]
//   "
//         >
//           <img
//             src={
//               heroData?.heroImage1?.url ||
//               niwas
//             }
//             alt="Niwas AI"
//             className="w-full h-auto rounded-[24px]"
//           />
//         </div>

//         <div
//           className="
//     absolute
//     left-[40%]
//     md:left-[42%]
//     -translate-x-1/2
//     bottom-10    z-10
//     w-36
//     sm:w-44
//     md:w-48
//     lg:w-52
//     xl:w-64
//     rotate-[3deg]
//      hover:scale-105
//      hover:rotate-0
//       transition-all
//     duration-500
//     ease-out
//     drop-shadow-[0_35px_70px_rgba(0,0,0,0.4)] [transform:perspective(1200px)_rotateY(25deg)]
//     hover:[transform:perspective(1200px)_rotateY(0deg)]
//   "
//         >
//           <img
//             src={
//               heroData?.heroImage2?.url ||
//               property
//             }
//             alt="Property Details"
//             className="w-full h-auto rounded-[28px]"
//           />
//         </div>

//         <div
//           className="
//     absolute
//     right-[5%]
//     sm:right-[8%]
//     md:right-[22%]
//     lg:right-[6%]
//     bottom-20
//     z-0
//     w-32
//     sm:w-40
//     md:w-40
//     lg:w-44
//     xl:w-56
//     rotate-[10deg]
//     hover:scale-105
//      hover:rotate-0
//       transition-all
//     duration-500
//     ease-out
//     drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)] [transform:perspective(700px)_rotateY(25deg)]
//     hover:[transform:perspective(1200px)_rotateY(0deg)]
//   "
//         >
//           <img
//             src={
//               heroData?.heroImage3?.url ||
//               dashboard
//             }
//             alt="Dashboard"
//             className="w-full h-auto rounded-[24px]"
//           />
//         </div>
//       </div>

//       {/* <div>
//         <div className="flex gap-3 pt-5">
//           <button
//             id="download-app-btn"
//             className="border border-white px-3 py-2 rounded-xl"
//             onClick={() =>
//               window.open(
//                 "https://play.google.com/store/apps/details?id=com.whatsapp",
//                 "_blank"
//               )
//             }
//           >
//             Get it on
//             <div className="text-lg flex items-center gap-2">  <IoLogoGooglePlaystore className="text-2xl" />Play Store</div>
//           </button>
//           <button
//             id="download-app-btn"
//             className="border border-white px-3 py-2 rounded-xl"
//             onClick={() =>
//               window.open(
//                 "https://apps.apple.com/app/id310633997",
//                 "_blank"
//               )
//             }
//           >
//             Download on the
//             <div className="text-lg flex items-center gap-2"> <FaApple className="text-2xl" />  App Store</div>
//           </button>
//         </div>
//         <div className="flex items-center text-center justify-center mx-auto pt-2">
//           <span className=""> Coming soon</span>
//         </div>
//       </div> */}
//       <div className="mt-8 ">
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

//           {/* Play Store */}
//           <button
//             id="download-playstore-btn"
//             onClick={() =>
//               window.open(
//                 "https://play.google.com/store/apps/details?id=com.whatsapp",
//                 "_blank"
//               )
//             }
//             className="group w-54 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-2 transition-all duration-300 hover:bg-white/20 hover:border-[#33cc99] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
//           >
//             <div className="flex items-center gap-4">
//               <div className="w-14 h-14 rounded-xl bg-[#33cc99] flex items-center justify-center shadow-lg">
//                 <IoLogoGooglePlaystore className="text-3xl text-[#274255]" />
//               </div>

//               <div className="text-left">
//                 <p className="text-xs text-white/70 uppercase tracking-wider">
//                   Get it on
//                 </p>
//                 <h3 className="text-lg font-bold text-white group-hover:text-[#33cc99] transition-colors">
//                   Google Play
//                 </h3>
//               </div>
//             </div>
//           </button>

//           {/* App Store */}
//           <button
//             id="download-appstore-btn"
//             onClick={() =>
//               window.open(
//                 "https://apps.apple.com/app/id310633997",
//                 "_blank"
//               )
//             }
//             className="group w-54 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-2 transition-all duration-300 hover:bg-white/20 hover:border-[#33cc99] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
//           >
//             <div className="flex items-center gap-4">
//               <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-lg">
//                 <FaApple className="text-3xl text-black" />
//               </div>

//               <div className="text-left">
//                 <p className="text-xs text-white/70 uppercase tracking-wider">
//                   Download on the
//                 </p>
//                 <h3 className="text-lg font-bold text-white group-hover:text-[#33cc99] transition-colors">
//                   App Store
//                 </h3>
//               </div>
//             </div>
//           </button>
//         </div>

//         {/* Coming Soon */}
//         {/* <div className="flex justify-center mt-5">
//           <span className="inline-flex items-center gap-2 bg-[#33cc99]/15 border border-[#33cc99]/40 text-[#33cc99] px-5 py-2 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm">
//             <span className="w-2 h-2 rounded-full bg-[#33cc99] animate-pulse"></span>
//             Mobile Apps Coming Soon
//           </span>
//         </div> */}
//         <div className="flex justify-center mt-6">
//   <div className="group flex items-center gap-4 px-5 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg hover:border-[#33cc99] transition-all duration-300">

//     <div className="flex -space-x-2">
//       <div className="w-10 h-10 rounded-full bg-[#33cc99] flex items-center justify-center">
//         <IoLogoGooglePlaystore className="text-[#274255] text-xl" />
//       </div>

//       <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-[#274255]">
//         <FaApple className="text-black text-xl" />
//       </div>
//     </div>

//     <div>
//       <p className="text-white font-semibold text-sm">
//         Mobile App Coming Soon
//       </p>

//       <p className="text-white/60 text-xs">
//         Android & iOS
//       </p>
//     </div>

//     <span className="w-2.5 h-2.5 rounded-full bg-[#33cc99] animate-pulse"></span>

//   </div>
// </div>
//       </div>
//     </div>
//   );
// }

// function PhoneNiwasAI() {
//   return (
//     <div className="w-24 sm:w-32 md:w-36 lg:w-40 xl:w-44  rounded-2xl sm:rounded-3xl  overflow-hidden shadow-2xl flex-shrink-0 self-end mb-4 sm:mb-6">
//       <img src={niwas} className="" />
//     </div>
//   );
// }

// function PhonePropertyDetails() {
//   return (
//     <div className="w-28 sm:w-36 md:w-40 lg:w-44 xl:w-48  rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 z-10">
//       <img src={property} className="" />
//     </div>
//   );
// }

// function PhoneDashboard() {
//   return (
//     <div className="w-24 sm:w-32 md:w-36 lg:w-40 xl:w-44  rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 self-end mb-4 sm:mb-6">
//       <img src={dashboard} className="" />
//     </div>
//   );
// }



// function StatsBar({ heroData }) {

//   const navigate = useNavigate();
//   const sectionRef = useRef(null);

//   const targetAgents =
//     parseInt(heroData?.verifiedAgents) || 150;

//   const targetProperties =
//     parseInt(heroData?.propertiesListed) || 500;

//   const targetCustomers =
//     parseInt(heroData?.happyCustomers) || 1000;

//   const targetLocalities =
//     parseInt(heroData?.localitiesCovered) || 25;

//   const [startCounter, setStartCounter] = useState(false);

//   const [stats, setStats] = useState({
//     agents: 0,
//     properties: 0,
//     customers: 0,
//     localities: 0,
//   });

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setStartCounter(true);
//           observer.disconnect();
//         }
//       },
//       {
//         threshold: 0.3,
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   // Counter Animation
//   useEffect(() => {
//     if (!startCounter) return;

//     const interval = setInterval(() => {
//       setStats((prev) => ({
//         agents:
//           prev.agents < targetAgents
//             ? Math.min(prev.agents + 3, targetAgents)
//             : targetAgents,

//         properties:
//           prev.properties < targetProperties
//             ? Math.min(prev.properties + 10, targetProperties)
//             : targetProperties,

//         customers:
//           prev.customers < targetCustomers
//             ? Math.min(prev.customers + 20, targetCustomers)
//             : targetCustomers,

//         localities:
//           prev.localities < targetLocalities
//             ? Math.min(prev.localities + 1, targetLocalities)
//             : targetLocalities,
//       }));
//     }, 20);

//     return () => clearInterval(interval);

//   }, [
//     startCounter,
//     targetAgents,
//     targetProperties,
//     targetCustomers,
//     targetLocalities,
//   ]);
//   return (
//     <div ref={sectionRef} className="mb-0  sm:mb-8  py-4  flex  flex-col lg:flex-row w-full items-center gap-4 lg:items-stretch md:justify-between ">
//       <div className="bg-white/80 w-full sm:w-[60%] lg:w-[50%] rounded-3xl px-2 py-3 lg:py-0 gap-5 items-center grid grid-cols-2 sm:grid-cols-4">
//         {[
//           {
//             icon: <MdPerson className="text-[#0d1b2a] text-xl sm:text-2xl" />,
//             num: heroData?.verifiedAgents || `${stats.agents}+`,
//             label: "Verified Agents",
//           },
//           {
//             icon: <MdHome className="text-[#0d1b2a] text-xl sm:text-2xl" />,
//             num: heroData?.propertiesListed || `${stats.properties}+`,
//             label: "Properties Listed",
//           },
//           {
//             icon: <MdGroups className="text-[#0d1b2a] text-xl sm:text-2xl" />,
//             num: heroData?.happyCustomers || `${stats.customers}+`,
//             label: "Happy Customers",
//           },
//           {
//             icon: (
//               <MdLocationOn className="text-[#0d1b2a] text-xl sm:text-2xl" />
//             ),
//             num: heroData?.localitiesCovered || `${stats.localities}+`,
//             label: "Localities Covered",
//           },
//         ].map(({ icon, num, label }) => (
//           <div
//             key={label}
//             className="flex flex-col items-center gap-2 space-x-3"
//           >
//             <div>{icon}</div>

//             <div className="flex flex-col items-center">
//               <p className="text-[#0d1b2a] font-black text-sm sm:text-lg lg:text-xl leading-tight">
//                 {num}
//               </p>

//               <p className="text-gray-500 text-center text-xs font-medium leading-tight">
//                 {label}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="grid grid-cols-2  gap-2 sm:gap-3 w-full   sm:max-w-sm lg:max-w-md  ">
//         {[
//           {
//             icon: <MdSmartToy className="text-[#00d9a6] text-xl" />,
//             title: "AI Powered",
//             sub: "Search",
//             path: "/niwas-ai"
//           },
//           {
//             icon: <MdGroups className="text-[#00d9a6] text-xl" />,
//             title: "100%",
//             sub: "Verified Agents",
//             path: "/explore-property"
//           },
//           {
//             icon: <MdApartment className="text-[#00d9a6] text-xl" />,
//             // title: "500+",
//             title: "Easy property Listing",
//             sub: "",
//             path: "/agent-corner"
//           },
//           {
//             icon: <MdCheckCircle className="text-[#00d9a6] text-xl" />,
//             title: "100%",
//             sub: "Genuine Leads",
//             path: "/agent-corner"
//           }
//         ].map(({ icon, title, sub, path }) => (
//           <div
//             key={title + sub}
//             onClick={() => navigate(path)}
//             className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm border
//                         border-white/20 rounded-lg px-3 py-2 sm:px-4 sm:py-3 cursor-pointer
//                         transition-all duration-300 hover:scale-110 hover:shadow-xl"
//           >
//             {icon}
//             <div className="">
//               <div className="text-[#0d1b2a] font-medium  text-xs sm:text-sm">
//                 {title}
//               </div>
//               <div className="text-[#0d1b2a] font-medium text-xs">{sub}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }







import { useState, useEffect, useRef } from "react";
import { FiSearch, FiArrowRight, FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import MapSection from './MapSection'
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
import { FaHouseCircleCheck, FaAngleDown } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { IoSearch, IoLocationSharp, IoLocationOutline } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi2";
import { LuFileSpreadsheet } from "react-icons/lu";
import back from "../../assets/images/back.png";
import niwas from "../../assets/images/niwas.png";
import dashboard from "../../assets/images/dashboard.png";
import property from "../../assets/images/property.png";
import { TbHomeSignal } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import { FaApple } from "react-icons/fa"
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Link } from "react-router-dom";
import bg from "../../assets/images/bg.webp"
import bg2 from "../../assets/images/bg2.webp"
import bg3 from "../../assets/images/bg3.webp"


import ComingSoonVideo from "../../components/common/ComingSoonVideo"

const bgImages = [
  bg,bg2,bg3
];


export default function HeroSection() {

  const [heroData, setHeroData] = useState(null);
  const [currentBg, setCurrentBg] = useState(0);
  const [fade, setFade] = useState(true);

  // 🔽 NEW: searched city state + ref to scroll into MapSection
  const [searchCity, setSearchCity] = useState("");
  const mapSectionRef = useRef(null);

  const handlePropertySearch = (city) => {
    setSearchCity(city);
    mapSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

  useEffect(() => {
    getHeroSection();
  }, []);

  const getHeroSection = async () => {
    try {
      const res = await axios.get("/cms/hero");
      setHeroData(res.data.hero);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sm:min-h-screen h-full font-sans bg-[#0d1b2a] text-white">
      <Hero
        currentBg={currentBg}
        fade={fade}
        heroData={heroData}
        onSearch={handlePropertySearch}
      />

      {/* 🔽 NEW: MapSection ab yahi page pe render hoga */}
      <div ref={mapSectionRef}>
        <MapSection searchCity={searchCity} />
      </div>
    </div>
  );
}

function Hero({ currentBg, fade, heroData, onSearch }) {
  return (
    <section className="relative sm:min-h-screen overflow-hidden py-5 sm:py-0 px-5 bg-[#1c3345]">
      <div
        className="absolute top-0 left-0 h-full w-full lg:w-[65%] bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${bgImages[currentBg]})`,
          opacity: 1,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1c3345]/40 to-[#1c3345] lg:from-transparent lg:via-[#1c3345]/20 lg:to-[#1c3345] lg:to-[63%]" />

      <div className="relative z-10">
        <div className="flex flex-col sm:py-10">
          <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-14 pt-8 sm:pt-12 lg:pt-16 pb-6 gap-10 mt-10">
            <LeftContent heroData={heroData} onSearch={onSearch} />
            <RightPhones heroData={heroData} />
          </div>
          <div className="flex flex-row justify-center px-4 sm:px-6 lg:px-10 xl:px-14">
            <StatsBar heroData={heroData} />
          </div>
        </div>
      </div>
    </section>
  );
}

function LeftContent({ heroData, onSearch }) {

  const [btn, setBtn] = useState('search')
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    if (!location.trim()) return;
    onSearch?.(location.trim());
  };

  return (
    <div className="flex-1  max-w-full lg:max-w-[50%] xl:max-w-[50%] text-center lg:text-left ">
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 mb-4 sm:mb-6">
        <MdLocationOn className="text-[#00d9a6] text-sm" />
        <span className="text-white text-md sm:text-sm font-semibold">
          {/* अपना Shahr, अपना Platform. */}
          APNA शहर, …अपना  PLATFORM  
        </span>
      </div>

      <h1 className="text-3xl sm:text-3xl md:text-4xl xl:text-5xl font-black leading-tight mb-4 sm:mb-6">
        <span className="text-[#33cc99]">
          {heroData?.headingLine1 || "Ghar ki Talaash bhi,"}
        </span>
        <br />
        <span className="text-white">
          {heroData?.headingLine2 || "Vishwas bhi."}
        </span>
      </h1>
      <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
        Buy, Rent, Sell ya Lease — DigiNiwas aur Niwas AI ke saath property
        dhoondhna ab hua simple.
      </p>

      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10">
        <Link to="/explore-property">
          <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-white/20 transition-all text-sm sm:text-base">
            Explore Properties <FiArrowRight />
          </button>
        </Link>
        <Link to="/niwas-ai">
          <button className="flex items-center gap-2 bg-[#33cc99] text-[#0d1b2a] font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-[#33cc99] transition-all text-sm sm:text-base">
            Try Niwas AI <HiSparkles />
          </button>
        </Link>
      </div>

      {/* 🔧 FIXED: ab ye section hamesha column me hi rahega, isliye content overlap/cut nahi hoga */}
      <div className="w-full max-w-5xl mx-auto lg:mx-0 bg-[#274255] border border-white/20 rounded-2xl overflow-hidden shadow-lg">
        <div className="flex flex-col items-stretch gap-2">
          <div className="px-4 pt-5 pb-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Find Your Perfect Property
            </h2>

            <p className="text-white/70 text-sm md:text-base mt-2">
              Search, Buy, Rent, Lease – Your Next Move Starts Here
            </p>
          </div>

          <div className="px-3 pb-4">
            <div className="flex flex-wrap flex-row w-full justify-evenly rounded-xl overflow-hidden border border-white/20">
              <button
                onClick={() => setBtn('search')}
                className={`flex-1 min-w-[100px] text-white px-4 py-3 ${btn === 'search' ? 'bg-[#33cc99]' : 'bg-[#274255]'} font-semibold flex items-center justify-center gap-2`}
              >
                Buy/Sell
              </button>

              <button
                onClick={() => setBtn('rent')}
                className={`flex-1 min-w-[100px] text-white px-4 py-3 ${btn === 'rent' ? 'bg-[#33cc99]' : 'bg-[#274255]'} font-semibold flex items-center justify-center gap-2`}
              >
                <LuFileSpreadsheet /> Rent
              </button>

              <button
                onClick={() => setBtn('lease')}
                className={`flex-1 min-w-[100px] text-white px-4 py-3 ${btn === 'lease' ? 'bg-[#33cc99]' : 'bg-[#274255]'} font-semibold flex items-center justify-center gap-2`}
              >
                <TbHomeSignal />
                Lease
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10"></div>

        <div className="p-5">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
            <div className="flex-1 relative">
              <IoLocationOutline className="absolute left-0 top-1 text-[#33cc99] text-2xl" />
              <div className="pl-10">
                <p className="text-white text-left font-medium">
                  Enter Location
                </p>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="e.g., Jaipur"
                  className="w-full bg-transparent text-white/70 placeholder:text-white/50 outline-none mt-1"
                />
              </div>
            </div>

            <div className="hidden lg:block h-14 w-px bg-white/20"></div>

            <div className="flex-1 relative">
              <FaHouseCircleCheck className="absolute left-0 top-1 text-[#33cc99] text-2xl" />
              <div className="pl-10">
                <p className="text-white text-left font-medium">
                  Property Type
                </p>
                <div className="relative mt-2">
                  <select className="w-full bg-transparent text-white/70 outline-none appearance-none cursor-pointer mt-1">
                    <option className="text-black">
                      Select Property Type
                    </option>
                    <option className="text-black">House</option>
                    <option className="text-black">Flat</option>
                    <option className="text-black">Commercial</option>
                  </select>
                  <FaAngleDown className="absolute right-0 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none" />
                </div>
              </div>
            </div>

            <button
              onClick={handleSearch}
              className="bg-[#33cc99] hover:bg-[#2fc18f] transition-all px-8 py-4 rounded-xl flex items-center justify-center gap-2 text-white font-semibold whitespace-nowrap"
            >
              <IoSearch className="text-lg text-white" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightPhones({ heroData }) {
  const [showComingSoon, setShowComingSoon] = useState(false)
  return (
    <div className="flex-1 hidden md:flex flex-col items-center lg:items-end  w-full lg:max-w-[55%] mt-8 lg:mt-0 ">
      <div className=" relative flex items-end justify-center w-full  max-w-5xl mx-auto h-full  sm:h-[340px] md:h-[420px] lg:h-[500px]">
        <div className="absolute left-[5%] sm:left-[8%] md:left-[20%] lg:left-[12%] bottom-10 z-20 w-32 sm:w-40 md:w-56 lg:w-60 xl:w-72 -rotate-6 hover:scale-110 hover:rotate-0 transition-all duration-500 ease-out drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)] [transform:perspective(700px)_rotateY(-20deg)] hover:[transform:perspective(700px)_rotateY(0deg)]">
          <img src={heroData?.heroImage1?.url || niwas} alt="Niwas AI" className="w-full h-auto rounded-[24px]" />
        </div>

        <div className="absolute left-[40%] md:left-[42%] -translate-x-1/2 bottom-10 z-10 w-36 sm:w-44 md:w-48 lg:w-52 xl:w-64 rotate-[3deg] hover:scale-105 hover:rotate-0 transition-all duration-500 ease-out drop-shadow-[0_35px_70px_rgba(0,0,0,0.4)] [transform:perspective(1200px)_rotateY(25deg)] hover:[transform:perspective(1200px)_rotateY(0deg)]">
          <img src={heroData?.heroImage2?.url || property} alt="Property Details" className="w-full h-auto rounded-[28px]" />
        </div>

        <div className="absolute right-[5%] sm:right-[8%] md:right-[22%] lg:right-[6%] bottom-20 z-0 w-32 sm:w-40 md:w-40 lg:w-44 xl:w-56 rotate-[10deg] hover:scale-105 hover:rotate-0 transition-all duration-500 ease-out drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)] [transform:perspective(700px)_rotateY(25deg)] hover:[transform:perspective(1200px)_rotateY(0deg)]">
          <img src={heroData?.heroImage3?.url || dashboard} alt="Dashboard" className="w-full h-auto rounded-[24px]" />
        </div>
      </div>

      <div className="mt-8 ">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="download-playstore-btn"
            onClick={() => window.open("https://play.google.com/store/apps/details?id=com.whatsapp", "_blank")}
            className="group w-54 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-2 transition-all duration-300 hover:bg-white/20 hover:border-[#33cc99] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#33cc99] flex items-center justify-center shadow-lg">
                <IoLogoGooglePlaystore className="text-3xl text-[#274255]" />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/70 uppercase tracking-wider">Get it on</p>
                <h3 className="text-lg font-bold text-white group-hover:text-[#33cc99] transition-colors">Google Play</h3>
              </div>
            </div>
          </button>

          <button
            id="download-appstore-btn"
            onClick={() => window.open("https://apps.apple.com/app/id310633997", "_blank")}
            className="group w-54 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-2 transition-all duration-300 hover:bg-white/20 hover:border-[#33cc99] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-lg">
                <FaApple className="text-3xl text-black" />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/70 uppercase tracking-wider">Download on the</p>
                <h3 className="text-lg font-bold text-white group-hover:text-[#33cc99] transition-colors">App Store</h3>
              </div>
            </div>
          </button>
        </div>

        <div className="flex justify-center mt-6 cursor-pointer" onClick={() => setShowComingSoon(true)}>
          <div className="group flex items-center gap-4 px-5 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg hover:border-[#33cc99] transition-all duration-300">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-[#33cc99] flex items-center justify-center">
                <IoLogoGooglePlaystore className="text-[#274255] text-xl" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-[#274255]">
                <FaApple className="text-black text-xl" />
              </div>
            </div>
            <div  >
              <p className="text-white font-semibold text-sm">Mobile App Coming Soon</p>
              <p className="text-white/60 text-xs">Android & iOS</p>
            </div>
            <span className="w-2.5 h-2.5 rounded-full bg-[#33cc99] animate-pulse"></span>
          </div>
        </div>
      </div>

       { showComingSoon && (
         <ComingSoonVideo
          setShowComingSoon={setShowComingSoon} video={import.meta.env.VITE_NIWAS_AI}
        />)
        }

    </div>
  );
}

function StatsBar({ heroData }) {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const targetAgents = parseInt(heroData?.verifiedAgents) || 150;
  const targetProperties = parseInt(heroData?.propertiesListed) || 500;
  const targetCustomers = parseInt(heroData?.happyCustomers) || 1000;
  const targetLocalities = parseInt(heroData?.localitiesCovered) || 25;

  const [startCounter, setStartCounter] = useState(false);
  const [stats, setStats] = useState({ agents: 0, properties: 0, customers: 0, localities: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCounter) return;
    const interval = setInterval(() => {
      setStats((prev) => ({
        agents: prev.agents < targetAgents ? Math.min(prev.agents + 3, targetAgents) : targetAgents,
        properties: prev.properties < targetProperties ? Math.min(prev.properties + 10, targetProperties) : targetProperties,
        customers: prev.customers < targetCustomers ? Math.min(prev.customers + 20, targetCustomers) : targetCustomers,
        localities: prev.localities < targetLocalities ? Math.min(prev.localities + 1, targetLocalities) : targetLocalities,
      }));
    }, 20);
    return () => clearInterval(interval);
  }, [startCounter, targetAgents, targetProperties, targetCustomers, targetLocalities]);

  return (
    <div ref={sectionRef} className="mb-0  sm:mb-8  py-4  flex  flex-col lg:flex-row w-full items-center gap-4 lg:items-stretch md:justify-between ">
      <div className="bg-white/80 w-full sm:w-[60%] lg:w-[50%] rounded-3xl px-2 py-3 lg:py-0 gap-5 items-center grid grid-cols-2 sm:grid-cols-4">
        {[
          { icon: <MdPerson className="text-[#0d1b2a] text-xl sm:text-2xl" />, num: heroData?.verifiedAgents || `${stats.agents}+`, label: "Verified Agents" },
          { icon: <MdHome className="text-[#0d1b2a] text-xl sm:text-2xl" />, num: heroData?.propertiesListed || `${stats.properties}+`, label: "Properties Listed" },
          { icon: <MdGroups className="text-[#0d1b2a] text-xl sm:text-2xl" />, num: heroData?.happyCustomers || `${stats.customers}+`, label: "Happy Customers" },
          { icon: <MdLocationOn className="text-[#0d1b2a] text-xl sm:text-2xl" />, num: heroData?.localitiesCovered || `${stats.localities}+`, label: "Localities Covered" },
        ].map(({ icon, num, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 space-x-3">
            <div>{icon}</div>
            <div className="flex flex-col items-center">
              <p className="text-[#0d1b2a] font-black text-sm sm:text-lg lg:text-xl leading-tight">{num}</p>
              <p className="text-gray-500 text-center text-xs font-medium leading-tight">{label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2  gap-2 sm:gap-3 w-full   sm:max-w-sm lg:max-w-md  ">
        {[
          { icon: <MdSmartToy className="text-[#00d9a6] text-xl" />, title: "AI Powered", sub: "Search", path: "/niwas-ai" },
          { icon: <MdGroups className="text-[#00d9a6] text-xl" />, title: "100%", sub: "Verified Partner", path: "/explore-property" },
          { icon: <MdApartment className="text-[#00d9a6] text-xl" />, title: "Easy property Listing", sub: "", path: "/agent-corner" },
          { icon: <MdCheckCircle className="text-[#00d9a6] text-xl" />, title: "100%", sub: "Genuine Leads", path: "/agent-corner" },
        ].map(({ icon, title, sub, path }) => (
          <div
            key={title + sub}
            onClick={() => navigate(path)}
            className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 sm:px-4 sm:py-3 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            {icon}
            <div className="">
              <div className="text-[#0d1b2a] font-medium  text-xs sm:text-sm">{title}</div>
              <div className="text-[#0d1b2a] font-medium text-xs">{sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}