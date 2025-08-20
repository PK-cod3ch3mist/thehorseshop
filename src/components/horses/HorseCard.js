import React from "react";

const HorseCard = ({ horse }) => {
  return (
    <div className="card h-100 shadow-sm border-0 rounded-lg">
      <img
        src={horse.imageUrl}
        className="card-img-top rounded-top-lg"
        alt={horse.name}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{horse.name}</h5>
        <p className="card-text mb-1 text-muted">
          <strong>Breed:</strong> {horse.breed}
        </p>
        <p className="card-text text-muted">
          <strong>Age:</strong> {horse.age} years
        </p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <h5 className="text-success mb-0 fw-bold">
            ${horse.price.toLocaleString()}
          </h5>
          <a href="#" className="btn btn-outline-primary">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default HorseCard;
