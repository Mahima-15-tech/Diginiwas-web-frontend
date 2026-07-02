import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useState } from "react";
import axios from "axios";



const DARK_TILE_URL =
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png";
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

export default function IndiaMap() {
  // const [selectedCity, setSelectedCity] = useState(locations[0]);
  const [properties, setProperties] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(true);

  function FixMapSize() {
    const map = useMap();

    useEffect(() => {
      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    }, [map]);

    return null;
  }
  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await axios.get(
        // "http://localhost:5000/api/properties"
        `${import.meta.env.VITE_API_URL}/api/properties`,
      );

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
      // Invalid property skip
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

    const cityArray = Object.values(grouped);

    setCities(cityArray);

    if (cityArray.length > 0) {
      setSelectedCity(cityArray[0]);
    }

    // const cityArray = Object.values(grouped);

    // setCities(cityArray);

    // if (cityArray.length > 0) {

    //   setSelectedCity(cityArray[0]);

    // }
  }, [properties]);
  if (loading) {
    return <div className="text-center py-20">Loading....</div>;
  }


   const marketData = {
      activeListings: "1,284",
      priceTrend: "4.2%",
      zone: "High Demand Zone: Worli",
    };
  return (
    <div className="w-full min-h-[600px] flex flex-col lg:flex-row gap-4 px-8 lg:px-6 py-10 bg-[#274255]">
      {/* MAP */}
      {/* <div className="relative w-full lg:w-[60%] h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden border shadow-lg z-0"> */}
      <div className="relative w-full lg:w-[60%] h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg z-0">
        {/* <MapContainer
          center={[22.5937, 78.9629]}
          zoom={11}
          minZoom={2}
          maxZoom={18}
          worldCopyJump={false}
          noWrap={true}
          zoomControl={false}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%" }}
          className=""
        > */}
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

          <TileLayer
            url={DARK_TILE_URL}
            attribution={DARK_TILE_ATTRIBUTION}
            noWrap={true}
          />

          {/* {locations.map((location) => (
            <CircleMarker
              key={location.name}
              center={location.position}
              radius={selectedCity.name === location.name ? 10 : 6}
              eventHandlers={{
                click: () => setSelectedCity(location),
              }}
              pathOptions={{
                color: location.color,
                fillColor: location.color,
                fillOpacity: 1,
              }}
            >
              <Popup>{location.name}</Popup>
            </CircleMarker>
          ))} */}

          {cities.map((location) => (
            <CircleMarker
              className="border-2 border-white"
              key={location.name}
              center={location.position}
              radius={selectedCity?.name === location.name ? 10 : 6}
              eventHandlers={{
                click: () => setSelectedCity(location),
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
          {/* Title */}
          <p className="text-white text-sm sm:text-[17px] font-bold mb-2 sm:mb-3 tracking-tight">
            Market Pulse
          </p>

          {/* Active Listings */}
          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] sm:text-[10px] font-semibold tracking-[0.12em] text-white/50 uppercase">
              Active Listings
            </span>

            <span className="text-sm sm:text-[16px] font-bold text-white">
              {marketData.activeListings}
            </span>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 my-2" />

          {/* Price Trend */}
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <span className="text-[8px] sm:text-[10px] font-semibold tracking-[0.12em] text-white/50 uppercase">
              Price Trend
            </span>

            <span className="flex items-center gap-1 text-sm sm:text-[16px] font-bold text-emerald-400">
              <svg
                className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path d="M6 1L11 7H1L6 1Z" fill="#34d399" />
              </svg>

              {marketData.priceTrend}
            </span>
          </div>

          <div
            className="flex items-center gap-2 rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-2"
            style={{ background: "rgba(255,255,255,0.07)" }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 shadow-[0_0_6px_#34d399]" />

            <span className="text-[9px] sm:text-[11px] text-white/80 font-medium leading-tight">
              {marketData.zone}
            </span>
          </div>
        </div>
      </div>

      {/* PROPERTY LIST */}
      {/* <div className="w-full lg:w-[40%] h-full overflow-y-auto pr-0 lg:pr-6">
        <div className="grid grid-cols-2 gap-7">
            {selectedCity?.properties?.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
            >
              <img
                // src={p.img}
                src={
p.images?.length
? p.images[0].url
: "/no-image.png"
}
                alt={p.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-3">
                <div className="text-sm font-semibold">{p.title}</div>
                <div className="text-xs text-gray-500">{p.address}</div>
                <div className="text-sm font-bold mt-1">
                  ₹{p.price.toLocaleString()}
                  <span className="text-xs font-normal"> / month</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      {/* PROPERTY LIST */}
      <div className="w-full lg:w-[40%] h-full overflow-y-auto pr-0 lg:pr-6">
        {selectedCity?.properties?.length === 0 ? (
          <div className="flex items-center justify-center h-96">
            <h2 className="text-gray-500 text-lg font-semibold">
              No Property Found
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-7">
            {selectedCity?.properties?.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={p.images?.length ? p.images[0].url : "/no-image.png"}
                  alt={p.title}
                  className="w-full h-40 object-cover"
                />

                <div className="p-3">
                  <div className="text-sm font-semibold">{p.title}</div>

                  <div className="text-xs text-gray-500">{p.address}</div>

                  <div className="text-sm font-bold mt-1">
                    ₹{p.price.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}