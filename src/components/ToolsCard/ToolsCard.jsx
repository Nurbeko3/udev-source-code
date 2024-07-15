import React from "react";

const ToolsCard = ({ img, title, color, height }) => {
  return (
    <div
      style={{ backgroundColor: color, height: height }}
      className="rounded-md w-[100px] text-start flex flex-col items-start"
    >
      <img
        className="pl-[10px] pt-[10px] pr-[50px] pb-[8px]"
        src={img}
        alt="Default img"
      />
      <p className="pl-[8px]">{title}</p>
    </div>
  );
};

export default ToolsCard;
