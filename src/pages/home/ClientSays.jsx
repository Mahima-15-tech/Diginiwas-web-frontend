import axios from "../../api/axios";
import { useEffect, useState } from "react";
import { IoPlayOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const dummyTestimonials = [
  {
    review:
      '"DIGINIWAS transformed how we look at luxury properties. The AI matching was surprisingly accurate, saving us months of manual searching."',
    name: "Vikram Singhania",
    designation: "CEO, ZENITH CORP",
    image: {
      url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    },
    videoLink: "https://www.youtube.com/embed/X2NVOSNBbxU",
  },
  {
    review:
      '"The transparency they bring to the Indian real estate market is revolutionary. Every document was verified, every claim was digital."',
    name: "Ananya Sharma",
    designation: "ARCHITECTURAL DIRECTOR",
    image: {
      url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    },
    videoLink: "https://www.youtube.com/embed/X2NVOSNBbxU",
  },
  {
    review:
      '"A truly seamless experience for investors. The virtual tours and digital verification gave me the confidence I needed."',
    name: "Rahul Mehta",
    designation: "GLOBAL INVESTOR",
    image: {
      url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    },
    videoLink: "https://www.youtube.com/embed/X2NVOSNBbxU",
  },
];

export default function ClientSays() {
  const navigate = useNavigate()
  

  const [showVideo, setShowVideo] = useState(false);
  
  const [selectedVideo, setSelectedVideo] = useState("");
  const [testimonials, setTestimonials] = useState(dummyTestimonials);

  const getTestimonials = async () => {
    try {
      const res = await axios.get("/cms/testimonials");
  
      if (
        res.data?.testimonials &&
        res.data.testimonials.length > 0
      ) {
        setTestimonials(res.data.testimonials);
      } else {
        setTestimonials(dummyTestimonials);
      }
    } catch (err) {
      console.log(err);
  
      // Agar API fail ho jaye
      setTestimonials(dummyTestimonials);
    }
  };
  
  useEffect(() => {
  
    getTestimonials();
  
  }, []);
  return (
    <section className="w-full bg-[#f7f8fa]  px-4 sm:px-0 py-14 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-[#16836E] text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Trusted By Leaders
          </p>

          <h2 className="text-[#02080e] font-serif font-semibold leading-tight text-[32px] sm:text-xl md:text-2xl lg:text-5xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-white  gap-5 rounded-[28px] hover:scale-105 duration-300   hover:border-[#274255] hover:border-2
               transition-all sm:rounded-[32px] p-6 sm:p-7 lg:p-9 shadow-xl"
            >
 
              <p className="text-[#4F6473] italic leading-[1.8] text-[16px] sm:text-[17px] lg:text-[18px] min-h-[170px] lg:min-h-[190px]">
                {item.review}
              </p>

              <div className="flex  items-center gap-4 mt-6">
                <div className=" flex items-center justify-between w-full"> 
                  <div className="flex items-center gap-2"> 
                <img
                 src={item.image?.url} 
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-[#243B53] font-semibold text-sm  sm:text-base">
                    {item.name}
                  </h4>

                  <p className="text-[#6e7780] font-semibold text-[0.7rem] sm:text-xs tracking-[0.11em] uppercase">
                  {item.designation}
                  </p>
                </div> 
            </div>
                 
                   {/* <div   onClick={() =>
                       window.location.href = "https://youtu.be/X2NVOSNBbxU"
                       } className="border cursor-pointer border-slate-300 p-2 rounded-full">
                         <IoPlayOutline className="text-xl text-[#16836E] hover:text-red-500 " />
                     </div> */}

                     
                    <div
                      onClick={() => {
                        setSelectedVideo(item.videoLink);
                        setShowVideo(true);
                      }}
                      className="border cursor-pointer border-slate-300 p-2 rounded-full"
                    >
                      <IoPlayOutline className="text-xl text-[#16836E] hover:text-red-500" />
                    </div>
                    
              </div>

              </div>
            </div>
          ))}
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
  src={
    selectedVideo?.includes("watch?v=")
      ? selectedVideo.replace("watch?v=", "embed/")
      : selectedVideo
  }
  title="YouTube Video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>

                </div>

              </div>
            )}



{/* <div
  onClick={() => setShowVideo(true)}
  className="border cursor-pointer border-slate-300 p-2 rounded-full"
>
  <IoPlayOutline className="text-xl text-[#16836E] hover:text-red-500" />
</div>
        {showVideo && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="relative w-[90%] max-w-4xl bg-white rounded-2xl p-4">

      <button
        onClick={() => setShowVideo(false)}
        className="absolute right-4 top-4 text-xl "
      >
        ✕
      </button>

      <iframe
  className="w-full h-[500px] rounded-xl"
  src=""
  title="YouTube Video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
    </div>
  </div>
)} */}
      </div>
    </section>
  );
}