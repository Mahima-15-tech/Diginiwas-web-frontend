

import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import {
  User,
  Send,
  Mic,
  Search,
  Sparkles,
  MessageSquare,
  PlusCircle,
  Clock,
  MapPin,
  X,
  Navigation,
} from "lucide-react";
import logo from "../assets/images/homelogo.png";
import ai from "../assets/images/ai.webp"
// import propertyVideo from "../assets/video/diginiwas.mp4";
const propertyVideo  = import.meta.env.VITE_NIWAS_AI
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
  begaluru: { lat: 12.9716, lng: 77.5946 },
  hyderabad: { lat: 17.385, lng: 78.4867 },
  ahmedabad: { lat: 23.0225, lng: 72.5714 },
  lucknow: { lat: 26.8467, lng: 80.9462 },
  kolkata: { lat: 22.5726, lng: 88.3639 },
  chennai: { lat: 13.0827, lng: 80.2707 },
  indore: { lat: 22.7196, lng: 75.8577 },
};

function formatPrice(price) {
  if (price === undefined || price === null || Number.isNaN(Number(price))) {
    return "Price on request";
  }
  return `₹${Number(price).toLocaleString("en-IN")}`;
}

function getPropertyCoords(property) {
  if (!property) return null;
  const lat = Number(property.latitude ?? property.lat);
  const lng = Number(property.longitude ?? property.lng);
  if (!Number.isNaN(lat) && !Number.isNaN(lng) && (lat !== 0 || lng !== 0)) {
    return { lat, lng };
  }
  const cityKey = property.city?.toLowerCase()?.trim();
  if (cityKey && CITY_COORDS[cityKey]) {
    return CITY_COORDS[cityKey];
  }
  return null;
}

/* ============================================================
   SMALL SUBCOMPONENTS
   ============================================================ */

function SuggestionChips({ suggestions, onPick, disabled }) {
  const list = suggestions || [
    "Who are you?",
    "3 BHK in Jaipur",
    "Villa under 1 crore",
    "Rent in Mohali",
  ];
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {list.map((s) => (
        <button
          key={s}
          disabled={disabled}
          onClick={() => onPick(s)}
          className={`group flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm shadow-sm transition-all duration-200 ${
            disabled
              ? "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
              : "border-gray-200 bg-white text-gray-700 hover:border-[#1CB46D] hover:bg-[#1CB46D]/5 hover:text-[#0F2E46] hover:shadow-md active:scale-95"
          }`}
        >
          <Sparkles
            size={13}
            className={`text-[#1CB46D] ${
              disabled ? "opacity-30" : "opacity-70 group-hover:opacity-100"
            }`}
          />
          {s}
        </button>
      ))}
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 animate-[fadeInUp_0.25s_ease-out]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white border border-gray-100">
        <img
          src={ai}
          alt="Niwas AI"
          className="h-full w-full object-cover mix-blend-multiply"
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

function PropertyCard({ property, isSelected, onSelect }) {
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
          src={property.images?.[0]?.url || "https://via.placeholder.com/400x300"}
          alt={property.projectName || property.title || "Property"}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-2 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#0F2E46] shadow">
          {formatPrice(property.price)}
        </div>
      </div>
      <div className="p-3">
        <h4 className="font-bold text-sm text-[#0F2E46] leading-snug line-clamp-1">
          {property.projectName || property.title}
        </h4>
        <p className="text-xs text-gray-500 mt-0.5">{property.city}</p>
      </div>
    </button>
  );
}

function ChatMessage({ message, selectedProperty, onSelectProperty }) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex items-end gap-2 animate-[fadeInUp_0.3s_ease-out] ${
        isUser ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-100">
        {isUser ? (
          <User size={18} className="text-gray-600" />
        ) : (
          <img
            src={ai}
            alt="Niwas AI"
            className="h-full w-full object-cover mix-blend-multiply"
          />
        )}
      </div>

      <div
        className={`flex flex-col gap-3 ${
          isUser ? "items-end" : "items-start"
        } max-w-[85%]`}
      >
        <div
          className={`inline-block px-4 py-3 shadow-sm ${
            isUser
              ? "rounded-2xl rounded-br-sm bg-[#0F2E46] text-white"
              : "rounded-2xl rounded-bl-sm bg-gray-100 text-gray-800"
          }`}
        >
          <div className="whitespace-pre-line text-sm leading-relaxed">
            {message.text}
          </div>
        </div>

        {message.properties?.length > 0 && (
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
            {message.properties.map((p) => (
              <PropertyCard
                key={p._id}
                property={p}
                isSelected={selectedProperty?._id === p._id}
                onSelect={onSelectProperty}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function PropertyLocationPanel({ property, onClose }) {
  if (!property) return null;

  const coords = getPropertyCoords(property);
  const title = property.projectName || property.title || "Selected Property";
  const address =
    property.address ||
    [property.locality, property.city, property.state].filter(Boolean).join(", ") ||
    property.city;

  const mapEmbedSrc = coords
    ? `https://www.google.com/maps?q=${coords.lat},${coords.lng}&hl=en&z=14&output=embed`
    : `https://www.google.com/maps?q=${encodeURIComponent(address || "India")}&hl=en&z=12&output=embed`;

  const mapDirectionsUrl = coords
    ? `https://www.google.com/maps/dir/?api=1&destination=${coords.lat},${coords.lng}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address || "India")}`;

  return (
    <div className="flex w-full flex-col gap-3 border-b border-gray-100 bg-white p-4 animate-[fadeInUp_0.25s_ease-out]">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1CB46D]/10 text-[#1CB46D]">
            <MapPin size={16} />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-[#0F2E46]">{title}</p>
            <p className="truncate text-xs text-gray-500">{address}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close location"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
        >
          <X size={15} />
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200">
        <iframe
          title={`map-${property._id}`}
          src={mapEmbedSrc}
          width="100%"
          height="180"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <a
        href={mapDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-xl bg-[#0F2E46] py-2.5 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] active:scale-95"
      >
        <Navigation size={14} /> Get Directions
      </a>
    </div>
  );
}

function HistoryPanel({ chatHistory, activeChatId, onSelectChat, onNewChat }) {
  return (
    <div className="flex h-full w-full flex-col gap-4 overflow-y-auto p-4">
      <button
        onClick={onNewChat}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1CB46D] py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#159659] active:scale-95"
      >
        <PlusCircle size={18} /> New Chat
      </button>

      <div className="flex-1">
        <h3 className="mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-400">
          <Clock size={14} /> Recent Conversations
        </h3>
        <div className="flex flex-col gap-2">
          {chatHistory.length === 0 ? (
            <p className="py-6 text-center text-xs text-gray-400">
              No previous chats available.
            </p>
          ) : (
            chatHistory.map((chat) => (
              <button
                key={chat.id}
                onClick={() => onSelectChat(chat.id)}
                className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all duration-200 hover:bg-gray-50 ${
                  activeChatId === chat.id
                    ? "border-[#1CB46D] bg-[#1CB46D]/5"
                    : "border-gray-100"
                }`}
              >
                <MessageSquare
                  size={16}
                  className={
                    activeChatId === chat.id
                      ? "text-[#1CB46D]"
                      : "text-gray-400"
                  }
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-[#0F2E46]">
                    {chat.title || "Empty Conversation"}
                  </p>
                  <p className="text-[11px] text-gray-400">
                    {chat.messages.length} messages
                  </p>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT — CHAT LOCKED AFTER 3 MESSAGES
   ============================================================ */
export default function NiwasAi() {
  const [allProperties, setAllProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  // Video State & Chat Limit State
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isChatLocked, setIsChatLocked] = useState(false);

  // Chat Session Management State
  const [chatHistory, setChatHistory] = useState([
    {
      id: "session-1",
      title: "Jaipur Properties Query",
      messages: [
        {
          role: "assistant",
          text: "👋 Hi! I'm Niwas AI.\nAsk naturally like:\n• Who are you?\n• 3 BHK in Jaipur\n• Villa under 1 crore\n• Rent in Mohali",
        },
      ],
    },
  ]);
  const [activeChatId, setActiveChatId] = useState("session-1");

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [listening, setListening] = useState(false);
  const scrollRef = useRef(null);
  const recognitionRef = useRef(null);

  const activeChat = useMemo(() => {
    return chatHistory.find((c) => c.id === activeChatId) || chatHistory[0];
  }, [chatHistory, activeChatId]);

  const messages = activeChat.messages;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/properties`
        );
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
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  // Track chat messages limit dynamically
  useEffect(() => {
    const userMsgCount = messages.filter((m) => m.role === "user").length;
    if (userMsgCount >= 3) {
      setIsChatLocked(true);
    } else {
      setIsChatLocked(false);
    }
  }, [messages]);

  const handleVoice = () => {
    if (isChatLocked) return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
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
    if (!rawQuery.trim() || isChatLocked) return;
    const query = rawQuery.toLowerCase();

    const userMsg = { role: "user", text: rawQuery };

    // Check count before pushing 3rd message
    const currentUserMessagesCount = messages.filter(
      (m) => m.role === "user"
    ).length;
    if (currentUserMessagesCount === 2) {
      setTimeout(() => {
        setShowVideoModal(true);
      }, 800);
    }

    setChatHistory((prev) =>
      prev.map((chat) => {
        if (chat.id === activeChatId) {
          const updatedTitle =
            chat.messages.length === 1 ? rawQuery : chat.title;
          return {
            ...chat,
            title: updatedTitle,
            messages: [...chat.messages, userMsg],
          };
        }
        return chat;
      })
    );

    setTyping(true);

    // -------------------------------------------------------------
    // AI INTENT & SEARCH LOGIC
    // -------------------------------------------------------------
    // setTimeout(() => {
    //   setTyping(false);

    //   let assistantText = "";
    //   let matchedProperties = [];

    //   // 1. Identity Logic ("Who are you")
    //   if (
    //     query.includes("who are you") ||
    //     query.includes("who r u") ||
    //     query.includes("kaun ho") ||
    //     query.includes("kon ho") ||
    //     query.includes("what is niwas ai")
    //   ) {
    //     assistantText =
    //       "I'm **Niwas AI**, your smart real estate assistant! 🏡\n\nI'm here to help you find, compare, and get the best luxury properties within your budget effortlessly.";
    //   }
    //   // 2. Greetings Logic
    //   else if (
    //     query === "hi" ||
    //     query === "hello" ||
    //     query === "hey" ||
    //     query === "namaste"
    //   ) {
    //     assistantText =
    //       "Hello! 👋 How can I help you find the best luxury properties within your budget today?";
    //   }
    //   // 3. General Property Search Query
    //   else {
    //     let data = [...allProperties];

    //     cities.forEach((city) => {
    //       if (city !== "All" && query.includes(city.toLowerCase())) {
    //         data = data.filter(
    //           (x) => x.city?.toLowerCase() === city.toLowerCase()
    //         );
    //       }
    //     });

    //     const bhk = query.match(/([1-5])\s*bhk/i);
    //     if (bhk) {
    //       data = data.filter((x) => Number(x.bedrooms) === Number(bhk[1]));
    //     }

    //     if (query.includes("rent")) {
    //       data = data.filter(
    //         (x) => x.transactionType?.toLowerCase() === "rent"
    //       );
    //     }

    //     if (query.includes("buy")) {
    //       data = data.filter(
    //         (x) => x.transactionType?.toLowerCase() === "buy"
    //       );
    //     }

    //     assistantText = `Found ${data.length} matching properties for your search:`;
    //     matchedProperties = data.slice(0, 6);
    //   }

    //   const assistantMsg = {
    //     role: "assistant",
    //     text: assistantText,
    //     properties: matchedProperties,
    //   };

    //   setChatHistory((prev) =>
    //     prev.map((chat) => {
    //       if (chat.id === activeChatId) {
    //         return { ...chat, messages: [...chat.messages, assistantMsg] };
    //       }
    //       return chat;
    //     })
    //   );
    // }, 1000);
// -------------------------------------------------------------
    // AI INTENT & SEARCH LOGIC (UPDATED MATCHING)
    // -------------------------------------------------------------
    setTimeout(() => {
      setTyping(false);

      let assistantText = "";
      let matchedProperties = [];

      // Clean query (extra characters, numbers, symbols removed for better intent detection)
      const cleanQuery = query.trim().toLowerCase();

      // 1. Identity Logic ("Who are you")
      if (
        cleanQuery.includes("who are you") ||
        cleanQuery.includes("who r u") ||
        cleanQuery.includes("kaun ho") ||
        cleanQuery.includes("kon ho") ||
        cleanQuery.includes("what is niwas ai") ||
        cleanQuery.includes("niwas ai")
      ) {
        assistantText =
          "I'm Niwas AI, your smart real estate assistant! 🏡\n\nI'm here to help you find, compare, and get the best luxury properties within your budget effortlessly.";
      }
      // 2. Greetings Logic (Handles: hi, hii, hiii, hello, hey, namaste, etc.)
      else if (
        cleanQuery.startsWith("hi") ||
        cleanQuery.includes("hello") ||
        cleanQuery.includes("hey") ||
        cleanQuery.includes("namaste")
      ) {
        assistantText =
          "Hello! 👋 How can I help you find the best luxury properties within your budget today?";
      }
      // 3. General Property Search Query
      else {
        let data = [...allProperties];

        cities.forEach((city) => {
          if (city !== "All" && cleanQuery.includes(city.toLowerCase())) {
            data = data.filter(
              (x) => x.city?.toLowerCase() === city.toLowerCase()
            );
          }
        });

        const bhk = cleanQuery.match(/([1-5])\s*bhk/i);
        if (bhk) {
          data = data.filter((x) => Number(x.bedrooms) === Number(bhk[1]));
        }

        if (cleanQuery.includes("rent")) {
          data = data.filter(
            (x) => x.transactionType?.toLowerCase() === "rent"
          );
        }

        if (cleanQuery.includes("buy")) {
          data = data.filter(
            (x) => x.transactionType?.toLowerCase() === "buy"
          );
        }

        assistantText = `Found ${data.length} matching properties for your search:`;
        matchedProperties = data.slice(0, 6);
      }

      const assistantMsg = {
        role: "assistant",
        text: assistantText,
        properties: matchedProperties,
      };

      setChatHistory((prev) =>
        prev.map((chat) => {
          if (chat.id === activeChatId) {
            return { ...chat, messages: [...chat.messages, assistantMsg] };
          }
          return chat;
        })
      );
    }, 1000);
    setInput("");
  };

  const handleNewChat = () => {
    const newId = `session-${Date.now()}`;
    const newChatSession = {
      id: newId,
      title: "New Conversation",
      messages: [
        {
          role: "assistant",
          text: "👋 Hi! I'm Niwas AI.\nTell me what type of home or villa you are looking for today!",
        },
      ],
    };
    setChatHistory((prev) => [newChatSession, ...prev]);
    setActiveChatId(newId);
    setSelectedProperty(null);
  };

  const handleSelectProperty = (property) => {
    setSelectedProperty((prev) => (prev?._id === property._id ? null : property));
  };

  const handleSend = () => runSearch(input);
  const handleSuggestion = (text) => runSearch(text);

  const isFirstTurn = messages.length === 1;
  const showChips =
    !typing && messages[messages.length - 1]?.role === "assistant";

  return (
    <div className="flex h-dvh w-full flex-col overflow-hidden bg-gray-50 lg:h-screen lg:flex-row">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ---------------- Main Chat Column ---------------- */}
      <div className="relative flex h-[calc(100vh-80px)] w-full min-h-0 flex-col overflow-hidden lg:h-[calc(100vh-80px)] lg:flex-1">
        {/* Header */}
        <div className="flex shrink-0 items-center gap-3 border-b bg-white p-4 sm:p-5">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-gray-100">
            <img
              src={ai}
              alt="Niwas AI Avatar"
              className="h-full w-full object-cover mix-blend-multiply"
            />
          </div>
          <div>
            <div className="font-bold text-[#0F2E46]">Niwas AI</div>
            <div className="text-xs text-gray-500">AI Property Consultant</div>
          </div>
        </div>

        {/* Watermark Logo */}
        <div className="pointer-events-none absolute inset-0 top-16 flex items-center justify-center overflow-hidden">
          <img
            src={ai}
            alt="Watermark"
            className="h-[280px] w-[280px] object-cover opacity-[0.03] mix-blend-multiply"
          />
        </div>

        {/* Messages Scroll Area */}
        <div
          ref={scrollRef}
          className="relative flex-1 min-h-0 space-y-5 overflow-y-auto p-4 sm:p-6 pb-6"
        >
          {isFirstTurn && (
            <div className="mx-auto max-w-lg pt-6 text-center sm:pt-10">
              <div className="mx-auto p-2 mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-lg">
                <img
                  src={ai}
                  alt="Niwas AI Large Logo"
                  className="h-full w-full object-cover mix-blend-multiply"
                />
              </div>
              <h2 className="text-lg font-bold text-[#0F2E46] sm:text-xl">
                Find your next home, just by asking
              </h2>
              <p className="mx-auto mt-1 max-w-sm text-sm text-gray-500">
                Tell me what you're looking for — city, budget, BHK, or rent vs. buy.
              </p>
            </div>
          )}

          {messages.map((msg, i) => (
            <ChatMessage
              key={i}
              message={msg}
              selectedProperty={selectedProperty}
              onSelectProperty={handleSelectProperty}
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
              <SuggestionChips
                onPick={handleSuggestion}
                disabled={isChatLocked}
              />
            </div>
          )}
        </div>

        {/* Fixed Bottom Input (Disables automatically when locked) */}
        <div className="shrink-0 border-t bg-white p-3 sm:p-4">
          <div
            className={`flex items-center gap-2 rounded-full border pl-4 pr-1.5 py-1.5 shadow-sm transition-all ${
              isChatLocked
                ? "border-red-200 bg-red-50/30"
                : "border-gray-300 bg-white focus-within:border-[#1CB46D] focus-within:ring-2 focus-within:ring-[#1CB46D]/20"
            }`}
          >
            <Search size={16} className="shrink-0 text-gray-400" />
            <input
              className="h-9 flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400 disabled:text-gray-400 disabled:cursor-not-allowed"
              value={input}
              disabled={isChatLocked}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={
                isChatLocked
                  ? "Chat limit reached! Free trials ended."
                  : "Ask anything about properties..."
              }
            />
            <button
              onClick={handleVoice}
              disabled={isChatLocked}
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                listening
                  ? "bg-red-50 text-red-500 animate-pulse"
                  : isChatLocked
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-400 hover:bg-gray-100 hover:text-[#0F2E46]"
              }`}
              aria-label="Voice search"
              type="button"
            >
              <Mic size={16} />
            </button>
            <button
              onClick={handleSend}
              disabled={isChatLocked}
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-transform ${
                isChatLocked
                  ? "bg-gray-300 cursor-not-allowed scale-100"
                  : "bg-[#0F2E46] hover:scale-105 active:scale-95"
              }`}
              aria-label="Send message"
              type="button"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- Right Panel: Location (top) + Chat Sessions Sidebar ---------------- */}
      <aside className="flex h-[42%] w-full min-h-0 flex-col overflow-y-auto border-t border-gray-100 bg-white lg:h-full lg:w-[320px] lg:border-l lg:border-t-0 xl:w-[360px]">
        {selectedProperty && (
          <PropertyLocationPanel
            property={selectedProperty}
            onClose={() => setSelectedProperty(null)}
          />
        )}
        <div className="min-h-0 flex-1">
          <HistoryPanel
            chatHistory={chatHistory}
            activeChatId={activeChatId}
            onSelectChat={setActiveChatId}
            onNewChat={handleNewChat}
          />
        </div>
      </aside>

      {/* 🎬 VIDEO POP-UP MODAL */}
      {showVideoModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-[fadeInUp_0.2s_ease-out]">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl transition-all">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-100 p-4">
              <h3 className="text-base font-bold text-[#0F2E46]">
                Premium Property Insights
              </h3>
              <button
                onClick={() => setShowVideoModal(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors"
                aria-label="Close Video"
              >
                <X size={18} />
              </button>
            </div>

            {/* Video Player Section */}
            <div className="relative aspect-video w-full bg-black">
              <video
                src={propertyVideo}
                controls
                autoPlay
                className="h-full w-full object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-gray-50 flex justify-end">
              <button
                onClick={() => setShowVideoModal(false)}
                className="rounded-xl bg-[#0F2E46] px-5 py-2 text-sm font-semibold text-white shadow transition-transform hover:scale-105 active:scale-95"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}