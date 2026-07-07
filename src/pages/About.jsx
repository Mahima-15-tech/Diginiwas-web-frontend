import React,  { useState, useEffect }  from "react";
import { Search, BarChart3, Rocket } from "lucide-react";
import axios from "../api/axios";
const dummyStats = [
  {
    value: "10,000+",
    label: "Verified Listings",
  },
  {
    value: "500+",
    label: "Expert Agents",
  },
  {
    value: "500+",
    label: "Portfolio Value",
  },
  {
    value: "24/7",
    label: "AI Concierge",
  },
];

const dummyGenesis = {
  topTitle: "THE GENESIS",

  heading: "Beyond the Fragmented Market.",

  paragraph1:
    "For decades, the real estate landscape in Diginiwas was defined by word-of-mouth, lack of transparency, and immense challenges for the global Diginiwas diaspora (NRIs).",

  paragraph2:
    "We saw a market rich in value but poor in accessibility. Niwas AI was born from the necessity to digitize trust. By integrating advanced machine learning with local ground intelligence, we created a single point of truth.",

  quote:
    "Our mission is simple: To ensure that every brick laid in Diginiwas is a brick built on data and trust.",

  image: {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqcVRcPA-_iwZhWRpYHw58BQhYSbwNc-hudsih9x-l2tp2HQkGvMRbN8TXslB32SiOxsKlvQAnagHcYG-nb_bMWa-x5-E6VazIaNLQd9pskDSqPXTJM-0uMjHQDOedm23zIfvDYH9lOvtcisi8_W3oUX0EdHWTFzDJk-rVoCCLSLHjaKcFcKilz1PPoVIHmgjIhyjd282XKrRne6TFDxjLp865oUCg0zRH8ZsN-J-vnY7E1_0DId4RkiqXMSgqNP5dWdQ4OFMr",
  },
};

const dummyMissionVision = {
  mission: {
    title: "Our Mission",
    heading:
      "Modernize property discovery through intelligent automation.",
    description:
      "We are committed to removing the friction from real estate transactions by providing instantly accessible, verified, and AI-vetted data.",
  },

  vision: {
    title: "Our Vision",
    heading:
      "India's most trusted AI-driven property ecosystem.",
    description:
      "To define the next century of Indian real estate by becoming the gold standard for asset valuation and ownership transparency.",
  },
};

const dummyVisionaries = {
  sectionTitle: "The Visionaries",

  sectionSubtitle:
    "Expert in technology and real estate crafting the future",

  members: [
    {
      name: "Arjun Singh",
      designation: "Co-Founder & CEO",
      description:
        "Former Silicon Valley AI Lead with a passion for Indian urban development.",
      image: {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcFM28IGjIpvm0W_2uIj8lh9ViBr4BhTmJE4lEf7x71lJIzkavw4g70ybm4JJ8T1EoDXObdi3z5YcvcnDyYi1uBLsWwEgrwEISOtdAJG0Y3mmvXwrsP56VnBBtDh93pvP69qMp0lZLINlGuzPTee6C5sK2Pt1Jd4XDWhDYqqRNp8t9ti14uLTuVZuC-Krl-yRXPtu1SGEP7AXjAliza75hNxmgoLKyo2cCjpqd9Pou9ETr7ZaZw5SWsFUqreJtqB-WFNLMp_89",
      },
    },

    {
      name: "Sandeep Kaur",
      designation: "Head of Strategy",
      description:
        "20 years of expertise in luxury residential assets across North India.",
      image: {
        url: "https://media.istockphoto.com/id/1382284148/photo/shot-of-a-young-businesswoman-standing-with-her-arms-crossed-at-work.jpg?s=612x612&w=0&k=20&c=t4oE3UanKjrhnwWmI3On2Xz6rX0su6Zb-vGQP_A-0Rc=",
      },
    },

    {
      name: "Vikram Dhillon",
      designation: "CTO",
      description:
        "Machine learning expert specializing in spatial data and property analytics.",
      image: {
        url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      },
    },
  ],
};


const team = [
  {
    name: "Arjun Singh",
    role: "Co-Founder & CEO",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAcFM28IGjIpvm0W_2uIj8lh9ViBr4BhTmJE4lEf7x71lJIzkavw4g70ybm4JJ8T1EoDXObdi3z5YcvcnDyYi1uBLsWwEgrwEISOtdAJG0Y3mmvXwrsP56VnBBtDh93pvP69qMp0lZLINlGuzPTee6C5sK2Pt1Jd4XDWhDYqqRNp8t9ti14uLTuVZuC-Krl-yRXPtu1SGEP7AXjAliza75hNxmgoLKyo2cCjpqd9Pou9ETr7ZaZw5SWsFUqreJtqB-WFNLMp_89",
    desc: "Former Silicon Valley AI Lead with a passion for Indian urban development.",
  },
  {
    name: "Sandeep Kaur",
    role: "Head of Strategy",
    image:
      "https://media.istockphoto.com/id/1382284148/photo/shot-of-a-young-businesswoman-standing-with-her-arms-crossed-at-work.jpg?s=612x612&w=0&k=20&c=t4oE3UanKjrhnwWmI3On2Xz6rX0su6Zb-vGQP_A-0Rc=",
    desc: "20 years of expertise in luxury residential assets across North India.",
  },
  {
    name: "Vikram Dhillon",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    desc: "Machine learning expert specializing in spatial data and property analytics.",
  },
];



function HeroSection() {

  const [aboutStats, setAboutStats] = useState(dummyStats);

  const getAboutStats = async () => {
    try {
      const res = await axios.get("/cms/about-stats");
  
      setAboutStats(
        res.data.stats?.length
          ? res.data.stats
          : dummyStats
      );
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getAboutStats();
  }, []);
  

  const [stats, setStats] = useState({
  listings: 0,
  agents: 0,
  portfolio: 0,
});








useEffect(() => {
  const interval = setInterval(() => {
    setStats((prev) => ({
      listings:
        prev.listings < 10000
          ? Math.min(prev.listings + 100, 10000)
          : 10000,

      agents:
        prev.agents < 500
          ? Math.min(prev.agents + 5, 500)
          : 500,

      portfolio:
        prev.portfolio < 5000
          ? Math.min(prev.portfolio + 50, 5000)
          : 5000,
    }));
  }, 20);

  return () => clearInterval(interval);
}, []);



  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-5 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1628394d] to-[#162839cc] z-10"></div>

        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBPZawAd1oy-smKp5UtCyQ1weMdzx-1bJh9nHxOUuSI1oxE0QjahuEBO0u_QC8L0QCAj7yRcM39Ypw2lgFnAwlWCfgCnmFIinPhXN6cDSfrladXNhbVU63iHidNHXJm8bY0gl3mDF1sU2imz0kzQfM0adN9JM7Ij1cWo6wqnoqWQDGIZR863K0JtXzSZ_4Hj_Z8mJa4BuCGQNXSomM9fVIUPZbQpAbZNChb1dcNVkq5ZH8bVMEhHnp9T8QL33ppcxzx3E71Hl9"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold text-white mb-8 leading-tight">
          Building the Future of{" "}
          <span className="text-[#ffe088]">AI-Powered</span> Real Estate in
          Diginiwas
        </h1>

        <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto mb-16">
          We're bridging the gap between visionary investors, global NRIs, and
          the heart of Diginiwas through intelligent discovery and verified data.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {aboutStats.map((item, index) => (
    <div
      key={index}
      className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-xl p-6"
    >
      <h3 className="text-3xl font-bold text-[#162839]">
        {item.value}
      </h3>

      <p className="uppercase text-sm font-semibold text-gray-600">
        {item.label}
      </p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}

function GenesisSection() {
  const [genesisData, setGenesisData] = useState(dummyGenesis);

  const getGenesis = async () => {
    try {
      const res = await axios.get("/cms/about-genesis");
  
      setGenesisData({
        topTitle: res.data.topTitle || dummyGenesis.topTitle,
  
        heading: res.data.heading || dummyGenesis.heading,
  
        paragraph1:
          res.data.paragraph1 || dummyGenesis.paragraph1,
  
        paragraph2:
          res.data.paragraph2 || dummyGenesis.paragraph2,
  
        quote: res.data.quote || dummyGenesis.quote,
  
        image:
          res.data.image?.url
            ? res.data.image
            : dummyGenesis.image,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getGenesis();
  }, []);


  return (
    <section className="py-10 sm:py-28 px-5 md:px-16 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-6">
          <span className="text-[#006d44] font-medium uppercase tracking-[4px]">
           {genesisData.topTitle}
          </span>

          <h2 className="text-4xl font-bold text-[#274255]">
          {genesisData.heading}
          </h2>

          <div className="space-y-4 text-gray-600 leading-8">
            <p>
            {genesisData.paragraph1}
            </p>

            <p>
            {genesisData.paragraph2}
            </p>

            <p className="italic font-bold text-[#274255] border-l-4 border-[#006d44] pl-4">
            {genesisData.quote}
            </p>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src={genesisData.image?.url}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-200 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}

GenesisSection;

function StatisticsSection() {
  return (
    <section className="py-10 sm:py-28 px-5 md:px-16 bg-[#162839] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">
            Unlocking the Diginiwas Prosperity Cycle.
          </h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div>
                <h3 className="font-bold text-[#ffe088] mb-2">
                  Digital Transformation
                </h3>
                <p className="text-slate-300">
                  Diginiwas's real estate digitization is projected to grow by 240%
                  by 2030.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <h3 className="font-bold text-[#ffe088] mb-2">NRI Demand</h3>
                <p className="text-slate-300">
                  A $50 Billion untapped investment potential from the global
                  diaspora.
                </p>
              </div>
            </div>
          </div>
        </div>

     

        <div className="bg-[#2c3e50] p-8 rounded-3xl">
          <div className="flex items-end justify-between h-[300px] gap-4">
            <div className="flex flex-col justify-end items-center flex-1 h-full">
              <div
                className="w-full bg-[#006d44] rounded-t-lg"
                style={{ height: "20%" }}
              />
              <span className="mt-4 text-xs">2020</span>
            </div>

            <div className="flex flex-col justify-end items-center flex-1 h-full">
              <div
                className="w-full bg-[#006d44] rounded-t-lg"
                style={{ height: "40%" }}
              />
              <span className="mt-4 text-xs">2022</span>
            </div>

            <div className="flex flex-col justify-end items-center flex-1 h-full">
              <div
                className="w-full bg-[#006d44] rounded-t-lg"
                style={{ height: "65%" }}
              />
              <span className="mt-4 text-xs">2024</span>
            </div>

            <div className="flex flex-col justify-end items-center flex-1 h-full">
              <div
                className="w-full bg-[#cca730] rounded-t-lg"
                style={{ height: "90%" }}
              />
              <span className="mt-4 text-xs text-[#ffe088]">2026F</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="py-10 sm:py-28 px-5 md:px-16 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="  text-3xl  c">Our Journey</span>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#006d44] -translate-x-1/2" />

        <div className="block md:hidden absolute left-6 top-0 bottom-0 w-[2px] bg-[#006d44]" />

        <div className="relative flex md:justify-start items-center mb-24">
          <div className="md:w-1/2 md:pr-12 pl-16 md:pl-0 ">
            <div className="bg-white p-8 rounded-2xl text-end shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#006d44] hover:border-2" >
              <h3 className="text-2xl font-medium text-[#162839] mb-2">
                Problem Discovery
              </h3>

              <p className="text-gray-600">
                Analyzing 20 years of property disputes and transparency gaps in
                Diginiwas.
              </p>
            </div>
          </div>

          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-[#006d44] border-4 border-white flex items-center justify-center shadow-lg">
            <Search size={22} className="text-white" />
          </div>
        </div>

        <div className="relative flex justify-end items-center mb-24">
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-[#cca730] border-4 border-white flex items-center justify-center shadow-lg">
            <BarChart3 size={22} className="text-white" />
          </div>

          <div className="md:w-1/2 md:pl-12 pl-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg  transition-all duration-300 hover:border-[#006d44] hover:border-2">
              <h3 className="text-2xl font-medium text-[#162839] mb-2">
                AI Vision
              </h3>

              <p className="text-gray-600">
                Developing the first property valuation engine tailored for
                Indian land dynamics.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex md:justify-start items-center">
          <div className="md:w-1/2 md:pr-12 pl-16 md:pl-0">
            <div className="bg-white p-8 rounded-2xl text-end shadow-sm hover:shadow-lg  transition-all duration-300 hover:border-[#006d44] hover:border-2">
              <h3 className="text-2xl font-medium text-[#162839] mb-2">
                Diginiwas Launch
              </h3>

              <p className="text-gray-600">
                Going live with the first 5,000 verified listings across
                Ludhiana, Jalandhar and Amritsar.
              </p>
            </div>
          </div>

          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-[#006d44] border-4 border-white flex items-center justify-center shadow-lg">
            <Rocket size={22} className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  const [missionVision, setMissionVision] = useState(dummyMissionVision);

  const getMissionVision = async () => {
    try {
      const res = await axios.get("/cms/about-mission-vision");
  
      setMissionVision({
        mission: {
          title:
            res.data.mission?.title ||
            dummyMissionVision.mission.title,
  
          heading:
            res.data.mission?.heading ||
            dummyMissionVision.mission.heading,
  
          description:
            res.data.mission?.description ||
            dummyMissionVision.mission.description,
        },
  
        vision: {
          title:
            res.data.vision?.title ||
            dummyMissionVision.vision.title,
  
          heading:
            res.data.vision?.heading ||
            dummyMissionVision.vision.heading,
  
          description:
            res.data.vision?.description ||
            dummyMissionVision.vision.description,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getMissionVision();
  }, []);


  return (
    <section className="py-12 sm:py-28 px-5 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

        <div className="bg-[#274255] text-white p-12 rounded-[40px]  group hover:border   hover:bg-gray-100 hover:text-[#162839] transition-all duration-500">
          <span className="text-[#ffe088] font-bold group-hover:text-[#006d44]">{missionVision.mission.title}</span>

          <h3 className="text-2xl sm:text-3xl text-center sm:text-left font-semibold mt-4 mb-4">
          {missionVision.mission.heading}
          </h3>

          <p className="text-center sm:text-left">
          {missionVision.mission.description}
          </p>
        </div>

        <div className="bg-gray-100 p-12 rounded-[40px] border   group  transition-all duration-500
      hover:bg-[#274255] hover:text-white">
          <span className="text-[#006d44] font-bold duration-500 group-hover:text-[#ffe088]">{missionVision.vision.title}</span>

          <h3 className="text-3xl font-semibold mt-4 mb-4 ">
          {missionVision.vision.heading}
          </h3>

          <p>
          {missionVision.vision.description}
          </p>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-12 sm:py-28 px-5 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="uppercase tracking-widest text-[#006d44] font-bold">
          More Than a Platform
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-gray-50 p-8 rounded-3xl border  transition-all duration-300 hover:border-[#274255] hover:border-2">
          <h4 className="text-2xl font-semibold text-[#162839] mb-4">
            AI Real Estate Assistant
          </h4>
          <p>
            Personalized property recommendations based on financial goals and
            lifestyle preferences.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-3xl border  transition-all duration-300 hover:border-[#274255] hover:border-2">
          <h4 className="text-2xl font-semibold text-[#24255] mb-4">
            Verified Listings
          </h4>
          <p>
            Every property undergoes a 42-point background check before
            appearing on Niwas AI.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-3xl border  transition-all duration-300 hover:border-[#274255] hover:border-2">
          <h4 className="text-2xl font-semibold text-[#274255] mb-4">
            NRI Priority Support
          </h4>
          <p>
            Seamless digital documentation and virtual walkthroughs for our
            global Diginiwas family.
          </p>
        </div>
      </div>
    </section>
  );
}

function VisionariesSection() {
  const [visionaryData, setVisionaryData] =
  useState(dummyVisionaries);

  const getVisionaries = async () => {
    try {
      const res = await axios.get("/cms/about-visionaries");
  
      setVisionaryData({
        sectionTitle:
          res.data.sectionTitle ||
          dummyVisionaries.sectionTitle,
  
        sectionSubtitle:
          res.data.sectionSubtitle ||
          dummyVisionaries.sectionSubtitle,
  
        members:
          res.data.members?.length
            ? res.data.members
            : dummyVisionaries.members,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getVisionaries();
  }, []);


  return (
    <section className="py-28 px-5 md:px-16 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-medium text-[#274255]">{visionaryData.sectionTitle}</h2>

        <span className="  text-xl sm:text-2xl  ">
        {visionaryData.sectionSubtitle}
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
      {visionaryData.members.map((member, index) => (
  <div key={index}>
    <div className="aspect-[4/5] rounded-[40px] overflow-hidden mb-6 shadow-xl hover:shadow-2xl transition-all duration-500">
      <img
        src={member.image?.url}
        alt={member.name}
        className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
      />
    </div>

    <h3 className="text-2xl font-semibold text-[#274255]">
      {member.name}
    </h3>

    <p className="text-[#006d44] font-semibold mb-4">
      {member.designation}
    </p>

    <p className="text-gray-600 leading-relaxed">
      {member.description}
    </p>
  </div>
))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-[#162839] text-center py-20 px-5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-12">
          The Future of Real Estate is
          <br />
          <span className="text-[#ffe088]">
            Intelligent, Trusted and Connected.
          </span>
        </h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="bg-[#33cc99] text-white px-10 py-4 rounded-full">
            Start Your Search
          </button>

          <button className="border-2 border-white text-white px-10 py-4 rounded-full">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
}

const About = () => {
  return (
    <main className="bg-[#f8f9fa] text-[#191c1d]">
      <HeroSection />
      <GenesisSection />
      <JourneySection />
      <MissionVisionSection />
      <FeaturesSection />
      <StatisticsSection />

      <VisionariesSection />
      <CTASection />
    </main>
  );
};

export default About;
