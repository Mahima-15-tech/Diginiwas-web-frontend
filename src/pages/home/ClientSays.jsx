// import axios from "../../api/axios";
// import { useEffect, useState } from "react";
// import { IoPlayOutline } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";

// const dummyTestimonials = [
//   {
//     review:
//       '"DIGINIWAS transformed how we look at luxury properties. The AI matching was surprisingly accurate, saving us months of manual searching."',
//     name: "Vikram Singhania",
//     designation: "CEO, ZENITH CORP",
//     image: {
//       url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
//     },
//     videoLink: "https://www.youtube.com/embed/X2NVOSNBbxU",
//   },
//   {
//     review:
//       '"The transparency they bring to the Indian real estate market is revolutionary. Every document was verified, every claim was digital."',
//     name: "Ananya Sharma",
//     designation: "ARCHITECTURAL DIRECTOR",
//     image: {
//       url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
//     },
//     videoLink: "https://www.youtube.com/embed/X2NVOSNBbxU",
//   },
//   {
//     review:
//       '"A truly seamless experience for investors. The virtual tours and digital verification gave me the confidence I needed."',
//     name: "Rahul Mehta",
//     designation: "GLOBAL INVESTOR",
//     image: {
//       url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
//     },
//     videoLink: "https://www.youtube.com/embed/X2NVOSNBbxU",
//   },
// ];

// export default function ClientSays() {
//   const navigate = useNavigate()
  

//   const [showVideo, setShowVideo] = useState(false);
  
//   const [selectedVideo, setSelectedVideo] = useState("");
//   const [testimonials, setTestimonials] = useState(dummyTestimonials);

//   const getTestimonials = async () => {
//     try {
//       const res = await axios.get("/cms/testimonials");
  
//       if (
//         res.data?.testimonials &&
//         res.data.testimonials.length > 0
//       ) {
//         setTestimonials(res.data.testimonials);
//       } else {
//         setTestimonials(dummyTestimonials);
//       }
//     } catch (err) {
//       console.log(err);
  
//       // Agar API fail ho jaye
//       setTestimonials(dummyTestimonials);
//     }
//   };
  
//   useEffect(() => {
  
//     getTestimonials();
  
//   }, []);
//   return (
//     <section className="w-full bg-[#f7f8fa]  px-4 sm:px-0 py-14 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
//       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
//         <div className="text-center mb-10 sm:mb-12 lg:mb-16">
//           <p className="text-[#16836E] text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3">
//             Trusted By Leaders
//           </p>

//           <h2 className="text-[#02080e] font-serif font-semibold leading-tight text-[32px] sm:text-xl md:text-2xl lg:text-5xl">
//             What Our Clients Say
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
//           {testimonials.map((item, index) => (
//             <div
//               key={index}
//               className="relative bg-white  gap-5 rounded-[28px] hover:scale-105 duration-300   hover:border-[#274255] hover:border-2
//                transition-all sm:rounded-[32px] p-6 sm:p-7 lg:p-9 shadow-xl"
//             >
 
//               <p className="text-[#4F6473] italic leading-[1.8] text-[16px] sm:text-[17px] lg:text-[18px] min-h-[170px] lg:min-h-[190px]">
//                 {item.review}
//               </p>

//               <div className="flex  items-center gap-4 mt-6">
//                 <div className=" flex items-center justify-between w-full"> 
//                   <div className="flex items-center gap-2"> 
//                 <img
//                  src={item.image?.url} 
//                   alt={item.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />

//                 <div>
//                   <h4 className="text-[#243B53] font-semibold text-sm  sm:text-base">
//                     {item.name}
//                   </h4>

//                   <p className="text-[#6e7780] font-semibold text-[0.7rem] sm:text-xs tracking-[0.11em] uppercase">
//                   {item.designation}
//                   </p>
//                 </div> 
//             </div>
                 
//                    {/* <div   onClick={() =>
//                        window.location.href = "https://youtu.be/X2NVOSNBbxU"
//                        } className="border cursor-pointer border-slate-300 p-2 rounded-full">
//                          <IoPlayOutline className="text-xl text-[#16836E] hover:text-red-500 " />
//                      </div> */}

                     
//                     <div
//                       onClick={() => {
//                         setSelectedVideo(item.videoLink);
//                         setShowVideo(true);
//                       }}
//                       className="border cursor-pointer border-slate-300 p-2 rounded-full"
//                     >
//                       <IoPlayOutline className="text-xl text-[#16836E] hover:text-red-500" />
//                     </div>
                    
//               </div>

//               </div>
//             </div>
//           ))}
//         </div>



//           {showVideo && (
//               <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                
//                 <div className="relative w-full md:w-1/2 bg-white rounded-2xl p-4">

//                   <button
//                     onClick={() => {
//                       setShowVideo(false);
//                       setSelectedVideo("");
//                     }}
//                     className="absolute right-4 top-2 text-2xl z-50 text-white"
//                   >
//                     ✕
//                   </button>

//                   <iframe
//   className="w-full h-[250px] md:h-[450px] rounded-xl"
//   src={
//     selectedVideo?.includes("watch?v=")
//       ? selectedVideo.replace("watch?v=", "embed/")
//       : selectedVideo
//   }
//   title="YouTube Video"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowFullScreen
// />

//                 </div>

//               </div>
//             )}



// {/* <div
//   onClick={() => setShowVideo(true)}
//   className="border cursor-pointer border-slate-300 p-2 rounded-full"
// >
//   <IoPlayOutline className="text-xl text-[#16836E] hover:text-red-500" />
// </div>
//         {showVideo && (
//   <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//     <div className="relative w-[90%] max-w-4xl bg-white rounded-2xl p-4">

//       <button
//         onClick={() => setShowVideo(false)}
//         className="absolute right-4 top-4 text-xl "
//       >
//         ✕
//       </button>

//       <iframe
//   className="w-full h-[500px] rounded-xl"
//   src=""
//   title="YouTube Video"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowFullScreen
// />
//     </div>
//   </div>
// )} */}
//       </div>
//     </section>
//   );
// }

import axios from "../../api/axios";
import { useEffect, useState, useRef } from "react";
import { IoPlayOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import ComingSoonVideo from "../../components/common/ComingSoonVideo";

const dummyTestimonials = [
  {
    review:
      '"DIGINIWAS transformed how we look at luxury properties. The AI matching was surprisingly accurate, saving us months of manual searching."',
    name: "Vikram Singhania",
    designation: "CEO, ZENITH CORP",
    image: {
      url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    },
    videoLink: "https://www.youtube.com/embed/X2NVOSNBbxU",
  },
  {
    review:
      '"The transparency they bring to the Indian real estate market is revolutionary. Every document was verified, every claim was digital."',
    name: "Ananya Sharma",
    designation: "ARCHITECTURAL DIRECTOR",
    image: {
      url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    },
    videoLink: "https://www.youtube.com/embed/X2NVOSNBbxU",
  },
  {
    review:
      '"A truly seamless experience for investors. The virtual tours and digital verification gave me the confidence I needed."',
    name: "Rahul Mehta",
    designation: "GLOBAL INVESTOR",
    image: {
      url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    },
    videoLink: "https://www.youtube.com/embed/X2NVOSNBbxU",
  },
];

export default function ClientSays() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [showVideo, setShowVideo] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [testimonials, setTestimonials] = useState(dummyTestimonials);

  console.log('show vide', showVideo)
  const getTestimonials = async () => {
    try {
      const res = await axios.get("/cms/testimonials");
      if (res.data?.testimonials && res.data.testimonials.length > 0) {
        setTestimonials(res.data.testimonials);
      } else {
        setTestimonials(dummyTestimonials);
      }
    } catch (err) {
      console.log(err);
      setTestimonials(dummyTestimonials);
    }
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 70, damping: 16 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", duration: 0.4 } },
    exit: { opacity: 0, scale: 0.85, y: 20, transition: { duration: 0.25 } },
  };

  return (
    <section ref={ref} className="relative w-full bg-[#eef2f5] px-4 sm:px-0 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      
      {/* Background Micro-Design / Grid Overlay similar to reference image */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* References Exact Mesh Grid Grid Layout */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#16836E_1px,transparent_1px),linear-gradient(to_bottom,#16836E_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Soft floating dynamic teal blobs from your image layout */}
        <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-[#16836E]/20 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] blur-3xl animate-[pulse_8s_infinite]" />
        <div className="absolute -bottom-16 -left-16 w-[500px] h-[500px] bg-[#243B53]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <p className="text-[#16836E] text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-3 drop-shadow-sm">
            Trusted By Leaders
          </p>
          <h2 className="text-[#1A2E40] font-sans font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-6 lg:gap-10"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -15,
                boxShadow: "0 35px 70px -15px rgba(22, 131, 110, 0.2)",
              }}
              className="relative bg-gradient-to-br from-white/80 via-white/40 to-[#F0F9F7]/90 rounded-[32px] overflow-hidden p-8 sm:p-9 lg:p-10 border border-white/70 backdrop-blur-md flex flex-col justify-between group transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
            >
              {/* Intense Dynamic Gradient Background on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#FFFFFF] via-[#E4FAF5] to-[#CBEFE7] transition-opacity duration-500 z-0 pointer-events-none" />
              
              {/* Reference Image Border Outline Highlight */}
              <div className="absolute inset-0 rounded-[32px] border-2 border-transparent group-hover:border-[#16836E]/30 transition-all duration-500 pointer-events-none z-10" />

              <div className="relative z-10">
                {/* Dual Corner Quote Marks exactly matching the layout style */}
                <div className="text-[75px] font-serif leading-none text-[#16836E]/15 group-hover:text-[#16836E]/25 transition-colors duration-300 select-none pointer-events-none mb-2">
                  “
                </div>
                
                <p className="text-[#2D4356] font-medium leading-[1.85] text-[16px] sm:text-[17px] mb-8 min-h-[120px]">
                  {item.review}
                </p>

                <div className="flex justify-end text-[75px] font-serif leading-none text-[#16836E]/5 group-hover:text-[#16836E]/15 transition-colors duration-300 select-none pointer-events-none h-6 mt-[-30px] mb-6">
                  ”
                </div>
              </div>

              {/* Identity Details Profile Structure */}
              <div className="relative z-10 flex flex-col items-center text-center mt-auto pt-6 border-t border-[#16836E]/10">
                <div className="relative mb-3">
                  <img
                    src={item.image?.url}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white ring-4 ring-[#16836E]/20 group-hover:ring-[#16836E]/50 transition-all duration-500 shadow-md"
                  />
                  {/* Outer Pulsing Aura like the picture */}
                  <div className="absolute inset-0 rounded-full bg-[#16836E]/10 scale-110 -z-10 group-hover:scale-125 transition-transform duration-500" />
                </div>

                <div className="mb-5">
                  <h4 className="text-[#1A2E40] font-extrabold text-base sm:text-lg tracking-tight group-hover:text-[#16836E] transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-[#64748B] font-bold text-[11px] sm:text-xs tracking-[0.12em] uppercase mt-1">
                    {item.designation}
                  </p>
                </div>

                {/* Floating Stylized Play Action Button */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedVideo(item.videoLink);
                    setShowVideo(true);
                  }}
                  className="cursor-pointer bg-gradient-to-r from-[#16836E]/10 to-[#16836E]/20 group-hover:from-[#16836E] group-hover:to-[#106353] text-[#16836E] group-hover:text-white p-4 rounded-full transition-all duration-500 shadow-[0_4px_15px_rgba(22,131,110,0.15)] border border-[#16836E]/20"
                >
                  <IoPlayOutline className="text-2xl stroke-[2.5]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

          
        {/* Video Player Modal */}
        <AnimatePresence>
          {/* {showVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-md"
              onClick={() => {
                setShowVideo(false);
                setSelectedVideo("");
              }}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative w-full md:w-[75%] lg:w-[65%] aspect-video bg-black rounded-[24px] p-1.5 shadow-2xl overflow-hidden border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => {
                    setShowVideo(false);
                    setSelectedVideo("");
                  }}
                  className="absolute right-4 top-4 text-white font-bold bg-black/50 hover:bg-black/90 rounded-full w-9 h-9 flex items-center justify-center z-50 transition-all border border-white/10 shadow-lg"
                >
                  ✕
                </button>

                <iframe
                  className="w-full h-full rounded-[18px]"
                  src={
                    selectedVideo?.includes("watch?v=")
                      ? selectedVideo.replace("watch?v=", "embed/") + "?autoplay=1"
                      : selectedVideo + "?autoplay=1"
                  }
                  title="YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )} */}
        
        { showVideo && (
         <ComingSoonVideo
          setShowComingSoon={setShowVideo}
        />)
        }
        </AnimatePresence>
      </div>
    </section>
  );
}