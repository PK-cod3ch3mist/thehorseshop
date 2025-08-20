import React from "react";
import HorseList from "../components/horses/HorseList";
import { horseData } from "../data/horseData";

const HorsesForSalePage = () => {
  return (
    <div>
      <h1 className="text-center mb-2 fw-bold">Horses For Sale</h1>
      <p className="text-center text-muted mb-5">
        Browse our collection of high-quality horses. Use the filters to find
        the perfect match.
      </p>
      <HorseList horses={horseData} />
    </div>
  );
};

export default HorsesForSalePage;
