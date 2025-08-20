import React from "react";
import HorseCard from "./HorseCard";

const HorseList = ({ horses }) => {
  return (
    <div className="row g-4">
      {horses.map((horse) => (
        <div className="col-lg-4 col-md-6" key={horse.id}>
          <HorseCard horse={horse} />
        </div>
      ))}
    </div>
  );
};

export default HorseList;
