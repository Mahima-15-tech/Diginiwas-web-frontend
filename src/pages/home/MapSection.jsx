// import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
// import { useEffect } from "react";
// import { useMap } from "react-leaflet";
// import { useState } from "react";
// import axios from "axios";

// import { useSearchParams } from "react-router-dom";

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

// export default function IndiaMap() {
//   // const [selectedCity, setSelectedCity] = useState(locations[0]);
//   const [properties, setProperties] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [searchParams] = useSearchParams();
// const searchedCity = searchParams.get("city");

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

//   useEffect(() => {
//   const grouped = {};

//   properties.forEach((item) => {
//     if (!item.city || item.latitude == null || item.longitude == null) {
//       return;
//     }

//     if (!grouped[item.city]) {
//       grouped[item.city] = {
//         name: item.city,
//         position: [Number(item.latitude), Number(item.longitude)],
//         properties: [],
//       };
//     }

//     grouped[item.city].properties.push(item);
//   });

//   const cityArray = Object.values(grouped);
//   setCities(cityArray);

//   if (cityArray.length > 0) {
//     if (searchedCity) {
//       const foundCity = cityArray.find(
//         (c) => c.name.toLowerCase() === searchedCity.toLowerCase()
//       );

//       setSelectedCity(foundCity || null);
//     } else {
//       setSelectedCity(cityArray[0]);
//     }
//   }
// }, [properties, searchedCity]);

// // function FlyToCity({ selectedCity }) {
// //   const map = useMap();

// //   useEffect(() => {
// //     if (selectedCity?.position) {
// //       map.flyTo(selectedCity.position, 11, {
// //         duration: 1,
// //       });
// //     }
// //   }, [selectedCity, map]);

// //   return null;
// // }
// function FlyToCity({ selectedCity, hasSearch }) {
//   const map = useMap();

//   useEffect(() => {
//     if (selectedCity?.position) {
//       map.flyTo(selectedCity.position, hasSearch ? 11 : 4, {
//         duration: 1,
//       });
//     }
//   }, [selectedCity, hasSearch, map]);

//   return null;
// }
//   const fetchProperties = async () => {
//     try {
//       const res = await axios.get(
//         // "http://localhost:5000/api/properties"
//         `${import.meta.env.VITE_API_URL}/api/properties`,
//       );

//       setProperties(res.data.properties);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     const grouped = {};

   

//     properties.forEach((item) => {
//       // Invalid property skip
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

//     if (cityArray.length > 0) {
//       setSelectedCity(cityArray[0]);
//     }

//     // const cityArray = Object.values(grouped);

//     // setCities(cityArray);

//     // if (cityArray.length > 0) {

//     //   setSelectedCity(cityArray[0]);

//     // }
//   }, [properties]);
//   if (loading) {
//     return <div className="text-center py-20">Loading....</div>;
//   }


//    const marketData = {
//       activeListings: "1,284",
//       priceTrend: "4.2%",
//       zone: "High Demand Zone: Worli",
//     };
//   return (
//     <div className="w-full min-h-[600px] flex flex-col lg:flex-row gap-4 px-8 lg:px-6 py-10 bg-[#274255]">
//       {/* MAP */}
//       {/* <div className="relative w-full lg:w-[60%] h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden border shadow-lg z-0"> */}
//       <div className="relative w-full lg:w-[60%] h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg z-0">
//         {/* <MapContainer
//           center={[22.5937, 78.9629]}
//           zoom={11}
//           minZoom={2}
//           maxZoom={18}
//           worldCopyJump={false}
//           noWrap={true}
//           zoomControl={false}
//           scrollWheelZoom={false}
//           style={{ width: "100%", height: "100%" }}
//           className=""
//         > */}
//         <MapContainer
//     center={[23.5, 82]}
//     zoom={4}
//     minZoom={3}
//     maxZoom={18}
//     zoomControl={false}
//     scrollWheelZoom={true}
//     style={{ width: "100%", height: "100%" }}
    
// >
//           <FixMapSize />
//           <CustomZoomControl />
//   {/* <FlyToCity selectedCity={selectedCity} /> */}
//   <FlyToCity selectedCity={selectedCity} hasSearch={!!searchedCity?.trim()} />

//           <TileLayer
//             url={DARK_TILE_URL}
//             attribution={DARK_TILE_ATTRIBUTION}
//             noWrap={true}
//           />

//           {/* {locations.map((location) => (
//             <CircleMarker
//               key={location.name}
//               center={location.position}
//               radius={selectedCity.name === location.name ? 10 : 6}
//               eventHandlers={{
//                 click: () => setSelectedCity(location),
//               }}
//               pathOptions={{
//                 color: location.color,
//                 fillColor: location.color,
//                 fillOpacity: 1,
//               }}
//             >
//               <Popup>{location.name}</Popup>
//             </CircleMarker>
//           ))} */}

//           {cities.map((location) => (
//             <CircleMarker
//               className="border-2 border-white"
//               key={location.name}
//               center={location.position}
//               radius={selectedCity?.name === location.name ? 10 : 6}
//               eventHandlers={{
//                 click: () => setSelectedCity(location),
//               }}
//               pathOptions={{
//                 color: "#ffffff",
//                 weight: 2,
//                 fillColor: "#10b981",
//                 fillOpacity: 1,
//               }}
//             >
//               <Popup>
//                 <div>
//                   <h3 className="font-semibold">{location.name}</h3>
//                   <p>{location.properties.length} Properties</p>
//                 </div>
//               </Popup>
//             </CircleMarker>
//           ))}
//         </MapContainer>

//         <div
//           className="absolute top-2 right-2 sm:top-4 sm:right-4 z-[1000] rounded-xl sm:rounded-2xl
//              p-3 sm:p-4 w-[170px] xs:w-[185px] sm:w-[210px] lg:w-[230px]"
//           style={{
//             background: "rgba(255,255,255,0.10)",
//             backdropFilter: "blur(18px)",
//             WebkitBackdropFilter: "blur(18px)",
//             border: "1px solid rgba(255,255,255,0.18)",
//           }}
//         >
//           {/* Title */}
//           <p className="text-white text-sm sm:text-[17px] font-bold mb-2 sm:mb-3 tracking-tight">
//             Market Pulse
//           </p>

//           {/* Active Listings */}
//           <div className="flex items-center justify-between mb-1">
//             <span className="text-[8px] sm:text-[10px] font-semibold tracking-[0.12em] text-white/50 uppercase">
//               Active Listings
//             </span>

//             <span className="text-sm sm:text-[16px] font-bold text-white">
//               {marketData.activeListings}
//             </span>
//           </div>

//         </div>
//       </div>

//       {/* PROPERTY LIST */}
//       {/* <div className="w-full lg:w-[40%] h-full overflow-y-auto pr-0 lg:pr-6">
//         <div className="grid grid-cols-2 gap-7">
//             {selectedCity?.properties?.map((p, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
//             >
//               <img
//                 // src={p.img}
//                 src={
// p.images?.length
// ? p.images[0].url
// : "/no-image.png"
// }
//                 alt={p.title}
//                 className="w-full h-40 object-cover"
//               />

//               <div className="p-3">
//                 <div className="text-sm font-semibold">{p.title}</div>
//                 <div className="text-xs text-gray-500">{p.address}</div>
//                 <div className="text-sm font-bold mt-1">
//                   ₹{p.price.toLocaleString()}
//                   <span className="text-xs font-normal"> / month</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div> */}
//       {/* PROPERTY LIST */}
//       <div className="w-full lg:w-[40%] h-full overflow-y-auto pr-0 lg:pr-6">
//         {selectedCity?.properties?.length === 0 ? (
//           <div className="flex items-center justify-center h-96">
//             <h2 className="text-gray-500 text-lg font-semibold">
//               No Property Found
//             </h2>
//           </div>
//         ) : (
//           <div className="grid grid-cols-2 gap-7">
//             {selectedCity?.properties?.map((p, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
//               >
//                 <img
//                   src={p.images?.length ? p.images[0].url : "/no-image.png"}
//                   alt={p.title}
//                   className="w-full h-40 object-cover"
//                 />
//               <div className="flex items-center justify-between"> 
//                 <div className="p-3">
//                   <div className="text-sm font-semibold">{p.title}</div>

//                   <div className="text-xs text-gray-500">{p.address}</div>

//                   <div className="text-sm font-bold mt-1">
//                     ₹{p.price.toLocaleString()}
//                   </div>
//                 </div>

//                  <div className="px-3">
//                           <button
//                           className="bg-[#0F2E46] hover:bg-[#163B59] transition text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl"
//                         >
//                           View Details
//                         </button>
//                       </div>
//                   </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }





import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const DARK_TILE_URL =
`https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${import.meta.env.VITE_STADIA_API_KEY}`;
const DARK_TILE_ATTRIBUTION =
  '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>';

function CustomZoomControl() {
  const map = useMap();
  return (
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        right: "16px",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
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

function FixMapSize() {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);

  return null;
}

// 🔧 FIXED: notFound hone par map default India view pe reset hoga
function FlyToCity({ selectedCity, hasSearch, notFound }) {
  const map = useMap();

  useEffect(() => {
    if (selectedCity?.position) {
      map.flyTo(selectedCity.position, hasSearch ? 11 : 4, { duration: 1 });
    } else if (notFound) {
      map.flyTo([23.5, 82], 4, { duration: 1 });
    }
  }, [selectedCity, hasSearch, notFound, map]);

  return null;
}

// 🔽 NEW: ab `searchCity` prop accept karta hai (HeroSection se search yahi bheja jayega)
export default function IndiaMap({ searchCity }) {
  const [properties, setProperties] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searchParams] = useSearchParams();
  const searchedCity = searchParams.get("city");

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/properties`
      );

      setProperties(res.data.properties);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // City-wise grouping
  useEffect(() => {
    const grouped = {};

    properties.forEach((item) => {
      if (!item.city || item.latitude == null || item.longitude == null) {
        return;
      }

      if (!grouped[item.city]) {
        grouped[item.city] = {
          name: item.city,
          position: [Number(item.latitude), Number(item.longitude)],
          properties: [],
        };
      }

      grouped[item.city].properties.push(item);
    });

    setCities(Object.values(grouped));
  }, [properties]);

  // 🔧 FIXED: searchCity (prop) ya URL ke city ko match karke selectedCity set karo,
  // agar match nahi mila to "No Property Found" dikhao
  useEffect(() => {
    if (!cities.length) return;

    const term = (searchCity || searchedCity || "").trim();

    if (!term) {
      setSelectedCity(cities[0]);
      setNotFound(false);
      return;
    }

    const found = cities.find(
      (c) => c.name.toLowerCase() === term.toLowerCase()
    );

    if (found) {
      setSelectedCity(found);
      setNotFound(false);
    } else {
      setSelectedCity(null);
      setNotFound(true);
    }
  }, [searchCity, searchedCity, cities]);

  if (loading) {
    return <div className="text-center py-20">Loading....</div>;
  }

  const marketData = {
    activeListings: "1,284",
    priceTrend: "4.2%",
    zone: "High Demand Zone: Worli",
  };

  const hasSearchTerm = !!(searchCity || searchedCity)?.trim();

  return (
    <div className="w-full min-h-[600px] flex flex-col lg:flex-row gap-4 px-8 lg:px-6 py-10 bg-[#274255]">
      {/* MAP */}
      <div className="relative w-full lg:w-[60%] h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg z-0">
        <MapContainer
          center={[23.5, 82]}
          zoom={4}
          minZoom={3}
          maxZoom={18}
          zoomControl={false}
          scrollWheelZoom={true}
          style={{ width: "100%", height: "100%" }}
        >
          <FixMapSize />
          <CustomZoomControl />
          <FlyToCity selectedCity={selectedCity} hasSearch={hasSearchTerm} notFound={notFound} />

          <TileLayer
            url={DARK_TILE_URL}
            attribution={DARK_TILE_ATTRIBUTION}
            noWrap={true}
          />

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
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-[1000] rounded-xl sm:rounded-2xl
             p-3 sm:p-4 w-[170px] xs:w-[185px] sm:w-[210px] lg:w-[230px]"
          style={{
            background: "rgba(255,255,255,0.10)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          <p className="text-white text-sm sm:text-[17px] font-bold mb-2 sm:mb-3 tracking-tight">
            Market Pulse
          </p>

          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] sm:text-[10px] font-semibold tracking-[0.12em] text-white/50 uppercase">
              Active Listings
            </span>

            <span className="text-sm sm:text-[16px] font-bold text-white">
              {marketData.activeListings}
            </span>
          </div>
        </div>
      </div>

      {/* PROPERTY LIST */}
      <div className="w-full lg:w-[40%] h-full overflow-y-auto pr-0 lg:pr-6">
        {notFound || !selectedCity || selectedCity.properties.length === 0 ? (
          <div className="flex items-center justify-center h-96">
            <h2 className="text-gray-500 text-lg font-semibold">
              No Property Found
            </h2>
          </div>
        ) : (
          // 🔧 FIXED: mobile pe 1 column, sm+ pe 2 columns
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {selectedCity.properties.map((p, i) => (
              // 🔧 FIXED: card ab "Delhi Villa" image jaisa — stacked layout,
              // bold title, mint locality, bold price + /month, full-width button
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <img
                  src={p.images?.length ? p.images[0].url : "/no-image.png"}
                  alt={p.title}
                  className="w-full h-40 object-cover"
                />

                <div className="p-4 flex flex-col gap-1 flex-grow">
                  <h3 className="text-base font-bold text-[#0d1b2a] leading-snug truncate">
                    {p.title}
                  </h3>

                  <p className="text-sm text-[#33cc99] font-medium truncate">
                    {p.locality || p.address}
                  </p>

                  <div className="mt-1 mb-3">
                    <span className="text-lg font-extrabold text-[#0d1b2a]">
                      ₹{Number(p.price).toLocaleString()}
                    </span>
                    {p.transactionType?.toLowerCase() === "rent" && (
                      <span className="text-xs font-normal text-gray-500"> / month</span>
                    )}
                  </div>

                  <button className="mt-auto w-full bg-[#0F2E46] hover:bg-[#163B59] transition text-white font-semibold text-sm px-4 py-2.5 rounded-xl">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}