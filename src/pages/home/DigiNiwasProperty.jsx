import {
    FiUser,
    FiHome,
    FiBarChart2,
    FiCreditCard,
    FiBell,
    FiSettings,
    FiGrid,
    FiUsers,
    FiFileText,
    FiPieChart,
    FiTag,
    FiBriefcase,
    FiChevronDown,
    FiChevronRight,
    FiArchive,
    FiMic,
    FiVideo,
    FiEye,
  } from "react-icons/fi";
  import mobile from "../../assets/images/mobile.png";
  import laptop from "../../assets/images/laptop.jpg";
  import homelogo from '../../assets/images/homelogo.png'
  const stats = [
    { label: "Total Leads", value: "128", delta: "+18% this week" },
    { label: "New Leads", value: "24", delta: "+12% this week" },
    { label: "Total Enquiries", value: "56", delta: "+8% this week" },
    { label: "Deals Closed", value: "18", delta: "+25% this week" },
  ];
  const sidebarItems = [
    { icon: FiGrid, label: "Dashboard", active: true },
    { icon: FiUsers, label: "Leads", badge: "25" },
    { icon: FiHome, label: "Properties" },
    { icon: FiFileText, label: "Enquiries" },
    { icon: FiBarChart2, label: "Analytics" },
    { icon: FiTag, label: "Promotions" },
    { icon: FiCreditCard, label: "Wallet & Credits" },
    { icon: FiBriefcase, label: "Plan" },
    { icon: FiUser, label: "Profile" },
    { icon: FiSettings, label: "Settings" },
  ];
  const sources = [
    { name: "Niwas AI", pct: "45%", color: "bg-[oklch(0.82_0.18_165)]" },
    { name: "Website", pct: "25%", color: "bg-[oklch(0.72_0.15_175)]" },
    { name: "Social Media", pct: "20%", color: "bg-[oklch(0.6_0.12_185)]" },
    { name: "Others", pct: "10%", color: "bg-[oklch(0.45_0.08_195)]" },
  ];
  const leads = [
    { name: "Rohit Sharma", req: "2BHK Apartment", loc: "Ambala City", budget: "₹25K - ₹30K", status: "New", time: "2 mins ago", color: "text-mint" },
    { name: "Neha Verma", req: "3BHK Villa", loc: "Ambala Cantt", budget: "₹40K - ₹50K", status: "Contacted", time: "15 mins ago", color: "text-[oklch(0.75_0.15_85)]" },
    { name: "Aman Singh", req: "Commercial Property", loc: "Near City", budget: "₹1Cr - ₹2Cr", status: "Follow Up", time: "1 hour ago", color: "text-[oklch(0.7_0.18_55)]" },
    { name: "Pooja Rani", req: "2BHK Builder Floor", loc: "Zirakpur", budget: "₹20K - ₹25K", status: "New", time: "2 hours ago", color: "text-mint" },
  ];
  const features = [
    { icon: FiUser, title: "Leads & Enquiries", desc: "Get, track and manage all your leads in one place." },
    { icon: FiHome, title: "Property Management", desc: "Add, edit and manage your properties easily." },
    { icon: FiBarChart2, title: "Performance Analytics", desc: "Visualize your performance with smart insights." },
    { icon: FiCreditCard, title: "Plan & Credits", desc: "Know your plan details and remaining credits." },
  ];
  const weekBars = [40, 60, 50, 70, 55, 90, 75];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  function Sparkline() {
    return (
      <svg viewBox="0 0 300 100" className="w-full h-28" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.82 0.18 165)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="oklch(0.82 0.18 165)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,70 C40,40 60,80 90,55 C120,30 150,70 180,45 C210,20 240,65 300,40 L300,100 L0,100 Z" fill="url(#lg)" />
        <path d="M0,70 C40,40 60,80 90,55 C120,30 150,70 180,45 C210,20 240,65 300,40" fill="none" stroke="oklch(0.82 0.18 165)" strokeWidth="2" />
      </svg>
    );
  }
  function Donut() {
    const r = 38;
    const c = 2 * Math.PI * r;
    const segs = [45, 25, 20, 10];
    const colors = ["oklch(0.82 0.18 165)", "oklch(0.72 0.15 175)", "oklch(0.6 0.12 185)", "oklch(0.45 0.08 195)"];
    let offset = 0;
    return (
      <svg viewBox="0 0 100 100" className="w-32 h-32 -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="oklch(0.25 0.02 180)" strokeWidth="14" />
        {segs.map((s, i) => {
          const len = (s / 100) * c;
          const el = (
            <circle key={i} cx="50" cy="50" r={r} fill="none" stroke={colors[i]} strokeWidth="14"
              strokeDasharray={`${len} ${c - len}`} strokeDashoffset={-offset} />
          );
          offset += len;
          return el;
        })}
      </svg>
    );
  }
  function LaptopMockup() {
    return (
      <div className="w-full  ">
        <div className="rounded-t-2xl border border-slate-700 bg-slate-900 p-3 sm:p-4">
          <div className="flex gap-4">
            {/* Sidebar */}
            <aside className="hidden md:flex flex-col gap-1 w-44 lg:w-40 shrink-0">
              <div className="flex items-center gap-2 px-2 py-2 mb-2">
                <HouseLogo size={14} />
                <span className="text-mint font-semibold tracking-wide text-sm">DIGINIWAS</span>
              </div>
              {sidebarItems.map((it) => (
                <button
                  key={it.label}
                  className={`flex items-center  justify-between px-3 py-2 rounded-md text-xs lg:text-sm transition-colors ${
                    it.active ? "text-emerald-400 bg-emerald-500/30 text-mint border border-mint/30" : "text-slate-400 hover:bg-slate-900"
                  }`}
                >
                  <span className="flex items-center text-[0.6rem] sm:text-xs gap-2">
                    <it.icon size={14} />
                    {it.label}
                  </span>
                  {it.badge && <span className="text-[10px] bg-mint/20 text-mint rounded-full px-2 py-0.5">{it.badge}</span>}
                </button>
              ))}
            </aside>
            {/* Main */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm sm:text-base font-medium">Dashboard Overview</h3>
                <div className="flex items-center gap-3 text-slate-400">
                  <FiBell size={16} />
                  <FiUser size={16} />
                </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-3">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-lg border border-slate-700 bg-slate-900 p-2 sm:p-3">
                    <div className="text-[10px] sm:text-xs text-slate-400">{s.label}</div>
                    <div className="text-lg sm:text-xl font-semibold mt-1">{s.value}</div>
                    <div className="text-[9px] sm:text-[10px] text-emerald-400 text-mint mt-1">{s.delta}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-3">
                <div className="lg:col-span-2 rounded-lg border border-slate-700 bg-slate-900 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm">Leads Trend</span>
                    <span className="text-[10px] sm:text-xs text-slate-400 flex items-center gap-1 border border-slate-700 rounded px-2 py-0.5">
                      This Week <FiChevronDown size={10} />
                    </span>
                  </div>
                  <Sparkline />
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-900 p-3">
                  <div className="text-xs sm:text-sm mb-2">Leads by Source</div>
                  <div className="flex items-center gap-3">
                    <Donut />
                    <ul className="text-[10px] sm:text-xs space-y-1 text-slate-400">
                      {sources.map((s, i) => (
                        <li key={s.name} className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${s.color}`} />
                          <span>{s.name}</span>
                          <span className="ml-auto text-white">{s.pct}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-900 p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm">Recent Leads</span>
                  <FiChevronDown size={12} className="text-slate-400" />
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-[0.5rem] sm:text-[0.6rem]">
                    <thead className="text-slate-400">
                      <tr className="text-left">
                        <th className="font-normal py-1.5">Name</th>
                        <th className="font-normal py-1.5">Requirement</th>
                        <th className="font-normal py-1.5">Location</th>
                        <th className="font-normal py-1.5">Budget</th>
                        <th className="font-normal py-1.5">Status</th>
                        <th className="font-normal py-1.5">Received</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads.map((l) => (
                        <tr key={l.name} className="border-t border-slate-700">
                          <td className="py-1.5">{l.name}</td>
                          <td className="py-1.5">{l.req}</td>
                          <td className="py-1.5">{l.loc}</td>
                          <td className="py-1.5">{l.budget}</td>
                          <td className={`py-1.5 text-emerald-400 ${l.color}`}>{l.status}</td>
                          <td className="py-1.5 text-slate-400">{l.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-3 bg-slate-900 rounded-b-2xl mx-[-8px] sm:mx-[-16px] border-x border-b border-slate-700" />
        <div className="h-1 w-24 mx-auto rounded-b-xl bg-slate-900 border-x border-b border-slate-700" />
      </div>
    );
  }
  function PhoneMockup() {
    return (
      <div className="w-[280px] sm:w-72 mx-auto rounded-[2.5rem] border-[10px] border-[oklch(0.12_0.01_180)] bg-slate-900 shadow-2xl shadow-black/50 overflow-hidden relative">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-[oklch(0.1_0_0)] rounded-full z-10" />
        <div className="px-4 pt-3 pb-4">
          <div className="flex justify-between text-[10px] mb-2">
            <span>9:41</span>
            <span className="flex items-center gap-1">●●● ▴ ▮</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <HouseLogo size={12} />
              <span className="text-emerald-400 text-xs font-semibold tracking-wide">DIGINIWAS</span>
            </div>
            <FiBell size={14} className="text-emerald-400" />
          </div>
          <div className="rounded-xl border border-slate-700 bg-emerald-500/30 p-3 mb-3">
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span>Current Plan</span>
              <span className="text-emerald-400 border border-mint/40 rounded-full px-2 py-0.5 text-[9px]">Active</span>
            </div>
            <div className="text-sm font-semibold mt-1">Pro Agent</div>
            <div className="text-[10px] text-slate-400">Valid till 24 May 2025</div>
            <div className="flex items-center justify-between mt-2 text-emerald-400 text-[10px]">
              <span>View Plan Details ›</span>
              <FiChevronRight size={12} />
            </div>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900 p-3 mb-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] text-slate-400">Credits Left</div>
                <div className="text-2xl font-semibold mt-1">248</div>
              </div>
              <div className="w-9 h-9 rounded-lg border border-mint/40 flex items-center justify-center text-emerald-400">
                <FiArchive size={14} />
              </div>
            </div>
            <div className="text-emerald-400 text-[10px] mt-2">Buy More Credits ›</div>
          </div>
          <div className="mb-2 text-xs">Quick Actions</div>
          <div className="grid grid-cols-4 gap-2 mb-3">
            {[
              { icon: FiHome, label: "Add Property" },
              { icon: FiMic, label: "Promote" },
              { icon: FiVideo, label: "Video Shoot" },
              { icon: FiEye, label: "View Leads" },
            ].map((q) => (
              <div key={q.label} className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-lg border border-mint/40 flex items-center justify-center text-emerald-400">
                  <q.icon size={14} />
                </div>
                <span className="text-[8.5px] text-center text-slate-400 leading-tight">{q.label}</span>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs">Leads Summary</span>
              <span className="text-[9px] text-slate-400 flex items-center gap-1 border border-slate-700 rounded px-1.5 py-0.5">
                This Week <FiChevronDown size={9} />
              </span>
            </div>
            <div className="flex items-end justify-between h-20 gap-1">
              {weekBars.map((h, i) => (
                <div key={i} className="flex-1 flex h-full  items-end gap-1">
                  {/* <div className="w-full bg-emerald-500/30  border-2 border-black  rounded-t" style={{ height: `${h}%` }} /> */}
      <div
        className="w-full bg-emerald-400 rounded-t"
        style={{
          height: `${h}%`,
          minHeight: "4px",
        }}
      />
    </div>

             
              ))}
            </div>
            <div className="flex justify-between mt-1 text-[8px] text-slate-400">
              {days.map((d) => <span key={d}>{d}</span>)}
            </div>
          </div>
        </div>
      </div>
    );
  }

 function AgentDashboard() {
    return (
      <section  id="agent" className="min-h-screen bg-[#274255] text-white  px-10 py-10">
        <div className="max-w-[1420px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-4 items-center">
          <div className="xl:col-span-4 space-y-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-12 rounded-lg border border-mint/60 text-emerald-400 flex items-center justify-center font-semibold">
                <img src={homelogo} className="" />
              </span>
              <span className="text-[#33cc99] tracking-[0.2em] text-sm font-medium">AGENT DASHBOARD</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
              Everything You Need,
              <br />
              <span className="text-[#33cc99]">All in One Dashboard.</span>
            </h2>
            <p className="text-slate-400 mt-5 max-w-md text-sm sm:text-base leading-relaxed">
              Manage leads, track performance, handle listings and grow your real estate business effortlessly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
              {features.map((f) => (
                <div key={f.title} className="flex gap-2">
                  <div className="w-12 h-12 cursor-pointer  shrink-0 rounded-lg border border-mint/50 text-emerald-400 flex items-center justify-center">
                    <f.icon size={18} />
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-sm">{f.title}</div>
                    <div className="text-xs  font-medium text-slate-400 leading-snug mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="xl:col-span-8 w-full pt-10 sm:pt-4">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-4">
              <div className="flex-1 w-full">
                {/* <LaptopMockup /> */}
                <img src={'https://res.cloudinary.com/dhuabv2it/image/upload/v1780736764/laptop_ichles.png'} className="w-full h-full" />
              </div>
              <div className="shrink-0">
                {/* <PhoneMockup /> */}
                <img src={'https://res.cloudinary.com/dhuabv2it/image/upload/v1780736764/mobile_inin1j.png'}  className="sm:w-full w-60 h-1/2 sm:h-4/5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }


function HouseLogo({ size = 18 }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-md border border-emerald-500 text-emerald-500"
      style={{ width: size + 10, height: size + 10 }}
    >
      <FiHome size={size} />
    </span>
  );
}

export default function DigiNiwas() {
  return <AgentDashboard />;
}