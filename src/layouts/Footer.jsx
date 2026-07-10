


 import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ComingSoonVideo from "../components/common/ComingSoonVideo";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import {
  MdEmail,
  MdCall,
  MdLocationOn,
} from "react-icons/md";

const footerLinks = {
  "Quick Links": [
    { label: "Home", path: "/" },
    { label: "Explore Properties", path: "/explore-property" },
    { label: "Niwas AI", path: "/niwas-ai" },
    { label: "Partner Corner", path: "/agent-corner" },
    { label: "About Us", path: "/about" },
  ],

  Legal: [
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms of Service", path: "/terms-service" },
    { label: "Cookie Policy", path: "/cookie-policy" },
    { label: "Blogs", path: "/blogs" },
  ],
};

const socialLinks = [
  {
    icon: <FaFacebookF />,
    link: "#",
  },
  {
    icon: <FaInstagram />,
    link: "#",
  },
  {
    icon: <FaLinkedinIn />,
    link: "#",
  },
  {
    icon: <FaYoutube />,
    link: "#",
  },
];

export default function Footer() {
  const navigate = useNavigate()
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <footer className="bg-[#274255] text-white pt-16">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">

          {/* Logo */}
          <div>

            <NavLink to="/">
              <img
                src="https://res.cloudinary.com/dhuabv2it/image/upload/v1780739847/DIGINIWAS_FINAL_page-2-removebg-preview_o3fesd.png"
                className="w-40"
                alt="DigiNiwas"
              />
            </NavLink>

            <p className="mt-5 text-white/70 leading-7 text-sm">
             DigiNiwas — India's Smart Property Ecosystem
           Connecting customers, property professionals, and trusted services through AI-powered real estate solutions.
            </p>

            <div className="flex gap-3 mt-6">

              {socialLinks.map((item, index) => (
                <span onClick={() => setShowComingSoon(true)}
                  // href={item.link}
                  key={index}
                  className="w-10 h-10 cursor-pointer rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-[#33cc99] hover:text-[#274255] transition-all duration-300"
                >
                  {item.icon}
                </span>
              ))}

            </div>

          </div>

          {/* Quick Links + Legal */}

          {Object.entries(footerLinks).map(([title, links]) => (

            <div key={title}>

              <h3 className="text-xl font-semibold mb-6 text-white">
                {title}
              </h3>

              <ul className="space-y-4">

                {links.map((item, index) => (

                  <li key={index} >

                    <NavLink
                      to={item.path}
                      className="text-white/70 hover:text-[#33cc99] transition-all duration-300"
                    >
                      {item.label}
                    </NavLink>

                  </li>

                ))}

              </ul>

            </div>

          ))}

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <MdLocationOn className="text-[#33cc99] text-2xl mt-1 flex-shrink-0" />

                <p className="text-white/70">
                    Haryana,
                  <br />
                  India
                </p>

              </div>

              <div className="flex gap-3 items-center">

                <MdEmail className="text-[#33cc99] text-xl" />

                <span className="text-white/70">
                  diginiwas@gmail.com
                </span>

              </div>

              <div className="flex gap-3 items-center">

                <MdCall className="text-[#33cc99] text-xl" />

                <span className="text-white/70">
                  +91 82854 66557
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-white/60 text-sm text-center md:text-left">
            ©️ 2026 DigiNiwas. All Rights Reserved.
          </p>

               <div>
               <p
                onClick={() => window.open("https://www.technoviaan.com/", "_blank")}
                className="cursor-pointer text-sm text-white/60 hover:underline"
              >
                Developed and designed by <span> Technoviaan Software Solution</span> 
              </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            
            <NavLink
              to="/privacy-policy"
              className="text-white/60 hover:text-[#33cc99] text-sm transition-all"
            >
              Privacy
            </NavLink>

            <NavLink
              to="/terms-service"
              className="text-white/60 hover:text-[#33cc99] text-sm transition-all"
            >
              Terms
            </NavLink>

            <NavLink
              to="/cookie-policy"
              className="text-white/60 hover:text-[#33cc99] text-sm transition-all"
            >
              Cookies
            </NavLink>

          </div>

        </div>

      </div>

          
        {showComingSoon && (
          <ComingSoonVideo setShowComingSoon={setShowComingSoon} video={import.meta.env.VITE_NIWAS_AI}    
          />
        )}
    </footer>
  );
}