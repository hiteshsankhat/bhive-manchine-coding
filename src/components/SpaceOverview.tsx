import React from "react";
import SpaceCard from "./SpaceCard";
import data from "./../assets/data.json"; // Replace with the correct path to your data.json

const SpaceOverview: React.FC = () => {
  return (
    <section className="py-8 bg-lightGrey">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-textMain mb-6">
          Our Space Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((space) => {
            return (
              <SpaceCard
                key={space.id}
                name={space.name}
                image={space.images[0]}
                dayPassPrice={space.day_pass_price}
                dayPassDiscount={space.day_pass_discounts_percentage}
                distance="6 Kms"
                category="Workspace"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpaceOverview;
