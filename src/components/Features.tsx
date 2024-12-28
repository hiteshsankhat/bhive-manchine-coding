import React from "react";
import {
  Event as EventIcon,
  FitnessCenter as GymIcon,
  Wifi as WifiIcon,
  LocalCafe as CafeIcon,
  AttachMoney as AffordableIcon,
  Weekend as ComfortIcon,
  Schedule as QuickBookingIcon,
  SportsSoccer as SportsIcon,
} from "@mui/icons-material";

const features = [
  { icon: <EventIcon style={{ color: "#FFBB00", fontSize: 40 }} />, title: "Community Events" },
  { icon: <GymIcon style={{ color: "#FFBB00", fontSize: 40 }} />, title: "Gym Facilities" },
  { icon: <WifiIcon style={{ color: "#FFBB00", fontSize: 40 }} />, title: "High-Speed WiFi" },
  { icon: <CafeIcon style={{ color: "#FFBB00", fontSize: 40 }} />, title: "Cafe & Tea Bar" },
  { icon: <AffordableIcon style={{ color: "#FFBB00", fontSize: 40 }} />, title: "Affordable" },
  { icon: <ComfortIcon style={{ color: "#FFBB00", fontSize: 40 }} />, title: "Comfort Lounges" },
  { icon: <QuickBookingIcon style={{ color: "#FFBB00", fontSize: 40 }} />, title: "Quick Booking" },
  { icon: <SportsIcon style={{ color: "#FFBB00", fontSize: 40 }} />, title: "Sports Area" },
];

const Features: React.FC = () => {
  return (
    <section className="py-8 bg-lightGrey">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-textMain text-center mb-6">
          Why Choose us?
        </h2>
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4"
            >
              {feature.icon}
              <p className="text-textMain text-base font-medium">{feature.title}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:hidden gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm"
            >
              {feature.icon}
              <p className="mt-2 text-textMain text-center text-sm font-medium">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
