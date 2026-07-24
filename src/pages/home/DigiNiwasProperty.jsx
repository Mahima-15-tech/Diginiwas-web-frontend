

import ComingSoonVideo from '../../components/common/ComingSoonVideo';
import { React, useState, useEffect } from "react";
import {
  FiUser,
  FiHome,
  FiBarChart2,
  FiCreditCard,
  FiBell,
  FiChevronDown,
  FiChevronRight,
  FiArchive,
  FiMic,
  FiVideo,
  FiEye,
  FiArrowRight,
} from "react-icons/fi";

import niwasAi from "../../assets/images/niwas_ai.png"

const arcItems = [
  {
    icon: FiUser,
    title: "Captures",
    sub: "Every Lead",
    angle: 120,
    isFront: true,
  },
  {
    icon: FiHome,
    title: "Manages",
    sub: "Your Listings",
    angle: 160,
    isFront: false,
  },
  {
    icon: FiBarChart2,
    title: "Boosts",
    sub: "Your Revenue",
    angle: 200,
    isFront: true,
  },
  {
    icon: FiCreditCard,
    title: "Simplifies",
    sub: "Plans & Credits",
    angle: 240,
    isFront: true,
  },
];

const features = [
  {
    icon: FiUser,
    title: "Leads & Enquiries",
    desc: "Get, track and manage all your leads in one place.",
  },
  {
    icon: FiHome,
    title: "Property Management",
    desc: "Add, edit and manage your properties easily.",
  },
  {
    icon: FiBarChart2,
    title: "Performance Analytics",
    desc: "Visualize your performance with smart insights.",
  },
  {
    icon: FiCreditCard,
    title: "Plan & Credits",
    desc: "Know your plan details and remaining credits.",
  },
];

const weekBars = [40, 60, 50, 70, 55, 90, 75];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MINT = "#33cc99";

function LogoIcon({ size = 20 }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size + 10,
        height: size + 10,
        borderRadius: 4,
        border: "1px solid #33cc99",
        color: "#33cc99",
      }}
    >
      <FiHome size={size} />
    </span>
  );
}

function PhoneMobileApp() {
  return (
    <div
      style={{
        width: window.innerWidth < 768 ? 180 : 250,
        borderRadius: window.innerWidth < 768 ? 24 : 36,
        border: `${window.innerWidth < 768 ? 5 : 7}px solid #142534`,
        background: "#051422",
        overflow: "hidden",
        boxShadow:
          "25px 20px 60px rgba(0,0,0,0.8), -5px -5px 20px rgba(255,255,255,0.02)",
        transform:
          "perspective(1600px) rotateY(-15deg) rotateX(15deg) rotateZ(10deg)",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        style={{
          width: 64,
          height: 14,
          background: "#020b14",
          borderRadius: 20,
          margin: "8px auto 4px",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 14px",
          fontSize: 9,
          color: "#7a9bb5",
          marginBottom: 4,
        }}
      >
        <span>9:41</span>
        <span>●●●</span>
      </div>
      <div style={{ padding: "0 12px 16px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <LogoIcon size={11} />
            <span
              style={{
                color: MINT,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.1em",
              }}
            >
              DIGINIWAS
            </span>
          </div>
          <FiBell size={13} color={MINT} />
        </div>

        <div
          style={{
            borderRadius: 10,
            border: "1px solid rgba(51,204,153,0.3)",
            background: "rgba(51,204,153,0.1)",
            padding: 10,
            marginBottom: 8,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 4,
            }}
          >
            <span style={{ fontSize: 9, color: "#7a9bb5" }}>Current Plan</span>
            <span
              style={{
                fontSize: 8,
                border: "1px solid rgba(51,204,153,0.4)",
                borderRadius: 20,
                padding: "2px 7px",
                color: MINT,
              }}
            >
              Active
            </span>
          </div>
          <div style={{ fontSize: 14, fontWeight: 700 }}>Pro Partner</div>
          <div style={{ fontSize: 9, color: "#7a9bb5", margin: "2px 0 6px" }}>
            Valid till 24 May 2025
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 9,
              color: MINT,
            }}
          >
            <span>View Plan Details</span>
            <FiChevronRight size={10} />
          </div>
        </div>

        <div
          style={{
            borderRadius: 10,
            border: "1px solid #162a3a",
            background: "#071927",
            padding: 10,
            marginBottom: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 9, color: "#7a9bb5" }}>Credits Left</div>
            <div style={{ fontSize: 22, fontWeight: 700 }}>248</div>
            <div style={{ fontSize: 9, color: MINT }}>Buy More Credits ›</div>
          </div>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 7,
              border: "1px solid rgba(51,204,153,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: MINT,
            }}
          >
            <FiArchive size={13} />
          </div>
        </div>

        <div style={{ fontSize: 10, fontWeight: 600, marginBottom: 8 }}>
          Quick Actions
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 6,
            marginBottom: 10,
          }}
        >
          {[
            { icon: FiHome, label: "Add Property" },
            { icon: FiMic, label: "Promote" },
            { icon: FiVideo, label: "Video Shoot" },
            { icon: FiEye, label: "View Leads" },
          ].map((q) => (
            <div
              key={q.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <div
                style={{
                  width: window.innerWidth < 768 ? 28 : 36,
                  height: window.innerWidth < 768 ? 28 : 36,
                  borderRadius: 7,
                  border: "1px solid rgba(51,204,153,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: MINT,
                }}
              >
                <q.icon size={window.innerWidth < 768 ? 10 : 13} />
              </div>
              <span
                style={{
                  fontSize: 7.5,
                  color: "#7a9bb5",
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                {q.label}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            borderRadius: 10,
            border: "1px solid #162a3a",
            background: "#071927",
            padding: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 10,
              fontWeight: 600,
              marginBottom: 8,
            }}
          >
            <span>Leads Summary</span>
            <span
              style={{
                fontSize: 8,
                color: "#7a9bb5",
                border: "1px solid #162a3a",
                borderRadius: 4,
                padding: "1px 5px",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              This Week <FiChevronDown size={8} />
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 4,
              height: window.innerWidth < 768 ? 34 : 50,
            }}
          >
            {weekBars.map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  background: MINT,
                  borderRadius: "2px 2px 0 0",
                  height: `${h}%`,
                  minHeight: 3,
                }}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 4,
              fontSize: 7,
              color: "#7a9bb5",
            }}
          >
            {days.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArcShowcase() {
  const isMobile = window.innerWidth < 768;
  const centerX = isMobile ? 180 : 360;
  const centerY = isMobile ? 230 : 300;

  const radiusX = isMobile ? 145 : 280;
  const radiusY = isMobile ? 90 : 150;

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animationFrame;
    let lastTime = performance.now();

    const animate = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      setRotation((prev) => (prev + delta * 0.02) % 360);

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const renderCard = (item) => {
    const currentAngle = item.angle + rotation;

    const angleRad = (currentAngle * Math.PI) / 180;

    const x = centerX + radiusX * Math.cos(angleRad);

    const y = centerY + radiusY * Math.sin(angleRad);

    const depth = (Math.sin(angleRad) + 1) / 2;

    const scale = 0.78 + depth * 0.22;

    const opacity = 0.35 + depth * 0.65;

    const blur = (1 - depth) * 1.2;

    const zIndex = Math.floor(depth * 100);

    return (
      <div
        key={item.title}
        className="absolute"
        style={{
          top: y,
          left: x,

          width: isMobile ? 110 : 190,

          display: "flex",
          alignItems: "center",
          gap: isMobile ? 6 : 14,

          flexDirection: "row",

          transform: `translate(-50%,-50%) scale(${scale})`,

          opacity,

          filter: `blur(${blur}px)`,

          zIndex,

          transition: "transform .08s linear",

          willChange: "transform",
        }}
      >
        <div
          style={{
            width: isMobile ? 34 : 50,
            height: isMobile ? 34 : 50,
            borderRadius: "50%",
            background: "#04121d",
            border: `3px solid ${MINT}`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: MINT,
            boxShadow: `
    0 0 ${8 + depth * 30}px
    rgba(51,204,153,${0.15 + depth * 0.45})
    `,

            transition: "all .4s",
          }}
        >
          <item.icon size={isMobile ? 13 : 18} />
        </div>

        <div
          style={{
            lineHeight: 1.2,

            flexGrow: 1,
            textAlign: "left",
          }}
        >
          <div
            style={{
              fontSize: isMobile ? 8 : 11,
              fontWeight: 800,
              letterSpacing: ".05em",
              color: "#fff",
              textTransform: "uppercase",
            }}
          >
            {item.title}
          </div>

          <div
            style={{
              fontSize: isMobile ? 6.5 : 10,
              marginTop: 3,
              color: "#7a9bb5",
              fontWeight: 700,
              letterSpacing: ".05em",
              textTransform: "uppercase",
            }}
          >
            {item.sub}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="relative w-full flex items-center justify-center select-none"
      style={{
        minHeight: isMobile ? 390 : 520,
        maxWidth: isMobile ? 360 : 600,
      }}
    >
      {/* BACK RING */}

      <div
        style={{
          position: "absolute",

          width: radiusX * 2,

          height: radiusY * 2,

          left: centerX - radiusX,

          top: centerY - radiusY,

          borderRadius: "50%",

          border: "32px solid rgba(51,204,153,.05)",

          borderBottomColor: "transparent",

          borderRightColor: "transparent",

          transform: "rotate(-12deg)",

          zIndex: 10,
        }}
      />

      <div
        style={{
          position: "absolute",

          width: radiusX * 2,

          height: radiusY * 2,

          left: centerX - radiusX,

          top: centerY - radiusY,

          borderRadius: "50%",

          border: "3px dashed rgba(51,204,153,.28)",

          borderBottomColor: "transparent",

          borderRightColor: "transparent",

          transform: "rotate(-12deg)",

          zIndex: 11,
        }}
      />

      <div className="absolute inset-0 z-[15]">
        {arcItems
          .filter((item) => {
            const angle = ((item.angle + rotation) * Math.PI) / 180;

            return Math.sin(angle) < 0;
          })
          .map(renderCard)}
      </div>

      {/* PHONE */}

      <div
        className="absolute z-[60]"
        style={{
          left: centerX,
          top: centerY,
          transform: isMobile
            ? "translate(-40%,-65%) scale(.72)"
            : "translate(-30%,-75%)",
        }}
      >
        <PhoneMobileApp />
      </div>

      <div className="absolute inset-0 z-[80]">
        {arcItems
          .filter((item) => {
            const angle = ((item.angle + rotation) * Math.PI) / 180;
            return Math.sin(angle) >= 0;
          })
          .map(renderCard)}
      </div>

      {/* FRONT RING */}

      <div
        style={{
          position: "absolute",

          width: radiusX * 2,

          height: radiusY * 2,

          left: centerX - radiusX,

          top: centerY - radiusY,

          borderRadius: "50%",

          border: "32px solid rgba(51,204,153,.05)",

          borderTopColor: "transparent",

          borderLeftColor: "transparent",

          transform: "rotate(-12deg)",

          zIndex: 70,
        }}
      />

      <div
        style={{
          position: "absolute",

          width: radiusX * 2,

          height: radiusY * 2,

          left: centerX - radiusX,

          top: centerY - radiusY,

          borderRadius: "50%",

          border: "3px dashed rgba(51,204,153,.45)",

          borderTopColor: "transparent",

          borderLeftColor: "transparent",

          transform: "rotate(-12deg)",

          zIndex: 71,
        }}
      />

      {/* Glow */}

      <div
        style={{
          position: "absolute",

          left: centerX,

          top: centerY + 30,

          width: 240,

          height: 240,

          transform: "translate(-50%,-50%)",

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(51,204,153,.12), transparent 70%)",

          filter: "blur(40px)",

          zIndex: 5,
        }}
      />

      {/* Floating particles */}

      {/* {[...Array(18)].map((_, i) => {

        const angle =
          (i * 20) * Math.PI / 180;

          const px =
          centerX +
          Math.cos(angle) * (isMobile ? 125 : 210);
        
        const py =
          centerY +
          Math.sin(angle) * (isMobile ? 75 : 110);

        return (

          <div
            key={i}
            style={{
              position: "absolute",

              left: px,

              top: py,

              width: 4,

              height: 4,

              borderRadius: "50%",

              background: "#33cc99",

              opacity: .35,

              animation:
                `pulse ${2 + (i * .2)}s infinite`,

              zIndex: 1
            }}
          />

        );

      })} */}
    </div>
  );
}

export default function AgentDashboardPreview() {
  const [showPartnerCorner, setShowPartnerCorner] = useState(false)
  return (
    <section
      style={{
        background: "#040f1a",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="w-full lg:max-w-5xl xl:max-w-[1420px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-12 items-center px-6 sm:px-10 py-12">
        {/* Left Informational Content Layout */}
        <div className="xl:col-span-6 flex flex-col gap-6">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 50,

                height: 50,

                // borderRadius: "50%",

                // background: "#04121d",

                // border: `3px solid ${MINT}`,

                display: "flex",

                justifyContent: "center",

                alignItems: "center",

                color: MINT,

                // boxShadow: "0 0 30px rgba(51,204,153,.25)",

                transition: "all .4s",
              }}
            >
              <niwasAi size={18} />
              <img src={niwasAi} />
            </div>
            <span
              style={{
                color: MINT,
                letterSpacing: "0.18em",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              PARTNER DASHBOARD
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
            style={{ margin: 0 }}
          >
            Everything You Need,
            <br />
            <span style={{ color: MINT }}>All in One Dashboard.</span>
          </h2>

          <p
            style={{
              color: "#7a9bb5",
              fontSize: 14,
              lineHeight: 1.7,
              margin: 0,
              maxWidth: 460,
            }}
          >
            Manage leads, track performance, handle listings and grow your real
            estate business effortlessly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {features.map((f) => (
              <div
                key={f.title}
                style={{
                  display: "flex",
                  gap: 12,
                  padding: 16,
                  borderRadius: 12,
                  border: "1px solid #102435",
                  background: "#051422",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    border: "1px solid rgba(51,204,153,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: MINT,
                    flexShrink: 0,
                  }}
                >
                  <f.icon size={17} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      marginBottom: 3,
                      color: "#fff",
                    }}
                  >
                    {f.title}
                  </div>
                  <div
                    style={{ fontSize: 11, color: "#7a9bb5", lineHeight: 1.5 }}
                  >
                    {f.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex flex-col sm:flex-row items-center gap-4 mt-4">
             <button onClick={() => setShowPartnerCorner(true)} className="w-full sm:w-auto bg-[#33cc99] hover:bg-[#1a9e72] text-[#040f1a] flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-[#33cc99]/10 active:scale-98 transition duration-200">
               Explore Dashboard <FiArrowRight size={16}/>
            </button>
            {/* <button className="w-full sm:w-auto bg-transparent border border-slate-800 hover:border-[#33cc99]/40 text-white flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm active:scale-98 transition duration-200">
              Join as Partner <FiArrowRight size={16}/>
            </button> */}
            <button
              onClick={() =>
                window.open("https://forms.gle/zamAV83SH93gtkE77", "_blank")
              }
              className="w-full sm:w-auto bg-transparent border border-slate-800 hover:border-[#33cc99]/40 text-white flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm active:scale-98 transition duration-200"
            >
              Join as Partner <FiArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Graphical Section */}
        <div className="xl:col-span-6 w-full flex items-center justify-center overflow-visible py-10">
          <ArcShowcase />
        </div>
      </div>


        {showPartnerCorner && (
        <ComingSoonVideo  setShowComingSoon={setShowPartnerCorner} video={import.meta.env.VITE_PARTNER}/>
      )}
    </section>
  );
}