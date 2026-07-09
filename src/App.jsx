import { useState } from "react";

import "./App.css";
import Layout from "./layouts/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NiwasAI from "./pages/NiwasAi";
import About from "./pages/About";
import AgentCorner from "./pages/AgentCorner";
import ExploreProperties from "./pages/ExploreProperties";

import AdminDashboard from "./pages/Admin/Dashboard"
import AddProperty from './pages/Admin/AddProperty'
import PropertyManagement from "./pages/Admin/PropertyManagement";
import Services from "./pages/Services";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiesPolicy from "./pages/CokkiesPolicy";
import Blogs from "./pages/Blogs"
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="niwas-ai" element={<NiwasAI />} />
          <Route path="about" element={<About />} />
          <Route path="agent-corner" element={<AgentCorner />} />
          <Route path="explore-property" element={<ExploreProperties />} />

          <Route path="services" element={<Services />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-service" element={<TermsOfService />} />
          <Route path="cookie-policy" element={<CookiesPolicy />} />
          <Route path="add-property" element={<AddProperty />} />
          <Route path="admin-dashboard" element={<AdminDashboard />} />
          <Route path="property-management" element={<PropertyManagement />} />
           <Route path="blogs" element={<Blogs />} />

        </Route>
      </Routes>
    </>
  );
}
export default App;