import React from "react";
import EquipmentList from "../components/equipment/EquipmentList";
import { equipmentData } from "../data/equipmentData";

const EquipmentPage = () => {
  return (
    <div>
      <h1 className="text-center mb-2 fw-bold">Horse Riding Equipment</h1>
      <p className="text-center text-muted mb-5">
        High-quality gear and accessories manufactured by The Horse Shop.
      </p>
      <EquipmentList equipment={equipmentData} />
    </div>
  );
};

export default EquipmentPage;
