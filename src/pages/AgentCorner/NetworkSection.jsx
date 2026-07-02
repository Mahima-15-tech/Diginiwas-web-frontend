import React from "react";
import { useEffect, useState } from "react";
import axios from "../../api/axios";

const dummyData = {
  topTitle: "THE NETWORK",

  heading: "Voices of Top Agents",

  cards: [
    {
      name: "Vikram Singh",

      designation: "LUDHIANA LUXURY ESTATES",

      image: {
        url:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC7y05-0B-r5jIejyFwqDlFNzr-e5bXk8d_oUUewyLbvy5orJhAvGFD_pZsCa_ufe-GRBzaxenMlkquNGSesSFPUiO-XhkolrQkaPr_szXNTwEbsK5M4moNSFtOM4zFWmwlErTJO6OTIMxbLcTNw785N_ewytEhlLx0rqfSdqE60rIxtWo_phuYUWbSVeH3t_DRACDaYWgCg3fV5OPqGOtWcHATaMdjn0ODuu6DenEQFTvwwUpXt2eP-9XB42jze4VouoxW4ZhEMsk",
      },

      review:
        "Niwas AI didn't just give me leads; it gave me the intelligence to close the right ones. My transaction volume doubled in six months.",
    },

    
  ],
};

const NetworkSection = () => {
  const [networkData, setNetworkData] = useState(dummyData);

  const getAgentNetwork = async () => {
    try {
  
      const res = await axios.get("/cms/agent-network");
  
      if (res.data) {
  
        setNetworkData({
          topTitle:
            res.data.topTitle || dummyData.topTitle,
  
          heading:
            res.data.heading || dummyData.heading,
  
          cards:
            res.data.cards?.length
              ? res.data.cards
              : dummyData.cards,
        });
  
      }
  
    } catch (err) {
  
      console.log(err);
  
      setNetworkData(dummyData);
  
    }
  };
  
  useEffect(() => {
  
    getAgentNetwork();
  
  }, []);
  return (
    <section className="bg-[#f8fafb] py-20 sm:py-32 px-4 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="block text-[#3f6653] uppercase tracking-[0.2em] text-xs font-bold">
          {networkData.topTitle}
          </span>

          <h2
            className="max-w-2xl mx-auto text-[#274255] text-4xl md:text-5xl font-semibold"
            style={{
              fontFamily: "'Source Serif 4', serif",
            }}
          >
           {networkData.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {networkData.cards.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#c3c7cb] p-10 md:p-14 rounded-[40px] shadow-[0_24px_48px_rgba(13,38,51,0.08)] flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative w-28 h-28 mb-8">
                <div className="absolute inset-0 rounded-full border-2 border-[#beead1] p-1">
                  <img
                   src={item.image?.url} 
                    alt={item.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              <blockquote className="mb-10">
                <p
                  className="italic text-[#42474b] font-medium leading-relaxed text-lg md:text-2xl"
                  style={{
                    fontFamily: "'Source Serif 4', serif",
                  }}
                >
                  "{item.review}"
                </p>
              </blockquote>

              <div className="space-y-1">
                <p className="text-[#274255] font-bold text-xl">
                  {item.name}
                </p>

                <p className="text-[#73787c] uppercase tracking-wider text-xs">
                {item.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;