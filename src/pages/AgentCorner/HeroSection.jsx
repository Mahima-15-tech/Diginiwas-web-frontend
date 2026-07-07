import React, { useState, useRef, useEffect } from "react";
import axios from "../../api/axios";
import bg from "../../assets/images/bg.webp"
import bg2 from "../../assets/images/bg2.webp"
import bg3 from "../../assets/images/bg3.webp"
import { IoPlayOutline } from "react-icons/io5";

const bgImages = [
  bg,bg2,bg3
];

const url = "https://www.youtube.com/embed/X2NVOSNBbxU"

const HeroSection = () => {
  const [stats, setStats] = useState({
    leads: 0,
    agents: 0,
    transactions: 0,
  });
  const [agentData, setAgentData] = useState(null);
    const [currentBg, setCurrentBg] = useState(0);
  const [fade, setFade] = useState(true);
   
  const [showVideo, setShowVideo] = useState(false);

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

  const getAgentCorner = async () => {
    try {
      const res = await axios.get("/cms/agentcorner");
  
      setAgentData(res.data);
  
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getAgentCorner();
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        leads: prev.leads < 10000 ? Math.min(prev.leads + 100, 10000) : 10000,

        agents: prev.agents < 2500 ? Math.min(prev.agents + 25, 2500) : 2500,

        transactions:
          prev.transactions < 500 ? Math.min(prev.transactions + 5, 500) : 500,
      }));
    }, 20);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="relative font-sans text-white bg-[#274255]  overflow-x-hidden pb-12  "
    >
        <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
    style={{
      backgroundImage: `url(${bgImages[currentBg]})`,
    }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1c3345]/40 to-[#1c3345] lg:from-transparent lg:via-[#1c3345]/20 lg:to-[#1c3345] lg:to-[63%]" />

      <div className="relative z-10"> 
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <section className="order-2 lg:order-1">
            <h1
              className="text-4xl md:text-6xl  font-bold leading-tight mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Grow Your Real
              <br className="hidden md:block" />
              Estate Business
              <br className="hidden md:block" />
              with <span className="text-[#33cc99] ">Diginiwas</span>
            </h1>

            <p className="text-white text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              AI-powered lead generation, smart CRM workflows, verified buyer
              matching, and premium property visibility designed for Diginiwas's
              elite real estate network.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:mb-10">
              <button className="bg-[#33cc99] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg active:scale-95 transition">
                Join as Agent
              </button>

              <button className="bg-[#274255] text-[#33cc99] flex items-center justify-center gap-2 border  px-8 py-4 rounded-lg font-semibold text-lg shadow-sm border-[#33cc99] active:scale-95 transition">
                Watch How it Works   
                                <button
                                      onClick={() => {
                                        setShowVideo(true);
                                      }}
                                      className="border cursor-pointer  bg-[#062018] border-slate-300 p-2 rounded-full"
                                    >
                                      <IoPlayOutline className="text-xl  fill-[#33cc99] hover:text-[#33cc99]" />
                                    </button>
              </button>
            </div>

            <div className="hidden lg:flex gap-6">
            {(agentData?.stats?.length
  ? agentData.stats
  : [
      {
        value: "10,000+",
        label: "Verified Leads",
      },
      {
        value: "2,500+",
        label: "Active Agents",
      },
      {
        value: "₹500Cr+",
        label: "Transactions",
      },
    ]
).map((item, index) => (
  <StatCard
    key={index}
    number={item.value}
    label={item.label}
  />
))}
            </div>
          </section>

          <section className="order-1 lg:order-2 relative overflow-hidden">
            <div className="relative" style={{ perspective: "1000px" }}>
              <div className="relative  p-2    border-white/15
  shadow-[0_0_25px_rgba(51,204,153,0.35)] ">
                <img
                  src={
  agentData?.image?.url ||
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAYNtvd6YBkkXvhYMXlxjn6SPH208CeaItzJkZTY0DwBCBMpFPaiSHNxaIGshlUTwkYrrmoQkMTHTxvt1-8CwQ8M3AO660gEFww8E5JlcB5-D0zMhytbieByPq2eH46NFP-d3GFraSYIN3etv979zjPgAG5NIMoCapz_E9rpcdFproDestG3p0DR7FNicXSMJYlXer54z42VI4giwMR2JGOMETr26nHV2DJtXeuJl-mzSe0uoQIUy9V4RWMjh9I7pz3jCaJGMsTrQE"
}
                  alt="Niwas Dashboard"
                  className="w-full h-auto rounded-[2rem] object-cover min-h-[300px]"
                />

              </div>
            </div>
          </section>
        </div>

        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
        {(agentData?.stats?.length
  ? agentData.stats
  : [
      {
        value: `${stats.leads.toLocaleString()}+`,
        label: "Verified Leads",
      },
      {
        value: `${stats.agents.toLocaleString()}+`,
        label: "Active Agents",
      },
      {
        value: `₹${stats.transactions}Cr+`,
        label: "Transactions",
      },
    ]
).map((item, index) => (
  <StatCard
    key={index}
    number={item.value}
    label={item.label}
  />
))}
        </div>
      </main>
      </div>
        {showVideo && (
              <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                
                <div className="relative w-full md:w-1/2 bg-white rounded-2xl p-4">

                  <button
                    onClick={() => {
                      setShowVideo(false);
                      setSelectedVideo("");
                    }}
                    className="absolute right-4 top-2 text-2xl z-50 text-white"
                  >
                    ✕
                  </button>

                  <iframe
  className="w-full h-[250px] md:h-[450px] rounded-xl"
  src={url}
  title="YouTube Video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>

                </div>

              </div>
            )}
    </div>
  );
};

const StatCard = ({ number, label }) => {
  return (
    <div className="bg-[#33cc99] p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] min-w-[180px]">
      <p className="text-3xl font-bold">{number}</p>
      <p className="text-xs uppercase tracking-wider text-white font-semibold mt-1">
        {label}
      </p>
    </div>
  );
};

export default HeroSection;
