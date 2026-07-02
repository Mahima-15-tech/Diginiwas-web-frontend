

import React, { useEffect, useRef, useState } from "react";
import backImg from "../../assets/images/back.png";
import axios from "../../api/axios";





const RADIUS = window.innerWidth < 640 ? 180 : 300;
const SPEED = 0.2;

export default function IphoneSection() {
  const [roundData, setRoundData] = useState(null);

 const autoRef = useRef(true);
  const angleRef = useRef(0);
  const rafRef = useRef(null);
  const slotsRef = useRef([]);
  const shellsRef = useRef([]);

  const FRONT_IMAGES = [
    roundData?.image1?.url ||
      "https://res.cloudinary.com/dhuabv2it/image/upload/v1780736766/niwas_jzpp87.png",
  
    roundData?.image2?.url ||
      "https://res.cloudinary.com/dhuabv2it/image/upload/v1780736761/dashboard_t6ocdx.png",
  
    roundData?.image3?.url ||
      "https://res.cloudinary.com/dhuabv2it/image/upload/v1780736767/property_apkuj7.png",
  
    roundData?.image4?.url ||
      "https://res.cloudinary.com/dhuabv2it/image/upload/v1780736761/dashboard_t6ocdx.png",
  
    roundData?.image5?.url ||
      "https://res.cloudinary.com/dhuabv2it/image/upload/v1780736767/property_apkuj7.png",
  ];
  
  const N = FRONT_IMAGES.length;

  const faceStateRef = useRef(Array(N).fill("front")); 

  const getRoundSection = async () => {
    try {
      const res = await axios.get("/cms/round-section");
      setRoundData(res.data.roundSection);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRoundSection();
  }, []);


  // 🔥 PHONE 3D COMPONENT
  function Phone3D({ img, autoRef }) {
  const thickness = 14;

  return (
    <div 
  className=" "   
       style={{
      position: "absolute", 
      inset: 0,              
      transformStyle: "preserve-3d", 
    }}
        onMouseEnter={() => {
    autoRef.current = false;
  }}
  onMouseLeave={() => {
    autoRef.current = true;
  }}
  >
     

      {/* FRONT */}
      <div 
        style={{
          position: "absolute",
          inset: "0px",
          transform: `translateZ(${thickness / 2}px)`,
          borderRadius: "36px",
          overflow: "hidden",
          background: "#000",
          backfaceVisibility: "hidden",
        }}
      >
        <img
          src={img}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* notch */}
        <div 
          style={{
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90px",
            height: "22px",
            background: "#000",
            borderRadius: "20px",
          }}
        />
      </div>

      {/* BACK */}
      <div
        style={{
          position: "absolute",
          inset: "3px",
          transform: `rotateY(180deg) translateZ(${thickness / 2}px)`,
          borderRadius: "36px",
          overflow: "hidden",
          backfaceVisibility: "hidden",
          background: "#111",
        }}
      >
        <img
          src={backImg}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

    

     
    </div>
  );
}

  useEffect(() => {
    const tick = () => {
      if (autoRef.current) {
          angleRef.current -= SPEED;
        }

      slotsRef.current.forEach((slot, i) => {
        if (!slot) return;

        const baseAngle = (360 / N) * i;
        const angle = angleRef.current + baseAngle;
        const rad = (angle * Math.PI) / 180;

        const x = Math.sin(rad) * RADIUS;
        const z = Math.cos(rad) * RADIUS;

        const depth = (z / RADIUS + 1) / 2;
        const scale = 0.6 + depth * 0.6;

        // 📍 POSITION
        slot.style.transform = `
          translateX(${x}px)
          translateZ(${z}px)
        `;
        slot.style.zIndex = Math.round(depth * 100);

        const shell = shellsRef.current[i];
        if (shell) {
          const deg = -(angle);
              
          shell.style.transform = `
          rotateY(${deg}deg)
          scale(${scale})         `;
        
          shell.style.boxShadow =
            depth > 0.5
              ? "0 40px 100px rgba(0,0,0,0.9)"
              : "0 20px 60px rgba(0,0,0,0.5)";
        }
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      className="w-full flex items-center  sm:pt-48 sm:pb-28 mb-20 justify-center overflow-hidden "
      style={{
        background: "#274255",
        minHeight: "700px",
      }}
      
    >
      <div
        className="relative "
        style={{
          width: "100%",
          maxWidth: "1000px",
          height: "600px",
          perspective: "1200px",
        }}
      >
        <div
          className="absolute w-full h-full flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {FRONT_IMAGES.map((img, i) => (
            <div
              key={i}
              ref={(el) => (slotsRef.current[i] = el)}
              style={{
                position: "absolute",
                width: "200px",
                height: "420px",
                transformStyle: "preserve-3d",
                
              }}
            >
            <div
  ref={(el) => (shellsRef.current[i] = el)}
  style={{
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    background: "transparent", 
    backfaceVisibility: "hidden", 
    borderRadius:  "36px",   // add this
    // overflow: "hidden",   
  }}
>
                <Phone3D img={img} autoRef={autoRef} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}