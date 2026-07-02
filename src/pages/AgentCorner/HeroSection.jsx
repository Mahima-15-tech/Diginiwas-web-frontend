import React, { useState, useRef, useEffect } from "react";
import axios from "../../api/axios";

const HeroSection = () => {
  const [stats, setStats] = useState({
    leads: 0,
    agents: 0,
    transactions: 0,
  });
  const [agentData, setAgentData] = useState(null);

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
      className="font-sans text-white bg-[#274255]  overflow-x-hidden   "
    >
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 ">
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

              <button className="bg-[#274255] text-[#33cc99] border  px-8 py-4 rounded-lg font-semibold text-lg shadow-sm border-[#33cc99] active:scale-95 transition">
                Watch How it Works
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
              <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl  ">
                <img
                  src={
  agentData?.image?.url ||
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAYNtvd6YBkkXvhYMXlxjn6SPH208CeaItzJkZTY0DwBCBMpFPaiSHNxaIGshlUTwkYrrmoQkMTHTxvt1-8CwQ8M3AO660gEFww8E5JlcB5-D0zMhytbieByPq2eH46NFP-d3GFraSYIN3etv979zjPgAG5NIMoCapz_E9rpcdFproDestG3p0DR7FNicXSMJYlXer54z42VI4giwMR2JGOMETr26nHV2DJtXeuJl-mzSe0uoQIUy9V4RWMjh9I7pz3jCaJGMsTrQE"
}
                  alt="Niwas Dashboard"
                  className="w-full h-auto rounded-[2rem] object-cover min-h-[300px]"
                />

                <div className="absolute  -right-10 -top-20 bg-white/95 backdrop-blur-sm p-4 animate-bounce [animation-duration:3s] md:p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[240px]">
                  <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-1">
                    Property Demand Score
                  </p>

                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-bold">4.4</span>

                    <span className="text-green-600 text-sm font-bold">
                      +12%
                    </span>
                  </div>

                  <p className="text-[10px] text-gray-400 mt-2 leading-tight">
                    Active buyer market in Chandigarh Sector 17
                  </p>
                </div>

                <div className="absolute -bottom-10 -left-10 bg-white/95 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[240px]">
                  <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-1">
                    Property Demand Score
                  </p>

                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-bold">4.4</span>

                    <span className="text-green-600 text-sm font-bold">
                      +12%
                    </span>
                  </div>

                  <p className="text-[10px] text-gray-400 mt-2 leading-tight">
                    Active buyer market in Chandigarh Sector 17
                  </p>
                </div>
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
