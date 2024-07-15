import React from "react";

const Card = ({ img, title, color }) => {
  return (
    <div style={{ backgroundColor: color }} className="rounded-md w-[150px] h-[110px]">
      <img
        className="pl-[10px] pt-[10px] pr-[50px] pb-[8px]"
        src={img}
        alt="Default img"
      />
      <p className="pl-[8px]">{title}</p>
    </div>
  );
};

export default Card;
