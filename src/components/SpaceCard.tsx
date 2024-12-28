import React from "react";
import AssistantDirectionOutlinedIcon from "@mui/icons-material/AssistantDirectionOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import PassButton from "../utils/Passbutton";
import { DayPassDiscounts } from "../types/DayPassDisconuts";

interface SpaceCardProps {
  name: string;
  image: string;
  dayPassPrice: number;
  dayPassDiscount: DayPassDiscounts;
  distance: string;
  category: string;
}

const SpaceCard: React.FC<SpaceCardProps> = ({
  name,
  image,
  dayPassPrice,
  dayPassDiscount,
  distance,
  category,
}) => {
  const dayOptions = Object.keys(dayPassDiscount).map((key) =>
    parseInt(key, 10)
  );
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border py-3 px-3 border-gray-200">
      {/* header */}
      <div className="flex justify-between items-center mb-2.5">
        <h3 className="font-bold text-lg mr-2 text-textMain">{name}</h3>

        <div className="w-[52px] h-[52px] flex items-center justify-center flex-col bg-grey5 rounded-md text-gray-700 text-xs font-medium">
          <AssistantDirectionOutlinedIcon className="w-5 h-5" />
          <span className="text-[8px] text-[#26323880]">{distance}</span>
        </div>
      </div>

      {/* image */}
      <div className="relative mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover  rounded-lg"
        />
        <div className="absolute top-3 left-3 flex items-center justify-center gap-2 px-2 py-2 h-[32px] bg-gradient-to-r from-grey2 to-grey1 border border-[rgba(255,187,0,0.5)] shadow-md rounded-[5px]">
          <div className="ml-1 w-3 h-3 flex items-center justify-center  drop-shadow-[0px_1px_3px_rgba(255,208,79,0.6)] flex-none">
            <CorporateFareOutlinedIcon className="text-secondary w-3 h-3" />
          </div>
          <span className="font-inter font-medium text-[14px] leading-[17px] tracking-[2px] text-secondary text-shadow-[0px_1px_3px_rgba(255,208,79,0.6)]">
            {category}
          </span>
        </div>
      </div>
      {/* footer */}
      <div className="flex gap-4 flex-wrap">
        {dayOptions.map((days) => (
          <PassButton
            key={days}
            days={days}
            discount={dayPassDiscount[days.toString()]}
            dayPassPrice={dayPassPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default SpaceCard;
