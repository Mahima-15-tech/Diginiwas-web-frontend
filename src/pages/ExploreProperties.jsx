// import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
// import { useEffect } from "react";
// import { useMap } from "react-leaflet";
// import { useState } from "react";
// import axios from "axios";
// import { Search } from "lucide-react";
// import L from "leaflet";


// const DARK_TILE_URL =
// `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${import.meta.env.VITE_STADIA_API_KEY}`;
// const DARK_TILE_ATTRIBUTION =
//   '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>';

// function CustomZoomControl() {
//   const map = useMap();
//   return (
//     <div
//       style={{
//         position: "absolute",
//         bottom: "20px",
//         right: "16px",
//         zIndex: 1000,
//         display: "flex",
//         flexDirection: "column",
//         gap: "4px",
//       }}
//     >
//       {["+", "−"].map((sym, i) => (
//         <button
//           key={sym}
//           onClick={() => (i === 0 ? map.zoomIn() : map.zoomOut())}
//           style={{
//             width: "36px",
//             height: "36px",
//             borderRadius: "10px",
//             background: "rgba(255,255,255,0.12)",
//             backdropFilter: "blur(12px)",
//             WebkitBackdropFilter: "blur(12px)",
//             border: "1px solid rgba(255,255,255,0.20)",
//             color: "#fff",
//             fontSize: "20px",
//             fontWeight: 300,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             cursor: "pointer",
//             lineHeight: 1,
//           }}
//         >
//           {sym}
//         </button>
//       ))}
//     </div>
//   );
// }
// function FitAllCities({ cities }) {
//   const map = useMap();

//   useEffect(() => {
//     if (!cities.length) return;

//     const bounds = L.latLngBounds(
//       cities.map((city) => city.position)
//     );

//     map.fitBounds(bounds, {
//       padding: [80, 80],
//       maxZoom: 5,
//     });
//   }, [cities, map]);

//   return null;
// }
// function FlyToCity({ city }) {
//   const map = useMap();

//   useEffect(() => {
//     if (!city?.clicked) return;

//     map.flyTo(city.position, 12, {
//       duration: 1.2,
//     });
//   }, [city, map]);

//   return null;
// }
// export default function ExploreProperty() {
//   const [properties, setProperties] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [listingType, setListingType] = useState("For Sale");
//   const [price, setPrice] = useState("Price");
//   const [bedsBaths, setBedsBaths] = useState("Beds & Baths");
//   const [propertyType, setPropertyType] = useState("Property Type");
//   const [filters, setFilters] = useState("Filters");
//   function FixMapSize() {
//     const map = useMap();

//     useEffect(() => {
//       setTimeout(() => {
//         map.invalidateSize();
//       }, 100);
//     }, [map]);

//     return null;
//   }

//   useEffect(() => {
//     fetchProperties();
//   }, []);

//   const fetchProperties = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_API_URL}/api/properties`
//       );

//     console.log("Properties =>", res.data.properties);
//       setProperties(res.data.properties);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const grouped = {};
//   console.log(properties);
//     properties.forEach((item) => {
//       if (
//         !item.city ||
//         item.latitude == null ||
//         item.longitude == null
//       ) {
//         return;
//       }

//       if (!grouped[item.city]) {
//         grouped[item.city] = {
//           name: item.city,
//           position: [
//             Number(item.latitude),
//             Number(item.longitude),
//           ],
//           properties: [],
//         };
//       }

//       grouped[item.city].properties.push(item);
//     });

//     const cityArray = Object.values(grouped);

//     setCities(cityArray);

//     if (cityArray.length > 0) {
//       setSelectedCity(cityArray[0]);
//     }
//   }, [properties]);

//   // const handleSearch = () => {
//   //   const filterData = {
//   //     search,
//   //     listingType,
//   //     price,
//   //     bedsBaths,
//   //     propertyType,
//   //     filters,
//   //   };

//   //   console.log(filterData);
//   // };
//   const handleSearch = () => {
//     let filtered = [...properties];
  
//     // Search
//     if (search.trim()) {
//       const keyword = search.toLowerCase();
  
//       filtered = filtered.filter((item) =>
//         item.title?.toLowerCase().includes(keyword) ||
//         item.city?.toLowerCase().includes(keyword) ||
//         item.locality?.toLowerCase().includes(keyword) ||
//         item.address?.toLowerCase().includes(keyword)
//       );
//     }
  
//     // Sale / Rent
//     if (listingType !== "For Sale") {
//       const type = listingType === "For Rent" ? "Rent" : "Sale";
  
//       filtered = filtered.filter(
//         (item) => item.transactionType === type
//       );
//     }
  
//     // Property Type
//     if (propertyType !== "Property Type") {
//       filtered = filtered.filter(
//         (item) =>
//           item.category?.toLowerCase() ===
//           propertyType.toLowerCase()
//       );
//     }
  
//     // Bedrooms
//     if (bedsBaths !== "Beds & Baths") {
//       if (bedsBaths === "4+ BHK") {
//         filtered = filtered.filter(
//           (item) => Number(item.bedrooms) >= 4
//         );
//       } else {
//         const bed = bedsBaths.replace(" BHK", "");
  
//         filtered = filtered.filter(
//           (item) => item.bedrooms === bed
//         );
//       }
//     }
  
//     // Price
//     if (price !== "Price") {
//       filtered = filtered.filter((item) => {
//         const p = Number(item.price);
  
//         switch (price) {
//           case "₹10L - ₹25L":
//             return p >= 1000000 && p <= 2500000;
  
//           case "₹25L - ₹50L":
//             return p > 2500000 && p <= 5000000;
  
//           case "₹50L - ₹1Cr":
//             return p > 5000000 && p <= 10000000;
  
//           case "₹1Cr+":
//             return p > 10000000;
  
//           default:
//             return true;
//         }
//       });
//     }
  
//     // Extra Filters
//     if (filters !== "Filters") {
//       switch (filters) {
//         case "Parking":
//           filtered = filtered.filter(
//             (item) =>
//               item.parking &&
//               item.parking.toLowerCase() !== "no"
//           );
//           break;
  
//         case "Furnished":
//           filtered = filtered.filter(
//             (item) =>
//               item.furnishing &&
//               item.furnishing.toLowerCase() !== "unfurnished"
//           );
//           break;
  
//           case "Swimming Pool":
//             filtered = filtered.filter((item) =>
//               item.amenities?.some((a) =>
//                 a.toLowerCase().includes("swimming pool")
//               )
//             );
//             break;
          
//           case "Garden":
//             filtered = filtered.filter((item) =>
//               item.amenities?.some((a) =>
//                 a.toLowerCase().includes("garden")
//               )
//             );
//             break;
  
//         default:
//           break;
//       }
//     }
  
//     // Group by City
//     const grouped = {};
  
//     filtered.forEach((item) => {
//       if (
//         !item.city ||
//         item.latitude == null ||
//         item.longitude == null
//       )
//         return;
  
//       if (!grouped[item.city]) {
//         grouped[item.city] = {
//           name: item.city,
//           position: [
//             Number(item.latitude),
//             Number(item.longitude),
//           ],
//           properties: [],
//         };
//       }
  
//       grouped[item.city].properties.push(item);
//     });
  
//     const cityArray = Object.values(grouped);
  
//     setCities(cityArray);
//     setSelectedCity(cityArray.length ? cityArray[0] : null);
//   };
//   if (loading) {
//     return (
//       <div className="text-center py-20">
//         Loading...
//       </div>
//     );
//   }

//    const marketData = {
//       activeListings: "1,284",
//       priceTrend: "4.2%",
//       zone: "High Demand Zone: Worli",
//     };
//   return (
//     <div className="w-full   flex  flex-col mt-5">

//       <div className="w-full bg-white border border-gray-300 p-2">
//         <div className="flex flex-col lg:flex-row gap-2">
//           <div className="relative lg:flex-1">
//             <input
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Address, neighborhood, city, ZIP"
//               className="w-full h-10 border border-gray-300 rounded-md pl-4 pr-10 text-sm outline-none"
//             />

//             <Search
//               size={18}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
//             />
//           </div>

//           <select
//             value={listingType}
//             onChange={(e) => setListingType(e.target.value)}
//             className="h-10 px-3 border border-[#274255] rounded-md text-sm"
//           >
//             <option>For Sale</option>
//             <option>For Rent</option>
//             <option>Sold</option>
//           </select>

//           <select
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="h-10 px-3 border border-gray-300 rounded-md text-sm"
//           >
//             <option>Price</option>
//             <option>₹10L - ₹25L</option>
//             <option>₹25L - ₹50L</option>
//             <option>₹50L - ₹1Cr</option>
//             <option>₹1Cr+</option>
//           </select>

//           <select
//             value={bedsBaths}
//             onChange={(e) => setBedsBaths(e.target.value)}
//             className="h-10 px-3 border border-gray-300 rounded-md text-sm"
//           >
//             <option>Beds & Baths</option>
//             <option>1 BHK</option>
//             <option>2 BHK</option>
//             <option>3 BHK</option>
//             <option>4+ BHK</option>
//           </select>

//           <select
//             value={propertyType}
//             onChange={(e) => setPropertyType(e.target.value)}
//             className="h-10 px-3 border border-gray-300 rounded-md text-sm"
//           >
//             <option>Property Type</option>
//             <option>Apartment</option>
//             <option>House</option>
//             <option>Villa</option>
//             <option>Plot</option>
//           </select>

//           <select
//             value={filters}
//             onChange={(e) => setFilters(e.target.value)}
//             className="h-10 px-3 border border-gray-300 rounded-md text-sm"
//           >
//             <option>Filters</option>
//             <option>Parking</option>
//             <option>Furnished</option>
//             <option>Swimming Pool</option>
//             <option>Garden</option>
//           </select>

//           <button
//             onClick={handleSearch}
//             className="h-10 px-5 bg-[#274255] text-white rounded-md text-sm font-medium"
//           >
//             Save Search
//           </button>
//         </div>
//       </div>


//       {/* <div className="  min-h-[600px] flex flex-col lg:flex-row gap-4 px-8 lg:px-6 my-10 ">
     
//         <div className="w-full lg:w-[60%] h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden border shadow-lg z-0">
//           <MapContainer
//             center={[22.5937, 78.9629]}
//             zoom={5}
//             className="w-full h-full"
//           >
//             <FixMapSize />
//             <TileLayer
//               attribution="&copy; OpenStreetMap"
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />

           
//             {cities.map((location) => (
//               <CircleMarker
//                 key={location.name}
//                 center={location.position}
//                 radius={selectedCity?.name === location.name ? 10 : 6}
//                 eventHandlers={{
//                   click: () => setSelectedCity(location),
//                 }}
//                 pathOptions={{
//                   color: "#274255",
//                   fillColor: "#274255",
//                   fillOpacity: 1,
//                 }}
//               >
//                 <Popup>
//                   <div>
//                     <h3 className="font-semibold">
//                       {location.name}
//                     </h3>

//                     <p>
//                       {location.properties.length} Properties
//                     </p>
//                   </div>
//                 </Popup>
//               </CircleMarker>
//             ))}
//           </MapContainer>
//         </div>

 
//         <div className="w-full lg:w-[40%] h-full overflow-y-auto pr-0 lg:pr-6">
//           <div className="grid grid-cols-2 gap-7">
           

//             {selectedCity?.properties?.length === 0 ? (
//   <div className="flex justify-center items-center h-80 w-full">
//     <h2 className="text-gray-500 text-lg">
//       No Property Found
//     </h2>
//   </div>
// ) : (
//   <div className="grid grid-cols-2 gap-7">

//     {selectedCity?.properties?.map((p) => (

//       <div
//         key={p._id}
//         className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
//       >
//         <img
//           src={
//             p.images?.length
//               ? p.images[0].url
//               : "/no-image.png"
//           }
//           alt={p.title}
//           className="w-full h-40 object-cover"
//         />

//         <div className="p-3">

//           <h3 className="text-sm font-semibold">
//             {p.title}
//           </h3>

//           <p className="text-xs text-gray-500">
//             {p.address}
//           </p>

//           <div className="font-bold mt-2">
//             ₹{Number(p.price).toLocaleString()}
//           </div>

//         </div>
//       </div>

//     ))}

//   </div>
// )}
//           </div>
//         </div>

//       </div> */}

//        <div className="w-full min-h-[600px] flex flex-col lg:flex-row gap-4 px-8 lg:px-6 py-10 bg-[#274255]">
//             {/* MAP */}
//             {/* <div className="relative w-full lg:w-[60%] h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden border shadow-lg z-0"> */}
//             <div className="relative w-full lg:w-[60%] h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg z-0">
//               {/* <MapContainer
//                 center={[22.5937, 78.9629]}
//                 zoom={11}
//                 minZoom={2}
//                 maxZoom={18}
//                 worldCopyJump={false}
//                 noWrap={true}
//                 zoomControl={false}
//                 scrollWheelZoom={false}
//                 style={{ width: "100%", height: "100%" }}
//                 className=""
//               > */}
//               <MapContainer
//     center={[23.5, 82]}
//     zoom={4}
//     minZoom={3}
//     maxZoom={18}
//     zoomControl={false}
//     scrollWheelZoom={true}
//     worldCopyJump={false}
//     style={{ width: "100%", height: "100%" }}
// >
//                 {/* <FixMapSize />
//                 <CustomZoomControl /> */}
//       <FixMapSize />
// <FitAllCities cities={cities} />
// <FlyToCity city={selectedCity} />
// <CustomZoomControl />
//                 <TileLayer
//                   url={DARK_TILE_URL}
//                   attribution={DARK_TILE_ATTRIBUTION}
//                   noWrap={true}
//                 />
      
              
      
//                 {cities.map((location) => (
//                   <CircleMarker
//                     className="border-2 border-white"
//                     key={location.name}
//                     center={location.position}
//                     radius={selectedCity?.name === location.name ? 10 : 6}
//                     eventHandlers={{
//                       click: () => setSelectedCity(location),
//                     }}
//                     pathOptions={{
//                       color: "#ffffff",
//                       weight: 2,
//                       fillColor: "#10b981",
//                       fillOpacity: 1,
//                     }}
//                   >
//                     <Popup>
//                       <div>
//                         <h3 className="font-semibold">{location.name}</h3>
//                         <p>{location.properties.length} Properties</p>
//                       </div>
//                     </Popup>
//                   </CircleMarker>
//                 ))}
//               </MapContainer>
      
//               <div
//                 className="absolute top-2 right-2 sm:top-4 sm:right-4 z-[1000] rounded-xl sm:rounded-2xl
//                    p-3 sm:p-4 w-[170px] xs:w-[185px] sm:w-[210px] lg:w-[230px]"
//                 style={{
//                   background: "rgba(255,255,255,0.10)",
//                   backdropFilter: "blur(18px)",
//                   WebkitBackdropFilter: "blur(18px)",
//                   border: "1px solid rgba(255,255,255,0.18)",
//                 }}
//               >
//                 {/* Title */}
//                 <p className="text-white text-sm sm:text-[17px] font-bold mb-2 sm:mb-3 tracking-tight">
//                   Market Pulse
//                 </p>
      
//                 {/* Active Listings */}
//                 <div className="flex items-center justify-between mb-1">
//                   <span className="text-[8px] sm:text-[10px] font-semibold tracking-[0.12em] text-white/50 uppercase">
//                     Active Listings
//                   </span>
      
//                   <span className="text-sm sm:text-[16px] font-bold text-white">
//                     {marketData.activeListings}
//                   </span>
//                 </div>    
               
//               </div>
//             </div>
      
     
//             {/* PROPERTY LIST */}
//             <div className="w-full lg:w-[40%] h-full overflow-y-auto pr-0 lg:pr-6">
//               {selectedCity?.properties?.length === 0 ? (
//                 <div className="flex items-center justify-center h-96">
//                   <h2 className="text-gray-500 text-lg font-semibold">
//                     No Property Found
//                   </h2>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-2 gap-7">
//                   {selectedCity?.properties?.map((p, i) => (
//                     <div
//                       key={i}
//                       className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
//                     >
//                       <img
//                         src={p.images?.length ? p.images[0].url : "/no-image.png"}
//                         alt={p.title}
//                         className="w-full h-40 object-cover"
//                       />
      
//                       <div className="flex items-center justify-between"> 
//                       <div className="p-3">
//                         <div className="text-sm font-semibold">{p.title}</div>
      
//                         <div className="text-xs text-gray-500">{p.address}</div>
      
//                         <div className="text-sm font-bold mt-1">
//                           ₹{p.price.toLocaleString()}
//                         </div>
//                       </div>
//                       <div className="px-3">
//                           <button
//                           className="bg-[#0F2E46] hover:bg-[#163B59] transition text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl"
//                         >
//                           View Details
//                         </button>
//                       </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>

//     </div>
//   );
// }






import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import axios from "axios";
import { Search } from "lucide-react";
import L from "leaflet";
import { useSearchParams } from "react-router-dom";

const DARK_TILE_URL = `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${import.meta.env.VITE_STADIA_API_KEY}`;
const DARK_TILE_ATTRIBUTION = '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>';

function CustomZoomControl() {
  const map = useMap();
  return (
    <div style={{ position: "absolute", bottom: "20px", right: "16px", zIndex: 1000, display: "flex", flexDirection: "column", gap: "4px" }}>
      {["+", "−"].map((sym, i) => (
        <button
          key={sym}
          onClick={() => (i === 0 ? map.zoomIn() : map.zoomOut())}
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "10px",
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.20)",
            color: "#fff",
            fontSize: "20px",
            fontWeight: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            lineHeight: 1,
          }}
        >
          {sym}
        </button>
      ))}
    </div>
  );
}

// 🔧 UPDATE: Yeh component sirf tab chalega jab hum explicitly bounds fit karwana chahenge
function FitAllCities({ cities }) {
  const map = useMap();
  useEffect(() => {
    if (!cities.length) return;
    const bounds = L.latLngBounds(cities.map((city) => city.position));
    map.fitBounds(bounds, {
      padding: [80, 80],
      maxZoom: 9, // Thoda aur close zoom filter level par
    });
  }, [cities, map]);
  return null;
}

function FlyToCity({ city, focusVersion, hasFocus }) {
  const map = useMap();
  useEffect(() => {
    if (!hasFocus || !city?.position) return;
    map.flyTo(city.position, 10, { // 👈 Search karne par perfectly balanced zoom level 10
      duration: 1.2,
    });
  }, [focusVersion, map, hasFocus, city]);
  return null;
}

export default function ExploreProperty() {
  const [properties, setProperties] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [listingType, setListingType] = useState("For Sale");
  const [price, setPrice] = useState("Price");
  const [bedsBaths, setBedsBaths] = useState("Beds & Baths");
  const [propertyType, setPropertyType] = useState("Property Type");
  const [filters, setFilters] = useState("Filters");

  const [searchParams] = useSearchParams();
  const cityFromUrl = searchParams.get("city");

  const [focusVersion, setFocusVersion] = useState(0);
  const [hasFocus, setHasFocus] = useState(false);
  const [notFound, setNotFound] = useState(false);
  
  // 🔽 NEW: Yeh flag check karega ki user ne manually search button daba diya hai ya nahi
  const [isSearched, setIsSearched] = useState(false);

  function FixMapSize() {
    const map = useMap();
    useEffect(() => {
      setTimeout(() => { map.invalidateSize(); }, 100);
    }, [map]);
    return null;
  }

  useEffect(() => {
    if (cityFromUrl) {
      setSearch(cityFromUrl);
      setIsSearched(true); // URL se aane par bhi search mode active mana jaye
    }
  }, [cityFromUrl]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/properties`);
      setProperties(res.data.properties);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const grouped = {};
    properties.forEach((item) => {
      if (!item.city || item.latitude == null || item.longitude == null) return;
      if (!grouped[item.city]) {
        grouped[item.city] = {
          name: item.city,
          position: [Number(item.latitude), Number(item.longitude)],
          properties: [],
        };
      }
      grouped[item.city].properties.push(item);
    });

    const cityArray = Object.values(grouped);
    setCities(cityArray);

    if (!cityArray.length) {
      setSelectedCity(null);
      return;
    }

    const term = (cityFromUrl || "").trim().toLowerCase();
    if (term) {
      const match = cityArray.find((c) => c.name.toLowerCase() === term);
      if (match) {
        setSelectedCity(match);
        setNotFound(false);
        setHasFocus(true);
        setFocusVersion((v) => v + 1);
      } else {
        setSelectedCity(null);
        setNotFound(true);
        setHasFocus(false);
      }
    } else {
      // Shuruat mein default list ke liye pehli city select rakhein, par center lock na karein
      setSelectedCity(cityArray[0]);
      setNotFound(false);
      setHasFocus(false);
    }
  }, [properties, cityFromUrl]);

  const handleSearch = () => {
    setIsSearched(true); // 🔥 User ne search hit kar diya hai
    let filtered = [...properties];

    if (search.trim()) {
      const keyword = search.toLowerCase();
      filtered = filtered.filter((item) =>
        item.title?.toLowerCase().includes(keyword) ||
        item.city?.toLowerCase().includes(keyword) ||
        item.locality?.toLowerCase().includes(keyword) ||
        item.address?.toLowerCase().includes(keyword)
      );
    }

    if (listingType !== "For Sale") {
      const type = listingType === "For Rent" ? "Rent" : "Sale";
      filtered = filtered.filter((item) => item.transactionType === type);
    }

    if (propertyType !== "Property Type") {
      filtered = filtered.filter((item) => item.category?.toLowerCase() === propertyType.toLowerCase());
    }

    if (bedsBaths !== "Beds & Baths") {
      if (bedsBaths === "4+ BHK") {
        filtered = filtered.filter((item) => Number(item.bedrooms) >= 4);
      } else {
        const bed = bedsBaths.replace(" BHK", "");
        filtered = filtered.filter((item) => item.bedrooms === bed);
      }
    }

    if (price !== "Price") {
      filtered = filtered.filter((item) => {
        const p = Number(item.price);
        switch (price) {
          case "₹10L - ₹25L": return p >= 1000000 && p <= 2500000;
          case "₹25L - ₹50L": return p > 2500000 && p <= 5000000;
          case "₹50L - ₹1Cr": return p > 5000000 && p <= 10000000;
          case "₹1Cr+": return p > 10000000;
          default: return true;
        }
      });
    }

    if (filters !== "Filters") {
      switch (filters) {
        case "Parking": filtered = filtered.filter((item) => item.parking && item.parking.toLowerCase() !== "no"); break;
        case "Furnished": filtered = filtered.filter((item) => item.furnishing && item.furnishing.toLowerCase() !== "unfurnished"); break;
        case "Swimming Pool": filtered = filtered.filter((item) => item.amenities?.some((a) => a.toLowerCase().includes("swimming pool"))); break;
        case "Garden": filtered = filtered.filter((item) => item.amenities?.some((a) => a.toLowerCase().includes("garden"))); break;
        default: break;
      }
    }

    const grouped = {};
    filtered.forEach((item) => {
      if (!item.city || item.latitude == null || item.longitude == null) return;
      if (!grouped[item.city]) {
        grouped[item.city] = {
          name: item.city,
          position: [Number(item.latitude), Number(item.longitude)],
          properties: [],
        };
      }
      grouped[item.city].properties.push(item);
    });

    const cityArray = Object.values(grouped);
    setCities(cityArray);

    const term = search.trim().toLowerCase();
    if (term) {
      const cityMatch = cityArray.find((c) => c.name.toLowerCase() === term);
      if (cityMatch) {
        setSelectedCity(cityMatch);
        setNotFound(false);
        setHasFocus(true);
        setFocusVersion((v) => v + 1);
        return;
      }
    }

    if (cityArray.length) {
      setSelectedCity(cityArray[0]);
      setNotFound(false);
      setHasFocus(false);
    } else {
      setSelectedCity(null);
      setNotFound(true);
      setHasFocus(false);
    }
  };

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  const marketData = { activeListings: "1,284", priceTrend: "4.2%", zone: "High Demand Zone: Worli" };

  return (
    <div className="w-full flex flex-col mt-5">
      {/* FILTER TOP BAR */}
      <div className="w-full bg-white border border-gray-300 p-2">
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="relative lg:flex-1">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Address, neighborhood, city, ZIP"
              className="w-full h-10 border border-gray-300 rounded-md pl-4 pr-10 text-sm outline-none"
            />
            <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          <select value={listingType} onChange={(e) => setListingType(e.target.value)} className="h-10 px-3 border border-[#274255] rounded-md text-sm">
            <option>For Sale</option>
            <option>For Rent</option>
            <option>Sold</option>
          </select>

          <select value={price} onChange={(e) => setPrice(e.target.value)} className="h-10 px-3 border border-gray-300 rounded-md text-sm">
            <option>Price</option>
            <option>₹10L - ₹25L</option>
            <option>₹25L - ₹50L</option>
            <option>₹50L - ₹1Cr</option>
            <option>₹1Cr+</option>
          </select>

          <select value={bedsBaths} onChange={(e) => setBedsBaths(e.target.value)} className="h-10 px-3 border border-gray-300 rounded-md text-sm">
            <option>Beds & Baths</option>
            <option>1 BHK</option>
            <option>2 BHK</option>
            <option>3 BHK</option>
            <option>4+ BHK</option>
          </select>

          <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className="h-10 px-3 border border-gray-300 rounded-md text-sm">
            <option>Property Type</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Villa</option>
            <option>Plot</option>
          </select>

          <select value={filters} onChange={(e) => setFilters(e.target.value)} className="h-10 px-3 border border-gray-300 rounded-md text-sm">
            <option>Filters</option>
            <option>Parking</option>
            <option>Furnished</option>
            <option>Swimming Pool</option>
            <option>Garden</option>
          </select>

          <button onClick={handleSearch} className="h-10 px-5 bg-[#274255] text-white rounded-md text-sm font-medium">
            Save Search
          </button>
        </div>
      </div>

      {/* MAP AND PROPERTIES CONTAINER */}
      <div className="w-full min-h-[600px] flex flex-col lg:flex-row gap-4 px-8 lg:px-6 py-10 bg-[#274255]">
        
        {/* MAP */}
        <div className="relative w-full lg:w-[60%] h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg z-0">
          <MapContainer
            center={[27.1751, 76.0123]} // 👈 New Delhi aur Jaipur ke center-midpoint (Dausa-Alwar highway layout region) par initially loaded set kiya
            zoom={8.5}                   // 👈 Default closely zoomed-in state bina search ke jaisa image mein hai
            minZoom={3}
            maxZoom={18}
            zoomControl={false}
            scrollWheelZoom={true}
            worldCopyJump={false}
            style={{ width: "100%", height: "100%" }}
          >
            <FixMapSize />
            
            {/* 🔧 FIXED LOGIC: Jab tak koi action search ya filter trigger na kare, map pure India zoom out nahi karega */}
            {isSearched && !hasFocus && <FitAllCities cities={cities} />}
            <FlyToCity city={selectedCity} focusVersion={focusVersion} hasFocus={hasFocus} />
            <CustomZoomControl />

            <TileLayer url={DARK_TILE_URL} attribution={DARK_TILE_ATTRIBUTION} noWrap={true} />

            {cities.map((location) => (
              <CircleMarker
                className="border-2 border-white"
                key={location.name}
                center={location.position}
                radius={selectedCity?.name === location.name ? 10 : 6}
                eventHandlers={{
                  click: () => {
                    setSelectedCity(location);
                    setNotFound(false);
                    setHasFocus(true);
                    setFocusVersion((v) => v + 1);
                  },
                }}
                pathOptions={{
                  color: "#ffffff",
                  weight: 2,
                  fillColor: "#10b981",
                  fillOpacity: 1,
                }}
              >
                <Popup>
                  <div>
                    <h3 className="font-semibold">{location.name}</h3>
                    <p>{location.properties.length} Properties</p>
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>

          <div
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-[1000] rounded-xl sm:rounded-2xl p-3 sm:p-4 w-[170px] xs:w-[185px] sm:w-[210px] lg:w-[230px]"
            style={{ background: "rgba(255,255,255,0.10)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", border: "1px solid rgba(255,255,255,0.18)" }}
          >
            <p className="text-white text-sm sm:text-[17px] font-bold mb-2 sm:mb-3 tracking-tight">Market Pulse</p>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[8px] sm:text-[10px] font-semibold tracking-[0.12em] text-white/50 uppercase">Active Listings</span>
              <span className="text-sm sm:text-[16px] font-bold text-white">{marketData.activeListings}</span>
            </div>
          </div>
        </div>

        {/* PROPERTY LIST */}
        <div className="w-full lg:w-[40%] h-full overflow-y-auto pr-0 lg:pr-6">
          {notFound || !selectedCity || selectedCity?.properties?.length === 0 ? (
            <div className="flex items-center justify-center h-96">
              <h2 className="text-gray-500 text-lg font-semibold">No Property Found</h2>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-7">
              {selectedCity?.properties?.map((p, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                  <img src={p.images?.length ? p.images[0].url : "/no-image.png"} alt={p.title} className="w-full h-40 object-cover" />
                  <div className="flex items-center justify-between">
                    <div className="p-3">
                      <div className="text-sm font-semibold">{p.title}</div>
                      <div className="text-xs text-gray-500">{p.address}</div>
                      <div className="text-sm font-bold mt-1">₹{p.price.toLocaleString()}</div>
                    </div>
                    <div className="px-3">
                      <button className="bg-[#0F2E46] hover:bg-[#163B59] transition text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}


// import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
// import { useEffect, useState } from "react";
// import { useMap } from "react-leaflet";
// import axios from "axios";
// import { Search } from "lucide-react";
// import L from "leaflet";
// import { useSearchParams } from "react-router-dom"; // 🔽 NEW

// const DARK_TILE_URL =
// `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${import.meta.env.VITE_STADIA_API_KEY}`;
// const DARK_TILE_ATTRIBUTION =
//   '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>';

// function CustomZoomControl() {
//   const map = useMap();
//   return (
//     <div
//       style={{
//         position: "absolute",
//         bottom: "20px",
//         right: "16px",
//         zIndex: 1000,
//         display: "flex",
//         flexDirection: "column",
//         gap: "4px",
//       }}
//     >
//       {["+", "−"].map((sym, i) => (
//         <button
//           key={sym}
//           onClick={() => (i === 0 ? map.zoomIn() : map.zoomOut())}
//           style={{
//             width: "36px",
//             height: "36px",
//             borderRadius: "10px",
//             background: "rgba(255,255,255,0.12)",
//             backdropFilter: "blur(12px)",
//             WebkitBackdropFilter: "blur(12px)",
//             border: "1px solid rgba(255,255,255,0.20)",
//             color: "#fff",
//             fontSize: "20px",
//             fontWeight: 300,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             cursor: "pointer",
//             lineHeight: 1,
//           }}
//         >
//           {sym}
//         </button>
//       ))}
//     </div>
//   );
// }

// function FitAllCities({ cities }) {
//   const map = useMap();

//   useEffect(() => {
//     if (!cities.length) return;

//     const bounds = L.latLngBounds(cities.map((city) => city.position));

//     map.fitBounds(bounds, {
//       padding: [80, 80],
//       maxZoom: 5,
//     });
//   }, [cities, map]);

//   return null;
// }

// // 🔧 FIXED: ab ye selectedCity + focusVersion pe depend karta hai,
// // isliye search se match hone par bhi map turant fly karega (sirf click pe nahi)
// function FlyToCity({ city, focusVersion, hasFocus }) {
//   const map = useMap();

//   useEffect(() => {
//     if (!hasFocus || !city?.position) return;

//     map.flyTo(city.position, 11, {
//       duration: 1.2,
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [focusVersion, map]);

//   return null;
// }

// export default function ExploreProperty() {
//   const [properties, setProperties] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [listingType, setListingType] = useState("For Sale");
//   const [price, setPrice] = useState("Price");
//   const [bedsBaths, setBedsBaths] = useState("Beds & Baths");
//   const [propertyType, setPropertyType] = useState("Property Type");
//   const [filters, setFilters] = useState("Filters");

//   // 🔽 NEW: URL se aaya hua city (Home page se yahan navigate hone par)
//   const [searchParams] = useSearchParams();
//   const cityFromUrl = searchParams.get("city");

//   // 🔽 NEW: jab bhi ek specific city ko focus karna ho (search/URL match), ye counter badhao
//   const [focusVersion, setFocusVersion] = useState(0);
//   const [hasFocus, setHasFocus] = useState(false);
//   const [notFound, setNotFound] = useState(false);

//   function FixMapSize() {
//     const map = useMap();

//     useEffect(() => {
//       setTimeout(() => {
//         map.invalidateSize();
//       }, 100);
//     }, [map]);

//     return null;
//   }

//   // 🔽 NEW: URL se city aaya ho to search box me prefill kar do
//   useEffect(() => {
//     if (cityFromUrl) {
//       setSearch(cityFromUrl);
//     }
//   }, [cityFromUrl]);

//   useEffect(() => {
//     fetchProperties();
//   }, []);

//   const fetchProperties = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_API_URL}/api/properties`
//       );

//       setProperties(res.data.properties);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔧 FIXED: initial grouping ke baad, agar URL se city aayi hai to usi city ko match/focus karo
//   useEffect(() => {
//     const grouped = {};

//     properties.forEach((item) => {
//       if (!item.city || item.latitude == null || item.longitude == null) {
//         return;
//       }

//       if (!grouped[item.city]) {
//         grouped[item.city] = {
//           name: item.city,
//           position: [Number(item.latitude), Number(item.longitude)],
//           properties: [],
//         };
//       }

//       grouped[item.city].properties.push(item);
//     });

//     const cityArray = Object.values(grouped);
//     setCities(cityArray);

//     if (!cityArray.length) {
//       setSelectedCity(null);
//       return;
//     }

//     const term = (cityFromUrl || "").trim().toLowerCase();

//     if (term) {
//       const match = cityArray.find((c) => c.name.toLowerCase() === term);

//       if (match) {
//         setSelectedCity(match);
//         setNotFound(false);
//         setHasFocus(true);
//         setFocusVersion((v) => v + 1);
//       } else {
//         setSelectedCity(null);
//         setNotFound(true);
//         setHasFocus(false);
//       }
//     } else {
//       setSelectedCity(cityArray[0]);
//       setNotFound(false);
//       setHasFocus(false);
//     }
//   }, [properties, cityFromUrl]);

//   const handleSearch = () => {
//     let filtered = [...properties];

//     // Search
//     if (search.trim()) {
//       const keyword = search.toLowerCase();

//       filtered = filtered.filter((item) =>
//         item.title?.toLowerCase().includes(keyword) ||
//         item.city?.toLowerCase().includes(keyword) ||
//         item.locality?.toLowerCase().includes(keyword) ||
//         item.address?.toLowerCase().includes(keyword)
//       );
//     }

//     // Sale / Rent
//     if (listingType !== "For Sale") {
//       const type = listingType === "For Rent" ? "Rent" : "Sale";

//       filtered = filtered.filter((item) => item.transactionType === type);
//     }

//     // Property Type
//     if (propertyType !== "Property Type") {
//       filtered = filtered.filter(
//         (item) => item.category?.toLowerCase() === propertyType.toLowerCase()
//       );
//     }

//     // Bedrooms
//     if (bedsBaths !== "Beds & Baths") {
//       if (bedsBaths === "4+ BHK") {
//         filtered = filtered.filter((item) => Number(item.bedrooms) >= 4);
//       } else {
//         const bed = bedsBaths.replace(" BHK", "");

//         filtered = filtered.filter((item) => item.bedrooms === bed);
//       }
//     }

//     // Price
//     if (price !== "Price") {
//       filtered = filtered.filter((item) => {
//         const p = Number(item.price);

//         switch (price) {
//           case "₹10L - ₹25L":
//             return p >= 1000000 && p <= 2500000;

//           case "₹25L - ₹50L":
//             return p > 2500000 && p <= 5000000;

//           case "₹50L - ₹1Cr":
//             return p > 5000000 && p <= 10000000;

//           case "₹1Cr+":
//             return p > 10000000;

//           default:
//             return true;
//         }
//       });
//     }

//     // Extra Filters
//     if (filters !== "Filters") {
//       switch (filters) {
//         case "Parking":
//           filtered = filtered.filter(
//             (item) => item.parking && item.parking.toLowerCase() !== "no"
//           );
//           break;

//         case "Furnished":
//           filtered = filtered.filter(
//             (item) =>
//               item.furnishing && item.furnishing.toLowerCase() !== "unfurnished"
//           );
//           break;

//         case "Swimming Pool":
//           filtered = filtered.filter((item) =>
//             item.amenities?.some((a) => a.toLowerCase().includes("swimming pool"))
//           );
//           break;

//         case "Garden":
//           filtered = filtered.filter((item) =>
//             item.amenities?.some((a) => a.toLowerCase().includes("garden"))
//           );
//           break;

//         default:
//           break;
//       }
//     }

//     // Group by City
//     const grouped = {};

//     filtered.forEach((item) => {
//       if (!item.city || item.latitude == null || item.longitude == null) return;

//       if (!grouped[item.city]) {
//         grouped[item.city] = {
//           name: item.city,
//           position: [Number(item.latitude), Number(item.longitude)],
//           properties: [],
//         };
//       }

//       grouped[item.city].properties.push(item);
//     });

//     const cityArray = Object.values(grouped);
//     setCities(cityArray);

//     // 🔧 FIXED: agar search box me exact city name hai to usi city ko focus/fly karo,
//     // agar koi city match nahi hui to "No Property Found" dikhao
//     const term = search.trim().toLowerCase();

//     if (term) {
//       const cityMatch = cityArray.find((c) => c.name.toLowerCase() === term);

//       if (cityMatch) {
//         setSelectedCity(cityMatch);
//         setNotFound(false);
//         setHasFocus(true);
//         setFocusVersion((v) => v + 1);
//         return;
//       }
//     }

//     if (cityArray.length) {
//       setSelectedCity(cityArray[0]);
//       setNotFound(false);
//       setHasFocus(false);
//     } else {
//       setSelectedCity(null);
//       setNotFound(true);
//       setHasFocus(false);
//     }
//   };

//   if (loading) {
//     return <div className="text-center py-20">Loading...</div>;
//   }

//   const marketData = {
//     activeListings: "1,284",
//     priceTrend: "4.2%",
//     zone: "High Demand Zone: Worli",
//   };

//   return (
//     <div className="w-full   flex  flex-col mt-5">
//       <div className="w-full bg-white border border-gray-300 p-2">
//         <div className="flex flex-col lg:flex-row gap-2">
//           <div className="relative lg:flex-1">
//             <input
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//               placeholder="Address, neighborhood, city, ZIP"
//               className="w-full h-10 border border-gray-300 rounded-md pl-4 pr-10 text-sm outline-none"
//             />

//             <Search
//               size={18}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
//             />
//           </div>

//           <select
//             value={listingType}
//             onChange={(e) => setListingType(e.target.value)}
//             className="h-10 px-3 border border-[#274255] rounded-md text-sm"
//           >
//             <option>For Sale</option>
//             <option>For Rent</option>
//             <option>Sold</option>
//           </select>

//           <select
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="h-10 px-3 border border-gray-300 rounded-md text-sm"
//           >
//             <option>Price</option>
//             <option>₹10L - ₹25L</option>
//             <option>₹25L - ₹50L</option>
//             <option>₹50L - ₹1Cr</option>
//             <option>₹1Cr+</option>
//           </select>

//           <select
//             value={bedsBaths}
//             onChange={(e) => setBedsBaths(e.target.value)}
//             className="h-10 px-3 border border-gray-300 rounded-md text-sm"
//           >
//             <option>Beds & Baths</option>
//             <option>1 BHK</option>
//             <option>2 BHK</option>
//             <option>3 BHK</option>
//             <option>4+ BHK</option>
//           </select>

//           <select
//             value={propertyType}
//             onChange={(e) => setPropertyType(e.target.value)}
//             className="h-10 px-3 border border-gray-300 rounded-md text-sm"
//           >
//             <option>Property Type</option>
//             <option>Apartment</option>
//             <option>House</option>
//             <option>Villa</option>
//             <option>Plot</option>
//           </select>

//           <select
//             value={filters}
//             onChange={(e) => setFilters(e.target.value)}
//             className="h-10 px-3 border border-gray-300 rounded-md text-sm"
//           >
//             <option>Filters</option>
//             <option>Parking</option>
//             <option>Furnished</option>
//             <option>Swimming Pool</option>
//             <option>Garden</option>
//           </select>

//           <button
//             onClick={handleSearch}
//             className="h-10 px-5 bg-[#274255] text-white rounded-md text-sm font-medium"
//           >
//             Save Search
//           </button>
//         </div>
//       </div>

//       <div className="w-full min-h-[600px] flex flex-col lg:flex-row gap-4 px-8 lg:px-6 py-10 bg-[#274255]">
//         {/* MAP */}
//         <div className="relative w-full lg:w-[60%] h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg z-0">
//           {/* <MapContainer
//             center={[23.5, 82]}
//             zoom={4}
//             minZoom={3}
//             maxZoom={18}
//             zoomControl={false}
//             scrollWheelZoom={true}
//             worldCopyJump={false}
//             style={{ width: "100%", height: "100%" }}
//           > */}
//           <MapContainer
//   center={[26.9124, 75.7873]} 
//   zoom={15}                   
//   minZoom={3}
//   maxZoom={18}
//   zoomControl={false}
//   scrollWheelZoom={true}
//   worldCopyJump={false}
//   style={{ width: "100%", height: "100%" }}
// >
//             <FixMapSize />
//             {/* 🔧 default sab cities dikhao jab tak koi specific city focus na ho */}
//             {!hasFocus && <FitAllCities cities={cities} />}
//             <FlyToCity city={selectedCity} focusVersion={focusVersion} hasFocus={hasFocus} />
//             <CustomZoomControl />

//             <TileLayer url={DARK_TILE_URL} attribution={DARK_TILE_ATTRIBUTION} noWrap={true} />

//             {cities.map((location) => (
//               <CircleMarker
//                 className="border-2 border-white"
//                 key={location.name}
//                 center={location.position}
//                 radius={selectedCity?.name === location.name ? 10 : 6}
//                 eventHandlers={{
//                   click: () => {
//                     setSelectedCity(location);
//                     setNotFound(false);
//                     setHasFocus(true);
//                     setFocusVersion((v) => v + 1);
//                   },
//                 }}
//                 pathOptions={{
//                   color: "#ffffff",
//                   weight: 2,
//                   fillColor: "#10b981",
//                   fillOpacity: 1,
//                 }}
//               >
//                 <Popup>
//                   <div>
//                     <h3 className="font-semibold">{location.name}</h3>
//                     <p>{location.properties.length} Properties</p>
//                   </div>
//                 </Popup>
//               </CircleMarker>
//             ))}
//           </MapContainer>

//           <div
//             className="absolute top-2 right-2 sm:top-4 sm:right-4 z-[1000] rounded-xl sm:rounded-2xl
//                  p-3 sm:p-4 w-[170px] xs:w-[185px] sm:w-[210px] lg:w-[230px]"
//             style={{
//               background: "rgba(255,255,255,0.10)",
//               backdropFilter: "blur(18px)",
//               WebkitBackdropFilter: "blur(18px)",
//               border: "1px solid rgba(255,255,255,0.18)",
//             }}
//           >
//             <p className="text-white text-sm sm:text-[17px] font-bold mb-2 sm:mb-3 tracking-tight">
//               Market Pulse
//             </p>

//             <div className="flex items-center justify-between mb-1">
//               <span className="text-[8px] sm:text-[10px] font-semibold tracking-[0.12em] text-white/50 uppercase">
//                 Active Listings
//               </span>

//               <span className="text-sm sm:text-[16px] font-bold text-white">
//                 {marketData.activeListings}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* PROPERTY LIST */}
//         <div className="w-full lg:w-[40%] h-full overflow-y-auto pr-0 lg:pr-6">
//           {notFound || !selectedCity || selectedCity?.properties?.length === 0 ? (
//             <div className="flex items-center justify-center h-96">
//               <h2 className="text-gray-500 text-lg font-semibold">No Property Found</h2>
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 gap-7">
//               {selectedCity?.properties?.map((p, i) => (
//                 <div
//                   key={i}
//                   className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
//                 >
//                   <img
//                     src={p.images?.length ? p.images[0].url : "/no-image.png"}
//                     alt={p.title}
//                     className="w-full h-40 object-cover"
//                   />

//                   <div className="flex items-center justify-between">
//                     <div className="p-3">
//                       <div className="text-sm font-semibold">{p.title}</div>
//                       <div className="text-xs text-gray-500">{p.address}</div>
//                       <div className="text-sm font-bold mt-1">
//                         ₹{p.price.toLocaleString()}
//                       </div>
//                     </div>
//                     <div className="px-3">
//                       <button className="bg-[#0F2E46] hover:bg-[#163B59] transition text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl">
//                         View Details
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }