import React from "react";
import HorseList from "../components/horses/HorseList";
import EquipmentList from "../components/equipment/EquipmentList";
import { horseData } from "../data/horseData";
import { equipmentData } from "../data/equipmentData";

const HomePage = ({ setCurrentPage }) => {
  return (
    <>
      <div className="text-center bg-light p-5 mb-5 rounded-lg shadow">
        <h1 className="display-4 fw-bold">Find Your Perfect Equine Partner</h1>
        <p className="lead col-lg-8 mx-auto text-muted">
          The most trusted marketplace to buy and sell horses, and find
          top-quality riding equipment direct from the source.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
          <button
            onClick={() => setCurrentPage("buy")}
            className="btn btn-primary btn-lg px-4 gap-3"
          >
            Browse Horses
          </button>
          <button
            onClick={() => setCurrentPage("equipment")}
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Shop Equipment
          </button>
        </div>
      </div>

      <section className="my-5">
        <h2 className="text-center mb-4 fw-light">Featured Horses for Sale</h2>
        <HorseList horses={horseData.slice(0, 3)} />
      </section>

      <section className="my-5">
        <h2 className="text-center mb-4 fw-light">Top-Rated Equipment</h2>
        <EquipmentList equipment={equipmentData.slice(0, 3)} />
      </section>
    </>
  );
};

export default HomePage;
