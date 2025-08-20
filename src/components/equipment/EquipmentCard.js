import React from "react";

const EquipmentCard = ({ item }) => {
  return (
    <div className="card h-100 shadow-sm border-0 rounded-lg">
      <img
        src={item.imageUrl}
        className="card-img-top rounded-top-lg"
        alt={item.name}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{item.name}</h5>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <h5 className="text-success mb-0 fw-bold">
            ${item.price.toLocaleString()}
          </h5>
          <button className="btn btn-warning">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;
