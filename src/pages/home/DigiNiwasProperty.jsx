// // import {
// //   FiUser, FiHome, FiBarChart2, FiCreditCard,
// //   FiBell, FiSettings, FiGrid, FiUsers, FiFileText,
// //   FiTag, FiBriefcase, FiChevronDown, FiChevronRight,
// //   FiArchive, FiMic, FiVideo, FiEye, FiArrowRight,
// //   FiShield, FiCpu, FiHeadphones,
// // } from "react-icons/fi";
// // import { useNavigate } from "react-router-dom";
// // const trustItems = [
// //   { icon: FiShield,      title: "100% Verified",   sub: "Agents & Listings"  },
// //   { icon: FiCpu,         title: "AI Powered",       sub: "Smart Search"       },
// //   { icon: FiUsers,       title: "Happy Customers",  sub: "Everyday"           },
// //   { icon: FiHome,        title: "Grow Your Real",   sub: "Estate Business"    },
// //   { icon: FiHeadphones,  title: "Dedicated",        sub: "Support"            },
// // ];

// // const features = [
// //   { icon: FiUser,        title: "Leads & Enquiries",     desc: "Get, track and manage all your leads in one place."       },
// //   { icon: FiHome,        title: "Property Management",   desc: "Add, edit and manage your properties easily."             },
// //   { icon: FiBarChart2,   title: "Performance Analytics", desc: "Visualize your performance with smart insights."          },
// //   { icon: FiCreditCard,  title: "Plan & Credits",        desc: "Know your plan details and remaining credits."            },
// // ];

// // const stats = [
// //   { label: "Total Leads",     value: "128", delta: "+18% this week" },
// //   { label: "New Leads",       value: "24",  delta: "+12% this week" },
// //   { label: "Total Enquiries", value: "56",  delta: "+8% this week"  },
// //   { label: "Deals Closed",    value: "18",  delta: "+25% this week" },
// // ];

// // const sources = [
// //   { name: "DigiNiwas AI", pct: "45%", color: "#33cc99" },
// //   { name: "Website",      pct: "25%", color: "#1d9e75" },
// //   { name: "Social Media", pct: "20%", color: "#0f6e56" },
// //   { name: "Others",       pct: "10%", color: "#085041" },
// // ];

// // const weekBars = [40, 60, 50, 70, 55, 90, 75];
// // const days     = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
// // const MINT     = "#33cc99";

// // // ── SVG Sparkline ──────────────────────────────────────────────────────────────
// // function Sparkline() {
// //   return (
// //     <svg viewBox="0 0 300 80" style={{ width:"100%", height:52 }} preserveAspectRatio="none">
// //       <defs>
// //         <linearGradient id="sg" x1="0" x2="0" y1="0" y2="1">
// //           <stop offset="0%"   stopColor={MINT} stopOpacity="0.3"/>
// //           <stop offset="100%" stopColor={MINT} stopOpacity="0"/>
// //         </linearGradient>
// //       </defs>
// //       <path d="M0,60 C40,40 55,65 80,48 C105,30 130,62 155,42 C180,22 210,55 260,30 L300,30 L300,80 L0,80 Z"
// //         fill="url(#sg)"/>
// //       <path d="M0,60 C40,40 55,65 80,48 C105,30 130,62 155,42 C180,22 210,55 260,30 L300,30"
// //         fill="none" stroke={MINT} strokeWidth="1.5"/>
// //     </svg>
// //   );
// // }

// // // ── SVG Donut ──────────────────────────────────────────────────────────────────
// // function Donut() {
// //   const r = 28, c = 2 * Math.PI * r;
// //   const segs   = [45, 25, 20, 10];
// //   const colors = ["#33cc99","#1d9e75","#0f6e56","#085041"];
// //   let offset = 0;
// //   return (
// //     <svg viewBox="0 0 70 70" style={{ width:56, height:56, transform:"rotate(-90deg)", flexShrink:0 }}>
// //       <circle cx="35" cy="35" r={r} fill="none" stroke="#1a3347" strokeWidth="10"/>
// //       {segs.map((s, i) => {
// //         const len = (s/100)*c;
// //         const el = (
// //           <circle key={i} cx="35" cy="35" r={r} fill="none" stroke={colors[i]} strokeWidth="10"
// //             strokeDasharray={`${len} ${c-len}`} strokeDashoffset={-offset}/>
// //         );
// //         offset += len;
// //         return el;
// //       })}
// //     </svg>
// //   );
// // }

// // // ── Logo Icon Box ──────────────────────────────────────────────────────────────
// // function LogoIcon({ size = 20 }) {
// //   return (
// //     <span style={{
// //       display:"inline-flex", alignItems:"center", justifyContent:"center",
// //       width: size+10, height: size+10,
// //       borderRadius:4, border:"1px solid #33cc99", color:"#33cc99"
// //     }}>
// //       <FiHome size={size}/>
// //     </span>
// //   );
// // }

// // // ── Phone 1: Mobile App ────────────────────────────────────────────────────────
// // function PhoneMobileApp() {
// //   return (
// //     <div style={{
// //       width:260, borderRadius:36, border:"8px solid #1a2e3f",
// //       background:"#0f1e2d", overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,0.5)"
// //     }}>
// //       {/* notch */}
// //       <div style={{ width:64, height:14, background:"#0a1520", borderRadius:20, margin:"8px auto 4px" }}/>
// //       {/* status */}
// //       <div style={{ display:"flex", justifyContent:"space-between", padding:"0 14px", fontSize:9, color:"#7a9bb5", marginBottom:4 }}>
// //         <span>9:41</span><span>●●●</span>
// //       </div>

// //       <div style={{ padding:"0 12px 16px" }}>
// //         {/* header */}
// //         <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
// //           <div style={{ display:"flex", alignItems:"center", gap:6 }}>
// //             <LogoIcon size={11}/>
// //             <span style={{ color:MINT, fontSize:10, fontWeight:700, letterSpacing:"0.1em" }}>DIGINIWAS</span>
// //           </div>
// //           <FiBell size={13} color={MINT}/>
// //         </div>

// //         {/* plan */}
// //         <div style={{ borderRadius:10, border:"1px solid rgba(51,204,153,0.3)", background:"rgba(51,204,153,0.1)", padding:10, marginBottom:8 }}>
// //           <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
// //             <span style={{ fontSize:9, color:"#7a9bb5" }}>Current Plan</span>
// //             <span style={{ fontSize:8, border:"1px solid rgba(51,204,153,0.4)", borderRadius:20, padding:"2px 7px", color:MINT }}>Active</span>
// //           </div>
// //           <div style={{ fontSize:14, fontWeight:700 }}>Pro Agent</div>
// //           <div style={{ fontSize:9, color:"#7a9bb5", margin:"2px 0 6px" }}>Valid till 24 May 2025</div>
// //           <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:9, color:MINT }}>
// //             <span>View Plan Details</span><FiChevronRight size={10}/>
// //           </div>
// //         </div>

// //         {/* credits */}
// //         <div style={{ borderRadius:10, border:"1px solid #1a3347", background:"#0f2535", padding:10, marginBottom:10, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
// //           <div>
// //             <div style={{ fontSize:9, color:"#7a9bb5" }}>Credits Left</div>
// //             <div style={{ fontSize:22, fontWeight:700 }}>248</div>
// //             <div style={{ fontSize:9, color:MINT }}>Buy More Credits ›</div>
// //           </div>
// //           <div style={{ width:32, height:32, borderRadius:7, border:"1px solid rgba(51,204,153,0.3)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT }}>
// //             <FiArchive size={13}/>
// //           </div>
// //         </div>

// //         {/* quick actions */}
// //         <div style={{ fontSize:10, fontWeight:600, marginBottom:8 }}>Quick Actions</div>
// //         <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:6, marginBottom:10 }}>
// //           {[
// //             { icon:FiHome,  label:"Add Property" },
// //             { icon:FiMic,   label:"Promote"      },
// //             { icon:FiVideo, label:"Video Shoot"  },
// //             { icon:FiEye,   label:"View Leads"   },
// //           ].map((q) => (
// //             <div key={q.label} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
// //               <div style={{ width:36, height:36, borderRadius:7, border:"1px solid rgba(51,204,153,0.3)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT }}>
// //                 <q.icon size={13}/>
// //               </div>
// //               <span style={{ fontSize:7.5, color:"#7a9bb5", textAlign:"center", lineHeight:1.3 }}>{q.label}</span>
// //             </div>
// //           ))}
// //         </div>

// //         {/* bar chart */}
// //         <div style={{ borderRadius:10, border:"1px solid #1a3347", background:"#0f2535", padding:10 }}>
// //           <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:10, fontWeight:600, marginBottom:8 }}>
// //             <span>Leads Summary</span>
// //             <span style={{ fontSize:8, color:"#7a9bb5", border:"1px solid #1a3347", borderRadius:4, padding:"1px 5px", display:"flex", alignItems:"center", gap:2 }}>
// //               This Week <FiChevronDown size={8}/>
// //             </span>
// //           </div>
// //           <div style={{ display:"flex", alignItems:"flex-end", gap:4, height:50 }}>
// //             {weekBars.map((h, i) => (
// //               <div key={i} style={{ flex:1, background:MINT, borderRadius:"2px 2px 0 0", height:`${h}%`, minHeight:3 }}/>
// //             ))}
// //           </div>
// //           <div style={{ display:"flex", justifyContent:"space-between", marginTop:4, fontSize:7, color:"#7a9bb5" }}>
// //             {days.map((d) => <span key={d}>{d}</span>)}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // ── Phone 2: Dashboard ─────────────────────────────────────────────────────────
// // function PhoneDashboard() {
// //   return (
// //     <div style={{
// //       width:260, borderRadius:36, border:"8px solid #1a2e3f",
// //       background:"#0f1e2d", overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,0.5)"
// //     }}>
// //       <div style={{ width:64, height:14, background:"#0a1520", borderRadius:20, margin:"8px auto 4px" }}/>
// //       <div style={{ display:"flex", justifyContent:"space-between", padding:"0 14px", fontSize:9, color:"#7a9bb5", marginBottom:4 }}>
// //         <span>9:41</span><span>●●●</span>
// //       </div>

// //       <div style={{ padding:"0 12px 16px" }}>
// //         {/* header */}
// //         <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
// //           <div style={{ display:"flex", alignItems:"center", gap:6 }}>
// //             <LogoIcon size={11}/>
// //             <span style={{ color:MINT, fontSize:10, fontWeight:700, letterSpacing:"0.1em" }}>DIGINIWAS</span>
// //           </div>
// //           <FiBell size={13} color={MINT}/>
// //         </div>

// //         <div style={{ fontSize:11, fontWeight:700, marginBottom:8 }}>Dashboard Overview</div>

// //         {/* 4 stats */}
// //         <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:5, marginBottom:8 }}>
// //           {stats.map((s) => (
// //             <div key={s.label} style={{ borderRadius:8, border:"1px solid #1a3347", background:"#0f2535", padding:8 }}>
// //               <div style={{ fontSize:8, color:"#7a9bb5" }}>{s.label}</div>
// //               <div style={{ fontSize:18, fontWeight:700, marginTop:2 }}>{s.value}</div>
// //               <div style={{ fontSize:7.5, color:MINT, marginTop:1 }}>{s.delta}</div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* sparkline */}
// //         <div style={{ borderRadius:10, border:"1px solid #1a3347", background:"#0f2535", padding:10, marginBottom:8 }}>
// //           <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:9, fontWeight:600, marginBottom:4 }}>
// //             <span>Leads Trend</span>
// //             <span style={{ fontSize:7.5, color:"#7a9bb5", border:"1px solid #1a3347", borderRadius:3, padding:"1px 4px", display:"flex", alignItems:"center", gap:2 }}>
// //               This Week <FiChevronDown size={7}/>
// //             </span>
// //           </div>
// //           <Sparkline/>
// //           <div style={{ display:"flex", justifyContent:"space-between", marginTop:2, fontSize:7, color:"#7a9bb5" }}>
// //             {["May 12","May 13","May 14","May 15","May 16","May 17","May 18"].map((d) => <span key={d}>{d}</span>)}
// //           </div>
// //         </div>

// //         {/* donut */}
// //         <div style={{ borderRadius:10, border:"1px solid #1a3347", background:"#0f2535", padding:10 }}>
// //           <div style={{ fontSize:9, fontWeight:600, marginBottom:8 }}>Leads by Source</div>
// //           <div style={{ display:"flex", alignItems:"center", gap:8 }}>
// //             <Donut/>
// //             <ul style={{ flex:1, listStyle:"none", padding:0, margin:0 }}>
// //               {sources.map((s) => (
// //                 <li key={s.name} style={{ display:"flex", alignItems:"center", gap:5, fontSize:7.5, color:"#7a9bb5", marginBottom:3 }}>
// //                   <span style={{ width:7, height:7, borderRadius:"50%", background:s.color, flexShrink:0 }}/>
// //                   <span style={{ flex:1 }}>{s.name}</span>
// //                   <span style={{ color:"#fff" }}>{s.pct}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // ── Trust Bar ──────────────────────────────────────────────────────────────────
// // function TrustBar() {
// //   return (
// //     <div style={{
// //       background:"#0f2535", borderBottom:"1px solid #1a3347",
// //       padding:"14px 48px", display:"flex", flexWrap:"wrap",
// //       justifyContent:"space-between", alignItems:"center", gap:12
// //     }}>
// //       {trustItems.map((t) => (
// //         <div key={t.title} style={{ display:"flex", alignItems:"center", gap:10 }}>
// //           <div style={{
// //             width:36, height:36, borderRadius:8,
// //             background:"rgba(51,204,153,0.1)", border:"1px solid rgba(51,204,153,0.25)",
// //             display:"flex", alignItems:"center", justifyContent:"center", color:MINT
// //           }}>
// //             <t.icon size={16}/>
// //           </div>
// //           <div>
// //             <strong style={{ display:"block", fontSize:13, fontWeight:600 }}>{t.title}</strong>
// //             <span style={{ fontSize:11, color:"#6b8fa8" }}>{t.sub}</span>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // // ── Main Content ───────────────────────────────────────────────────────────────
// // function AgentDashboardMain() {
// //   const navigate = useNavigate()
// //   return (
// //     <div className="  w-full lg:max-w-5xl xl:max-w-[1420px] mx-auto
// //              grid grid-cols-1 xl:grid-cols-2
// //              lg:gap-8 xl:gap-10 space-y-10 xl:space-y-0
// //              px-5 sm:px-8 lg:px-8 xl:px-12
// //              py-10 lg:py-14 items-center" >
// //       {/* LEFT — col-span 4 */}
// //       <div className="  flex flex-col gap-6" >

// //         {/* badge */}
// //         <div style={{ display:"flex", alignItems:"center", gap:10 }}>
// //           <div style={{ width:44, height:44, borderRadius:10, border:"1px solid rgba(51,204,153,0.4)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT }}>
// //             <FiHome size={18}/>
// //           </div>
// //           <span style={{ color:MINT, letterSpacing:"0.18em", fontSize:12, fontWeight:500 }}>AGENT DASHBOARD</span>
// //         </div>

// //         {/* heading */}
// //         <h2 style={{ fontSize:"clamp(26px,3vw,38px)", fontWeight:700, lineHeight:1.2, margin:0 }}>
// //           Everything You Need,<br/>
// //           <span style={{ color:MINT }}>All in One Dashboard.</span>
// //         </h2>

// //         {/* subtitle */}
// //         <p style={{ color:"#7a9bb5", fontSize:14, lineHeight:1.7, margin:0, maxWidth:380 }}>
// //           Manage leads, track performance, handle listings and grow your real estate business effortlessly.
// //         </p>

// //         {/* feature cards */}
// //         <div 
// //         // style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}
// //         className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-5 lg:gap-6"
// //         >
// //           {features.map((f) => (
// //             <div key={f.title} style={{
// //               display:"flex", gap:12, padding:14, borderRadius:12,
// //               border:"1px solid #1a3347", background:"rgba(255,255,255,0.015)"
// //             }}>
// //               <div style={{ width:40, height:40, borderRadius:8, border:"1px solid rgba(51,204,153,0.35)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT, flexShrink:0 }}>
// //                 <f.icon size={17}/>
// //               </div>
// //               <div>
// //                 <div style={{ fontSize:13, fontWeight:600, marginBottom:3 }}>{f.title}</div>
// //                 <div style={{ fontSize:11, color:"#7a9bb5", lineHeight:1.5 }}>{f.desc}</div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* CTA */}
// //         <div className="w-full flex  flex-col  md:flex-row justify-between items-center gap-3"> 
// //         <button   className="bg-[#33cc99] hover:bg-[#1a9e72] text-[#0b1e2d] flex items-center justify-around gap-3 px-8 py-3  rounded-lg
// //           font-semibold text-sm hover:shadow-lg active:scale-95 transition"
// //         // style={{
// //         //   display:"inline-flex", alignItems:"center", gap:10,
// //         //   background:MINT, color:"#0b1e2d", fontWeight:600, fontSize:14,
// //         //   padding:"13px 26px", borderRadius:8, border:"none", cursor:"pointer",
// //         //   alignSelf:"flex-start"
// //         // }}
// //         >
// //           Explore Dashboard <FiArrowRight size={16}/>
// //         </button>
// //          <button onClick={() => navigate("/agent-corner")}
// //           className="bg-[#33cc99] hover:bg-[#1a9e72] text-[#0b1e2d] flex items-center justify-around gap-3 px-[52px] py-3  rounded-lg
// //           font-semibold text-sm hover:shadow-lg active:scale-95 transition">
// //                 Join as Agent <FiArrowRight size={16}/>
// //               </button></div>
// //       </div>

// //       {/* RIGHT — col-span 8 */}
// //       <div   className="  
// //                grid grid-cols-1 sm:grid-cols-2 space-y-0 xl:space-y-0
// //               gap-y-8 gap-x-4 px-4  sm:px-0 xl:gap-6 w-full place-items-center" style={{
         
// //       }}>
// //         <PhoneMobileApp/>
// //         <PhoneDashboard/>
// //       </div>
// //     </div>
// //   );
// // }

// // // ── EXPORT ─────────────────────────────────────────────────────────────────────
// // /**
// //  * AgentDashboardSection
// //  *
// //  * Usage in src/pages/user/Home.jsx:
// //  *   import AgentDashboardSection from '../../components/home/AgentDashboardSection'
// //  *   ...
// //  *   <AgentDashboardSection />
// //  */
// // export default function AgentDashboardSection() {
// //   return (
// //     <section id="agent" style={{  color:"#fff", minHeight:"100vh" }}>
// //       {/* <TrustBar/> */}
// //       <AgentDashboardMain/>
// //     </section>
// //   );
// // }
// import {
//   FiUser, FiHome, FiBarChart2, FiCreditCard,
//   FiBell, FiChevronDown, FiChevronRight,
//   FiArchive, FiMic, FiVideo, FiEye, FiArrowRight,
// } from "react-icons/fi";

// const arcItems = [
//   { icon: FiUser,       title: "Captures",     sub: "Every Lead"        },
//   { icon: FiHome,       title: "Manages",      sub: "Your Listings"     },
//   { icon: FiBarChart2,  title: "Boosts",       sub: "Your Revenue"      },
//   { icon: FiCreditCard, title: "Simplifies",   sub: "Plans & Credits"   },
// ];

// const features = [
//   { icon: FiUser,        title: "Leads & Enquiries",     desc: "Get, track and manage all your leads in one place."       },
//   { icon: FiHome,        title: "Property Management",   desc: "Add, edit and manage your properties easily."             },
//   { icon: FiBarChart2,   title: "Performance Analytics", desc: "Visualize your performance with smart insights."          },
//   { icon: FiCreditCard,  title: "Plan & Credits",        desc: "Know your plan details and remaining credits."            },
// ];

// const weekBars = [40, 60, 50, 70, 55, 90, 75];
// const days     = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
// const MINT     = "#33cc99";

// function LogoIcon({ size = 20 }) {
//   return (
//     <span style={{
//       display:"inline-flex", alignItems:"center", justifyContent:"center",
//       width: size+10, height: size+10,
//       borderRadius:4, border:"1px solid #33cc99", color:"#33cc99"
//     }}>
//       <FiHome size={size}/>
//     </span>
//   );
// }

// function PhoneMobileApp() {
//   return (
//     <div style={{
//       width:260, borderRadius:36, border:"8px solid #1a2e3f",
//       background:"#0f1e2d", overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,0.5)"
//     }}>
//       <div style={{ width:64, height:14, background:"#0a1520", borderRadius:20, margin:"8px auto 4px" }}/>
//       <div style={{ display:"flex", justifyContent:"space-between", padding:"0 14px", fontSize:9, color:"#7a9bb5", marginBottom:4 }}>
//         <span>9:41</span><span>●●●</span>
//       </div>
//       <div style={{ padding:"0 12px 16px" }}>
//         <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
//           <div style={{ display:"flex", alignItems:"center", gap:6 }}>
//             <LogoIcon size={11}/>
//             <span style={{ color:MINT, fontSize:10, fontWeight:700, letterSpacing:"0.1em" }}>DIGINIWAS</span>
//           </div>
//           <FiBell size={13} color={MINT}/>
//         </div>
//         <div style={{ borderRadius:10, border:"1px solid rgba(51,204,153,0.3)", background:"rgba(51,204,153,0.1)", padding:10, marginBottom:8 }}>
//           <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
//             <span style={{ fontSize:9, color:"#7a9bb5" }}>Current Plan</span>
//             <span style={{ fontSize:8, border:"1px solid rgba(51,204,153,0.4)", borderRadius:20, padding:"2px 7px", color:MINT }}>Active</span>
//           </div>
//           <div style={{ fontSize:14, fontWeight:700 }}>Pro Agent</div>
//           <div style={{ fontSize:9, color:"#7a9bb5", margin:"2px 0 6px" }}>Valid till 24 May 2025</div>
//           <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:9, color:MINT }}>
//             <span>View Plan Details</span><FiChevronRight size={10}/>
//           </div>
//         </div>
//         <div style={{ borderRadius:10, border:"1px solid #1a3347", background:"#0f2535", padding:10, marginBottom:10, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
//           <div>
//             <div style={{ fontSize:9, color:"#7a9bb5" }}>Credits Left</div>
//             <div style={{ fontSize:22, fontWeight:700 }}>248</div>
//             <div style={{ fontSize:9, color:MINT }}>Buy More Credits ›</div>
//           </div>
//           <div style={{ width:32, height:32, borderRadius:7, border:"1px solid rgba(51,204,153,0.3)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT }}>
//             <FiArchive size={13}/>
//           </div>
//         </div>
//         <div style={{ fontSize:10, fontWeight:600, marginBottom:8 }}>Quick Actions</div>
//         <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:6, marginBottom:10 }}>
//           {[
//             { icon:FiHome,  label:"Add Property" },
//             { icon:FiMic,   label:"Promote"      },
//             { icon:FiVideo, label:"Video Shoot"  },
//             { icon:FiEye,   label:"View Leads"   },
//           ].map((q) => (
//             <div key={q.label} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
//               <div style={{ width:36, height:36, borderRadius:7, border:"1px solid rgba(51,204,153,0.3)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT }}>
//                 <q.icon size={13}/>
//               </div>
//               <span style={{ fontSize:7.5, color:"#7a9bb5", textAlign:"center", lineHeight:1.3 }}>{q.label}</span>
//             </div>
//           ))}
//         </div>
//         <div style={{ borderRadius:10, border:"1px solid #1a3347", background:"#0f2535", padding:10 }}>
//           <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:10, fontWeight:600, marginBottom:8 }}>
//             <span>Leads Summary</span>
//             <span style={{ fontSize:8, color:"#7a9bb5", border:"1px solid #1a3347", borderRadius:4, padding:"1px 5px", display:"flex", alignItems:"center", gap:2 }}>
//               This Week <FiChevronDown size={8}/>
//             </span>
//           </div>
//           <div style={{ display:"flex", alignItems:"flex-end", gap:4, height:50 }}>
//             {weekBars.map((h, i) => (
//               <div key={i} style={{ flex:1, background:MINT, borderRadius:"2px 2px 0 0", height:`${h}%`, minHeight:3 }}/>
//             ))}
//           </div>
//           <div style={{ display:"flex", justifyContent:"space-between", marginTop:4, fontSize:7, color:"#7a9bb5" }}>
//             {days.map((d) => <span key={d}>{d}</span>)}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ArcShowcase() {
//   const positions = [8, 36, 64, 92];
//   return (
//     <div className="relative w-full flex items-center justify-center" style={{ minHeight: 460 }}>
//       <div style={{
//         position:"absolute", width:420, height:420, borderRadius:"50%",
//         background:"radial-gradient(circle, rgba(51,204,153,0.16) 0%, rgba(51,204,153,0) 70%)",
//         filter:"blur(2px)"
//       }}/>
//       <svg viewBox="0 0 440 460" style={{ position:"absolute", left:"50%", top:"50%", transform:"translate(-58%,-50%)", width:340, height:400 }}>
//         <defs>
//           <linearGradient id="arcGrad" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="0%"  stopColor="#0f6e56"/>
//             <stop offset="50%" stopColor={MINT}/>
//             <stop offset="100%" stopColor="#0f6e56"/>
//           </linearGradient>
//         </defs>
//         <path d="M 340 20 A 210 210 0 0 0 340 440" fill="none" stroke="url(#arcGrad)" strokeWidth="34" strokeLinecap="round"/>
//       </svg>
//       <div className="absolute left-0 top-0 w-full h-full">
//         {arcItems.map((item, i) => (
//           <div key={item.title} className="absolute flex items-center gap-3"
//             style={{ top: `${positions[i]}%`, left: 0, transform: "translateY(-50%)", maxWidth: 190 }}>
//             <div style={{
//               width:52, height:52, borderRadius:"50%", flexShrink:0,
//               background:"#0b1e2d", border:`2px solid ${MINT}`,
//               display:"flex", alignItems:"center", justifyContent:"center",
//               color:MINT, boxShadow:"0 6px 18px rgba(0,0,0,0.45)"
//             }}>
//               <item.icon size={20}/>
//             </div>
//             <div style={{ lineHeight:1.25 }}>
//               <div style={{ fontSize:12, fontWeight:700, letterSpacing:"0.03em", textTransform:"uppercase" }}>{item.title}</div>
//               <div style={{ fontSize:12, fontWeight:700, letterSpacing:"0.03em", textTransform:"uppercase", color:"#7a9bb5" }}>{item.sub}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="relative z-10" style={{ transform:"rotate(6deg) translateX(18px)" }}>
//         <PhoneMobileApp/>
//       </div>
//     </div>
//   );
// }

// export default function AgentDashboardPreview() {
//   return (
//     <section style={{ background:"#0b1e2d", color:"#fff", minHeight:"100vh" }}>
//       <div className="w-full lg:max-w-5xl xl:max-w-[1420px] mx-auto grid grid-cols-1 xl:grid-cols-2 lg:gap-8 xl:gap-10 space-y-10 xl:space-y-0 px-5 sm:px-8 lg:px-8 xl:px-12 py-10 lg:py-14 items-center">
//         <div className="flex flex-col gap-6">
//           <div style={{ display:"flex", alignItems:"center", gap:10 }}>
//             <div style={{ width:44, height:44, borderRadius:10, border:"1px solid rgba(51,204,153,0.4)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT }}>
//               <FiHome size={18}/>
//             </div>
//             <span style={{ color:MINT, letterSpacing:"0.18em", fontSize:12, fontWeight:500 }}>AGENT DASHBOARD</span>
//           </div>
//           <h2 style={{ fontSize:"clamp(26px,3vw,38px)", fontWeight:700, lineHeight:1.2, margin:0 }}>
//             Everything You Need,<br/>
//             <span style={{ color:MINT }}>All in One Dashboard.</span>
//           </h2>
//           <p style={{ color:"#7a9bb5", fontSize:14, lineHeight:1.7, margin:0, maxWidth:380 }}>
//             Manage leads, track performance, handle listings and grow your real estate business effortlessly.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
//             {features.map((f) => (
//               <div key={f.title} style={{ display:"flex", gap:12, padding:14, borderRadius:12, border:"1px solid #1a3347", background:"rgba(255,255,255,0.015)" }}>
//                 <div style={{ width:40, height:40, borderRadius:8, border:"1px solid rgba(51,204,153,0.35)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT, flexShrink:0 }}>
//                   <f.icon size={17}/>
//                 </div>
//                 <div>
//                   <div style={{ fontSize:13, fontWeight:600, marginBottom:3 }}>{f.title}</div>
//                   <div style={{ fontSize:11, color:"#7a9bb5", lineHeight:1.5 }}>{f.desc}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3">
//             <button className="bg-[#33cc99] hover:bg-[#1a9e72] text-[#0b1e2d] flex items-center justify-around gap-3 px-8 py-3 rounded-lg font-semibold text-sm hover:shadow-lg active:scale-95 transition">
//               Explore Dashboard <FiArrowRight size={16}/>
//             </button>
//             <button className="bg-[#33cc99] hover:bg-[#1a9e72] text-[#0b1e2d] flex items-center justify-around gap-3 px-[52px] py-3 rounded-lg font-semibold text-sm hover:shadow-lg active:scale-95 transition">
//               Join as Agent <FiArrowRight size={16}/>
//             </button>
//           </div>
//         </div>
//         <div className="w-full flex items-center justify-center px-4 sm:px-0">
//           <ArcShowcase/>
//         </div>
//       </div>
//     </section>
//   );
// }











// import React from 'react';
// import {
//   FiUser, FiHome, FiBarChart2, FiCreditCard,
//   FiBell, FiChevronDown, FiChevronRight,
//   FiArchive, FiMic, FiVideo, FiEye, FiArrowRight,
// } from "react-icons/fi";

// const arcItems = [
//   { icon: FiUser,       title: "Captures",    sub: "Every Lead"        },
//   { icon: FiHome,       title: "Manages",      sub: "Your Listings"     },
//   { icon: FiBarChart2,  title: "Boosts",       sub: "Your Revenue"      },
//   { icon: FiCreditCard, title: "Simplifies",   sub: "Plans & Credits"   },
// ];

// const features = [
//   { icon: FiUser,        title: "Leads & Enquiries",     desc: "Get, track and manage all your leads in one place."       },
//   { icon: FiHome,        title: "Property Management",   desc: "Add, edit and manage your properties easily."             },
//   { icon: FiBarChart2,   title: "Performance Analytics", desc: "Visualize your performance with smart insights."          },
//   { icon: FiCreditCard,  title: "Plan & Credits",        desc: "Know your plan details and remaining credits."            },
// ];

// const weekBars = [40, 60, 50, 70, 55, 90, 75];
// const days     = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
// const MINT     = "#33cc99";

// function LogoIcon({ size = 20 }) {
//   return (
//     <span style={{
//       display:"inline-flex", alignItems:"center", justifyContent:"center",
//       width: size+10, height: size+10,
//       borderRadius:4, border:"1px solid #33cc99", color:"#33cc99"
//     }}>
//       <FiHome size={size}/>
//     </span>
//   );
// }

// function PhoneMobileApp() {
//   return (
//     <div style={{
//       width: 240, 
//       borderRadius: 36, 
//       border: "7px solid #142534",
//       background: "#051422", 
//       overflow: "hidden", 
//       boxShadow: "-15px 25px 50px rgba(0,0,0,0.7), 5px -5px 20px rgba(255,255,255,0.03)",
//       transform: "perspective(1200px) rotateY(-24deg) rotateX(12deg) rotateZ(-6deg)", // Real 3D Tilt Effect
//       transformStyle: "preserve-3d"
//     }}>
//       <div style={{ width:64, height:14, background:"#020b14", borderRadius:20, margin:"8px auto 4px" }}/>
//       <div style={{ display:"flex", justifyContent:"space-between", padding:"0 14px", fontSize:9, color:"#7a9bb5", marginBottom:4 }}>
//         <span>9:41</span><span>●●●</span>
//       </div>
//       <div style={{ padding:"0 12px 16px" }}>
//         <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
//           <div style={{ display:"flex", alignItems:"center", gap:6 }}>
//             <LogoIcon size={11}/>
//             <span style={{ color:MINT, fontSize:10, fontWeight:700, letterSpacing:"0.1em" }}>DIGINIWAS</span>
//           </div>
//           <FiBell size={13} color={MINT}/>
//         </div>
        
//         <div style={{ borderRadius:10, border:"1px solid rgba(51,204,153,0.3)", background:"rgba(51,204,153,0.1)", padding:10, marginBottom:8 }}>
//           <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
//             <span style={{ fontSize:9, color:"#7a9bb5" }}>Current Plan</span>
//             <span style={{ fontSize:8, border:"1px solid rgba(51,204,153,0.4)", borderRadius:20, padding:"2px 7px", color:MINT }}>Active</span>
//           </div>
//           <div style={{ fontSize:14, fontWeight:700 }}>Pro Agent</div>
//           <div style={{ fontSize:9, color:"#7a9bb5", margin:"2px 0 6px" }}>Valid till 24 May 2025</div>
//           <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:9, color:MINT }}>
//             <span>View Plan Details</span><FiChevronRight size={10}/>
//           </div>
//         </div>

//         <div style={{ borderRadius:10, border:"1px solid #162a3a", background:"#071927", padding:10, marginBottom:10, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
//           <div>
//             <div style={{ fontSize:9, color:"#7a9bb5" }}>Credits Left</div>
//             <div style={{ fontSize:22, fontWeight:700 }}>248</div>
//             <div style={{ fontSize:9, color:MINT }}>Buy More Credits ›</div>
//           </div>
//           <div style={{ width:32, height:32, borderRadius:7, border:"1px solid rgba(51,204,153,0.3)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT }}>
//             <FiArchive size={13}/>
//           </div>
//         </div>

//         <div style={{ fontSize:10, fontWeight:600, marginBottom:8 }}>Quick Actions</div>
//         <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:6, marginBottom:10 }}>
//           {[
//             { icon:FiHome,  label:"Add Property" },
//             { icon:FiMic,   label:"Promote"      },
//             { icon:FiVideo, label:"Video Shoot"  },
//             { icon:FiEye,   label:"View Leads"   },
//           ].map((q) => (
//             <div key={q.label} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
//               <div style={{ width:36, height:36, borderRadius:7, border:"1px solid rgba(51,204,153,0.3)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT }}>
//                 <q.icon size={13}/>
//               </div>
//               <span style={{ fontSize:7.5, color:"#7a9bb5", textAlign:"center", lineHeight:1.3 }}>{q.label}</span>
//             </div>
//           ))}
//         </div>

//         <div style={{ borderRadius:10, border:"1px solid #162a3a", background:"#071927", padding:10 }}>
//           <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:10, fontWeight:600, marginBottom:8 }}>
//             <span>Leads Summary</span>
//             <span style={{ fontSize:8, color:"#7a9bb5", border:"1px solid #162a3a", borderRadius:4, padding:"1px 5px", display:"flex", alignItems:"center", gap:2 }}>
//               This Week <FiChevronDown size={8}/>
//             </span>
//           </div>
//           <div style={{ display:"flex", alignItems:"flex-end", gap:4, height:50 }}>
//             {weekBars.map((h, i) => (
//               <div key={i} style={{ flex:1, background:MINT, borderRadius:"2px 2px 0 0", height:`${h}%`, minHeight:3 }}/>
//             ))}
//           </div>
//           <div style={{ display:"flex", justifyContent:"space-between", marginTop:4, fontSize:7, color:"#7a9bb5" }}>
//             {days.map((d) => <span key={d}>{d}</span>)}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ArcShowcase() {
//   // Trigonometric parameters perfectly aligned with the 3D tilted phone frame bounds
//   const radiusX = 180; 
//   const radiusY = 220; 
//   const centerX = 310; 
//   const centerY = 240; 

//   // Smooth step placement angles around the left arc quadrant
//   const angles = [135, 162, 192, 220]; 

//   return (
//     <div className="relative w-full flex items-center justify-center select-none" style={{ minHeight: 520, maxWidth: 560 }}>
      
//       {/* Dynamic Colored Circular Ring Path (Slightly tilted visually using border-radius mapping) */}
//       <div style={{
//         position: "absolute",
//         width: "360px",
//         height: "440px",
//         left: "140px",
//         top: "20px",
//         borderRadius: "50%",
//         border: "3px dashed rgba(51,204,153,0.25)",
//         borderRightColor: "transparent",
//         transform: "rotate(-10deg)",
//         zIndex: 1
//       }} />

//       {/* Process Map Badge Cards Matrix Layout */}
//       <div className="absolute inset-0 z-10 w-full h-full">
//         {arcItems.map((item, i) => {
//           const angleRad = (angles[i] * Math.PI) / 180;
//           // Calculate precise positions along the custom ring ellipse
//           const x = centerX + radiusX * Math.cos(angleRad);
//           const y = centerY + radiusY * Math.sin(angleRad);

//           return (
//             <div 
//               key={item.title} 
//               className="absolute flex items-center gap-3 transition-all duration-300 hover:scale-105"
//               style={{ 
//                 top: `${y}px`, 
//                 left: `${x}px`,
//                 transform: "translate(-100%, -50%)", 
//                 width: "210px",
//                 justifyContent: "flex-end"
//               }}
//             >
//               {/* Text Description Area */}
//               <div style={{ lineHeight: 1.2, textAlign: "right" }}>
//                 <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", color: "#ffffff" }}>
//                   {item.title}
//                 </div>
//                 <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.02em", textTransform: "uppercase", color: "#7a9bb5", marginTop: 2 }}>
//                   {item.sub}
//                 </div>
//               </div>

//               {/* Rounded Highlight Icon Badge */}
//               <div style={{
//                 width: 46, height: 46, borderRadius: "50%", flexShrink: 0,
//                 background: "#051422", border: `2px solid ${MINT}`,
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 color: MINT, boxShadow: "0 6px 20px rgba(0,0,0,0.6)"
//               }}>
//                 <item.icon size={16}/>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* 3D Tilted Mobile Device Viewport Layer */}
//       <div className="relative z-20" style={{ transform: "translateX(90px)" }}>
//         <PhoneMobileApp />
//       </div>

//     </div>
//   );
// }

// export default function AgentDashboardPreview() {
//   return (
//     <section style={{ background:"#040f1a", color:"#fff", minHeight:"100vh", display: "flex", alignItems: "center" }}>
//       <div className="w-full lg:max-w-5xl xl:max-w-[1420px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-12 items-center px-6 sm:px-10 py-12">
        
//         {/* Left Informational Column */}
//         <div className="xl:col-span-6 flex flex-col gap-6">
//           <div style={{ display:"flex", alignItems:"center", gap:10 }}>
//             <div style={{ width:44, height:44, borderRadius:10, border:"1px solid rgba(51,204,153,0.4)", display:"flex", alignItems:"center", justifyOrigin: "center", justifyContent:"center", color:MINT, background: "#051625" }}>
//               <FiHome size={18}/>
//             </div>
//             <span style={{ color:MINT, letterSpacing:"0.18em", fontSize:12, fontWeight:600 }}>AGENT DASHBOARD</span>
//           </div>

//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight" style={{ margin:0 }}>
//             Everything You Need,<br/>
//             <span style={{ color:MINT }}>All in One Dashboard.</span>
//           </h2>

//           <p style={{ color:"#7a9bb5", fontSize:14, lineHeight:1.7, margin:0, maxWidth:460 }}>
//             Manage leads, track performance, handle listings and grow your real estate business effortlessly.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
//             {features.map((f) => (
//               <div key={f.title} style={{ display:"flex", gap:12, padding:16, borderRadius:12, border:"1px solid #102435", background:"#051422" }}>
//                 <div style={{ width:40, height:40, borderRadius:8, border:"1px solid rgba(51,204,153,0.35)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT, flexShrink:0 }}>
//                   <f.icon size={17}/>
//                 </div>
//                 <div>
//                   <div style={{ fontSize:13, fontWeight:700, marginBottom:3, color: "#fff" }}>{f.title}</div>
//                   <div style={{ fontSize:11, color:"#7a9bb5", lineHeight:1.5 }}>{f.desc}</div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="w-full flex flex-col sm:flex-row items-center gap-4 mt-4">
//             <button className="w-full sm:w-auto bg-[#33cc99] hover:bg-[#1a9e72] text-[#040f1a] flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-[#33cc99]/10 active:scale-98 transition duration-200">
//               Explore Dashboard <FiArrowRight size={16}/>
//             </button>
//             <button className="w-full sm:w-auto bg-transparent border border-slate-800 hover:border-[#33cc99]/40 text-white flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm active:scale-98 transition duration-200">
//               Join as Agent <FiArrowRight size={16}/>
//             </button>
//           </div>
//         </div>

//         {/* Right Graphical Viewport Column */}
//         <div className="xl:col-span-6 w-full flex items-center justify-center overflow-visible py-10">
//           <ArcShowcase/>
//         </div>

//       </div>
//     </section>
//   );
// }

import React from 'react';
import {
  FiUser, FiHome, FiBarChart2, FiCreditCard,
  FiBell, FiChevronDown, FiChevronRight,
  FiArchive, FiMic, FiVideo, FiEye, FiArrowRight,
} from "react-icons/fi";

const arcItems = [
  { icon: FiUser,       title: "Captures",    sub: "Every Lead",        angle: 120, isFront: true },
  { icon: FiHome,       title: "Manages",      sub: "Your Listings",     angle: 160, isFront: false },
  { icon: FiBarChart2,  title: "Boosts",       sub: "Your Revenue",      angle: 200, isFront: true  },
  { icon: FiCreditCard, title: "Simplifies",   sub: "Plans & Credits",   angle: 240, isFront: true  },
];

const features = [
  { icon: FiUser,        title: "Leads & Enquiries",     desc: "Get, track and manage all your leads in one place."       },
  { icon: FiHome,        title: "Property Management",   desc: "Add, edit and manage your properties easily."             },
  { icon: FiBarChart2,   title: "Performance Analytics", desc: "Visualize your performance with smart insights."          },
  { icon: FiCreditCard,  title: "Plan & Credits",        desc: "Know your plan details and remaining credits."            },
];

const weekBars = [40, 60, 50, 70, 55, 90, 75];
const days     = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const MINT     = "#33cc99";

function LogoIcon({ size = 20 }) {
  return (
    <span style={{
      display:"inline-flex", alignItems:"center", justifyContent:"center",
      width: size+10, height: size+10,
      borderRadius:4, border:"1px solid #33cc99", color:"#33cc99"
    }}>
      <FiHome size={size}/>
    </span>
  );
}

function PhoneMobileApp() {
  return (
    <div style={{
      width: 250, 
      borderRadius: 36, 
      border: "7px solid #142534",
      background: "#051422", 
      overflow: "hidden", 
      boxShadow: "25px 20px 60px rgba(0,0,0,0.8), -5px -5px 20px rgba(255,255,255,0.02)",
      transform: "perspective(1600px) rotateY(-15deg) rotateX(15deg) rotateZ(10deg)", 
      transformStyle: "preserve-3d"
    }}>
      <div style={{ width:64, height:14, background:"#020b14", borderRadius:20, margin:"8px auto 4px" }}/>
      <div style={{ display:"flex", justifyContent:"space-between", padding:"0 14px", fontSize:9, color:"#7a9bb5", marginBottom:4 }}>
        <span>9:41</span><span>●●●</span>
      </div>
      <div style={{ padding:"0 12px 16px" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
          <div style={{ display:"flex", alignItems:"center", gap:6 }}>
            <LogoIcon size={11}/>
            <span style={{ color:MINT, fontSize:10, fontWeight:700, letterSpacing:"0.1em" }}>DIGINIWAS</span>
          </div>
          <FiBell size={13} color={MINT}/>
        </div>
        
        <div style={{ borderRadius:10, border:"1px solid rgba(51,204,153,0.3)", background:"rgba(51,204,153,0.1)", padding:10, marginBottom:8 }}>
          <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
            <span style={{ fontSize:9, color:"#7a9bb5" }}>Current Plan</span>
            <span style={{ fontSize:8, border:"1px solid rgba(51,204,153,0.4)", borderRadius:20, padding:"2px 7px", color:MINT }}>Active</span>
          </div>
          <div style={{ fontSize:14, fontWeight:700 }}>Pro Agent</div>
          <div style={{ fontSize:9, color:"#7a9bb5", margin:"2px 0 6px" }}>Valid till 24 May 2025</div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:9, color:MINT }}>
            <span>View Plan Details</span><FiChevronRight size={10}/>
          </div>
        </div>

        <div style={{ borderRadius:10, border:"1px solid #162a3a", background:"#071927", padding:10, marginBottom:10, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div>
            <div style={{ fontSize:9, color:"#7a9bb5" }}>Credits Left</div>
            <div style={{ fontSize:22, fontWeight:700 }}>248</div>
            <div style={{ fontSize:9, color:MINT }}>Buy More Credits ›</div>
          </div>
          <div style={{ width:32, height:32, borderRadius:7, border:"1px solid rgba(51,204,153,0.3)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT }}>
            <FiArchive size={13}/>
          </div>
        </div>

        <div style={{ fontSize:10, fontWeight:600, marginBottom:8 }}>Quick Actions</div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:6, marginBottom:10 }}>
          {[
            { icon:FiHome,  label:"Add Property" },
            { icon:FiMic,   label:"Promote"      },
            { icon:FiVideo, label:"Video Shoot"  },
            { icon:FiEye,   label:"View Leads"   },
          ].map((q) => (
            <div key={q.label} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
              <div style={{ width:36, height:36, borderRadius:7, border:"1px solid rgba(51,204,153,0.3)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT }}>
                <q.icon size={13}/>
              </div>
              <span style={{ fontSize:7.5, color:"#7a9bb5", textAlign:"center", lineHeight:1.3 }}>{q.label}</span>
            </div>
          ))}
        </div>

        <div style={{ borderRadius:10, border:"1px solid #162a3a", background:"#071927", padding:10 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:10, fontWeight:600, marginBottom:8 }}>
            <span>Leads Summary</span>
            <span style={{ fontSize:8, color:"#7a9bb5", border:"1px solid #162a3a", borderRadius:4, padding:"1px 5px", display:"flex", alignItems:"center", gap:2 }}>
              This Week <FiChevronDown size={8}/>
            </span>
          </div>
          <div style={{ display:"flex", alignItems:"flex-end", gap:4, height:50 }}>
            {weekBars.map((h, i) => (
              <div key={i} style={{ flex:1, background:MINT, borderRadius:"2px 2px 0 0", height:`${h}%`, minHeight:3 }}/>
            ))}
          </div>
          <div style={{ display:"flex", justifyContent:"space-between", marginTop:4, fontSize:7, color:"#7a9bb5" }}>
            {days.map((d) => <span key={d}>{d}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArcShowcase() {
  // Center is now shared symmetrically by both the phone and the looping ellipse
  const centerX = 360; 
  const centerY = 300; 
  const radiusX = 280; // Ring horizontal spread
  const radiusY = 150; // Ring vertical flatness

  const renderCard = (item) => {
    const angleRad = (item.angle * Math.PI) / 180;
    const x = centerX + radiusX * Math.cos(angleRad);
    const y = centerY + radiusY * Math.sin(angleRad);

    // Dynamic alignment checks based on left/right loop quadrants
    const isLeftSide = item.angle > 90 && item.angle < 120;

    return (
      <div 
        key={item.title} 
        className="absolute flex items-center gap-3 transition-all duration-300 hover:scale-105"
        style={{ 
          top: `${y}px`, 
          left: `${x}px`,
          transform: "translate(-50%, -50%)", 
          flexDirection: isLeftSide ? "row" : "row-reverse",
          width: "220px",
        }}
      >
        <div style={{ lineHeight: 1.2, textAlign: isLeftSide ? "right" : "left", flexGrow: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", color: "#ffffff" }}>
            {item.title}
          </div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.02em", textTransform: "uppercase", color: "#7a9bb5", marginTop: 2 }}>
            {item.sub}
          </div>
        </div>

        <div style={{
          width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
          background: "#051422", border: `3px solid ${MINT}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: MINT, boxShadow: "0 8px 24px rgba(0,0,0,0.7)"
        }}>
          <item.icon size={17}/>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full flex items-center justify-center select-none" style={{ minHeight: 520, maxWidth: 600 }}>
      
      {/* LAYER 1: BACK SEMI-CIRCLE (Passes completely behind the phone) */}
      <div style={{
        position: "absolute",
        width: `${radiusX * 2}px`,
        height: `${radiusY * 2}px`,
        left: `${centerX - radiusX}px`,
        top: `${centerY - radiusY}px`,
        borderRadius: "50%",
        border: "32px solid rgba(51,204,153,0.05)",
        borderBottomColor: "transparent",
        borderRightColor: "transparent",
        transform: "rotate(-12deg)",
        zIndex: 10
      }} />
      <div style={{
        position: "absolute",
        width: `${radiusX * 2}px`,
        height: `${radiusY * 2}px`,
        left: `${centerX - radiusX}px`,
        top: `${centerY - radiusY}px`,
        borderRadius: "50%",
        border: "3px dashed rgba(51,204,153,0.25)",
        borderBottomColor: "transparent",
        borderRightColor: "transparent",
        transform: "rotate(-12deg)",
        zIndex: 6
      }} />

      {/* RENDER OBJECTS ON THE BACK LOOP LAYER */}
      <div className="absolute inset-2 z-10 w-full h-full">
        {arcItems.map((item) => !item.isFront && renderCard(item))}
      </div>

      {/* LAYER 2: ABSOLUTE SYMMETRIC CENTERED SMARTPHONE */}
      <div className="absolute z-20" style={{ left: `${centerX}px`, top: `${centerY}px`, transform: "translate(-30%, -75%)" }}>
        <PhoneMobileApp />
      </div>

      {/* LAYER 3: FRONT SEMI-CIRCLE (Wraps and covers over the phone screen front) */}
      <div style={{
        position: "absolute",
        width: `${radiusX * 2}px`,
        height: `${radiusY * 2}px`,
        left: `${centerX - radiusX}px`,
        top: `${centerY - radiusY}px`,
        borderRadius: "50%",
        border: "32px solid rgba(51,204,153,0.05)", 
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        transform: "rotate(-12deg)",
        zIndex: 30
      }} />
      <div style={{
        position: "absolute",
        width: `${radiusX * 2}px`,
        height: `${radiusY * 2}px`,
        left: `${centerX - radiusX}px`,
        top: `${centerY - radiusY}px`,
        borderRadius: "50%",
        border: "3px dashed rgba(51,204,153,0.4)",
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        transform: "rotate(-12deg)",
        zIndex: 31
      }} />

      {/* RENDER OBJECTS ON THE FRONT LOOP LAYER */}
      <div className="absolute inset-0 z-40 w-full h-full">
        {arcItems.map((item) => item.isFront && renderCard(item))}
      </div>

    </div>
  );
}

export default function AgentDashboardPreview() {
  return (
    <section style={{ background:"#040f1a", color:"#fff", minHeight:"100vh", display: "flex", alignItems: "center" }}>
      <div className="w-full lg:max-w-5xl xl:max-w-[1420px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-12 items-center px-6 sm:px-10 py-12">
        
        {/* Left Informational Content Layout */}
        <div className="xl:col-span-6 flex flex-col gap-6">
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <div style={{ width:44, height:44, borderRadius:10, border:"1px solid rgba(51,204,153,0.4)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT, background: "#051625" }}>
              <FiHome size={18}/>
            </div>
            <span style={{ color:MINT, letterSpacing:"0.18em", fontSize:12, fontWeight:600 }}>AGENT DASHBOARD</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight" style={{ margin:0 }}>
            Everything You Need,<br/>
            <span style={{ color:MINT }}>All in One Dashboard.</span>
          </h2>

          <p style={{ color:"#7a9bb5", fontSize:14, lineHeight:1.7, margin:0, maxWidth:460 }}>
            Manage leads, track performance, handle listings and grow your real estate business effortlessly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {features.map((f) => (
              <div key={f.title} style={{ display:"flex", gap:12, padding:16, borderRadius:12, border:"1px solid #102435", background:"#051422" }}>
                <div style={{ width:40, height:40, borderRadius:8, border:"1px solid rgba(51,204,153,0.35)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT, flexShrink:0 }}>
                  <f.icon size={17}/>
                </div>
                <div>
                  <div style={{ fontSize:13, fontWeight:700, marginBottom:3, color: "#fff" }}>{f.title}</div>
                  <div style={{ fontSize:11, color:"#7a9bb5", lineHeight:1.5 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex flex-col sm:flex-row items-center gap-4 mt-4">
            <button className="w-full sm:w-auto bg-[#33cc99] hover:bg-[#1a9e72] text-[#040f1a] flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-[#33cc99]/10 active:scale-98 transition duration-200">
              Explore Dashboard <FiArrowRight size={16}/>
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-slate-800 hover:border-[#33cc99]/40 text-white flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm active:scale-98 transition duration-200">
              Join as Agent <FiArrowRight size={16}/>
            </button>
          </div>
        </div>

        {/* Right Graphical Section */}
        <div className="xl:col-span-6 w-full flex items-center justify-center overflow-visible py-10">
          <ArcShowcase/>
        </div>

      </div>
    </section>
  );
}
// import React from 'react';
// import {
//   FiUser, FiHome, FiBarChart2, FiCreditCard,
//   FiBell, FiChevronDown, FiChevronRight,
//   FiArchive, FiMic, FiVideo, FiEye, FiArrowRight,
// } from "react-icons/fi";

// const arcItems = [
//   { icon: FiUser,       title: "Captures",    sub: "Every Lead",        isFront: false },
//   { icon: FiHome,       title: "Manages",      sub: "Your Listings",     isFront: false },
//   { icon: FiBarChart2,  title: "Boosts",       sub: "Your Revenue",      isFront: true  },
//   { icon: FiCreditCard, title: "Simplifies",   sub: "Plans & Credits",   isFront: true  },
// ];

// const features = [
//   { icon: FiUser,        title: "Leads & Enquiries",     desc: "Get, track and manage all your leads in one place."       },
//   { icon: FiHome,        title: "Property Management",   desc: "Add, edit and manage your properties easily."             },
//   { icon: FiBarChart2,   title: "Performance Analytics", desc: "Visualize your performance with smart insights."          },
//   { icon: FiCreditCard,  title: "Plan & Credits",        desc: "Know your plan details and remaining credits."            },
// ];

// const weekBars = [40, 60, 50, 70, 55, 90, 75];
// const days     = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
// const MINT     = "#33cc99";

// function LogoIcon({ size = 20 }) {
//   return (
//     <span style={{
//       display:"inline-flex", alignItems:"center", justifyContent:"center",
//       width: size+10, height: size+10,
//       borderRadius:4, border:"1px solid #33cc99", color:"#33cc99"
//     }}>
//       <FiHome size={size}/>
//     </span>
//   );
// }

// function PhoneMobileApp() {
//   return (
//     <div style={{
//       width: 235, 
//       borderRadius: 36, 
//       border: "7px solid #142534",
//       background: "#051422", 
//       overflow: "hidden", 
//       boxShadow: "25px 20px 60px rgba(0,0,0,0.8), -5px -5px 20px rgba(255,255,255,0.02)",
//       transform: "perspective(1200px) rotateY(28deg) rotateX(12deg) rotateZ(4deg)", 
//       transformStyle: "preserve-3d"
//     }}>
//       <div style={{ width:64, height:14, background:"#020b14", borderRadius:20, margin:"8px auto 4px" }}/>
//       <div style={{ display:"flex", justifyContent:"space-between", padding:"0 14px", fontSize:9, color:"#7a9bb5", marginBottom:4 }}>
//         <span>9:41</span><span>●●●</span>
//       </div>
//       <div style={{ padding:"0 12px 16px" }}>
//         <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
//           <div style={{ display:"flex", alignItems:"center", gap:6 }}>
//             <LogoIcon size={11}/>
//             <span style={{ color:MINT, fontSize:10, fontWeight:700, letterSpacing:"0.1em" }}>DIGINIWAS</span>
//           </div>
//           <FiBell size={13} color={MINT}/>
//         </div>
        
//         <div style={{ borderRadius:10, border:"1px solid rgba(51,204,153,0.3)", background:"rgba(51,204,153,0.1)", padding:10, marginBottom:8 }}>
//           <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
//             <span style={{ fontSize:9, color:"#7a9bb5" }}>Current Plan</span>
//             <span style={{ fontSize:8, border:"1px solid rgba(51,204,153,0.4)", borderRadius:20, padding:"2px 7px", color:MINT }}>Active</span>
//           </div>
//           <div style={{ fontSize:14, fontWeight:700 }}>Pro Agent</div>
//           <div style={{ fontSize:9, color:"#7a9bb5", margin:"2px 0 6px" }}>Valid till 24 May 2025</div>
//           <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:9, color:MINT }}>
//             <span>View Plan Details</span><FiChevronRight size={10}/>
//           </div>
//         </div>

//         <div style={{ borderRadius:10, border:"1px solid #162a3a", background:"#071927", padding:10, marginBottom:10, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
//           <div>
//             <div style={{ fontSize:9, color:"#7a9bb5" }}>Credits Left</div>
//             <div style={{ fontSize:22, fontWeight:700 }}>248</div>
//             <div style={{ fontSize:9, color:MINT }}>Buy More Credits ›</div>
//           </div>
//           <div style={{ width:32, height:32, borderRadius:7, border:"1px solid rgba(51,204,153,0.3)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT }}>
//             <FiArchive size={13}/>
//           </div>
//         </div>

//         <div style={{ fontSize:10, fontWeight:600, marginBottom:8 }}>Quick Actions</div>
//         <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:6, marginBottom:10 }}>
//           {[
//             { icon:FiHome,  label:"Add Property" },
//             { icon:FiMic,   label:"Promote"      },
//             { icon:FiVideo, label:"Video Shoot"  },
//             { icon:FiEye,   label:"View Leads"   },
//           ].map((q) => (
//             <div key={q.label} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
//               <div style={{ width:36, height:36, borderRadius:7, border:"1px solid rgba(51,204,153,0.3)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT }}>
//                 <q.icon size={13}/>
//               </div>
//               <span style={{ fontSize:7.5, color:"#7a9bb5", textAlign:"center", lineHeight:1.3 }}>{q.label}</span>
//             </div>
//           ))}
//         </div>

//         <div style={{ borderRadius:10, border:"1px solid #162a3a", background:"#071927", padding:10 }}>
//           <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:10, fontWeight:600, marginBottom:8 }}>
//             <span>Leads Summary</span>
//             <span style={{ fontSize:8, color:"#7a9bb5", border:"1px solid #162a3a", borderRadius:4, padding:"1px 5px", display:"flex", alignItems:"center", gap:2 }}>
//               This Week <FiChevronDown size={8}/>
//             </span>
//           </div>
//           <div style={{ display:"flex", alignItems:"flex-end", gap:4, height:50 }}>
//             {weekBars.map((h, i) => (
//               <div key={i} style={{ flex:1, background:MINT, borderRadius:"2px 2px 0 0", height:`${h}%`, minHeight:3 }}/>
//             ))}
//           </div>
//           <div style={{ display:"flex", justifyContent:"space-between", marginTop:4, fontSize:7, color:"#7a9bb5" }}>
//             {days.map((d) => <span key={d}>{d}</span>)}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ArcShowcase() {
//   // Horizontal track parameters
//   const radiusX = 240; 
//   const radiusY = 130; 
//   const centerX = 200; 
//   const centerY = 240; 

//   // Angles mapped for sequential flow along the 3D loop trajectory
//   const angles = [140, 180, 220, 260]; 

//   const renderCard = (item, i) => {
//     const angleRad = (angles[i] * Math.PI) / 180;
//     const x = centerX + radiusX * Math.cos(angleRad);
//     const y = centerY + radiusY * Math.sin(angleRad);

//     return (
//       <div 
//         key={item.title} 
//         className="absolute flex items-center gap-3 transition-all duration-300 hover:scale-105"
//         style={{ 
//           top: `${y}px`, 
//           left: `${x}px`,
//           transform: "translate(-50%, -50%)", 
//           width: "200px",
//           justifyContent: "flex-end"
//         }}
//       >
//         <div style={{ lineHeight: 1.2, textAlign: "right" }}>
//           <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", color: "#ffffff" }}>
//             {item.title}
//           </div>
//           <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.02em", textTransform: "uppercase", color: "#7a9bb5", marginTop: 2 }}>
//             {item.sub}
//           </div>
//         </div>

//         <div style={{
//           width: 46, height: 46, borderRadius: "50%", flexShrink: 0,
//           background: "#051422", border: `3px solid ${MINT}`,
//           display: "flex", alignItems: "center", justifyContent: "center",
//           color: MINT, boxShadow: "0 8px 24px rgba(0,0,0,0.7)"
//         }}>
//           <item.icon size={18}/>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="relative w-full flex items-center justify-center select-none" style={{ minHeight: 540, maxWidth: 600 }}>
      
//       {/* LAYER 1: BACK RING (Phone ke pichhe rehne waali thick ring border) */}
//       <div style={{
//         position: "absolute",
//         width: "480px",
//         height: "260px",
//         left: "-40px",
//         top: "110px",
//         borderRadius: "50%",
//         border: "32px solid rgba(51,204,153,0.06)", // Increased circle thickness/width
//         borderBottomColor: "transparent",
//         borderRightColor: "transparent",
//         transform: "rotate(-15deg)",
//         zIndex: 5
//       }} />
//       <div style={{
//         position: "absolute",
//         width: "480px",
//         height: "260px",
//         left: "-40px",
//         top: "110px",
//         borderRadius: "50%",
//         border: "3px dashed rgba(51,204,153,0.3)",
//         borderBottomColor: "transparent",
//         borderRightColor: "transparent",
//         transform: "rotate(-15deg)",
//         zIndex: 6
//       }} />

//       {/* BACK CARDS CONTENT MATRIX */}
//       <div className="absolute inset-0 z-10 w-full h-full">
//         {arcItems.map((item, i) => !item.isFront && renderCard(item, i))}
//       </div>

//       {/* LAYER 2: RIGHT TILTED SMARTPHONE VIEWPORT */}
//       <div className="relative z-20" style={{ transform: "translateX(40px) translateY(10px)" }}>
//         <PhoneMobileApp />
//       </div>

//       {/* LAYER 3: FRONT OVERLAPPING RING (Phone ke upar se aane waali broad thick ring layer) */}
//       <div style={{
//         position: "absolute",
//         width: "480px",
//         height: "260px",
//         left: "-40px",
//         top: "110px",
//         borderRadius: "50%",
//         border: "32px solid rgba(51,204,153,0.06)", 
//         borderTopColor: "transparent",
//         borderLeftColor: "transparent",
//         transform: "rotate(-15deg)",
//         zIndex: 30
//       }} />
//       <div style={{
//         position: "absolute",
//         width: "480px",
//         height: "260px",
//         left: "-40px",
//         top: "110px",
//         borderRadius: "50%",
//         border: "3px dashed rgba(51,204,153,0.4)",
//         borderTopColor: "transparent",
//         borderLeftColor: "transparent",
//         transform: "rotate(-15deg)",
//         zIndex: 31
//       }} />

//       {/* FRONT CARDS CONTENT MATRIX */}
//       <div className="absolute inset-0 z-40 w-full h-full">
//         {arcItems.map((item, i) => item.isFront && renderCard(item, i))}
//       </div>

//     </div>
//   );
// }

// export default function AgentDashboardPreview() {
//   return (
//     <section style={{ background:"#040f1a", color:"#fff", minHeight:"100vh", display: "flex", alignItems: "center" }}>
//       <div className="w-full lg:max-w-5xl xl:max-w-[1420px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-12 items-center px-6 sm:px-10 py-12">
        
//         {/* Left Informational Content Frame */}
//         <div className="xl:col-span-6 flex flex-col gap-6">
//           <div style={{ display:"flex", alignItems:"center", gap:10 }}>
//             <div style={{ width:44, height:44, borderRadius:10, border:"1px solid rgba(51,204,153,0.4)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT, background: "#051625" }}>
//               <FiHome size={18}/>
//             </div>
//             <span style={{ color:MINT, letterSpacing:"0.18em", fontSize:12, fontWeight:600 }}>AGENT DASHBOARD</span>
//           </div>

//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight" style={{ margin:0 }}>
//             Everything You Need,<br/>
//             <span style={{ color:MINT }}>All in One Dashboard.</span>
//           </h2>

//           <p style={{ color:"#7a9bb5", fontSize:14, lineHeight:1.7, margin:0, maxWidth:460 }}>
//             Manage leads, track performance, handle listings and grow your real estate business effortlessly.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
//             {features.map((f) => (
//               <div key={f.title} style={{ display:"flex", gap:12, padding:16, borderRadius:12, border:"1px solid #102435", background:"#051422" }}>
//                 <div style={{ width:40, height:40, borderRadius:8, border:"1px solid rgba(51,204,153,0.35)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT, flexShrink:0 }}>
//                   <f.icon size={17}/>
//                 </div>
//                 <div>
//                   <div style={{ fontSize:13, fontWeight:700, marginBottom:3, color: "#fff" }}>{f.title}</div>
//                   <div style={{ fontSize:11, color:"#7a9bb5", lineHeight:1.5 }}>{f.desc}</div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="w-full flex flex-col sm:flex-row items-center gap-4 mt-4">
//             <button className="w-full sm:w-auto bg-[#33cc99] hover:bg-[#1a9e72] text-[#040f1a] flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-[#33cc99]/10 active:scale-98 transition duration-200">
//               Explore Dashboard <FiArrowRight size={16}/>
//             </button>
//             <button className="w-full sm:w-auto bg-transparent border border-slate-800 hover:border-[#33cc99]/40 text-white flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm active:scale-98 transition duration-200">
//               Join as Agent <FiArrowRight size={16}/>
//             </button>
//           </div>
//         </div>

//         {/* Right Graphical Viewport Matrix */}
//         <div className="xl:col-span-6 w-full flex items-center justify-center overflow-visible py-10">
//           <ArcShowcase/>
//         </div>

//       </div>
//     </section>
//   );
// }

// import React from 'react';
// import {
//   FiUser, FiHome, FiBarChart2, FiCreditCard,
//   FiBell, FiChevronDown, FiChevronRight,
//   FiArchive, FiMic, FiVideo, FiEye, FiArrowRight,
// } from "react-icons/fi";

// const arcItems = [
//   { icon: FiUser,       title: "Captures",     sub: "Every Lead"        },
//   { icon: FiHome,       title: "Manages",      sub: "Your Listings"     },
//   { icon: FiBarChart2,  title: "Boosts",       sub: "Your Revenue"      },
//   { icon: FiCreditCard, title: "Simplifies",   sub: "Plans & Credits"   },
// ];

// const features = [
//   { icon: FiUser,        title: "Leads & Enquiries",     desc: "Get, track and manage all your leads in one place."       },
//   { icon: FiHome,        title: "Property Management",   desc: "Add, edit and manage your properties easily."             },
//   { icon: FiBarChart2,   title: "Performance Analytics", desc: "Visualize your performance with smart insights."          },
//   { icon: FiCreditCard,  title: "Plan & Credits",        desc: "Know your plan details and remaining credits."            },
// ];

// const weekBars = [40, 60, 50, 70, 55, 90, 75];
// const days     = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
// const MINT     = "#33cc99";

// function LogoIcon({ size = 20 }) {
//   return (
//     <span style={{
//       display:"inline-flex", alignItems:"center", justifyContent:"center",
//       width: size+10, height: size+10,
//       borderRadius:4, border:"1px solid #33cc99", color:"#33cc99"
//     }}>
//       <FiHome size={size}/>
//     </span>
//   );
// }

// function PhoneMobileApp() {
//   return (
//     <div style={{
//       width:250, borderRadius:36, border:"8px solid #142534",
//       background:"#051422", overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,0.6)"
//     }}>
//       <div style={{ width:64, height:14, background:"#020b14", borderRadius:20, margin:"8px auto 4px" }}/>
//       <div style={{ display:"flex", justifyContent:"space-between", padding:"0 14px", fontSize:9, color:"#7a9bb5", marginBottom:4 }}>
//         <span>9:41</span><span>●●●</span>
//       </div>
//       <div style={{ padding:"0 12px 16px" }}>
//         <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
//           <div style={{ display:"flex", alignItems:"center", gap:6 }}>
//             <LogoIcon size={11}/>
//             <span style={{ color:MINT, fontSize:10, fontWeight:700, letterSpacing:"0.1em" }}>DIGINIWAS</span>
//           </div>
//           <FiBell size={13} color={MINT}/>
//         </div>
//         <div style={{ borderRadius:10, border:"1px solid rgba(51,204,153,0.3)", background:"rgba(51,204,153,0.1)", padding:10, marginBottom:8 }}>
//           <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
//             <span style={{ fontSize:9, color:"#7a9bb5" }}>Current Plan</span>
//             <span style={{ fontSize:8, border:"1px solid rgba(51,204,153,0.4)", borderRadius:20, padding:"2px 7px", color:MINT }}>Active</span>
//           </div>
//           <div style={{ fontSize:14, fontWeight:700 }}>Pro Agent</div>
//           <div style={{ fontSize:9, color:"#7a9bb5", margin:"2px 0 6px" }}>Valid till 24 May 2025</div>
//           <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:9, color:MINT }}>
//             <span>View Plan Details</span><FiChevronRight size={10}/>
//           </div>
//         </div>
//         <div style={{ borderRadius:10, border:"1px solid #162a3a", background:"#071927", padding:10, marginBottom:10, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
//           <div>
//             <div style={{ fontSize:9, color:"#7a9bb5" }}>Credits Left</div>
//             <div style={{ fontSize:22, fontWeight:700 }}>248</div>
//             <div style={{ fontSize:9, color:MINT }}>Buy More Credits ›</div>
//           </div>
//           <div style={{ width:32, height:32, borderRadius:7, border:"1px solid rgba(51,204,153,0.3)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT }}>
//             <FiArchive size={13}/>
//           </div>
//         </div>
//         <div style={{ fontSize:10, fontWeight:600, marginBottom:8 }}>Quick Actions</div>
//         <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:6, marginBottom:10 }}>
//           {[
//             { icon:FiHome,  label:"Add Property" },
//             { icon:FiMic,   label:"Promote"      },
//             { icon:FiVideo, label:"Video Shoot"  },
//             { icon:FiEye,   label:"View Leads"   },
//           ].map((q) => (
//             <div key={q.label} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
//               <div style={{ width:36, height:36, borderRadius:7, border:"1px solid rgba(51,204,153,0.3)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT }}>
//                 <q.icon size={13}/>
//               </div>
//               <span style={{ fontSize:7.5, color:"#7a9bb5", textAlign:"center", lineHeight:1.3 }}>{q.label}</span>
//             </div>
//           ))}
//         </div>
//         <div style={{ borderRadius:10, border:"1px solid #162a3a", background:"#071927", padding:10 }}>
//           <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:10, fontWeight:600, marginBottom:8 }}>
//             <span>Leads Summary</span>
//             <span style={{ fontSize:8, color:"#7a9bb5", border:"1px solid #162a3a", borderRadius:4, padding:"1px 5px", display:"flex", alignItems:"center", gap:2 }}>
//               This Week <FiChevronDown size={8}/>
//             </span>
//           </div>
//           <div style={{ display:"flex", alignItems:"flex-end", gap:4, height:50 }}>
//             {weekBars.map((h, i) => (
//               <div key={i} style={{ flex:1, background:MINT, borderRadius:"2px 2px 0 0", height:`${h}%`, minHeight:3 }}/>
//             ))}
//           </div>
//           <div style={{ display:"flex", justifyContent:"space-between", marginTop:4, fontSize:7, color:"#7a9bb5" }}>
//             {days.map((d) => <span key={d}>{d}</span>)}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ArcShowcase() {
//   // Trigonometric distribution for placing indicators along the left curve of the frame
//   const radiusX = 200; 
//   const radiusY = 200; 
//   const centerX = 240; 
//   const centerY = 230; 

//   // Angles mapping the sequential layout corresponding to image references (140deg down to 220deg)
//   const angles = [145, 170, 195, 220]; 

//   return (
//     <div className="relative w-full flex items-center justify-center select-none" style={{ minHeight: 480, maxWidth: 520 }}>
//       {/* Soft Glow Background Layer */}
//       <div style={{
//         position:"absolute", width:440, height:440, borderRadius:"50%",
//         background:"radial-gradient(circle, rgba(51,204,153,0.1) 0%, rgba(51,204,153,0) 70%)",
//       }}/>

//       {/* Styled Structural SVG Arc Rim Layout */}
//       <svg viewBox="0 0 480 480" style={{ position:"absolute", width:"100%", height:"100%", zIndex: 1 }}>
//         <defs>
//           <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#0a2a22"/>
//             <stop offset="50%" stopColor={MINT}/>
//             <stop offset="100%" stopColor="#0a2a22"/>
//           </linearGradient>
//         </defs>
//         {/* Generates standard exact track border layout */}
//         <path 
//           d="M 390 70 A 210 210 0 0 0 390 410" 
//           fill="none" 
//           stroke="url(#arcGrad)" 
//           strokeWidth="3" 
//           strokeDasharray="6 6"
//           opacity="0.3"
//         />
//       </svg>

//       {/* Process Map Badge Cards Layout Positioned Matrix Layer */}
//       <div className="absolute inset-0 z-10 w-full h-full">
//         {arcItems.map((item, i) => {
//           const angleRad = (angles[i] * Math.PI) / 180;
//           const x = centerX + radiusX * Math.cos(angleRad);
//           const y = centerY + radiusY * Math.sin(angleRad);

//           return (
//             <div 
//               key={item.title} 
//               className="absolute flex items-center gap-3 transition-transform duration-300 hover:scale-105"
//               style={{ 
//                 top: `${y}px`, 
//                 left: `${x}px`,
//                 transform: "translate(-50%, -50%)",
//                 width: "180px"
//               }}
//             >
//               {/* Feature Rounded Interactive Icon Badge */}
//               <div style={{
//                 width: 48, height: 48, borderRadius: "50%", flexShrink: 0,
//                 background: "#040f1a", border: `2px solid ${MINT}`,
//                 display: "flex", alignItems: "center", justifyOrigin: "center", justifyContent: "center",
//                 color: MINT, boxShadow: "0 4px 14px rgba(0,0,0,0.5)"
//               }}>
//                 <item.icon size={18}/>
//               </div>

//               {/* Responsive Metric Metadata Text Area */}
//               <div style={{ lineHeight: 1.2 }}>
//                 <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.04em", textTransform: "uppercase", color: "#ffffff" }}>
//                   {item.title}
//                 </div>
//                 <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.02em", textTransform: "uppercase", color: "#6c8fa8", marginTop: 1 }}>
//                   {item.sub}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Embedded Device Frame Container Positioning */}
//       <div className="relative z-20" style={{ transform: "translateX(100px)" }}>
//         <PhoneMobileApp />
//       </div>
//     </div>
//   );
// }

// export default function AgentDashboardPreview() {
//   return (
//     <section style={{ background:"#040f1a", color:"#fff", minHeight:"100vh", display: "flex", alignItems: "center" }}>
//       <div className="w-full lg:max-w-5xl xl:max-w-[1420px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-12 items-center px-6 sm:px-10 py-12">
        
//         {/* Left Informational Structural Context Content Grid Element Area */}
//         <div className="xl:col-span-6 flex flex-col gap-6">
//           <div style={{ display:"flex", alignItems:"center", gap:10 }}>
//             <div style={{ width:44, height:44, borderRadius:10, border:"1px solid rgba(51,204,153,0.4)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT, bg: "#051625" }}>
//               <FiHome size={18}/>
//             </div>
//             <span style={{ color:MINT, letterSpacing:"0.18em", fontSize:12, fontWeight:600 }}>AGENT DASHBOARD</span>
//           </div>

//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight" style={{ margin:0 }}>
//             Everything You Need,<br/>
//             <span style={{ color:MINT }}>All in One Dashboard.</span>
//           </h2>

//           <p style={{ color:"#7a9bb5", fontSize:14, lineHeight:1.7, margin:0, maxWidth:460 }}>
//             Manage leads, track performance, handle listings and grow your real estate business effortlessly.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
//             {features.map((f) => (
//               <div key={f.title} style={{ display:"flex", gap:12, padding:16, borderRadius:12, border:"1px solid #102435", background:"#051422" }}>
//                 <div style={{ width:40, height:40, borderRadius:8, border:"1px solid rgba(51,204,153,0.35)", display:"flex", alignItems:"center", justifyContent:"center", color:MINT, flexShrink:0 }}>
//                   <f.icon size={17}/>
//                 </div>
//                 <div>
//                   <div style={{ fontSize:13, fontWeight:700, marginBottom:3, color: "#fff" }}>{f.title}</div>
//                   <div style={{ fontSize:11, color:"#7a9bb5", lineHeight:1.5 }}>{f.desc}</div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="w-full flex flex-col sm:flex-row items-center gap-4 mt-4">
//             <button className="w-full sm:w-auto bg-[#33cc99] hover:bg-[#1a9e72] text-[#040f1a] flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-[#33cc99]/10 active:scale-98 transition duration-200">
//               Explore Dashboard <FiArrowRight size={16}/>
//             </button>
//             <button className="w-full sm:w-auto bg-transparent border border-slate-800 hover:border-[#33cc99]/40 text-white flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm active:scale-98 transition duration-200">
//               Join as Agent <FiArrowRight size={16}/>
//             </button>
//           </div>
//         </div>

//         {/* Right Graphical Viewport Section Structure */}
//         <div className="xl:col-span-6 w-full flex items-center justify-center overflow-visible py-10">
//           <ArcShowcase/>
//         </div>

//       </div>
//     </section>
//   );
// }