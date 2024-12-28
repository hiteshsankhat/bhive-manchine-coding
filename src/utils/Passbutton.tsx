import React from "react";
import { Discount } from "../types/DayPassDisconuts";
import FastForwardIcon from "@mui/icons-material/FastForward";

interface PassButtonProps {
  days: number;
  discount: Discount;
  dayPassPrice: number;
}

const PassButton: React.FC<PassButtonProps> = ({
  days,
  discount,
  dayPassPrice,
}) => {
  const originalPrice = dayPassPrice * days;
  return (
    <button
      className={`flex flex-row flex-1 items-center justify-between px-1.5 py-2 relative rounded-lg shadow-md transition transform hover:scale-105 focus:ring-2 ${
        discount?.value > 0 ? "bg-yellow-300" : "bg-gray-100"
      }`}
    >
      <div className="flex flex-col flex-1 items-start justify-between">
        <div className="text-sm font-semibold text-gray-700 ">
          {days === 1 ? "Day Pass" : `Bulk Pass`}
        </div>
        <div className="text-xl font-bold text-gray-900">
          ₹ {originalPrice}
          <span className="text-sm font-medium text-gray-600">
            {days > 1 && `/ ${days} Days`}
            {days == 1 && `/ Day`}
          </span>
        </div>
      </div>

      {discount?.value > 0 && (
        <div className="bg-black text-white text-xs px-2 py-1 rounded-md w-[98px] absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
          {discount.value}% Discount
        </div>
      )}

      <FastForwardIcon />
    </button>
  );
};

export default PassButton;
