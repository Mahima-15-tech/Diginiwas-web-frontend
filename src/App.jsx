import { useState } from "react";
import "./App.css";
import Layout from "./layouts/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NiwasAI from "./pages/NiwasAi";
import About from "./pages/About";
import AgentCorner from "./pages/AgentCorner";
import ExploreProperties from "./pages/ExploreProperties";
import AdminDashboard from "./pages/Admin/Dashboard"
import AddProperty from './pages/Admin/AddProperty'
import PropertyManagement from "./pages/Admin/PropertyManagement";
import Services from "./pages/Services";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiesPolicy from "./pages/CokkiesPolicy";
import Blogs from "./pages/Blogs"
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="niwas-ai" element={<NiwasAI />} />
          <Route path="about" element={<About />} />
          <Route path="agent-corner" element={<AgentCorner />} />
          <Route path="explore-property" element={<ExploreProperties />} />

          <Route path="services" element={<Services />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-service" element={<TermsOfService />} />
          <Route path="cookie-policy" element={<CookiesPolicy />} />
          <Route path="add-property" element={<AddProperty />} />
          <Route path="admin-dashboard" element={<AdminDashboard />} />
          <Route path="property-management" element={<PropertyManagement />} />
           <Route path="blogs" element={<Blogs />} />

        </Route>
      </Routes>
    </>
  );
}
export default App;

// import { useState, useEffect, useRef } from "react";
// import "./App.css";
// import Layout from "./layouts/Layout";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import NiwasAI from "./pages/NiwasAi";
// import About from "./pages/About";
// import AgentCorner from "./pages/AgentCorner";
// import ExploreProperties from "./pages/ExploreProperties";

// import AdminDashboard from "./pages/Admin/Dashboard";
// import AddProperty from "./pages/Admin/AddProperty";
// import PropertyManagement from "./pages/Admin/PropertyManagement";
// import Services from "./pages/Services";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import TermsOfService from "./pages/TermsOfService";
// import CookiesPolicy from "./pages/CokkiesPolicy";
// import Blogs from "./pages/Blogs";

// function App() {
//   // ⚡ Cloudinary URL me streaming optimization parameters (f_auto,q_auto) lagaye gaye hain
//   const propertyVideo =
//     import.meta.env.VITE_NIWAS_AI ||
//     "https://res.cloudinary.com/dhuabv2it/video/upload/f_auto,q_auto/v1783603443/diginiwas_k2k2bf.mp4";

//   const videoRef = useRef(null);

//   const [showIntroVideo, setShowIntroVideo] = useState(() => {
//     try {
//       return !sessionStorage.getItem("hasSeenDiginiwasIntro");
//     } catch {
//       return false;
//     }
//   });

//   const handleVideoEnd = () => {
//     try {
//       sessionStorage.setItem("hasSeenDiginiwasIntro", "true");
//     } catch (e) {
//       console.warn("Session storage restricted:", e);
//     }
//     setShowIntroVideo(false);
//   };

//   // 🎬 Video Autoplay Error Handler (Ensures smooth playback without stopping)
//   useEffect(() => {
//     if (showIntroVideo && videoRef.current) {
//       const playPromise = videoRef.current.play();
//       if (playPromise !== undefined) {
//         playPromise.catch((error) => {
//           console.warn("Autoplay was prevented by browser:", error);
//           // Mutex retry agar browser ne autoplay pause kar diya ho
//           if (videoRef.current) {
//             videoRef.current.muted = true;
//             videoRef.current.play();
//           }
//         });
//       }
//     }
//   }, [showIntroVideo]);

//   return (
//     <>
//       {/* 🎬 INTRO VIDEO OVERLAY */}
//       {showIntroVideo && propertyVideo ? (
//         <div className="fixed inset-0 z-[99999] bg-black flex items-center justify-center overflow-hidden">
//           <video
//             ref={videoRef}
//             src={propertyVideo}
//             autoPlay
//             muted
//             playsInline
//             preload="auto"
//             controls
//             onEnded={handleVideoEnd}
//             onError={(e) => {
//               console.error("Video Error:", e);
//               handleVideoEnd();
//             }}
//             className="w-full h-full object-cover"
//           />

//           {/* Skip Button */}
//           <button
//             onClick={handleVideoEnd}
//             className="absolute top-6 right-6 z-10 bg-black/60 hover:bg-black/90 text-white border border-white/30 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer"
//           >
//             Skip Intro →
//           </button>
//         </div>
//       ) : (
//         /* 🚀 MAIN WEBSITE ROUTES */
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="niwas-ai" element={<NiwasAI />} />
//             <Route path="about" element={<About />} />
//             <Route path="agent-corner" element={<AgentCorner />} />
//             <Route path="explore-property" element={<ExploreProperties />} />
//             <Route path="services" element={<Services />} />
//             <Route path="privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="terms-service" element={<TermsOfService />} />
//             <Route path="cookie-policy" element={<CookiesPolicy />} />
//             <Route path="add-property" element={<AddProperty />} />
//             <Route path="admin-dashboard" element={<AdminDashboard />} />
//             <Route
//               path="property-management"
//               element={<PropertyManagement />}
//             />
//             <Route path="blogs" element={<Blogs />} />
//           </Route>
//         </Routes>
//       )}
//     </>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";
// import "./App.css";
// import Layout from "./layouts/Layout";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import NiwasAI from "./pages/NiwasAi";
// import About from "./pages/About";
// import AgentCorner from "./pages/AgentCorner";
// import ExploreProperties from "./pages/ExploreProperties";

// import AdminDashboard from "./pages/Admin/Dashboard";
// import AddProperty from "./pages/Admin/AddProperty";
// import PropertyManagement from "./pages/Admin/PropertyManagement";
// import Services from "./pages/Services";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import TermsOfService from "./pages/TermsOfService";
// import CookiesPolicy from "./pages/CokkiesPolicy";
// import Blogs from "./pages/Blogs";
// import logoImg from "./assets/images/logo1.png";

// function App() {
//   const logoUrl = logoImg;

//   // Initial Loader State
//   const [isLoading, setIsLoading] = useState(true);

//   // Logo Splash Loader Timer (2.5 seconds)
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2500);

//     return () => clearTimeout(timer);
//   }, []);

//   // 1️⃣ INITIAL LOGO ANIMATION LOADER SCREEN
//   if (isLoading) {
//     return (
//       <div className="custom-splash-loader">
//         <div className="loader-logo-wrapper">
//           {/* Glowing White Radial Background Effect */}
//           <div className="logo-highlight"></div>
//           {/* Smooth Zooming Logo */}
//           <img src={logoUrl} alt="Diginiwas Logo" className="loader-logo" />
//         </div>
//       </div>
//     );
//   }

//   // 2️⃣ MAIN WEBSITE ROUTES (Directly rendered after loader)
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="niwas-ai" element={<NiwasAI />} />
//         <Route path="about" element={<About />} />
//         <Route path="agent-corner" element={<AgentCorner />} />
//         <Route path="explore-property" element={<ExploreProperties />} />
//         <Route path="services" element={<Services />} />
//         <Route path="privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="terms-service" element={<TermsOfService />} />
//         <Route path="cookie-policy" element={<CookiesPolicy />} />
//         <Route path="add-property" element={<AddProperty />} />
//         <Route path="admin-dashboard" element={<AdminDashboard />} />
//         <Route
//           path="property-management"
//           element={<PropertyManagement />}
//         />
//         <Route path="blogs" element={<Blogs />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;


