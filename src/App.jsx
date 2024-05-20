import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Destination from "./pages/Destination";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ContextApi } from "./global/UseGlobal";

export default function App() {
  return (
    <ContextApi>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        {/* 👈 Renders at /app/ */}
      </Routes>
    </ContextApi>
  );
}
