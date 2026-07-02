import React from "react";
import {
  Bell,
  User,
  Search,
  SlidersHorizontal,
  Bookmark,
  Grid,
  List,
  Mic,
  Plane,
  CheckCircle2,
  BedDouble,
  Bath,
  Sofa,
  MapPin,
  IndianRupee,
  Building2,
  Home,
} from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function NiwasAi() {
  const [allProperties, setAllProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedCity, setSelectedCity] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTransaction, setSelectedTransaction] = useState("All");
  const [selectedBedroom, setSelectedBedroom] = useState("All");
  const [selectedBathroom, setSelectedBathroom] = useState("All");
  const [selectedFurnishing, setSelectedFurnishing] = useState("All");
  const [selectedNegotiable, setSelectedNegotiable] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");

  const [showComingSoon, setShowComingSoon] = useState(false);

  const filterClass = (active) =>
    `text-xs px-4 py-2 rounded-full border transition-all duration-200 ${active
      ? "bg-[#0F2E46] text-white border-[#0F2E46]"
      : "bg-white text-[#1D1D1D] border-[#D8D8D8] hover:border-[#0F2E46]"
    }`;

  useEffect(() => {
    getProperties();
  }, []);
  const getProperties = async () => {
    try {
      const res = await axios.get(
        // "http://localhost:5000/api/property/get-all-properties"
        `${import.meta.env.VITE_API_URL}/api/properties`
      );

      if (res.data.success) {
        setAllProperties(res.data.properties);
        setFilteredProperties(res.data.properties);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const cities = [
    "All",
    ...new Set(
      allProperties
        .filter((item) => item.city && item.city.trim() !== "")
        .map((item) => item.city.toLowerCase())
    ),
  ];

  const categories = [
    "All",
    ...new Set(
      allProperties
        .filter((item) => item.category)
        .map((item) => item.category)
    ),
  ];

  const transactions = [
    "All",
    ...new Set(
      allProperties
        .filter((item) => item.transactionType)
        .map((item) => item.transactionType)
    ),
  ];

  const furnishings = [
    "All",
    ...new Set(
      allProperties
        .filter((item) => item.furnishing)
        .map((item) => item.furnishing)
    ),
  ];

  // const handleCityFilter = (city) => {
  //   setSelectedCity(city);

  //   if (city === "All") {
  //     setFilteredProperties(allProperties);
  //   } else {
  //     const data = allProperties.filter(
  //       (item) => item.city.toLowerCase() === city.toLowerCase()
  //     );

  //     setFilteredProperties(data);
  //   }
  // };
  const handleCityFilter = (city) => {
    setSelectedCity(city);
  };

  useEffect(() => {
    let data = [...allProperties];

    // Search
    if (searchTerm.trim() !== "") {
      data = data.filter((item) => {
        const keyword = searchTerm.toLowerCase();

        return (
          item.title?.toLowerCase().includes(keyword) ||
          item.projectName?.toLowerCase().includes(keyword) ||
          item.developerName?.toLowerCase().includes(keyword) ||
          item.city?.toLowerCase().includes(keyword) ||
          item.locality?.toLowerCase().includes(keyword) ||
          item.address?.toLowerCase().includes(keyword) ||
          item.propertyId?.toLowerCase().includes(keyword)
        );
      });
    }

    // City
    if (selectedCity !== "All") {
      data = data.filter(
        (item) =>
          item.city?.toLowerCase() === selectedCity.toLowerCase()
      );
    }

    // Category
    if (selectedCategory !== "All") {
      data = data.filter(
        (item) => item.category === selectedCategory
      );
    }

    // Transaction
    if (selectedTransaction !== "All") {
      data = data.filter(
        (item) => item.transactionType === selectedTransaction
      );
    }

    // Bedrooms
    if (selectedBedroom !== "All") {
      data = data.filter(
        (item) => item.bedrooms === selectedBedroom
      );
    }

    // Bathrooms
    if (selectedBathroom !== "All") {
      data = data.filter(
        (item) => item.bathrooms === selectedBathroom
      );
    }

    // Furnishing
    if (selectedFurnishing !== "All") {
      data = data.filter(
        (item) => item.furnishing === selectedFurnishing
      );
    }

    // Negotiable
    if (selectedNegotiable === "Yes") {
      data = data.filter((item) => item.negotiable);
    }

    // Price

    switch (selectedPrice) {
      case "50K":
        data = data.filter((item) => item.price <= 50000);
        break;

      case "5L":
        data = data.filter(
          (item) => item.price > 50000 && item.price <= 500000
        );
        break;

      case "25L":
        data = data.filter(
          (item) => item.price > 500000 && item.price <= 2500000
        );
        break;

      case "50L":
        data = data.filter(
          (item) => item.price > 2500000 && item.price <= 5000000
        );
        break;

      case "1CR":
        data = data.filter(
          (item) => item.price > 5000000 && item.price <= 10000000
        );
        break;

      case "ABOVE":
        data = data.filter((item) => item.price > 10000000);
        break;
    }

    setFilteredProperties(data);
  }, [
    allProperties,
    searchTerm,
    selectedCity,
    selectedCategory,
    selectedTransaction,
    selectedBedroom,
    selectedBathroom,
    selectedFurnishing,
    selectedNegotiable,
    selectedPrice,
  ]);
  const formatPrice = (price) => {
    if (!price) return "Price on Request";

    if (price >= 10000000)
      return `₹${(price / 10000000).toFixed(2)} Cr`;

    if (price >= 100000)
      return `₹${(price / 100000).toFixed(2)} Lakh`;

    return `₹${price.toLocaleString("en-IN")}`;
  };
  return (
    <div
      className="w-full min-h-screen bg-[#F0EFEC] font-sans"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="flex flex-col lg:flex-row ">
        <div className="w-full lg:w-1/3 bg-white flex flex-col p-4 border-r border-[#D8D8D8] lg:min-h-[calc(100vh-50px-34px)]">
          <div className="flex-1 flex flex-col gap-3 overflow-y-auto">
            <div>
              <div className="bg-[#1F415C] text-white text-xs rounded-2xl rounded-bl-sm p-3 leading-relaxed">
                Sat Sri Akal! I'm Niwas AI. Looking for premium investments in
                Diginiwas? Mohali vich best options mil gaye ne, specifically
                Sector 82 for high yield.
              </div>
              <div className="text-[10px] text-[#6F6F6F] mt-1">10:02 AM</div>
            </div>

            <div className="self-end max-w-[85%]">
              <div className="bg-[#0E7A4B] text-white text-xs rounded-2xl rounded-br-sm p-3 leading-relaxed">
                Show me 3BHK luxury apartments near IT Park with high NRI
                interest.
              </div>
              <div className="text-[10px] text-[#6F6F6F] mt-1 text-right">
                10:03 AM
              </div>
            </div>

            <div>
              <div className="bg-[#1F415C] text-white text-xs rounded-2xl rounded-bl-sm p-3 leading-relaxed">
                <p>Excellent choice. The IT corridor is booming.</p>
                <p className="mt-2">
                  Our verified Niwas AI property expert will connect with you
                  shortly to discuss VIP floor plans and NRI-specific financing.
                </p>
              </div>
              <div className="mt-2">
                <span className="inline-flex items-center gap-1 bg-[#1CB46D] text-white text-[10px] font-semibold px-3 py-1 rounded-full">
                  <CheckCircle2 size={12} /> Verified Expert Assigned
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-[#D8D8D8] my-3"></div>


          {/* <div className="flex flex-wrap gap-2 mb-3">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => handleCityFilter(city)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all ${selectedCity === city
                    ? "bg-[#0F2E46] text-white"
                    : "bg-white border-[#D8D8D8] text-[#1D1D1D]"
                  }`}
              >
                {city}
              </button>
            ))}
          </div> */}
         <div className="bg-white rounded-2xl p-3 mb-4 border border-[#E5E5E5] shadow-sm">

  {/* Search */}
  <div className="mb-4">
    <input
      type="text"
      placeholder="Search by Project, City, Developer..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full border border-[#D8D8D8] rounded-full px-4 py-2.5 text-sm outline-none focus:border-[#0F2E46]"
    />
  </div>

  {/* City */}
  <div className="mb-4">
    <h4 className="text-xs font-semibold text-[#6F6F6F] uppercase mb-2">
      City
    </h4>

    <div className="flex flex-wrap gap-2">
      {cities.map((city) => (
        <button
          key={city}
          onClick={() => setSelectedCity(city)}
          className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
            selectedCity === city
              ? "bg-[#0F2E46] text-white border-[#0F2E46]"
              : "bg-white text-[#1D1D1D] border-[#D8D8D8] hover:bg-[#F6F6F6]"
          }`}
        >
          {city}
        </button>
      ))}
    </div>
  </div>

  {/* Category */}
  <div className="mb-4">
    <h4 className="text-xs font-semibold text-[#6F6F6F] uppercase mb-2">
      Category
    </h4>

    <div className="flex flex-wrap gap-2">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setSelectedCategory(item)}
          className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
            selectedCategory === item
              ? "bg-[#0F2E46] text-white border-[#0F2E46]"
              : "bg-white text-[#1D1D1D] border-[#D8D8D8]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  </div>

  {/* Transaction */}
  <div className="mb-4">
    <h4 className="text-xs font-semibold text-[#6F6F6F] uppercase mb-2">
      Transaction
    </h4>

    <div className="flex flex-wrap gap-2">
      {transactions.map((item) => (
        <button
          key={item}
          onClick={() => setSelectedTransaction(item)}
          className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
            selectedTransaction === item
              ? "bg-[#0F2E46] text-white border-[#0F2E46]"
              : "bg-white text-[#1D1D1D] border-[#D8D8D8]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  </div>

  {/* Bedrooms */}
  <div className="mb-4">
    <h4 className="text-xs font-semibold text-[#6F6F6F] uppercase mb-2">
      Bedrooms
    </h4>

    <div className="flex flex-wrap gap-2">
      {["All", "1", "2", "3", "4", "5"].map((item) => (
        <button
          key={item}
          onClick={() => setSelectedBedroom(item)}
          className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
            selectedBedroom === item
              ? "bg-[#0F2E46] text-white border-[#0F2E46]"
              : "bg-white text-[#1D1D1D] border-[#D8D8D8]"
          }`}
        >
          {item === "All" ? "All" : `${item} BHK`}
        </button>
      ))}
    </div>
  </div>

  {/* Bathrooms */}
  <div className="mb-4">
    <h4 className="text-xs font-semibold text-[#6F6F6F] uppercase mb-2">
      Bathrooms
    </h4>

    <div className="flex flex-wrap gap-2">
      {["All", "1", "2", "3", "4", "5"].map((item) => (
        <button
          key={item}
          onClick={() => setSelectedBathroom(item)}
          className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
            selectedBathroom === item
              ? "bg-[#0F2E46] text-white border-[#0F2E46]"
              : "bg-white text-[#1D1D1D] border-[#D8D8D8]"
          }`}
        >
          {item === "All" ? "All" : item}
        </button>
      ))}
    </div>
  </div>

  {/* Furnishing */}
  <div className="mb-4">
    <h4 className="text-xs font-semibold text-[#6F6F6F] uppercase mb-2">
      Furnishing
    </h4>

    <div className="flex flex-wrap gap-2">
      {furnishings.map((item) => (
        <button
          key={item}
          onClick={() => setSelectedFurnishing(item)}
          className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
            selectedFurnishing === item
              ? "bg-[#0F2E46] text-white border-[#0F2E46]"
              : "bg-white text-[#1D1D1D] border-[#D8D8D8]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  </div>

  {/* Negotiable */}
  <div className="mb-4">
    <h4 className="text-xs font-semibold text-[#6F6F6F] uppercase mb-2">
      Negotiable
    </h4>

    <div className="flex flex-wrap gap-2">
      {["All", "Yes"].map((item) => (
        <button
          key={item}
          onClick={() => setSelectedNegotiable(item)}
          className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
            selectedNegotiable === item
              ? "bg-[#0F2E46] text-white border-[#0F2E46]"
              : "bg-white text-[#1D1D1D] border-[#D8D8D8]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  </div>

  {/* Price */}
  <div>
    <h4 className="text-xs font-semibold text-[#6F6F6F] uppercase mb-2">
      Price
    </h4>

    <div className="flex flex-wrap gap-2">
      {[
        { label: "All", value: "All" },
        { label: "< ₹50K", value: "50K" },
        { label: "₹5L", value: "5L" },
        { label: "₹25L", value: "25L" },
        { label: "₹50L", value: "50L" },
        { label: "₹1Cr", value: "1CR" },
        { label: "> ₹1Cr", value: "ABOVE" },
      ].map((item) => (
        <button
          key={item.value}
          onClick={() => setSelectedPrice(item.value)}
          className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
            selectedPrice === item.value
              ? "bg-[#0F2E46] text-white border-[#0F2E46]"
              : "bg-white text-[#1D1D1D] border-[#D8D8D8]"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  </div>
</div>

          {/* <div className="flex items-center justify-between bg-[#F6F5F2] rounded-full px-4 py-2.5">
            <span className="text-xs text-[#6F6F6F]">
              Ask Niwas AI anything...
            </span>
            <Mic size={16} className="text-[#0F2E46]" />
          </div> */}
        </div>

        <div className="w-full  bg-[#F6F5F2] p-4 md:p-5">
          <div className="flex items-start justify-between mb-5">
            <div>
              <h2 className="text-xl font-bold text-[#1D1D1D]">
                Created for You
              </h2>
              <p className="text-sm text-[#6F6F6F] mt-1">
                Top-tier intelligence match for Mohali & Chandigarh
              </p>
            </div>
            <div className="flex gap-2">
              <button className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <Grid size={16} className="text-[#1D1D1D]" />
              </button>
              <button className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <List size={16} className="text-[#6F6F6F]" />
              </button>
            </div>
          </div>

          {/* <div className="flex flex-col gap-6"> */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <div
                  key={property._id}
                  // className="bg-white rounded-[24px] shadow-md overflow-hidden"
                  className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#ECECEC]"
                >
                  <div className="relative h-[240px]">
                    <img
                      src={
                        property.images?.length > 0
                          ? property.images[0].url
                          : "https://via.placeholder.com/800x500"
                      }
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Top Left Badges */}
                    <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                      {/* {property.verified && ( */}
                      {property.status === "Active" && (
                        <span className="bg-[#1CB46D] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                          <CheckCircle2 size={12} />
                          Verified
                        </span>

                      )}


                      {property.nriChoice && (
                        <span className="bg-[#D98E1B] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                          <CheckCircle2 size={12} />
                          NRI Choice
                        </span>
                      )}
                    </div>

                    {/* Match */}
                    <div className="absolute top-3 right-3 bg-[#274255] text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                      {property.matchPercentage || 95}% Match
                    </div>

                    {/* Bottom Content */}
                    <div className="absolute bottom-3 left-4 text-white">
                      <div className="text-xs opacity-90">
                        {/* {property.location}, {property.city} */}
                        {property.address || property.locality || property.city}
                      </div>

                      <div className="text-lg font-bold">
                        {/* {property.title} */}
                        {property.projectName || property.title}
                      </div>
                    </div>

                    {/* Image Indicator */}
                    {property.images?.length > 1 && (
                      <div className="absolute bottom-3 right-4 flex gap-1">
                        {property.images.map((_, index) => (
                          <span
                            key={index}
                            className={`w-1.5 h-1.5 rounded-full ${index === 0 ? "bg-white" : "bg-white/50"
                              }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-lg font-bold text-[#1D1D1D]">
                          {/* ₹{property.price} */}
                          ₹{property.price?.toLocaleString("en-IN")}
                        </span>

                        {property.oldPrice && (
                          <span className="text-sm text-[#6F6F6F] line-through">
                            ₹{property.oldPrice}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-4 text-xs text-[#6F6F6F] mt-1 flex-wrap">
                        {property.bhk && (
                          <span>🛏 {property.bedrooms} BHK</span>
                        )}

                        {property.superBuiltupArea && (
                          <span>📐 {property.superBuiltupArea} sqft</span>
                        )}

                        {property.parking && (
                          <span>🚗 {property.parking} Parking</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="w-10 h-10 border border-[#D8D8D8] rounded-xl flex items-center justify-center">
                        <Bookmark size={16} className="text-[#1D1D1D]" />
                      </button>

                      {/* <button className="bg-[#0F2E46] text-white font-semibold text-sm px-5 py-3 rounded-xl">
                        View Details
                      </button> */}
                      <button
  onClick={() => setShowComingSoon(true)}
  className="bg-[#0F2E46] hover:bg-[#163B59] transition text-white font-semibold text-sm px-5 py-3 rounded-xl"
>
  View Details
</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-xl p-10 text-center">
                <h2 className="text-lg font-semibold text-gray-600">
                  No Properties Found
                </h2>

                <p className="text-sm text-gray-400 mt-2">
                  No property available for selected city.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="w-full lg:w-2/5  bg-[#ECE9E4] p-4 md:p-5 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="flex-1 flex items-center gap-2 bg-white rounded-xl px-4 py-3">
              <Search size={16} className="text-[#6F6F6F]" />
              <span className="text-sm text-[#1D1D1D]">Mohali, Diginiwas</span>
            </div>
            <button className="w-12 h-12 bg-[#0F2E46] rounded-xl flex items-center justify-center">
              <SlidersHorizontal size={16} className="text-white" />
            </button>
          </div>

          <div className="relative bg-[#E8E4DE] rounded-xl h-[300px] overflow-hidden">
            <div className="absolute" style={{ top: "40px", left: "155px" }}>
              <span className="bg-[#0F2E46] text-white text-[11px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
                ₹4.85 Cr
              </span>
            </div>
            <div className="absolute" style={{ top: "95px", left: "70px" }}>
              <span className="bg-white text-[#1D1D1D] text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                ₹1.55 Cr
              </span>
            </div>
            <div className="absolute" style={{ top: "145px", left: "195px" }}>
              <span className="bg-[#0F2E46] text-white text-[11px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
                ₹2.10 Cr
              </span>
            </div>
          </div>

          <div className="bg-white rounded-[20px] p-4">
            <h3 className="font-bold text-sm text-[#1D1D1D] mb-3">
              Investment Hotspots
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#1D1D1D]">
                  Sector 82 (High ROI)
                </span>
                <div className="w-16 h-1.5 rounded-full bg-[#0E7A4B]"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#1D1D1D]">
                  Zirakpur Extension
                </span>
                <div className="w-16 h-1.5 rounded-full bg-[#D98E1B]"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#1D1D1D]">IT City Corridor</span>
                <div className="w-16 h-1.5 rounded-full bg-[#0E7A4B]"></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[20px] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1CB46D] flex items-center justify-center">
                <Plane size={16} className="text-white" />
              </div>
              <div>
                <div className="text-[10px] text-[#6F6F6F] font-semibold tracking-wide">
                  DISTANCE TO
                </div>
                <div className="text-sm font-bold text-[#1D1D1D]">
                  IXC Airport: 12 min
                </div>
              </div>
            </div>
            <CheckCircle2 size={18} className="text-[#1CB46D]" />
          </div>
        </div>
      </div>
      {showComingSoon && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">

    <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-[fadeIn_.25s_ease]">

      {/* Top */}

      <div className="bg-[#0F2E46] py-8 flex justify-center">
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">

          <div className="w-14 h-14 rounded-full bg-[#EAF7F2] flex items-center justify-center">

            <Home size={34} className="text-[#1CB46D]" />

          </div>
        </div>
      </div>

      {/* Body */}

      <div className="px-8 py-8 text-center">

        <h2 className="text-2xl font-bold text-[#0F2E46]">
          Mobile App
        </h2>

        <h3 className="text-xl font-semibold text-[#1CB46D] mt-1">
          Coming Soon 🚀
        </h3>

        <p className="text-[#6F6F6F] text-sm leading-7 mt-5">
          We're building an amazing DigiNiwas mobile experience.
          <br />
          Soon you'll be able to explore properties,
          chat with Niwas AI and connect with verified experts
          directly from our app.
        </p>

        <button
          onClick={() => setShowComingSoon(false)}
          className="mt-8 w-full bg-[#0F2E46] hover:bg-[#173D5B] transition text-white py-3 rounded-xl font-semibold"
        >
          Got it
        </button>

      </div>

    </div>

  </div>
)}
    </div>
  );
}