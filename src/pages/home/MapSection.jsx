
import big from "../../assets/images/big.webp"
import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { MapPin, BedDouble, Bath } from "lucide-react";
import PopupImage from "../../components/common/PopupImage"

const DARK_TILE_URL = `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${import.meta.env.VITE_STADIA_API_KEY}`;
const DARK_TILE_ATTRIBUTION = '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>';

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
            width: "32px",
            height: "32px",
            borderRadius: "8px",
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.20)",
            color: "#fff",
            fontSize: "18px",
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

function FlyToCity({ selectedCity, hasSearch, notFound }) {
  const map = useMap();
  useEffect(() => {
    if (!hasSearch) return;
    if (selectedCity?.position) {
      map.flyTo(selectedCity.position, 11, { duration: 1.2 });
    } else if (notFound) {
      map.flyTo([23.5, 82], 4, { duration: 1.2 });
    }
  }, [selectedCity, hasSearch, notFound, map]);
  return null;
}

export default function IndiaMap({ searchCity }) {
  const [properties, setProperties] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searchParams] = useSearchParams();
  const searchedCity = searchParams.get("city");
    const [showPopUpImg, setShowPopUpImg] = useState(false)
    const [image, setImage] = useState(null)

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
    setCities(Object.values(grouped));
  }, [properties]);

  useEffect(() => {
    if (!cities.length) return;
    const term = (searchCity || searchedCity || "").trim();
    if (!term) {
      setSelectedCity(cities[0]);
      setNotFound(false);
      return;
    }
    const found = cities.find((c) => c.name.toLowerCase() === term.toLowerCase());
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

  const marketData = { activeListings: "1,284" };
  const hasSearchTerm = !!(searchCity || searchedCity)?.trim();
  
  return (
    <div className="w-full min-h-[600px] flex flex-col lg:flex-row gap-5 px-4 lg:px-6 py-8 bg-[#274255]">
      {/* MAP SECTION */}
      <div className="relative w-full lg:w-[58%] h-[350px] sm:h-[450px] lg:h-[620px] rounded-2xl overflow-hidden shadow-2xl border border-white/5">
        <MapContainer
          center={[26.9124, 75.7873]}
          zoom={8}
          minZoom={3}
          maxZoom={18}
          zoomControl={false}
          scrollWheelZoom={true}
          style={{ width: "100%", height: "100%" }}
        >
          <FixMapSize />
          <CustomZoomControl />
          <FlyToCity selectedCity={selectedCity} hasSearch={hasSearchTerm} notFound={notFound} />
          <TileLayer url={DARK_TILE_URL} attribution={DARK_TILE_ATTRIBUTION} noWrap={true} />

          {cities.map((location) => (
            <CircleMarker
              className="border-2 border-white"
              key={location.name}
              center={location.position}
              radius={selectedCity?.name === location.name ? 9 : 5}
              eventHandlers={{
                click: () => {
                  setSelectedCity(location);
                  setNotFound(false);
                },
              }}
              pathOptions={{
                color: "#ffffff",
                weight: 1.5,
                fillColor: "#10b981",
                fillOpacity: 1,
              }}
            >
              <Popup>
                <div className="text-xs">
                  <h3 className="font-bold">{location.name}</h3>
                  <p>{location.properties.length} Properties</p>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>

        <div
          className="absolute top-3 right-3 z-[1000] rounded-xl p-3 w-[170px]"
          style={{
            background: "rgba(255,255,255,0.10)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <p className="text-white text-xs font-bold mb-1 tracking-tight">Market Pulse</p>
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-semibold tracking-wider text-white/60 uppercase">Active Listings</span>
            <span className="text-sm font-bold text-white">{marketData.activeListings}</span>
          </div>
        </div>
      </div>

      {/* PROPERTY LIST SECTION */}
      <div className="w-full lg:w-[42%] sm:h-full py-3 sm:py-0 overflow-y-auto pr-1 custom-scrollbar">
        {notFound || !selectedCity || selectedCity.properties.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-white/40 text-center p-6">
            <h2 className="text-lg font-medium">No Property Found</h2>
            <p className="text-xs mt-0.5">Try searching for another region</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {selectedCity.properties.map((p, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex flex-col overflow-hidden border border-gray-100"
              >
                {/* Image Window */}
                <div className="relative h-36 overflow-hidden bg-gray-50 shrink-0">
                  <img
                    src={p.images?.length ? p.images[0].url : "/no-image.png"}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 flex gap-1 z-10">
                    <span className="px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-[#0f2e46] text-white rounded shadow-sm">
                      {p.transactionType || "Sale"}
                    </span>
                  </div>
                </div>

                {/* 🔧 FIXED & ALIGNED: Content Section */}
                <div className="p-4 flex flex-col flex-grow justify-between gap-3">
                  
                  {/* Row 1: Price and Title (VILLA) Aligned side-by-side */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-baseline">
                      <span className="text-xl font-black text-[#0f2e46] tracking-tight">
                        ₹{Number(p.price).toLocaleString('en-IN')}
                      </span>
                      {p.transactionType?.toLowerCase() === "rent" && (
                        <span className="text-[10px] font-semibold text-gray-400 ml-0.5">/mo</span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-emerald-700 tracking-wide uppercase truncate max-w-[100px]">
                      {p.title || "Villa"}
                    </h3>
                  </div>

                  {/* Row 2: Location and Specs Inline with Equal Distribution */}
                  <div className="flex items-center justify-between text-gray-500 text-[11px] font-medium border-t border-gray-50 pt-2">
                    {/* Location Info */}
                    <div className="flex items-center gap-1 truncate max-w-[50%]">
                      <MapPin size={12} className="text-emerald-500 shrink-0" />
                      <span className="truncate">{p.locality || p.city || "Dausa"}</span>
                    </div>

                    {/* Specs info */}
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="flex items-center gap-0.5">
                        <BedDouble size={12} className="text-gray-400" />
                        <span className="font-bold text-gray-700">{p.bedrooms || "2"} BHK</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <Bath size={12} className="text-gray-400" />
                        <span className="font-bold text-gray-700">{p.bathrooms || "2"} Bth</span>
                      </div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button onClick={() => { setShowPopUpImg(true)
                                        setImage(big)}
                     } className="w-full bg-[#0F2E46] hover:bg-emerald-600 transition-colors duration-200 text-white font-bold text-xs py-2.5 rounded-lg shadow-sm mt-1">
                    View Details
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

       {showPopUpImg && (
                     <PopupImage  image={image} setShowPopUpImg={setShowPopUpImg} />
                  )}
    </div>
  );
}