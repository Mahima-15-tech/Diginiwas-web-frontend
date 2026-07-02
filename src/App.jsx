import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
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

             <Route path="add-property" element={<AddProperty />} />
             <Route path="admin-dashboard" element={<AdminDashboard />} />
              <Route path="property-management" element={<PropertyManagement />} />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
