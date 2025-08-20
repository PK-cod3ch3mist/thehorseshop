import React, { useState } from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import HomePage from "./pages/HomePage";
import HorsesForSalePage from "./pages/HorsesForSalePage";
import SellHorsePage from "./pages/SellHorsePage";
import EquipmentPage from "./pages/EquipmentPage";
import "./styles.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "buy":
        return <HorsesForSalePage />;
      case "sell":
        return <SellHorsePage />;
      case "equipment":
        return <EquipmentPage />;
      case "home":
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar setCurrentPage={setCurrentPage} />
      <main className="container flex-grow-1">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
