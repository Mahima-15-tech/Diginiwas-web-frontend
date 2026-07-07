// import React from "react";
// import {
//   Bell,
//   User,
//   Search,
//   SlidersHorizontal,
//   Bookmark,
//   Grid,
//   List,
//   Mic,
//   Plane,
//   CheckCircle2,
//   BedDouble,
//   Bath,
//   Sofa,
//   MapPin,
//   IndianRupee,
//   Building2,
//   Home,
// } from "lucide-react";
// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function NiwasAi() {
//   const [allProperties, setAllProperties] = useState([]);
//   const [filteredProperties, setFilteredProperties] = useState([]);
//   const [selectedCity, setSelectedCity] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedTransaction, setSelectedTransaction] = useState("All");
//   const [selectedBedroom, setSelectedBedroom] = useState("All");
//   const [selectedBathroom, setSelectedBathroom] = useState("All");
//   const [selectedFurnishing, setSelectedFurnishing] = useState("All");
//   const [selectedNegotiable, setSelectedNegotiable] = useState("All");
//   const [selectedPrice, setSelectedPrice] = useState("All");

//   const [showComingSoon, setShowComingSoon] = useState(false);

//   const filterClass = (active) =>
//     `text-xs px-4 py-2 rounded-full border transition-all duration-200 ${active
//       ? "bg-[#0F2E46] text-white border-[#0F2E46]"
//       : "bg-white text-[#1D1D1D] border-[#D8D8D8] hover:border-[#0F2E46]"
//     }`;

//   useEffect(() => {
//     getProperties();
//   }, []);
//   const getProperties = async () => {
//     try {
//       const res = await axios.get(
//         // "http://localhost:5000/api/property/get-all-properties"
//         `${import.meta.env.VITE_API_URL}/api/properties`
//       );

//       if (res.data.success) {
//         setAllProperties(res.data.properties);
//         setFilteredProperties(res.data.properties);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const cities = [
//     "All",
//     ...new Set(
//       allProperties
//         .filter((item) => item.city && item.city.trim() !== "")
//         .map((item) => item.city.toLowerCase())
//     ),
//   ];

//   const categories = [
//     "All",
//     ...new Set(
//       allProperties
//         .filter((item) => item.category)
//         .map((item) => item.category)
//     ),
//   ];

//   const transactions = [
//     "All",
//     ...new Set(
//       allProperties
//         .filter((item) => item.transactionType)
//         .map((item) => item.transactionType)
//     ),
//   ];

//   const furnishings = [
//     "All",
//     ...new Set(
//       allProperties
//         .filter((item) => item.furnishing)
//         .map((item) => item.furnishing)
//     ),
//   ];

//   // const handleCityFilter = (city) => {
//   //   setSelectedCity(city);

//   //   if (city === "All") {
//   //     setFilteredProperties(allProperties);
//   //   } else {
//   //     const data = allProperties.filter(
//   //       (item) => item.city.toLowerCase() === city.toLowerCase()
//   //     );

//   //     setFilteredProperties(data);
//   //   }
//   // };
//   const handleCityFilter = (city) => {
//     setSelectedCity(city);
//   };

//   useEffect(() => {
//     let data = [...allProperties];

//     // Search
//     if (searchTerm.trim() !== "") {
//       data = data.filter((item) => {
//         const keyword = searchTerm.toLowerCase();

//         return (
//           item.title?.toLowerCase().includes(keyword) ||
//           item.projectName?.toLowerCase().includes(keyword) ||
//           item.developerName?.toLowerCase().includes(keyword) ||
//           item.city?.toLowerCase().includes(keyword) ||
//           item.locality?.toLowerCase().includes(keyword) ||
//           item.address?.toLowerCase().includes(keyword) ||
//           item.propertyId?.toLowerCase().includes(keyword)
//         );
//       });
//     }

//     // City
//     if (selectedCity !== "All") {
//       data = data.filter(
//         (item) =>
//           item.city?.toLowerCase() === selectedCity.toLowerCase()
//       );
//     }

//     // Category
//     if (selectedCategory !== "All") {
//       data = data.filter(
//         (item) => item.category === selectedCategory
//       );
//     }

//     // Transaction
//     if (selectedTransaction !== "All") {
//       data = data.filter(
//         (item) => item.transactionType === selectedTransaction
//       );
//     }

//     // Bedrooms
//     if (selectedBedroom !== "All") {
//       data = data.filter(
//         (item) => item.bedrooms === selectedBedroom
//       );
//     }

//     // Bathrooms
//     if (selectedBathroom !== "All") {
//       data = data.filter(
//         (item) => item.bathrooms === selectedBathroom
//       );
//     }

//     // Furnishing
//     if (selectedFurnishing !== "All") {
//       data = data.filter(
//         (item) => item.furnishing === selectedFurnishing
//       );
//     }

//     // Negotiable
//     if (selectedNegotiable === "Yes") {
//       data = data.filter((item) => item.negotiable);
//     }

//     // Price

//     switch (selectedPrice) {
//       case "50K":
//         data = data.filter((item) => item.price <= 50000);
//         break;

//       case "5L":
//         data = data.filter(
//           (item) => item.price > 50000 && item.price <= 500000
//         );
//         break;

//       case "25L":
//         data = data.filter(
//           (item) => item.price > 500000 && item.price <= 2500000
//         );
//         break;

//       case "50L":
//         data = data.filter(
//           (item) => item.price > 2500000 && item.price <= 5000000
//         );
//         break;

//       case "1CR":
//         data = data.filter(
//           (item) => item.price > 5000000 && item.price <= 10000000
//         );
//         break;

//       case "ABOVE":
//         data = data.filter((item) => item.price > 10000000);
//         break;
//     }

//     setFilteredProperties(data);
//   }, [
//     allProperties,
//     searchTerm,
//     selectedCity,
//     selectedCategory,
//     selectedTransaction,
//     selectedBedroom,
//     selectedBathroom,
//     selectedFurnishing,
//     selectedNegotiable,
//     selectedPrice,
//   ]);
//   const formatPrice = (price) => {
//     if (!price) return "Price on Request";

//     if (price >= 10000000)
//       return `₹${(price / 10000000).toFixed(2)} Cr`;

//     if (price >= 100000)
//       return `₹${(price / 100000).toFixed(2)} Lakh`;

//     return `₹${price.toLocaleString("en-IN")}`;
//   };
//   return (
//     <div
//       className="w-full min-h-screen bg-[#F0EFEC] font-sans"
//       style={{ fontFamily: "Inter, sans-serif" }}
//     >
//       <div className="flex flex-col lg:flex-row ">
//         <div className="w-full lg:w-1/3 bg-white flex flex-col p-4 border-r border-[#D8D8D8] lg:min-h-[calc(100vh-50px-34px)]">
//           <div className="flex-1 flex flex-col gap-3 overflow-y-auto">
//             <div>
//               <div className="bg-[#1F415C] text-white text-xs rounded-2xl rounded-bl-sm p-3 leading-relaxed">
//                 Sat Sri Akal! I'm Niwas AI. Looking for premium investments in
//                 Diginiwas? Mohali vich best options mil gaye ne, specifically
//                 Sector 82 for high yield.
//               </div>
//               <div className="text-[10px] text-[#6F6F6F] mt-1">10:02 AM</div>
//             </div>

//             <div className="self-end max-w-[85%]">
//               <div className="bg-[#0E7A4B] text-white text-xs rounded-2xl rounded-br-sm p-3 leading-relaxed">
//                 Show me 3BHK luxury apartments near IT Park with high NRI
//                 interest.
//               </div>
//               <div className="text-[10px] text-[#6F6F6F] mt-1 text-right">
//                 10:03 AM
//               </div>
//             </div>

//             <div>
//               <div className="bg-[#1F415C] text-white text-xs rounded-2xl rounded-bl-sm p-3 leading-relaxed">
//                 <p>Excellent choice. The IT corridor is booming.</p>
//                 <p className="mt-2">
//                   Our verified Niwas AI property expert will connect with you
//                   shortly to discuss VIP floor plans and NRI-specific financing.
//                 </p>
//               </div>
//               <div className="mt-2">
//                 <span className="inline-flex items-center gap-1 bg-[#1CB46D] text-white text-[10px] font-semibold px-3 py-1 rounded-full">
//                   <CheckCircle2 size={12} /> Verified Expert Assigned
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-[#D8D8D8] my-3"></div>


//           {/* <div className="flex flex-wrap gap-2 mb-3">
//             {cities.map((city) => (
//               <button
//                 key={city}
//                 onClick={() => handleCityFilter(city)}
//                 className={`text-xs px-3 py-1.5 rounded-full border transition-all ${selectedCity === city
//                     ? "bg-[#0F2E46] text-white"
//                     : "bg-white border-[#D8D8D8] text-[#1D1D1D]"
//                   }`}
//               >
//                 {city}
//               </button>
//             ))}
//           </div> */}
//          <div className="bg-white rounded-2xl p-3 mb-4 border border-[#E5E5E5] shadow-sm">

//   {/* Search */}
//   <div className="mb-4">
//     <input
//       type="text"
//       placeholder="Search by Project, City, Developer..."
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//       className="w-full border border-[#D8D8D8] rounded-full px-4 py-2.5 text-sm outline-none focus:border-[#0F2E46]"
//     />
//   </div>

//   {/* City */}
//   <div className="mb-4">
//     <h4 className="text-xs font-semibold text-[#6F6F6F] uppercase mb-2">
//       City
//     </h4>

//     <div className="flex flex-wrap gap-2">
//       {cities.map((city) => (
//         <button
//           key={city}
//           onClick={() => setSelectedCity(city)}
//           className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
//             selectedCity === city
//               ? "bg-[#0F2E46] text-white border-[#0F2E46]"
//               : "bg-white text-[#1D1D1D] border-[#D8D8D8] hover:bg-[#F6F6F6]"
//           }`}
//         >
//           {city}
//         </button>
//       ))}
//     </div>
//   </div>

//   {/* Category */}
//   <div className="mb-4">
//     <h4 className="text-xs font-semibold text-[#6F6F6F] uppercase mb-2">
//       Category
//     </h4>

//     <div className="flex flex-wrap gap-2">
//       {categories.map((item) => (
//         <button
//           key={item}
//           onClick={() => setSelectedCategory(item)}
//           className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
//             selectedCategory === item
//               ? "bg-[#0F2E46] text-white border-[#0F2E46]"
//               : "bg-white text-[#1D1D1D] border-[#D8D8D8]"
//           }`}
//         >
//           {item}
//         </button>
//       ))}
//     </div>
//   </div>

//   {/* Transaction */}
//   <div className="mb-4">
//     <h4 className="text-xs font-semibold text-[#6F6F6F] uppercase mb-2">
//       Transaction
//     </h4>

//     <div className="flex flex-wrap gap-2">
//       {transactions.map((item) => (
//         <button
//           key={item}
//           onClick={() => setSelectedTransaction(item)}
//           className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
//             selectedTransaction === item
//               ? "bg-[#0F2E46] text-white border-[#0F2E46]"
//               : "bg-white text-[#1D1D1D] border-[#D8D8D8]"
//           }`}
//         >
//           {item}
//         </button>
//       ))}
//     </div>
//   </div>

//   {/* Bedrooms */}
//   <div className="mb-4">
//     <h4 className="text-xs font-semibold text-[#6F6F6F] uppercase mb-2">
//       Bedrooms
//     </h4>

//     <div className="flex flex-wrap gap-2">
//       {["All", "1", "2", "3", "4", "5"].map((item) => (
//         <button
//           key={item}
//           onClick={() => setSelectedBedroom(item)}
//           className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
//             selectedBedroom === item
//               ? "bg-[#0F2E46] text-white border-[#0F2E46]"
//               : "bg-white text-[#1D1D1D] border-[#D8D8D8]"
//           }`}
//         >
//           {item === "All" ? "All" : `${item} BHK`}
//         </button>
//       ))}
//     </div>
//   </div>

//   {/* Bathrooms */}
//   <div className="mb-4">
//     <h4 className="text-xs font-semibold text-[#6F6F6F] uppercase mb-2">
//       Bathrooms
//     </h4>

//     <div className="flex flex-wrap gap-2">
//       {["All", "1", "2", "3", "4", "5"].map((item) => (
//         <button
//           key={item}
//           onClick={() => setSelectedBathroom(item)}
//           className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
//             selectedBathroom === item
//               ? "bg-[#0F2E46] text-white border-[#0F2E46]"
//               : "bg-white text-[#1D1D1D] border-[#D8D8D8]"
//           }`}
//         >
//           {item === "All" ? "All" : item}
//         </button>
//       ))}
//     </div>
//   </div>

//   {/* Furnishing */}
//   <div className="mb-4">
//     <h4 className="text-xs font-semibold text-[#6F6F6F] uppercase mb-2">
//       Furnishing
//     </h4>

//     <div className="flex flex-wrap gap-2">
//       {furnishings.map((item) => (
//         <button
//           key={item}
//           onClick={() => setSelectedFurnishing(item)}
//           className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
//             selectedFurnishing === item
//               ? "bg-[#0F2E46] text-white border-[#0F2E46]"
//               : "bg-white text-[#1D1D1D] border-[#D8D8D8]"
//           }`}
//         >
//           {item}
//         </button>
//       ))}
//     </div>
//   </div>

//   {/* Negotiable */}
//   <div className="mb-4">
//     <h4 className="text-xs font-semibold text-[#6F6F6F] uppercase mb-2">
//       Negotiable
//     </h4>

//     <div className="flex flex-wrap gap-2">
//       {["All", "Yes"].map((item) => (
//         <button
//           key={item}
//           onClick={() => setSelectedNegotiable(item)}
//           className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
//             selectedNegotiable === item
//               ? "bg-[#0F2E46] text-white border-[#0F2E46]"
//               : "bg-white text-[#1D1D1D] border-[#D8D8D8]"
//           }`}
//         >
//           {item}
//         </button>
//       ))}
//     </div>
//   </div>

//   {/* Price */}
//   <div>
//     <h4 className="text-xs font-semibold text-[#6F6F6F] uppercase mb-2">
//       Price
//     </h4>

//     <div className="flex flex-wrap gap-2">
//       {[
//         { label: "All", value: "All" },
//         { label: "< ₹50K", value: "50K" },
//         { label: "₹5L", value: "5L" },
//         { label: "₹25L", value: "25L" },
//         { label: "₹50L", value: "50L" },
//         { label: "₹1Cr", value: "1CR" },
//         { label: "> ₹1Cr", value: "ABOVE" },
//       ].map((item) => (
//         <button
//           key={item.value}
//           onClick={() => setSelectedPrice(item.value)}
//           className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
//             selectedPrice === item.value
//               ? "bg-[#0F2E46] text-white border-[#0F2E46]"
//               : "bg-white text-[#1D1D1D] border-[#D8D8D8]"
//           }`}
//         >
//           {item.label}
//         </button>
//       ))}
//     </div>
//   </div>
// </div>

//           {/* <div className="flex items-center justify-between bg-[#F6F5F2] rounded-full px-4 py-2.5">
//             <span className="text-xs text-[#6F6F6F]">
//               Ask Niwas AI anything...
//             </span>
//             <Mic size={16} className="text-[#0F2E46]" />
//           </div> */}
//         </div>

//         <div className="w-full  bg-[#F6F5F2] p-4 md:p-5">
//           <div className="flex items-start justify-between mb-5">
//             <div>
//               <h2 className="text-xl font-bold text-[#1D1D1D]">
//                 Created for You
//               </h2>
//               <p className="text-sm text-[#6F6F6F] mt-1">
//                 Top-tier intelligence match for Mohali & Chandigarh
//               </p>
//             </div>
//             <div className="flex gap-2">
//               <button className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm">
//                 <Grid size={16} className="text-[#1D1D1D]" />
//               </button>
//               <button className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm">
//                 <List size={16} className="text-[#6F6F6F]" />
//               </button>
//             </div>
//           </div>

//           {/* <div className="flex flex-col gap-6"> */}
//           <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
//             {filteredProperties.length > 0 ? (
//               filteredProperties.map((property) => (
//                 <div
//                   key={property._id}
//                   // className="bg-white rounded-[24px] shadow-md overflow-hidden"
//                   className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#ECECEC]"
//                 >
//                   <div className="relative h-[240px]">
//                     <img
//                       src={
//                         property.images?.length > 0
//                           ? property.images[0].url
//                           : "https://via.placeholder.com/800x500"
//                       }
//                       alt={property.title}
//                       className="w-full h-full object-cover"
//                     />

//                     {/* Top Left Badges */}
//                     <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
//                       {/* {property.verified && ( */}
//                       {property.status === "Active" && (
//                         <span className="bg-[#1CB46D] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
//                           <CheckCircle2 size={12} />
//                           Verified
//                         </span>

//                       )}


//                       {property.nriChoice && (
//                         <span className="bg-[#D98E1B] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
//                           <CheckCircle2 size={12} />
//                           NRI Choice
//                         </span>
//                       )}
//                     </div>

//                     {/* Match */}
//                     <div className="absolute top-3 right-3 bg-[#274255] text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
//                       {property.matchPercentage || 95}% Match
//                     </div>

//                     {/* Bottom Content */}
//                     <div className="absolute bottom-3 left-4 text-white">
//                       <div className="text-xs opacity-90">
//                         {/* {property.location}, {property.city} */}
//                         {property.address || property.locality || property.city}
//                       </div>

//                       <div className="text-lg font-bold">
//                         {/* {property.title} */}
//                         {property.projectName || property.title}
//                       </div>
//                     </div>

//                     {/* Image Indicator */}
//                     {property.images?.length > 1 && (
//                       <div className="absolute bottom-3 right-4 flex gap-1">
//                         {property.images.map((_, index) => (
//                           <span
//                             key={index}
//                             className={`w-1.5 h-1.5 rounded-full ${index === 0 ? "bg-white" : "bg-white/50"
//                               }`}
//                           />
//                         ))}
//                       </div>
//                     )}
//                   </div>

//                   <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
//                     <div>
//                       <div className="flex items-center gap-2 flex-wrap">
//                         <span className="text-lg font-bold text-[#1D1D1D]">
//                           {/* ₹{property.price} */}
//                           ₹{property.price?.toLocaleString("en-IN")}
//                         </span>

//                         {property.oldPrice && (
//                           <span className="text-sm text-[#6F6F6F] line-through">
//                             ₹{property.oldPrice}
//                           </span>
//                         )}
//                       </div>

//                       <div className="flex items-center gap-4 text-xs text-[#6F6F6F] mt-1 flex-wrap">
//                         {property.bhk && (
//                           <span>🛏 {property.bedrooms} BHK</span>
//                         )}

//                         {property.superBuiltupArea && (
//                           <span>📐 {property.superBuiltupArea} sqft</span>
//                         )}

//                         {property.parking && (
//                           <span>🚗 {property.parking} Parking</span>
//                         )}
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-2">
                     

//                       {/* <button className="bg-[#0F2E46] text-white font-semibold text-sm px-5 py-3 rounded-xl">
//                         View Details
//                       </button> */}
//                       <button
//   onClick={() => setShowComingSoon(true)}
//   className="bg-[#0F2E46] hover:bg-[#163B59] transition text-white font-semibold text-sm px-5 py-3 rounded-xl"
// >
//   View Details
// </button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="bg-white rounded-xl p-10 text-center">
//                 <h2 className="text-lg font-semibold text-gray-600">
//                   No Properties Found
//                 </h2>

//                 <p className="text-sm text-gray-400 mt-2">
//                   No property available for selected city.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="w-full lg:w-2/5  bg-[#ECE9E4] p-4 md:p-5 flex flex-col gap-4">
//           <div className="flex items-center gap-2">
//             <div className="flex-1 flex items-center gap-2 bg-white rounded-xl px-4 py-3">
//               <Search size={16} className="text-[#6F6F6F]" />
//               <span className="text-sm text-[#1D1D1D]">Mohali, Diginiwas</span>
//             </div>
//             <button className="w-12 h-12 bg-[#0F2E46] rounded-xl flex items-center justify-center">
//               <SlidersHorizontal size={16} className="text-white" />
//             </button>
//           </div>

//           <div className="relative bg-[#E8E4DE] rounded-xl h-[300px] overflow-hidden">
//             <div className="absolute" style={{ top: "40px", left: "155px" }}>
//               <span className="bg-[#0F2E46] text-white text-[11px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
//                 ₹4.85 Cr
//               </span>
//             </div>
//             <div className="absolute" style={{ top: "95px", left: "70px" }}>
//               <span className="bg-white text-[#1D1D1D] text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap">
//                 ₹1.55 Cr
//               </span>
//             </div>
//             <div className="absolute" style={{ top: "145px", left: "195px" }}>
//               <span className="bg-[#0F2E46] text-white text-[11px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
//                 ₹2.10 Cr
//               </span>
//             </div>
//           </div>

//           <div className="bg-white rounded-[20px] p-4">
//             <h3 className="font-bold text-sm text-[#1D1D1D] mb-3">
//               Investment Hotspots
//             </h3>
//             <div className="flex flex-col gap-3">
//               <div className="flex items-center justify-between">
//                 <span className="text-xs text-[#1D1D1D]">
//                   Sector 82 (High ROI)
//                 </span>
//                 <div className="w-16 h-1.5 rounded-full bg-[#0E7A4B]"></div>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-xs text-[#1D1D1D]">
//                   Zirakpur Extension
//                 </span>
//                 <div className="w-16 h-1.5 rounded-full bg-[#D98E1B]"></div>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-xs text-[#1D1D1D]">IT City Corridor</span>
//                 <div className="w-16 h-1.5 rounded-full bg-[#0E7A4B]"></div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-[20px] p-4 flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="w-9 h-9 rounded-full bg-[#1CB46D] flex items-center justify-center">
//                 <Plane size={16} className="text-white" />
//               </div>
//               <div>
//                 <div className="text-[10px] text-[#6F6F6F] font-semibold tracking-wide">
//                   DISTANCE TO
//                 </div>
//                 <div className="text-sm font-bold text-[#1D1D1D]">
//                   IXC Airport: 12 min
//                 </div>
//               </div>
//             </div>
//             <CheckCircle2 size={18} className="text-[#1CB46D]" />
//           </div>
//         </div>
//       </div>
//       {showComingSoon && (
//   <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">

//     <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-[fadeIn_.25s_ease]">

//       {/* Top */}

//       <div className="bg-[#0F2E46] py-8 flex justify-center">
//         <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">

//           <div className="w-14 h-14 rounded-full bg-[#EAF7F2] flex items-center justify-center">

//             <Home size={34} className="text-[#1CB46D]" />

//           </div>
//         </div>
//       </div>

//       {/* Body */}

//       <div className="px-8 py-8 text-center">

//         <h2 className="text-2xl font-bold text-[#0F2E46]">
//           Mobile App
//         </h2>

//         <h3 className="text-xl font-semibold text-[#1CB46D] mt-1">
//           Coming Soon 🚀
//         </h3>

//         <p className="text-[#6F6F6F] text-sm leading-7 mt-5">
//           We're building an amazing DigiNiwas mobile experience.
//           <br />
//           Soon you'll be able to explore properties,
//           chat with Niwas AI and connect with verified experts
//           directly from our app.
//         </p>

//         <button
//           onClick={() => setShowComingSoon(false)}
//           className="mt-8 w-full bg-[#0F2E46] hover:bg-[#173D5B] transition text-white py-3 rounded-xl font-semibold"
//         >
//           Got it
//         </button>

//       </div>

//     </div>

//   </div>
// )}
//     </div>
//   );
// }

import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  Bot,
  User,
  Send,
  Mic,
  Search,
  Sparkles,
  MapPin,
  BedDouble,
  Maximize,
  Home,
  Heart,
  Phone,
  ArrowUpRight,
  Star,
  Building2,
} from "lucide-react";
import logo from "../assets/images/homelogo.png"; 
/* ============================================================
   UTILS — city fallback coords, distance, formatting
   ============================================================ */

const CITY_COORDS = {
  jaipur: { lat: 26.9124, lng: 75.7873 },
  mohali: { lat: 30.7046, lng: 76.7179 },
  chandigarh: { lat: 30.7333, lng: 76.7794 },
  delhi: { lat: 28.6139, lng: 77.209 },
  gurugram: { lat: 28.4595, lng: 77.0266 },
  gurgaon: { lat: 28.4595, lng: 77.0266 },
  noida: { lat: 28.5355, lng: 77.391 },
  mumbai: { lat: 19.076, lng: 72.8777 },
  pune: { lat: 18.5204, lng: 73.8567 },
  bangalore: { lat: 12.9716, lng: 77.5946 },
  bengaluru: { lat: 12.9716, lng: 77.5946 },
  hyderabad: { lat: 17.385, lng: 78.4867 },
  ahmedabad: { lat: 23.0225, lng: 72.5714 },
  lucknow: { lat: 26.8467, lng: 80.9462 },
  kolkata: { lat: 22.5726, lng: 88.3639 },
  chennai: { lat: 13.0827, lng: 80.2707 },
  indore: { lat: 22.7196, lng: 75.8577 },
};

function getPropertyLatLng(property) {
  if (property?.location?.lat && property?.location?.lng) {
    return { lat: property.location.lat, lng: property.location.lng };
  }
  const key = property?.city?.toLowerCase()?.trim();
  if (key && CITY_COORDS[key]) return CITY_COORDS[key];
  return null;
}

function distanceKm(a, b) {
  if (!a || !b) return null;
  const toRad = (v) => (v * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  return R * c;
}

function formatPrice(price) {
  if (price === undefined || price === null || Number.isNaN(Number(price))) {
    return "Price on request";
  }
  return `₹${Number(price).toLocaleString("en-IN")}`;
}

function formatDistance(km) {
  if (km === null || km === undefined) return null;
  if (km < 1) return `${Math.round(km * 1000)} m away`;
  return `${km.toFixed(1)} km away`;
}

function getNearbyProperties(all, reference, limit = 6) {
  if (!reference) return all.slice(0, limit).map((p) => ({ property: p, distance: null, sameCity: false }));
  const refLatLng = getPropertyLatLng(reference);

  return all
    .filter((p) => p._id !== reference._id)
    .map((p) => ({
      property: p,
      distance: refLatLng ? distanceKm(refLatLng, getPropertyLatLng(p)) : null,
      sameCity: p.city?.toLowerCase() === reference.city?.toLowerCase(),
    }))
    .sort((a, b) => {
      if (a.sameCity !== b.sameCity) return a.sameCity ? -1 : 1;
      if (a.distance !== null && b.distance !== null) return a.distance - b.distance;
      return 0;
    })
    .slice(0, limit);
}

/* ============================================================
   Leaflet default-icon fix (bundlers break the image paths)
   ============================================================ */

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

/* ============================================================
   SMALL SUBCOMPONENTS (all in this one file)
   ============================================================ */

function SuggestionChips({ suggestions, onPick }) {
  const list = suggestions || [
    "3 BHK in Jaipur",
    "Villa under 1 crore",
    "Rent in Mohali",
    "2 BHK apartment to buy",
  ];
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {list.map((s) => (
        <button
          key={s}
          onClick={() => onPick(s)}
          className="group flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm transition-all duration-200 hover:border-[#1CB46D] hover:bg-[#1CB46D]/5 hover:text-[#0F2E46] hover:shadow-md active:scale-95"
        >
          <Sparkles size={13} className="text-[#1CB46D] opacity-70 group-hover:opacity-100" />
          {s}
        </button>
      ))}
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 animate-[fadeInUp_0.25s_ease-out]">
      {/* <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0F2E46] text-white">
        <Bot size={14} />
        
      </div> */}
      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white">
  <img
    src={logo}
    alt="Niwas AI"
    className="h-full w-full object-contain"
  />
</div>
      <div className="inline-flex items-center gap-1.5 rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-3.5">
        <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.3s]" />
        <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.15s]" />
        <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce" />
      </div>
    </div>
  );
}

function PropertyCard({ property, isSelected, onSelect, onContact }) {
  const [saved, setSaved] = useState(false);
  const amenities = property.amenities?.length ? property.amenities : [];
  const visibleAmenities = amenities.slice(0, 3);
  const extraAmenities = amenities.length - visibleAmenities.length;

  return (
    <button
      type="button"
      onClick={() => onSelect?.(property)}
      className={`group w-full text-left overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${
        isSelected
          ? "border-[#1CB46D] ring-2 ring-[#1CB46D]/30 shadow-lg"
          : "border-gray-200 shadow-sm"
      }`}
    >
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={property.images?.[0]?.url}
          alt={property.projectName || property.title || "Property"}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
        <div className="absolute bottom-2 left-3 rounded-full bg-white/95 px-3 py-1 text-sm font-bold text-[#0F2E46] shadow">
          {formatPrice(property.price)}
        </div>
        {property.transactionType && (
          <div className="absolute top-2 right-2 rounded-full bg-[#0F2E46]/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
            {property.transactionType}
          </div>
        )}
      </div>

      <div className="p-4">
        <h4 className="font-bold text-[#0F2E46] leading-snug line-clamp-1">
          {property.projectName || property.title}
        </h4>
        <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
          <MapPin size={13} />
          <span className="line-clamp-1">{property.city}</span>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-gray-600">
          {property.bedrooms && (
            <span className="flex items-center gap-1">
              <BedDouble size={13} className="text-[#1CB46D]" /> {property.bedrooms} BHK
            </span>
          )}
          {property.area && (
            <span className="flex items-center gap-1">
              <Maximize size={13} className="text-[#1CB46D]" /> {property.area} sq.ft
            </span>
          )}
          {property.propertyType && (
            <span className="flex items-center gap-1">
              <Home size={13} className="text-[#1CB46D]" /> {property.propertyType}
            </span>
          )}
        </div>

        {property.description && (
          <p className="mt-2 text-xs text-gray-500 line-clamp-2">{property.description}</p>
        )}

        {visibleAmenities.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {visibleAmenities.map((a) => (
              <span key={a} className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] text-gray-600">
                {a}
              </span>
            ))}
            {extraAmenities > 0 && (
              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] text-gray-500">
                +{extraAmenities} more
              </span>
            )}
          </div>
        )}

        <div className="mt-4 flex items-center gap-2">
          <span className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#0F2E46] px-3 py-2 text-xs font-semibold text-white transition-colors group-hover:bg-[#123855]">
            View Details <ArrowUpRight size={13} />
          </span>
          <span
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              setSaved((s) => !s);
            }}
            className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
              saved
                ? "border-[#1CB46D] bg-[#1CB46D]/10 text-[#1CB46D]"
                : "border-gray-200 text-gray-500 hover:border-[#1CB46D] hover:text-[#1CB46D]"
            }`}
            aria-label="Save property"
          >
            <Heart size={14} fill={saved ? "currentColor" : "none"} />
          </span>
          <span
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              onContact?.(property);
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-[#0F2E46] hover:text-[#0F2E46]"
            aria-label="Contact about this property"
          >
            <Phone size={14} />
          </span>
        </div>
      </div>
    </button>
  );
}

function ChatMessage({ message, selectedProperty, onSelectProperty, onContact }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex items-end gap-2 animate-[fadeInUp_0.3s_ease-out] ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
          isUser ? "bg-gray-200 text-gray-600" : "bg-[#0F2E46] text-white"
        }`}
      >
        {isUser ? <User size={14} /> : <Bot size={14} />}
      </div>

      <div className={`flex flex-col gap-3 ${isUser ? "items-end" : "items-start"} max-w-[85%]`}>
        <div
          className={`inline-block px-4 py-3 shadow-sm ${
            isUser
              ? "rounded-2xl rounded-br-sm bg-[#0F2E46] text-white"
              : "rounded-2xl rounded-bl-sm bg-gray-100 text-gray-800"
          }`}
        >
          <div className="whitespace-pre-line text-sm leading-relaxed">{message.text}</div>
        </div>

        {message.properties?.length > 0 && (
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
            {message.properties.map((p) => (
              <PropertyCard
                key={p._id}
                property={p}
                isSelected={selectedProperty?._id === p._id}
                onSelect={onSelectProperty}
                onContact={onContact}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FlyToProperty({ latLng }) {
  const map = useMap();
  useEffect(() => {
    if (latLng) {
      map.flyTo([latLng.lat, latLng.lng], 14, { duration: 0.8 });
    }
  }, [latLng, map]);
  return null;
}

function MapPanel({ property }) {
  const latLng = getPropertyLatLng(property);

  if (!property || !latLng) {
    return (
      <div className="flex h-52 w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-gray-300 bg-gray-50 text-center">
        <MapPin size={20} className="text-gray-300" />
        <p className="px-6 text-xs text-gray-400">Select a property to see it on the map</p>
      </div>
    );
  }

  return (
    <div className="h-52 w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
      <MapContainer
        center={[latLng.lat, latLng.lng]}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[latLng.lat, latLng.lng]}>
          <Popup>{property.projectName || property.title}</Popup>
        </Marker>
        <FlyToProperty latLng={latLng} />
      </MapContainer>
    </div>
  );
}

function RecommendationCard({ property, distance, isSelected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(property)}
      className={`flex w-full items-center gap-3 rounded-xl border p-2 text-left transition-all duration-200 hover:border-[#1CB46D] hover:bg-[#1CB46D]/5 ${
        isSelected ? "border-[#1CB46D] bg-[#1CB46D]/5" : "border-gray-100"
      }`}
    >
      <img
        src={property.images?.[0]?.url}
        alt={property.projectName || property.title}
        className="h-14 w-14 shrink-0 rounded-lg object-cover"
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-[#0F2E46]">
          {property.projectName || property.title}
        </p>
        <p className="truncate text-xs text-gray-500">{formatPrice(property.price)}</p>
        <div className="mt-0.5 flex items-center gap-2 text-[11px] text-gray-400">
          {distance !== null && distance !== undefined && <span>{formatDistance(distance)}</span>}
          {property.rating && (
            <span className="flex items-center gap-0.5 text-amber-500">
              <Star size={11} fill="currentColor" /> {property.rating}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

const RIGHT_PANEL_TABS = [
  { key: "similar", label: "Similar" },
  { key: "recommended", label: "Recommended" },
  { key: "nearby", label: "Nearby" },
];

function RightPanel({ allProperties, selectedProperty, onSelectProperty }) {
  const [tab, setTab] = useState("similar");

  const ranked = useMemo(
    () => getNearbyProperties(allProperties, selectedProperty, 8),
    [allProperties, selectedProperty]
  );

  const list = useMemo(() => {
    if (!selectedProperty) return ranked;
    if (tab === "similar") {
      return ranked.filter((r) => Number(r.property.bedrooms) === Number(selectedProperty.bedrooms));
    }
    if (tab === "nearby") {
      return ranked.filter((r) => r.sameCity);
    }
    return ranked;
  }, [ranked, tab, selectedProperty]);

  return (
    <aside className="flex h-full w-full flex-col gap-4 overflow-y-auto border-t border-gray-100 bg-white p-4 lg:w-[360px] lg:border-l lg:border-t-0 xl:w-[400px]">
      <div>
        <h3 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-[#0F2E46]">
          <Building2 size={15} className="text-[#1CB46D]" />
          {selectedProperty ? selectedProperty.projectName || selectedProperty.title : "Property Map"}
        </h3>
        <MapPanel property={selectedProperty} />
      </div>

      <div>
        <div className="mb-3 flex gap-1 rounded-full bg-gray-100 p-1 text-xs font-semibold">
          {RIGHT_PANEL_TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex-1 rounded-full py-1.5 transition-colors ${
                tab === t.key ? "bg-white text-[#0F2E46] shadow-sm" : "text-gray-500 hover:text-[#0F2E46]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {list.length === 0 && (
            <p className="py-6 text-center text-xs text-gray-400">
              No properties to show yet — start chatting to get recommendations.
            </p>
          )}
          {list.map(({ property, distance }) => (
            <RecommendationCard
              key={property._id}
              property={property}
              distance={distance}
              isSelected={selectedProperty?._id === property._id}
              onSelect={onSelectProperty}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function NiwasAi() {
  // ---- Existing state (unchanged) ----
  const [allProperties, setAllProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "👋 Hi! I'm Niwas AI.\nAsk naturally like:\n• 3 BHK in Jaipur\n• Villa under 1 crore\n• Rent in Mohali",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  // ---- New UI-only state ----
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [listening, setListening] = useState(false);
  const scrollRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/properties`);
        if (res.data.success) {
          setAllProperties(res.data.properties);
          setFilteredProperties(res.data.properties);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const cities = useMemo(
    () => ["All", ...new Set(allProperties.map((x) => x.city).filter(Boolean))],
    [allProperties]
  );

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    const last = messages[messages.length - 1];
    if (last?.properties?.length) {
      setSelectedProperty(last.properties[0]);
    }
  }, [messages]);

  const handleVoice = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice input isn't supported in this browser.");
      return;
    }
    if (listening) {
      recognitionRef.current?.stop();
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onresult = (e) => {
      const transcript = e.results?.[0]?.[0]?.transcript;
      if (transcript) setInput(transcript);
    };
    recognitionRef.current = recognition;
    recognition.start();
  };

  const runSearch = (rawQuery) => {
    if (!rawQuery.trim()) return;
    const query = rawQuery.toLowerCase();

    setMessages((p) => [...p, { role: "user", text: rawQuery }]);
    setTyping(true);

    let data = [...allProperties];

    cities.forEach((city) => {
      if (city !== "All" && query.includes(city.toLowerCase())) {
        data = data.filter((x) => x.city?.toLowerCase() === city.toLowerCase());
      }
    });

    const bhk = query.match(/([1-5])\s*bhk/i);
    if (bhk) {
      data = data.filter((x) => Number(x.bedrooms) === Number(bhk[1]));
    }

    if (query.includes("rent")) {
      data = data.filter((x) => x.transactionType?.toLowerCase() === "rent");
    }

    if (query.includes("buy")) {
      data = data.filter((x) => x.transactionType?.toLowerCase() === "buy");
    }

    setFilteredProperties(data);

    setTimeout(() => {
      setTyping(false);
      setMessages((p) => [
        ...p,
        {
          role: "assistant",
          text: `Found ${data.length} matching properties.`,
          properties: data.slice(0, 6),
        },
      ]);
    }, 1200);

    setInput("");
  };

  const handleSend = () => runSearch(input);
  const handleSuggestion = (text) => runSearch(text);

  const isFirstTurn = messages.length === 1;

  // Show quick-pick chips after the welcome message AND after every AI reply,
  // so the user always has a next step without needing to type.
  const lastMessage = messages[messages.length - 1];
  const showChips = !typing && lastMessage?.role === "assistant";

  return (
    <div className="flex h-dvh w-full flex-col overflow-hidden bg-gray-50 lg:h-screen lg:flex-row">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ---------------- Main chat column ---------------- */}
      {/* Fixed share of the screen on mobile (58%) so it never needs the whole
          page to scroll — only the messages list scrolls internally. On
          desktop it simply fills the remaining width next to the right panel. */}
      {/* <div className="relative flex h-[48%] w-full min-h-0 flex-col overflow-hidden lg:h-full lg:flex-1">
        <div className="flex shrink-0 items-center gap-3 border-b bg-white p-4 sm:p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F2E46] text-white">
            <Bot size={18} />
          </div>
          <div>
            <div className="font-bold text-[#0F2E46]">Niwas AI</div>
            <div className="text-xs text-gray-500">AI Property Consultant</div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 top-16 flex items-center justify-center overflow-hidden">
          <Bot size={280} className="text-[#0F2E46] opacity-[0.03]" strokeWidth={1} />
        </div>

        <div ref={scrollRef} className="relative min-h-0 flex-1 space-y-5 overflow-y-auto p-4 sm:p-6">
          {isFirstTurn && (
            <div className="mx-auto max-w-lg pt-6 text-center sm:pt-10">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F2E46] to-[#1a4a6e] text-white shadow-lg">
                <Bot size={24} />
              </div>
              <h2 className="text-lg font-bold text-[#0F2E46] sm:text-xl">
                Find your next home, just by asking
              </h2>
              <p className="mx-auto mt-1 max-w-sm text-sm text-gray-500">
                Tell me what you're looking for — city, budget, BHK, or rent vs. buy — and I'll match it
                against live listings.
              </p>
            </div>
          )}

          {messages.map((msg, i) => (
            <ChatMessage
              key={i}
              message={msg}
              selectedProperty={selectedProperty}
              onSelectProperty={setSelectedProperty}
              onContact={(p) =>
                setMessages((prev) => [
                  ...prev,
                  {
                    role: "assistant",
                    text: `Sure — I'll flag your interest in "${p.projectName || p.title}" to our team. They'll reach out shortly.`,
                  },
                ])
              }
            />
          ))}

          {typing && <TypingIndicator />}

          {showChips && (
            <div className="mx-auto max-w-lg">
              {!isFirstTurn && (
                <p className="mb-1.5 text-xs font-medium text-gray-400">Try another search</p>
              )}
              <SuggestionChips onPick={handleSuggestion} />
            </div>
          )}
        </div>

        <div className="shrink-0 border-t bg-white p-3 sm:p-4">
          <div className="flex items-center gap-2 rounded-full border border-gray-300 bg-white pl-4 pr-1.5 py-1.5 shadow-sm transition-all focus-within:border-[#1CB46D] focus-within:ring-2 focus-within:ring-[#1CB46D]/20">
            <Search size={16} className="shrink-0 text-gray-400" />
            <input
              className="h-9 flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask anything about properties..."
            />
            <button
              onClick={handleVoice}
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                listening ? "bg-red-50 text-red-500 animate-pulse" : "text-gray-400 hover:bg-gray-100 hover:text-[#0F2E46]"
              }`}
              aria-label="Voice search"
              type="button"
            >
              <Mic size={16} />
            </button>
            <button
              onClick={handleSend}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0F2E46] text-white transition-transform hover:scale-105 active:scale-95"
              aria-label="Send message"
              type="button"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div> */}
<div className="relative flex h-[calc(100vh-80px)] w-full min-h-0 flex-col overflow-hidden lg:h-[calc(100vh-80px)] lg:flex-1">
  {/* Header */}
  <div className="flex shrink-0 items-center gap-3 border-b bg-white p-4 sm:p-5">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F2E46] text-white">
      <Bot size={18} />
    
    </div>
    <div>
      <div className="font-bold text-[#0F2E46]">Niwas AI</div>
      <div className="text-xs text-gray-500">AI Property Consultant</div>
    </div>
  </div>

  {/* Watermark */}
  <div className="pointer-events-none absolute inset-0 top-16 flex items-center justify-center overflow-hidden">
    <Bot size={280} className="text-[#0F2E46] opacity-[0.03]" strokeWidth={1} />
  </div>

  {/* Messages Scroll Area */}
  <div
    ref={scrollRef}
    className="relative flex-1 min-h-0 space-y-5 overflow-y-auto p-4 sm:p-6 pb-6"
  >
    {isFirstTurn && (
      <div className="mx-auto max-w-lg pt-6 text-center sm:pt-10">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F2E46] to-[#1a4a6e] text-white shadow-lg">
          <Bot size={24} />
        </div>
        <h2 className="text-lg font-bold text-[#0F2E46] sm:text-xl">
          Find your next home, just by asking
        </h2>
        <p className="mx-auto mt-1 max-w-sm text-sm text-gray-500">
          Tell me what you're looking for — city, budget, BHK, or rent vs. buy — and I'll match it
          against live listings.
        </p>
      </div>
    )}

    {messages.map((msg, i) => (
      <ChatMessage
        key={i}
        message={msg}
        selectedProperty={selectedProperty}
        onSelectProperty={setSelectedProperty}
        onContact={(p) =>
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              text: `Sure — I'll flag your interest in "${p.projectName || p.title}" to our team. They'll reach out shortly.`,
            },
          ])
        }
      />
    ))}

    {typing && <TypingIndicator />}

    {showChips && (
      <div className="mx-auto max-w-lg">
        {!isFirstTurn && (
          <p className="mb-1.5 text-xs font-medium text-gray-400">
            Try another search
          </p>
        )}
        <SuggestionChips onPick={handleSuggestion} />
      </div>
    )}
  </div>

  {/* Fixed Bottom Input */}
  <div className="shrink-0 border-t bg-white p-3 sm:p-4">
    <div className="flex items-center gap-2 rounded-full border border-gray-300 bg-white pl-4 pr-1.5 py-1.5 shadow-sm transition-all focus-within:border-[#1CB46D] focus-within:ring-2 focus-within:ring-[#1CB46D]/20">
      <Search size={16} className="shrink-0 text-gray-400" />

      <input
        className="h-9 flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Ask anything about properties..."
      />

      <button
        onClick={handleVoice}
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
          listening
            ? "bg-red-50 text-red-500 animate-pulse"
            : "text-gray-400 hover:bg-gray-100 hover:text-[#0F2E46]"
        }`}
        aria-label="Voice search"
        type="button"
      >
        <Mic size={16} />
      </button>

      <button
        onClick={handleSend}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0F2E46] text-white transition-transform hover:scale-105 active:scale-95"
        aria-label="Send message"
        type="button"
      >
        <Send size={16} />
      </button>
    </div>
  </div>
</div>
      {/* ---------------- Right panel: map + recommendations ---------------- */}
      <div className="h-[42%] w-full min-h-0 lg:h-full lg:w-auto">
        <RightPanel
          allProperties={filteredProperties.length ? filteredProperties : allProperties}
          selectedProperty={selectedProperty}
          onSelectProperty={setSelectedProperty}
        />
      </div>
    </div>
  );
}

