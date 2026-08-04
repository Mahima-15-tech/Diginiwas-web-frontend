// import { useState } from "react";
// import "./App.css";
// import Layout from "./layouts/Layout";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import NiwasAI from "./pages/NiwasAi";
// import About from "./pages/About";
// import AgentCorner from "./pages/AgentCorner";
// import ExploreProperties from "./pages/ExploreProperties";

// import AdminDashboard from "./pages/Admin/Dashboard"
// import AddProperty from './pages/Admin/AddProperty'
// import PropertyManagement from "./pages/Admin/PropertyManagement";
// import Services from "./pages/Services";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import TermsOfService from "./pages/TermsOfService";
// import CookiesPolicy from "./pages/CokkiesPolicy";
// import Blogs from "./pages/Blogs"
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />

//           <Route path="niwas-ai" element={<NiwasAI />} />
//           <Route path="about" element={<About />} />
//           <Route path="agent-corner" element={<AgentCorner />} />
//           <Route path="explore-property" element={<ExploreProperties />} />

//           <Route path="services" element={<Services />} />
//           <Route path="privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="terms-service" element={<TermsOfService />} />
//           <Route path="cookie-policy" element={<CookiesPolicy />} />
//           <Route path="add-property" element={<AddProperty />} />
//           <Route path="admin-dashboard" element={<AdminDashboard />} />
//           <Route path="property-management" element={<PropertyManagement />} />
//            <Route path="blogs" element={<Blogs />} />

//         </Route>
//       </Routes>
//     </>
//   );
// }
// export default App;

import { useState } from "react";
import "./App.css";
import Layout from "./layouts/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NiwasAI from "./pages/NiwasAi";
import About from "./pages/About";
import AgentCorner from "./pages/AgentCorner";
import ExploreProperties from "./pages/ExploreProperties";

import AdminDashboard from "./pages/Admin/Dashboard";
import AddProperty from "./pages/Admin/AddProperty";
import PropertyManagement from "./pages/Admin/PropertyManagement";
import Services from "./pages/Services";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiesPolicy from "./pages/CokkiesPolicy";
import Blogs from "./pages/Blogs";

function App() {
  const propertyVideo =
    "https://res.cloudinary.com/dhuabv2it/video/upload/v1783603443/diginiwas_k2k2bf.mp4";
  // 🎥 Environment Variable se Video URL extract kar rahe hain
  // const propertyVideo = import.meta.env.VITE_NIWAS_AI;
  console.log(
    "Video URL: propertyVideo",
    import.meta.env.VITE_NIWAS_AI,
    propertyVideo,
  );
  // Check kar rahe hain ki user ne pehle video dekhi hai ya nahi
  const [showIntroVideo, setShowIntroVideo] = useState(true) 
  
  // => {
  //   return !sessionStorage.getItem("hasSeenDiginiwasIntro");
  // });
  console.log("showIntroVideo =", showIntroVideo);

  const handleVideoEnd = () => {
    sessionStorage.setItem("hasSeenDiginiwasIntro", "true");
    setShowIntroVideo(false);
  };
  console.log(sessionStorage.getItem("hasSeenDiginiwasIntro"));

  return (
    <>
      {/* 🎬 INTRO VIDEO OVERLAY (Jab tak user video na dekh le ya skip na kar de) */}
      {showIntroVideo && propertyVideo ? (
        <div className="fixed inset-0 z-[99999] bg-black flex items-center justify-center overflow-hidden">
          {/* <video
            src={propertyVideo} 
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover"
          /> */}
          <video
            src={propertyVideo}
            autoPlay
            muted
            playsInline
            controls
            onLoadedData={() => console.log("Video Loaded")}
            onCanPlay={() => console.log("Video Can Play")}
            onPlay={() => console.log("Video Playing")}
            onError={(e) => {
              console.log("Video Error:", e);
              console.log(e.target.error);
            }}
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover"
          />

          {/* Skip Button */}
          <button
            onClick={handleVideoEnd}
            className="absolute top-6 right-6 z-10 bg-black/60 hover:bg-black/90 text-white border border-white/30 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer"
          >
            Skip Intro →
          </button>
        </div>
      ) : (
        /* 🚀 MAIN WEBSITE ROUTES */
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
            <Route
              path="property-management"
              element={<PropertyManagement />}
            />
            <Route path="blogs" element={<Blogs />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
