import React from "react";
import EquipmentCard from "./EquipmentCard";

const EquipmentList = ({ equipment }) => {
  return (
    <div className="row g-4">
      {equipment.map((item) => (
        <div className="col-lg-4 col-md-6" key={item.id}>
          <EquipmentCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default EquipmentList;
